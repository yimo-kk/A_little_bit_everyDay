/**
 * 自定义发布订阅
 * 某个地方监听 需要执行某一个函数并且需要另一个地方同事执行函数并且获取到参数
 */


class EventEmitter {
    constructor() {
        // 存放所有事件 名字和对应的事件（同一个事件名可能绑定多个函数）
        this._events = {};
    }
    // 绑定 事件名和对应事件  默认用数组存放对应的方法（可能存在多个）
    // 需要在获取参数的地方使用
    on(eventName, callback) {
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }
    //  触发事件 （发布订阅） 
    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args))
    }
    // 只执行一次（执行后就删除）
    // 需要定义on 事件（把事件存放起来），再发布订阅的时候 使用
    once(eventName, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }
    //  解除绑定 事件
    off(eventName, callback) {
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */ )
        this._events[eventName] = newCallbacks;
    }
}
// let eventEmitter = new  EventEmitter()


class Socket extends EventEmitter {
    /**
     * @description: 初始化实例属性，保存参数
     * 
     */
    constructor(options) {
        super()
        // socket 域名
        this.url = options.url;
        //  回调函数
        // this.callback = options.received;
        // this.name = options.name || 'default';
        // socket 
        this.ws = null;
        // 连接登录
        this.status = null;
        // 定时器
        this.pingInterval = null;
        // 心跳检测频率
        this._timeout = 3000;
        // 是否需要心跳
        this.isHeart = options.isHeart;
        // 是否重连 次数 默认不重连
        this.isReconnection = options.isReconnection || 0;
    }
    connect(data) {
        this.ws = new WebSocket(this.url);
        // 建立连接
        this.ws.onopen = (e) => {
            this.status = 'open';
            console.log("连接成功", e)
            if (this.isHeart) {
                // 心跳
                this._heartCheck()
            }
        }
        // 接受服务器返回的信息
        this.ws.onmessage = (e) => {
            let {
                eventName,
                data
            } = e
            this.attachEvent(eventName, data)
            // if(typeof this.callback === 'function'){
            //     return this.callback(e.data)
            // }else{
            //     console.log('参数的类型必须为函数')
            // }
        }
        // 关闭连接
        this.ws.onclose = (e) => {
            console.log('onclose', e)
            this._closeSocket(e)
        }
        // 报错
        this.onerror = (e) => {
            console.log('onerror', e)
            this._closeSocket(e)
        }
    }
    sendMsg(data) {
        let msg = JSON.stringify(data)
        return this.ws.send(msg)
    }
    // 关闭心跳
    _resetHeart() {
        clearInterval(this.pingInterval)
        return this
    }
    // 心跳
    _heartCheck() {
        this.pingInterval = setInterval(() => {
            if (this.ws.readyState === 1) {
                this.ws.send(JSON.stringify({
                    type: 'ping'
                }))
            }
        }, this._timeout)
    }
    // 异常 关闭 scoket
    _closeSocket(e) {
        this._resetHeart()
        if (this.status !== 'close') {
            console.log('断开，重连', e)
            // isReconnection 存在就重连
            if (this.isReconnection) {
                this.isReconnection--
                // 重连
                this.connect()
            }
        } else {
            console.log('手动关闭了', e)
        }
    }
    // 主动关闭
    close() {
        this.status = 'close'
        this._resetHeart()
        return this.ws.close();
    }
    // 绑定时间
    attachEvent(eventName, data) {
        // 订阅
        this.emit(eventName, data)
    }
}


// scoket 继承 于 EventEmitter(发布订阅) 通过引入 类之间使用发布订阅，收到消息后自定发布订阅，
// 使用时直接on 绑定事件函数