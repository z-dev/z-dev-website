const sharp = require('sharp')
const recursiveReadSync = require('recursive-readdir-sync')
const path = require('path')
const fs = require('fs')
const ncp = require('ncp')

function mkdirpSync(filePath, mode = 0777){
  try {
    fs.mkdirSync(filePath, mode)
  } catch({errno}) {
    if (-2 !== errno) return // enoent
    mkdirpSync(path.dirname(filePath), mode)
    mkdirpSync(filePath, mode)
  }
}


const getStaticPathForFile = (file) => {
  const filePath = file.split(path.sep)
  return path.join('static', ...filePath.slice(2, filePath.length))
}

const createFolderIfDoesntExist = (folder) => {
  if (!fs.existsSync(folder)){
    mkdirpSync(folder);
  }
}

const resizeImage = (image, options) => {
  console.log(`Resizing Image ${image} into static folder`)
  const width = options.width || 1000
  const height = options.height || 1000
  const staticPathForFile = getStaticPathForFile(image)
  createFolderIfDoesntExist(path.dirname(staticPathForFile))
  sharp(image)
    .resize(width, height)
    .max()
    .toFile(staticPathForFile, function(error, info) {
      if (error) {
        console.error(error)
      }
    })
}

const copySvgsToStatic = () => {
  const svgFiles = recursiveReadSync('assets').filter(filename => filename.endsWith('.svg'))

  svgFiles.forEach(file => {
    const staticFilePath = getStaticPathForFile(file)
    const folder = path.dirname(staticFilePath)

    console.log(`Copying ${file} into ${staticFilePath}`)
    createFolderIfDoesntExist(folder)
    ncp(file, staticFilePath,  function (err) {
     if (err) {
       return console.error(err);
     }
    })
  })
}

resizeImage('assets/images/techStackLogos/docker.png', {height: 80})
resizeImage('assets/images/techStackLogos/firebase.png', {height: 80})
resizeImage('assets/images/techStackLogos/redux.png', {height: 80})
resizeImage('assets/images/techStackLogos/next.png', {height: 80})
resizeImage('assets/images/techStackLogos/webpack.png', {height: 80})
resizeImage('assets/images/staff/rich.jpg', {width: 300, height: 300})
resizeImage('assets/images/staff/john.jpg', {width: 300, height: 300})
resizeImage('assets/images/projects/zdevexpresso.png', {width: 600, height: 600})
resizeImage('assets/images/projects/expresso1.jpg', {width: 600, height: 600})
resizeImage('assets/images/projects/expresso2.jpg', {width: 600, height: 600})
resizeImage('assets/images/projects/expresso3.jpg', {width: 600, height: 600})


copySvgsToStatic()
