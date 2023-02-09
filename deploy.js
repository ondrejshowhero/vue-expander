const s3 = require('s3');
const fs = require('fs')

async function getCreds() {
  fs.readFile('../../../playadS3credentials.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    upload(data)
  })
}

function upload(creds) {
  s3creds = JSON.parse(creds)
  let s3Options = {}
  const client = s3.createClient({
    maxAsyncS3: 20,     // this is the default
    s3RetryCount: 3,    // this is the default
    s3RetryDelay: 1000, // this is the default
    multipartUploadThreshold: 20971520, // this is the default (20 MB)
    multipartUploadSize: 15728640, // this is the default (15 MB)
    s3Options: {
      ...s3creds,
      ...s3Options
    },
  });

  const params = {
    localDir: "dist",
  
    s3Params: {
      Bucket: "campaigns-adten-eu",
      Prefix: "finland/2023-ikea-marimekko-w8",
      ACL: "public-read",
    }
  };
  const uploader = client.uploadDir(params);
  uploader.on('error', function(err) {
    console.error("unable to sync:", err.stack);
  });
  uploader.on('progress', function() {
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function() {
    console.log("done uploading");
  });
}

getCreds()