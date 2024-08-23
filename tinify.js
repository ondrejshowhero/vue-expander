const fs = require('fs');
const tinify = require("tinify");

fs.readFile('../../../tinifyAPIKey.json', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    tinify.key = JSON.parse(data).apiKey

    let path = './src/assets/images/'
    let files = fs.readdirSync(path, {recursive: true}).filter(fn => fn.endsWith('.jpg') || fn.endsWith('.png'))
    files.forEach(file => {
        console.log(file)
        tinify.fromFile(path + file).toFile(path + file);
    })

})
