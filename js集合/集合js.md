



##### 数据类型

```js
let result = 100 + true + 21.2 + null + undefined + 'ttt' + [] + null + 9 + false

console.log(result)

```

​    js中的数据类型

​	1).基本数据类型  number string boolean null undefined symbol bigint 

​	2). 引用类型  object  function(属于object 但是函数属于单独的类型)

对象和数字相加    // 会把对象转为字符串  通过 toString()  转变成字符串 和数字 相加 

```js
console.log([] == false)  // true
console.log(![] == false) // true

// 当是 === 时 是全等必须类型一致才能比较，否则直接false 
// == 时不严格比较 不同类型需要转为同等类型之后再比较  
// 引用类型 和number string Boolean 比较时  需要把object 转为字符串之后再转 number和Boolean 进行比较
// [] 转为字符串为 '' 再转为number和 Boolean 分别时 0 和 false

```

![对象比较规则](.\image\对象比较规则.png)

当a为多少时能满足条件

```js
var a = "?" 
if(a == 1 & a == 2 & a == 3 ){
    console.log(22)
}

// 1.通过访问属性拦截 defineProperty
var i = 0
Object.defineProperty('Window','a'，{
                      get(){  // 声明 a 就相当于给 window 添加了一个属性 a 
    							//  当判断比较时 会在window 上去获取a 
    							// 监听访问 a 进行对象的get方法进行劫持 改变返回值
    						 retrun ++i	
							}
                      })
// 2。还可以重写 valueOf方法  == 比较时会调用 valueOf方法 调用时劫持修改返回值 原理和上个相同

```

```js
let  arr = [10.18,0,10,25,23]
arr=arr.map(parseInt)
console.log(arr)
// map(fun) 遍历数组 fun的参数  第一个参数 遍历到的数据，第二个数据在数组中的索引 
// parseInt()  第一个参数 需要转换的值  第二个参数 把需要转换的值 看成多少进制当为0时和10一样。   当遇到非数字时暂停转换
// 相当执行 
// arr.map((item,index)=>{
// return item * 10
// })
// 进制存在 2~36进制 0 1 进制是不存在的但是0 在parseInt第二个参数相当于10 为1时直接返回NaN
// parseInt('10.18',0)
// 换算 进制  权重值*进制^权重
// parseInt('0',1)
// parseInt('10',2)
// 0*2^0 + 1*2^1 = 2
// parseInt('25',3)
// parseInt('23',4)
```

##### 堆栈内存

 浏览器执行js代码的环境

![堆栈内存1](.\image\堆栈内存1.png)

```js
let a = {
    n:1
}
let b = a  // a对象的地址指针 赋值给b
 a.x= a = {   // 优先级问题  所有创建都需要最先执行 访问属性优先执行 1.先创建 {} 在赋值给a.x(b存的a地址，所以b会跟改变) 				 //再赋值给a 相当于 a最后存了 {n:2}的地址
     n:2
 }
console.log(a.x) // undefined  a里面没有x属性
console.log(b) // {n:1,x:{n:2}} b存着原来a的地址 
// 如上图：
```



##### 浏览器执行代码中 变量提升

```js
var a = 0 
if(true){ // {} 块级作用域
    a = 1 
    function a(){} // 关键点  执行到这一步时 函数已经事实执行 以上的变量会回归给上一级 函数后面的代码是不会再回馈给上一级
    a = 21 
    console.log(a)
}
console.log(a) 
// 分两种情况
// 1.老浏览器IE8以下 没有块级作用域
// 打印 21 21
// 2.需要兼容 ES3 和 ES6
// 打印 21 1
// 在声明变量和函数时 会变量提升
// 如下图：
```

![浏览器执行js代码中的变量提升](.\image\浏览器执行js代码中的变量提升.png)





