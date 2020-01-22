const { join } = require('path')
const oak = require('oak')

oak.on('ready', () => {
  oak.load({
    url: 'file://' + join(__dirname, 'index.html'),
    ontop: false,
    background: '#000000',
    size: '1x1'
  }).on('keypressed', function(obj){
    console.log("You pressed the '", obj.message ,"' key")
  })
})

