let requests = require('requests')
let fs = require('fs')
let path = require('path')
const cheerio = require('cheerio')

requests('https://ncov.dxy.cn/ncovh5/view/pneumonia?from=dxy&source=&link=&share=').on('data', (chunk) => {
  let window = {}
  const $ = cheerio.load(chunk)
  eval($("#getAreaStat").html())
  fs.writeFile(path.resolve(__dirname, 'data.json'), JSON.stringify(window.getAreaStat), () => {

  })
})