```js
var x = 1 
function func(x,y=function anonymousl(){x=2}){
    x = 3
    y()
console.log(x)
}
func(5)
console.log(x) 
// 2 1
// 浏览器执行机制，
// 函数有块级作用域 当函数没有形参时就会在根据作用域链进行查找变量，
// 如果有形参就会在函数作用域中生成新的变量只作用于函数当前作用域，
// 函数中的函数依次类推
// 如下图：
```

![浏览器执行js代码中的变量提升](D:\yimo\yimo\study\image\浏览器执行js代码中的变量提升.png)

##### 函数出现多个作用域：

```js
var x = 1 
function func(x,y=function anonymousl(){x=2}){
   var x = 3  // 和上一题新增了 var
    y()
console.log(x)
}
func(5)
console.log(x) 
// 3 1 
// 在es6中 函数是有块级作用域的（一般情况下只有一个作用域）
// 另一种情况(当函数有形参并且形参中只要有一个有默认值和当函数体中有声明新的变量时，必须同时满足这两个条件) 函数会有两个作用域
// 生成函数作用域（函数参数以及this指向等）和函数体作用域（函数体中的变量函数声明等）

//题目中的y() 函数是函数参数也就是在函数作用域中并且函数没有传参，所以执行函数时的 x 也是函数作用域中的 x ，并不会去改变 函数体作用域中新声明的x 的值

```



##### 柯粒化函数

```js
function fn(...outerArgs){
    return (...innerArgs)=>{
        return outerArg.conat(innerArgs).reduce((a,b)=>a+b) 
    }
}
let res = fn(1,2)(3)
// 函数需要多次执行，需要保存上次函数的参数不被销毁的函数叫做闭包，需多次使用也是函数的柯粒化
```

![闭包之柯粒化函数](D:\yimo\yimo\study\image\闭包之柯粒化函数.png)



##### 组合函数(compose函数)

![函数组合](D:\yimo\yimo\study\image\函数组合.png)

  

##### 实现一个 new 方法

// 完成一个函数实例化 需要执行四步

1.需要创建一个实例化对象 并且 ._proto_ = Dog。prototype 

2.需要执行函数  

3.this指向 实例化对象

4.执行函数后的返回值

```js
function Dog(name){
    this.name = name
}
Dog.prototype.bark = function(){
    console.log('wangwnag')
}
Dog.prototype.sayName = function(){
    console.log('my name is' + this.name)
}
function _new(Func,...args){ // 接受函数和传入的参数
    // 实现 _new 
    let obj = {}  // 创建实例对象
    let result = Func.call(obj，..args) // 执行函数并且把函数的 this指向到实例对象上
    // 上面两句 可以直接用object.create()来创建
    // let obj = Object.create(Func.prototype) 
    // 分析返回的结果
    // 当结果不为nuill 或者是函数或对象时就返回 结果
    if(result !== null && /^(object|function)$/).test(typeof result)) return result   
    // 反之就直接返回 
    return obj 
}
let sanmao = _new(Dog,'三毛')
sanmao.bark() // 'wangwang'
sanmao.sayName() // my name is 三毛
console.log(sanmao instanceof Dog ) // true
```

![手动创建new](D:\yimo\yimo\study\image\手动创建new.png)



##### 手写 call 方法

思路: 利用 obj.xxx = func     执行 obj.xxx()   函数的this 就指向了obj

```js
function call(context,...args) { 
    // 判断 context  是否为空 如果为空就等于window
      context = context == undefined ? window : context
    // 需要判断 context 是不是一个对象或者函数
    //let type = typeof context // 可以提出
    if(!/^(object|function)$/.text(typeof context)){
        // 当传入的是 symbol 和 bigint 类型需另外处理
        if(/^(symbol|bigint)$/.text(typeof context)){
            // 通过 Object(context) 来吧symbol 和 bigint 转换成对象
            context = Object(context)
        }else {
                 //用正则判断类型是不是函数或对象
        // 如果不是人通过参数的 constructor来 new 一个对象 来实现把其他类型转为对象
        context = new context.constructor(context) 
        }
    }
    // Symbol 创建唯一值 
    let key = Symbol('key') // 随便生成一个 symbol 目的只是让 方法名不被重复
    context[key] = this // 在函数调用的时候 this就是函数本身
    let result = context[key](...args) // 执行函数并接收 返回值并返回函数值
	delete context[key] // 删除我们零时创建调用的方法
    return result
    
}
```

