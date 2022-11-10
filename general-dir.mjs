// var fs = require('fs')
import fs from 'fs'

// 输出目录
function outNav() {
  let nav = []
  let side = {}
  const fileDirectory = 'docs/'

  if (fs.existsSync(fileDirectory)) {
    fs.readdir(fileDirectory, function (err, files) {
      files.forEach((filename) => {
        if (filename.includes('-')) {
          let nav_item = {
            text: '',
            link: ''
          }

          nav_item.text = filename.split('-')[1]
          nav_item.link = '/' + filename + '/index'

          nav.push(nav_item)

          const sub_dir = fileDirectory + filename
          const sub_files = fs.readdirSync(sub_dir)
          side['/' + filename + '/'] = []
          side['/' + filename + '/'].push({
            text: nav_item.text,
            items: [{ text: '概述', link: '/' + filename + '/index' }]
          })
          sub_files.forEach((sub_filename) => {
            if (
              fs.lstatSync(sub_dir + '/' + sub_filename).isFile() &&
              sub_filename !== '.DS_Store' &&
              sub_filename !== 'index.md'
            ) {
              side['/' + filename + '/'][0].items.push({
                text: sub_filename.replace(/(.md)/, '').split('-')[1],
                link: '/' + filename + '/' + sub_filename.replace(/(.md)/, '')
              })
            } else {
              if (
                !fs.lstatSync(sub_dir + '/' + sub_filename).isFile() &&
                sub_filename !== '.DS_Store' &&
                sub_filename !== 'index.md' &&
                sub_filename !== 'images'
              ) {
                const sun_dir = filename + '/' + sub_filename
                // console.log(sun_dir)
                side['/' + filename + '/'].push({
                  text: sub_filename.replace(/(.md)/, '').split('-')[1],
                  // link: filename,
                  items: []
                })
                const sun_files = fs.readdirSync(fileDirectory + '/' + sun_dir)
                sun_files.forEach((sun_filename, idx) => {
                  if (
                    sun_filename !== '.DS_Store' &&
                    sun_filename !== 'index.md' &&
                    sun_filename !== 'images'
                  ) {
                    side['/' + filename + '/']
                      .find(
                        (x) =>
                          x.text === sub_filename.split('-')[1].replace(/(.md)/, '')
                      )
                      .items.push({
                        text: sun_filename.replace(/(.md)/, '').split('-')[1],
                        link:
                          '/' +
                          sun_dir.replace(/(docs\/)/, '') +
                          '/' +
                          sun_filename.replace(/(.md)/, '')
                      })
                  }
                })
              }
            }
          })
        }
      })
      fs.writeFileSync(
        './docs/.vitepress/utils/nav.json',
        JSON.stringify(nav, null, 4)
      )
      fs.writeFileSync(
        './docs/.vitepress/utils/sidebar.json',
        JSON.stringify(side, null, 4)
      )
    })
  } else {
    console.log(fileDirectory + '  Not Found!')
  }
}

outNav()
