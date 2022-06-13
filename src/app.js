// 在 express 框架中集成 websocket

var express = require('express')
var app = express()
var wsServer = require('express-ws')(app)
var webSocket = require('./routers/websocket')

app.locals.wss = wsServer.getWss()

app.ws('/test-ws', (ws, req) => {
    ws.on('message', msg => {
        ws.send('服务端回复：' + msg)
    })
    // 获取当前已连接（在线）的客户端
    var wss = wsServer.getWss()
    console.log(wss.clients.size);
    wss.clients.forEach(client => {
        if (client.readyState === 1) {
            client.send('广播数据')
            // 这是非常简单，基础的实现方式。试想一下如果此刻在线客户有 10000 个，那么这个循环多半会卡死吧。因此才会有像 socket.io 这样的库，对基础功能做了大量优化和封装，提高并发性能。
        }
    })
})

app.use('/websocket', webSocket)

app.listen(9700, () => {
    console.log('正在监听 9700 端口...')
})