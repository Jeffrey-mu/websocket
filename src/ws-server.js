const { WebSocketServer } = require('ws')
const wss = new WebSocketServer({
  port: 8080
})
wss.on('connection', (ws, req) => {
  console.log('客户端已连接：', req.socket.remoteAddress)
  ws.on('message', data => {
    console.log('收到客户端发送的消息：', data)
  })
  let index = 1
  setInterval(() => { ws.send('我是服务端' + index++)}, 200)
  // 向当前客户端发送消息
})
