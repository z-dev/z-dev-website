const sharp = require('sharp')
const recursiveReadSync = require('recursive-readdir-sync')
const path = require('path')
const fs = require('fs')
const ncp = require('ncp')

const resizeImage = (image, options) => {
  console.log(`Resizing Image ${image} into static folder`)
  const width = options.width || 1000
  const height = options.height || 1000
  sharp(image)
    .resize(width, height)
    .max()
    .toFile(getStaticPathForFile(image), function(error, info) {
      if (error) {
        console.error(error)
      }
    })
}

const getStaticPathForFile = (file) => {
  const filePath = file.split(path.sep)
  return path.join('static', ...filePath.slice(1, filePath.length))
}

const copySvgsToStatic = () => {
  const svgFiles = recursiveReadSync('images').filter(filename => filename.endsWith('.svg'))

  svgFiles.forEach(file => {
    const staticFilePath = getStaticPathForFile(file)
    const folder = path.dirname(staticFilePath)
    if (!fs.existsSync(folder)){
      fs.mkdirSync(folder);
    }
    console.log(`Copying ${file} into ${staticFilePath}`)

    ncp(file, staticFilePath,  function (err) {
     if (err) {
       return console.error(err);
     }
    })
  })
}

resizeImage('images/techStackLogos/docker.png', {height: 80})
resizeImage('images/techStackLogos/firebase.png', {height: 80})
resizeImage('images/techStackLogos/redux.png', {height: 80})
resizeImage('images/techStackLogos/next.png', {height: 80})
resizeImage('images/techStackLogos/webpack.png', {height: 80})
resizeImage('images/Richheadshot.jpg', {width: 300, height: 300})
resizeImage('images/john_headshot.jpg', {width: 300, height: 300})
resizeImage('images/zdevexpresso.png', {width: 1000, height: 1000})
resizeImage('images/actfit-web.png', {width: 1000, height: 1000})


copySvgsToStatic()