![手写call方法](D:\yimo\yimo\study\image\手写call方法.png)



##### 手写 bind()

bind和call 的区别

1.bind() 不会去执行函数 而 call()会执行函数

```js
// 基本思想 类似如下
// 调用一个函数 再去执行绑定 this
// document.body.onclick = function anonmous(e){
// func.call(obj， 100， 200 ，e)  // this需要指向 obj 后面是参数
// }
// bind 和 call 方法一样都需要判断 传入的参数类型
// 不同于bind 需要返回一个函数
function bind(context,...args) { 
    let _this = this // 执行这个函数时this的指向会改变 提前把this存起来
    // 判断 context  是否为空 如果为空就等于window
      context = context == undefined ? window : context
    // 需要判断 context 是不是一个对象或者函数
    //let type = typeof context // 可以提出
    if(!/^(object|function)$/.text(typeof context)){
        // 当传入的是 symbol 和 bigint 类型需另外处理
        if(/^(symbol|bigint)$/.text(typeof context)){
            // 通过 Object(context) 来吧symbol 和 bigint 转换成对象
            context = Object(context)
        }else {
         //用正则判断类型是不是函数或对象
        // 如果不是人通过参数的 constructor来 new 一个对象 来实现把其他类型转为对象
        context = new context.constructor(context) 
        }
    }
    // 和call 的不同点
    return function anonmous(...innerArgs){ // 执行这个函数时this的指向会改变 提前把this存起来
        _this.call(context,...args.concat(...innerArgs)) // 返回这函数 当这个函数被执行时绑定this指向 
        // 并把所有参数都传入
    }
    
}
```



##### 深拷贝

1.使用 Json.parse(Json,stringify()) 方式  

 缺点：部分类型转换会出现问题，正则变为空对象 BigItn类型报错 Symbol function undefined 变为空 等

2.手写深拷贝

```js
function cloneDeep(obj){
    // 判断null 日期 正则等类型
    if(obj === null) return null
    if(typeof obj !=== 'object' ) return obj
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Date) return new Date(obj)
    // 通过遍历新生成一个传入的类型返回
    // 我们不知道传入是什么类型，通过 new obj.constructer() 获取传入的数据类型
    let newObj = new obj.constructer() 
    // 获取keys 进行遍历
    Object.keys(obj).forEach(key=>{
       // newObj[key] = obj[key]  如果值是多层的或者值还是数组或者对象需要递归遍历
        newObj[key] = cloneDeep(obj[key])
    })
    return newObj // 返回新的数据
}
```

![手写深拷贝](D:\yimo\yimo\study\image\手写深拷贝.png)



##### 关于Vue面试问答 （基于视频和自己理解回答不一定全正确）

###### 1.讲一下什么是 MvvM ?

​	答：mvvm 是一种编程前端编程方案。 

​		M：是model 数据层（前端数据管理的地方）

​		V：view 视图层 （页面展示）

​		VM:  响应式层（vue主要就是实现 vm）页面数据改变可以动态响应式给 model层进行更改数据，当后台修改model层数据时也可以动态映射到view层 可以实现无刷新修改 页面数据。

​		优点：可以无刷新更改也面数据，体验效果会更好。修改页面数据能响应式的修改model层数据，让开发者更少的关注dom更多的时间去处理逻辑。

###### 2.讲解一下什么是单页面应用？

​	答：1.只有一个html页面，所有的模块都以组件的方式分批加载和展示。

