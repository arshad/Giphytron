var path = require('path')
var menubar = require('menubar')

var mb = menubar({
  width: 424,
  height: 400,
  index: 'file://' + path.join(__dirname, 'app/index.html'),
  icon: 'file://' + path.join(__dirname, 'app/assets/images/icon.png')
})

mb.on('ready', function ready () {
  console.log('App is ready.')
})
