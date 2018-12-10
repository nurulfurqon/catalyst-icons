const fs = require('fs')

console.log('Getting icon name list from src/components/icons/')
fs.readdir('src/components/icons/', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    const fileNames = files
      .filter(file => file.indexOf('index.js') === -1)
      .map(file => file.substr(0, file.indexOf('.js')))
    console.log(
      'Generating json containing icon name in src/components/data/icon-name.json'
    )
    fs.writeFile(
      'src/components/data/icon-name.json',
      JSON.stringify(fileNames),
      err => {
        if (err) throw err
        console.log('The file has been saved!')
      }
    )
  }
})