​			2.面跳转的利用哈希路由或者H5  History 来实现页面跳转并且控制展示页面组件。

​			3.相对单页面中 组件数据传递更简单方便。

​			4.能更容易的实现页面切换（组件切换）动画效果。

​			5.更适合移动开发

​			6.对SEO 不是有很好，如果需要做SEO要通过服务端渲染（nuxtjs)

###### 3.说说vue中的路由守卫：

​	答：vue中有三种路由

​			1.全局路由：router.beforeEach   router.beforesole router.afterEach (全局后置钩子）

​			2.路由独享守卫：beforeEnter

​			3.组件内部路由：beforeRouterEnter  beforeRouterUpdata   beforeRouterLeave

​			我们常用的一般只有全局路由的 beforEach  处理权限拦截 和 是否有登录信息（登录过期）等等

​				守卫一般有三个参数  to 去哪里（去哪个组件） from 从那个组件离开  next（） 通过守卫拦截需要通过该方法继续往下走或者						指定跳转到某个组件

​				其他等路由守卫相对使用的较少

![vue中的路由守卫](D:\yimo\yimo\study\image\vue中的路由守卫.png)



###### 4.webpack，你做了哪些配置？

​	答：webpack相对深度了解比较少，一般通过cli  生成项目。 配置过proxy 解决跨域问题 和一些需要新增的loader 配置以及部分插件中有Es6 语法导致兼容问题，把包也加入webpack通过babel 进行编译  

​	（webpack基本流程）： 1.入口(entry)  从那个文件作为如旧文件进行 打包编译 

   2. 出口(output)  编译后生成文件的输出位置，通过 path属性 自定义文件路径 filename 自定义输出文件名称

   3. loader   是指定那些文件通过 loader 去处理该文件 

   4. plugin（插件） 可以说是loader的升级版可以比loader做更广更多的事情，更好的去处理相关文件可以同时使用多个插件

   5. mode（模式） 控制是测试环境还是生产环境

      更深层次不太了解（比如 自己写如何实现 插件和loader等）

###### 5.两个数组找重复的值有哪些方法实现？（无代码脑补）

​	答：1.直接双遍历进行比较（简单直接暴力）

​			2.遍历一个数组 通过 includes(value) 判断是否在另一个数组中

​			// 这个问题始终避免不了 一次循环，拿到值后进行去另一个数组中去查找（实现方法很多）



###### 6.看你写自己独立负责开发一个管理系统，那你说说你们公司是怎么鉴权的？

​	答：鉴权就是系统权限的管理

​		第一种：

​			1.路由守卫:页面跳转判断是否有token，有就正常跳转否则跳转登录页面

​			2.菜单和按钮权限：登录后台返回权限列表，判断当前菜单是否在权限列表中，按钮通过自定义指令控制时候渲染按钮

​			3.权限的设置（这种有很多方案具体需要看产品设计）：1）部门设置权限，员工关联部门。2）员工直接关联权限







###### 7.js判断数据类型的方式，各自得优缺点？

​	答：1. typeof   优点：可以很简单得判断基础类型。缺点 ： 判断 null 数组 时间对象 正则对象是 都会返回 object  

			2. toString()   配合call 或者 apply 才能正确返回 类型  直接调用是访问得Object 上得toString ，需要通过call 改变this得指向
			3. constructor    通过constructor 引用自身得原型构建出一个和 数据同类型得 新数据  后进行判断 类型
			4. instanceof     instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

​    参考连接：  https://www.cnblogs.com/onepixel/p/5126046.html



###### 8.了解Generator 函数嘛？说说 async 和 await吧 ，当多个await 是并行得嘛，如何让多个await 同时执行？

```js
// Generator 函数就是生成器 我们简单得理解为generator函数是一个状态机，封装了多个内部状态
// 执行generator函数 会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
// 通过next() 方法去调用 generator函数 且只会执行一个yiled 
hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
```

 async 和 await : Es7 的新语法，为了解决异步回调地狱和promise 的解决方案，避免了回调地狱的无线回调和promise的一直then和catch。 原理是结合Generator 和 promise 实现。

多个await 不是同时进行的，需要等待上一个await结束后才会执行下一个 await, 就相当于promise的then 才回去执行。

（这个地方我不是太清楚，await 间接的完成了generator的 next() 也就想当于 执行了yield 关键字后面的代码，但是又类似于promise的方法）（有待研究） 

```js
// 多个await 同时执行 我们间接使用promise.all()的方式来实现
const wait = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`wait ${ms}ms`)
        resolve()
    }, ms)
})
;(async () => {
    await Promise.all([wait(3000), wait(1000), wait(2000)])
    // 依次打印：wait 1000ms wait 2000ms wait 3000ms
})()
```



###### 9.讲讲promise的执行过程和常用的方法？

```js
// promise 在执行中有三个状态  
// 1. pending 执行中 这个状态不会有任何反馈，也就是说我们不知道这个状态的信息
// 2. fulfilled 执行成功了 会通过resolve()把结果返回出去
// 3. rejected  执行失败/ 执行出现异常 通过 reject() 把异常抛出去
let pro = new Promise(function(resolve,reject){
    resolve('成功')
    // reject('失败')异常 error 
})
pro.then(function(){
    // 当成功就会执行这段
}).catch(function(){
    // 当promise 中出现error 后才会执行这段没有异常不会执行
})
// 注意：
pro.then(function(){
    // 当成功就会执行这段  
    //这里出现异常error1
}).catch(function(){
    // 当promise 中出现error 后才会执行这段没有异常不会执行
}).then(function(){
    // error1不出现异常 才会执行
}).catch(function(){
    // 当error1 异常出现才会执行
})

// promise常用的方法 
// 1.finally  不管promise是成功还是失败 都会去执行 该方法下的代码
pro
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
// 2.Promise.all 当多个接口同时调用参数不依赖其他接口时使用，返回值是呢传入参数的位置决定返回值的数组顺序
// 当出现异常时才会执行 Promise.all 自身的catch 操作。
// 注意：当参数的promise 写了catch时，并且还出现异常他会首先执行 自身promise的catch操作 第二次返回一个新的promise 
// 再次走到 promise.all()中来，所以并不会再次执行 all中的catch()
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}
let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then((result) => {
  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
  console.log(error)
})


// 当一下情况需注意
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);// 这里会再次返回一个正常的 promise 

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e)); // 这里时捕获不到异常的

// 4.Promise.race() 封装多个promise 类似 all 只是返回最先执行完成的promise的结果

```



###### 10.说说 event Loop？

 答： event Loop 就是浏览器执行js 任务循环运行机制。 简单的说把异步任务放到一个队列栈中，先执行同步和微任务后再去执行第一个宏任务再次去看是否有微任务执行，如果有且执行完后再去取宏任务执行，循环执行这个机制就叫 Event Loop

###### 11.前端优化

内容层面

- 使用CDN
- 单域名、多域名，单域名可以减少DNS查找次数，多域名可以增加浏览器并行下载数量，这需要权衡，一般同一个域下不要超过四个资源。（不太懂）
- 避免重定向(分场景)
- 避免404

网络层面

- 利用缓存，可以参考另一篇文章[手写文件服务器，说说前后端交互](https://juejin.im/post/6844903570064556040)
- 文件压缩(通过响应头Accept-Encoding: gzip, deflate, br告诉服务器你支持的压缩类型) （衍生到webpack gzip 压缩配置）
- 按需加载，提取公共代码，tree-shaking等(都可以通过webpack来实现)
- 减少cookie大小
- 文件合并，通过css雪碧图合并图片
- 文件预加载、图片懒加载

渲染层间

- js放底部，css放顶部
- 减少reflow(回流)和repaint(重绘)  回流（当改变盒子宽高会页面所有倒回去重写渲染） 重绘（修改背景颜色不影响宽高，只是重写渲染修改的地方页面并不会全部重新渲染）
- 减少dom节点

代码层面

- 缓存dom节点，减少节点查找，css选择器层级优化
- 减少dom节点操作
- 合理使用break、continue、return等，优化循环
- 像react用到的事件委托、对象池等手段



###### 12.vue 路由有几种模式？实现原理？

​	答：两种

​			1）hash :  url中#后面的就叫hash，修改hash值不会触发浏览器发起异步请求。

  				原理：	通过window对象中的 onhashchange监听 url中的hash变化来控制显示组件，通过location.hash = ** 来修改hash值   

​			2) history ：在H5中，history对象中提扯了 pushState() 和 replaceState() 两个方法来进行操作浏览器的历史栈（浏览器会把访问的页面放入到一个栈中来实现前进和后退操作），浏览器历史栈发生变化 会触发popSate事件

​				popSate事件注意点：仅仅调用pushState方法或replaceState方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进									按钮，或者使用JavaScript调用back、forward、go方法时才会触发。另外，该事件只针对同一个文档，如果浏览历									史的切换，导致加载不同的文档，该事件也不会触发。

​				pushState(stateObj, title, url) 方法向历史栈中写入数据，其第一个参数是要写入的数据对象（不大于640kB)，第二个参数是页  					面的 title, 第三个参数是 url (相对路径)。replaceState()方法和pushSate()方法使用方法一样只是是替换 历史栈。

