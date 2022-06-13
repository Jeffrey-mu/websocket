// express 框架子路由匹配 websocket

var express = require('express')
var router = express.Router()

router.ws('/test-ws', (ws, req) => {
  var wss = new WebSocketServer({ port: 9700 })
    console.log(wss);
  ws.on('message', msg => {
    console.log(msg)
    ws.send('服务端回复：' + msg)
  })
})

module.exports = router