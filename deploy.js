const fs = require('fs');
const path = require('path');
const async = require('async');
const mime = require('mime-types')
const AWS = require('aws-sdk');
const readdir = require('recursive-readdir');

const rootFolder = path.resolve(__dirname, './');
const uploadFolder = './dist';

async function getCreds() {
  fs.readFile('../../../playadS3credentials.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    deploy(uploadFolder, data)
      .then(() => {
        console.log('task complete');
        process.exit(0);
      })
      .catch((err) => {
        console.error(err.message);
        process.exit(1);
      });
  })
}

function getFiles(dirPath) {
  return fs.existsSync(dirPath) ? readdir(dirPath) : [];
}

async function deploy(upload, s3creds) {

  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    ...JSON.parse(s3creds)
  });

  const filesToUpload = await getFiles(path.resolve(__dirname, upload));

  return new Promise((resolve, reject) => {
    async.eachOfLimit(filesToUpload, 10, async.asyncify(async (file) => {
      // The expected directory structure is as follows: [year]/[country]/[project-name]
      let projectDir = path.basename(__dirname);
      let countryDir = path.basename(path.resolve(__dirname, '../'));
      let yearDir = path.basename(path.resolve(__dirname, '../../'));
      let newPath = `${countryDir}/${yearDir}-${projectDir}`
      let mimeType = mime.lookup(file)
      let Key = file.replace(`${rootFolder}/dist`, newPath);
      console.log(`uploading: [${Key}]`);
      return new Promise((res, rej) => {
        s3.upload({
          Key,
          Bucket: 'campaigns-adten-eu',
          Body: fs.readFileSync(file),
          ACL: "public-read",
          ContentType: mimeType,
        }, (err) => {
          if (err) {
            return rej(new Error(err));
          }
          res({ result: true });
          });
      });
    }), (err) => {
      if (err) {
        return reject(new Error(err));
      }
      resolve({ result: true });
    });
  });
}

getCreds()