###### 13.vue中vuex怎么使用？能说说原理怎么实现的?

​		答：使用就不用说了吧很简单，

  看 https://juejin.cn/post/6844903949938475022  如何实现源码

```js

// vuex 源码实现   注释是我自己写的
let Vue; // 定义一个我们自己的变量方便调用，执行install 方法时把vue 赋值给我们定义的Vue变量
// 单独抽离出来的 方法  mutations getter  action  中会有多个方法 我们需要取方法名
const forEach = (obj, callback) => {
    Object.keys(obj).forEach(key => {
        callback(key, obj[key])
    })
}
// 声明一个Store 类
class Store {
    // options 就是 new Store 的参数 （state mutations getter  action）
    constructor(options) {
        //为了实现响应式 间接使用了 vue的data
        // 所以 vuex 不能单独拿出来使用 需要依赖 vue
        this._s = new Vue({
            data: {
                state: options.state
            }
        })
        // 声明变量接受 getters 没有写getter就为空
        let getters = options.getters || {}
        // 这是给我们类中的getters进行赋值
        this.getters = {};
        // forEach 上面抽离得方法 
        // getterName 函数名  value函数值也就是函数体
        forEach(getters, (getterName, value) => {
            // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
            // 通过defineProoerty 来对类中的getters属性新增这个传入getters中的函数，重写get方法 增加一个参数state（就是传入的state所有数据）
            // getters函数中才能获取state中的数据
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return value(this.state)
                }
            })
        })
        // 实现方式和getters 基本一样就是多了个payload（就是出了state 自己传入的参数）
        // 不用defineProperty来重写get getter是需要实时计算 mutations不需要
        let mutations = options.mutations || {}
        this.mutations = {};
        forEach(mutations, (mutationName, value) => {
            this.mutations[mutationName] = (payload) => {
                value(this.state, payload)
            }
        })
        // 实现方式 mutations 一样
        let actions = options.actions || {}
        this.actions = {};
        forEach(actions,(actionName,value)=>{
            this.actions[actionName] = (payload)=>{
                value(this,payload)
            }
        })
    }
    // 使用 dispatch 方式调用 actions中的方法 
    dispatch=(type,payload)=>{
        this.actions[type](payload)
    }
    // 使用 commit 方式调用 mutations 
    commit=(type, payload)=>{
        this.mutations[type](payload)
    }
    // 通过$store.state 返回 state中的数据 
    get state() {
        return this._s.state
    }
}
// vue 使用vuex(插件)时需要 通过use()方法，use()方法会默认执行install方法并传入vue 
const install = _Vue => {
    Vue = _Vue // 把vue 赋值给 store 中我们自己的Vue变量
    // vuex为了实现响应式 间接的依赖vue 中的data (也可以想成一个组件中的数据（data）)
    // 为了每个地方都能用store 利用混入方式
    Vue.mixin({
        // 在每个组件创建的时候就把store 挂载到实例（vue/this）上
        beforeCreate() {
            // this.$options 就是vue实例化的初始选项（也就是vue实例化的参数）
            // 每个组件创建的时候 都会去重新挂载 store 
            if (this.$options && this.$options.store) { // 如果 $options上没有store 就去父级找
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}
export default { install, Store }

```



