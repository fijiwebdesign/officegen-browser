var browserify = require('browserify')
var aliasify = require('aliasify')
var fs = require('fs')

var aliasifyConfig = {
  aliases: {
      "fs": "browserify-fs",
      "graceful-fs": "browserify-fs"
  },
  verbose: false
}

var b = browserify()
b.transform(aliasify, aliasifyConfig)

b.add('./officegen.js')

b.bundle().pipe(fs.createWriteStream('./officegen.min.js'))