###### 14.自定义指令（directive）平有用到嘛？说下？

答：自定义指令 分全局和局部 

自定义指令的钩子函数:

​	1.bind: 只会在调用一次，指令第一次绑定元素时调用

​	2.inserted : 被绑定元素 插入父元素时调用

​	3.updata : 在说有 vnode(虚拟dom) 更新的时候调用，

​	4.componentUpdated：指令所在组件 vnode和子组件vnode全部更新后

​	5.unbind ： 指令解除绑定时调用，只会执行一次

```js
/***
 * 防抖 单位时间只触发最后一次
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<el-button v-debounce="[reset,`click`,300]">刷新</el-button>
 *  也可简写成：<el-button v-debounce="[reset]">刷新</el-button>
 */
Vue.directive('debounce', {
  inserted: function (el, binding) {
    let [fn, event = "click", time = 300] = binding.value
    let timer
    el.addEventListener(event, () => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => fn(), time)
    })
  }
})

// 局部
//directives:{
//debounce: {
//  inserted: function (el, binding) {
//    let [fn, event = "click", time = 300] = binding.value
//     let timer
//     el.addEventListener(event, () => {
//       timer && clearTimeout(timer)
//      timer = setTimeout(() => fn(), time)
//     })
// 	}
//   }

/***
 *  节流 每单位时间可触发一次
 *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
 * 【考虑到input的change事件】
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<el-button v-throttle="[reset,`click`,300]">刷新</el-button>
 *  传递参数则：<el-button v-throttle="[()=>reset(param),`click`,300]">刷新</el-button>
 */
Vue.directive('throttle', {
  inserted: function (el, binding) {
    let [fn, event = "click", time = 300] = binding.value
    let timer, timer_end;
    el.addEventListener(event, () => {
      if (timer) {
        clearTimeout(timer_end);
        return timer_end = setTimeout(() => fn(), time);
      }
      fn();
      timer = setTimeout(() => timer = null, time)
    })
  }
})

```



15.vue的构造器（vue.extend）说一下?

答：vue.extend就是创建一个 子类(小型vue插入到元素中的插件)可以当成函数调用 例如：elementUi 的 $message组件

使用方法：第一个相对不简单点 （实现一个loading组件） 

![image-20210311185519240](D:\yimo\yimo\study\image\image-20210311185519240.png)

```js
//引入 vue 和自己写的组件
import Vue from 'vue'
import Notification from './notification.vue' 
//
Notification.newInstance = (properties = {}) => {
  const _props = properties
  const NotificationTpl = Vue.extend(Notification) // 创建vue构造器
  const instance = new NotificationTpl() // 实例化vue实例
  // 用$el来访问元素，并插入到body中
  const notification = instance.$mount().$el
  document.body.appendChild(notification)
  return {
    notice (noticeProps) {
      instance.create(noticeProps)
    },
    remove (name) {
      instance.remove(name)
    },
    component: notification
  }
}

export default Notification

```



















































