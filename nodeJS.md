### nodeJS

#### 第一天

2.0 今日内容：
​    a. Node.js 的简介
​    b. CMD
​    c. Node.js 中的模块系统
3.0 Node.js 的简介
​    a. 什么是 Node.js
​        官网：
​            英文：https://nodejs.org/en/
​            中文：http://nodejs.cn/
​        Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
​        Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

        - Node.js 中一个运行环境
             运行 JavaScript
                     - 基于 Chrome V8 引擎
                          rome V8 引擎
                                      - 浏览器的组成：
                                          - 渲染引擎（渲染 dom ， css）
                                          - js 引擎（解析 js 代码）
                                                   - 而 Chrome V8 引擎就是一个 js 引擎
                                                        b. Nodejs 中的 javascript 与 浏览器中的 javascript 的区别
                                                        浏览器中的 javascript:
                                                        ​    ECMAScript
                                                        基础语言（var, if, for ....）
                                                        ​    DOM
                                                        document.xx
                                                        ​    BOM
                                                        history ...
                                                        Node.js 中的 javascript
                                                        ​    ECMAScript
                                                        ​    没有 dom 和 bom
                                                        ​    服务器能力：
                                                        文件IO
                                                        网络操作
                                                        路径操作
                                                        url 操作
                                                        ....
                                                        ​    c. 安装 Nodejs
                                                        下载各种版本：https://nodejs.org/en/download/releases/
                                                        双击安装包，下一步....
                                                        检查 Node 是否安装成功：
                                                        ​    打开 CMD
                                                        ​    node -v
                                                        ​    d. nodejs 版 hello world
                                                        步骤：
                                                        ​    1）创建一个 js 文件
                                                        ​    2）书写代码： console.log('hello world')
                                                        ​    3）执行 js 文件
                                                        3.1 打开当前 js 所有的目录
                                                        3.2 shift + 右键 ---> 在引外打开命令行窗口（powershell）
                                                        3.3 执行 node + 文件名
                                                        ​    e. 完成一个世界上最牛逼的服务器
                                                        nodejs:
                                                        ​    文件IO: fs
                                                        读取文件
                                                        ​    fs.readFile(path, callback() {})
                                                        ​    开启服务器： http
                                                        1）引入 http 模块
                                                        ​    let http = require('http')
                                                        2）创建服务器对象
                                                        ​    let server = http.creatServer()
                                                        3）设置请求处理函数
                                                        ​    server.on('request', (req, res) => {
                                                          // 读取文件
                                                          res.end(data)
                                                        ​    })
                                                        4）开启服务器
                                                        ​    server.listen(3000, '192.168.43.39', () => {
                                                          console.log('running')
                                                        ​    })
                                                        能力：
                                                        ​    开启服务器
                                                        ​    对文件进行读取
                                                        4.0 CMD：
                                                        ​    什么是CMD:
                                                        它是 window 系统自带的一个工具，也叫命令行工具。可以用来帮助前端工程师执行一些特殊指令： node index.js
                                                        ​    打开命令行的方式:  
                                                        第一种：
                                                        ​    win + r --> 输入 CMD --> 运行
                                                        第二种：
                                                        ​    在某一目录的空白区域：shift + 右键 ---> 在此处打开 powershell
                                                        ​    改变命令行中的路径:
                                                        一种：目标路径与当前路径在同一盘符下：
                                                           步骤：
                                                        直接切换到对应的目录下：
                                                        ​    cd 目录名： 
                                                          目录名：
                                                        ​      可以是相对路径
                                                        ​      也可以是绝对路径
                                                        二种：目标路径与当前路径不在同一盘符下
                                                        ​    步骤：
                                                        1）先改变盘符：    
                                                        ​    d: + 回车
                                                        2）切换到对应的目录下
                                                        ​    cd 目录名
                                                          目录名：
                                                        ​      可以是相对路径
                                                        ​      也可以是绝对路径
                                                        ​    命令行的常用操作：
                                                        cd 目录： 切换路径
                                                        ​    cd / 切换到根目录
                                                        ​    cd ./ 当前目录保持不变
                                                        ​    cd ../ 上一级目录
                                                        ​    cd 具体的路径 直接跳转
                                                        dir:    查看当前路径下的文件列表
                                                        直接输入盘符： 切换到对应的盘符下
                                                        md: 创建文件夹
                                                        rd: 删除文件夹
                                                        cls: 清屏
                                                        exit：退出 CMD
                                                        ​    小技巧：
                                                        粘贴：复制完内容之后直接在 CMD 中右键
                                                        复制：在 CMD 中选择一段内容后，在窗口栏上右键-->编辑-->复制
                                                        自动补全：输入文件名前面一部分按 tab 会自动补全
                                                        历史命令：点击上下键，切换历史命令
                                                        退出当前命令：按住 ctrl 不松手， 接连两次 c
                                                        清除已经输入的指令： esc
                                                        ​    Node 在 CMD 中的 REPL 环境：
                                                        REPL：
                                                            - R：Read 读取
                                                                - E：Eval 执行
                                                                - P：Print 输出
                                                                - L：Loop 循环
                                                        5.0 Node.js 模板系统：
                                                                 a. 什么是模块系统 
                                                        将一个非常庞大的事物，分解成为一个个小的部分，每个部分都有自己的职责，我们把这些结构叫做模块，模块构成的系统叫做模块系统。
                                                                 b. 优点：
                                               - 开发效率高
                                               - 可维护性好
                                                  c. 模块分类
                                                  文件模块
                                                   用户自己定义，自己开发的 js 模块
                                                  核心模块
                                                   由 node 官方提供的模块
                                                  第三方模块
                                                   由大神写好，我们使用的模块
                                                  d. 文件模块：
                                                  自己定义的 js 文件，每个 js 文件都是一个单独的模块
                                                  模块的特点：
                                                   1）一个文件就是一个模块
                                                   2）每个模块都有自己的作用域
                                                   3）模块与模块之可以进行通信
                                                   4）nodejs 中模块的通信会遵循 commonjs 规范
                                                  tip: commonjs 规范一套模块化的规范
                                                  规定了：
                                                   1）每个模块都有自己的单独的作用域
                                                   2）如果一个模块需要让其它模块使用自己的属性或者是方法需要进行暴露
                                                   3）如果一个模块需要使用其它模块的属性或者是方法需要进行引入
                                                  模块与模块之间的通信
                                                   遵循 commonjs 规范：
                                                  暴露：
                                                   module.exports
                                                  引入：
                                                   require('./')
                                                  e. 核心模块：
                                                  官方提供的模块，有非常多。
                                               - 核心模块就是 Node 内置的模块，需要通过唯一的标识名称来进行获取。
                                               - 每一个核心模块基本上都是暴露了一个对象，里面包含一些方法供我们使用
                                               - 一般在加载核心模块的时候，变量的起名最好就和核心模块的标识名同名即可
                                                   - 例如：const fs = require('fs')
                                                     例如：
                                                     path: 对路径进行操作
                                                     fs: 对文件进行操作
                                                     http: 对网络进行操作
                                                      f. 第三方模块：
                                                     直接从网上下载，可以直接使用的模块
                                                     第三方模块大部分都保存在一个网站上： 
                                                     npm: https://www.npmjs.com/
                                                     使用步骤：
                                                     1）下载
                                                     2）引入
                                                     3）使用API
                                                     例如： 
                                                     moment: 
                                                     用来操作时间的第三方包
                                                     API： moment().format()
                                                     marked:
                                                     用来将 md 结构的内容转为 html
                                                     API: marked(``)
                                                     6.0 npm
                                                     是什么：
                                                     1）它是一个网站：用来管理所有的第三方模块的网站
                                                     2）它是一个第三方模块的下载工具
                                                     3）这个下载工具 npm 是随着 nodejs 的安装，会自动在我们的电脑中进行安装的
                                                     3.1 检查 node 版本 node -v
                                                     3.2 检查 npm 版本 npm -v
                                                     使用 npm:
                                                     下载第三方模块：
                                                     npm install moment
                                                     注意点：
                                                     下载完成以后，会多出一个文件夹 node_module，里面包含了第三方模块 moment
                                                     也包含一个文件： package_lock.jso

#### 第二天

1.0 复习
2.0 今日内容
​    a. 全局对象和全局变量
​    b. http 协议
​    c. 自己手写一个小型服务器
​    d. 案例：书写一个服务器可以得到硬盘中的文件的列表
3.0 全局对象
​    在浏览器环境中有一个全局对象是 window，在 nodejs 中也有一个全局对象，作用与 window 类似它是 global
​    特点：
​        1）在所有的模块中都可以使用到
​        2）所有的模块使用的都是同一个
4.0 全局变量：
​    global.process / process:
​        系统进程，每个运行的程序都是一个进程。
​    global.process.cwd():
​        得到当前 Node 执行的路径
​    console.log() ...
5.0 全局函数
​    setTimeout/clearTimeout
​    setInterval/clearInterval
6.0 伪全局对象（模块内的全局环境）
​    特点：
​        1）在所有的模块中都可以使用
​        2）每个模块输出的内容是不同的
​    __filename: 
​        它是当前执行文件的全名称（路径 + 文件名）  
​    __dirname:  
​        当前文件的完整路径
​    module:
​        可以使用 module.exports 暴露接口
​        特点： 
​            1）module 是由 node 环境来帮每一个模块定义
​            2）将来模块会将 module 中的 exports 对象返回给外界
​    exports
​        也可以用来暴露接口
​        特点：
​            1）当模块执行时，会在模块内容通过 node 去创建一个对象 exports 再将 modulex.exports 的指针指向 exports
​    require()
​        引用其它模块
​        特点：
​            1）会运行被引用的模块中的代码
​            2）可以得到模块中返回的 module.exports
7.0 http协议：
​    a. 创建一个简单的服务器
​    什么是 http 协议
​        就是浏览器与服务器进行通讯时遵守的规范
​    http 协议组成：
​        请求报文：浏览器发送给服务器
​            请求行
​                GET https://www.fiddler2.com/UpdateCheck.aspx?isBeta=False HTTP/1.1
​                请求方式： GET/POST
​                    在 http 协议中规定可以存在多种请求方式，每种请求方式的特点不一样：
​                    方式一： GET
​                        表现方式：
​                            1）直接在浏览器中输入地址，回车
​                            2）通过 a 链接进行跳转
​                            3）通过 js window.location 进行跳转
​                            4）通过 form 表单的 get 提交方法，进行跳转
​                    方式二： POST
​                        表现方式：
​                            1）通过 form 表单的 post 提交方法，进行跳转
​                请求的地址：
​                    url：
​                        协议名
​                        ip地址
​                        端口号
​                        请求的路径
​                协议的版本：
​                    http:1.1
​            请求头
​                请求的主机： host
​            固定换行
​            请求体
​                空的
​        响应报文：服务器发送给浏览器
​            响应行
​                HTTP/1.1 200 OK
​                    协议的版本
​                    状态码:
​                        200 ok 成功
​                        304 not Modified 不使用缓存
​                        404 Not Found
​                        500 服务器错误
​            响应头
​            固定换行
​            响应体
​                响应回来的数据
​    http 协议的查看工具：fildder
8.0 搭建一个自己的服务器
​    a. 可以接收请求，并且输出有请求连接的消息
​    b. 可以响应一段内容回浏览器
​    c. 响应一个完整的 html 页面回浏览器
​    d. 根据不同的请求响应不同的内容回浏览器
​        localhost:3000/  ---> 根据目录
​        localhost:3000/a ---> a.html
​        localhost:3000/b ---> b.html
​    e. 根据不同的请求响应不同的页面加浏览器
​    f. 在页面上添加图片
​    g. 统一处理静态文件
​        思想：
​            1)服务器会要求前端开发人员将所有的静态文件放到同一个目录中  pages
​            2)将来请求文件中，只要带了 pages 的，都直接读取出来并且响应回浏览器
9.0 request 事件的参数中：
​    request:
​        method: 请求方式
​        url: 请求路径
​    response:
​        end():  立即响应数据回浏览器
​        write()：向响应报文中请求响应内容
​        setHeader()    设置服务器响应给浏览器的编码格式
10.0 art-template:
​    需求： html 页面中的数据不能直接写死，而是应该从服务器中动态获取
​    问题：
​        1）已经将 html 结构获取了
​        2）也将数据进行了获取，
​        3）在数据与结构进行渲染时，使用 replace 方式太麻烦了
​    解决方案：
​        1）可以直接使用 art-template （模板引擎）
​    是什么：
​        一个第三方包，用来将数据渲染到 html 结构中
​    步骤：
​        1）下载
​            npm install/i art-template 
​        2）引入
​            let template = require('art-template')
​        3）使用API
​            template.render(str, obj)
​    语法：
​        输出：
​            {{ name }}
​        条件: 
​            {{ if value }} ... {{/if}}
​        循环：
​            {{ each arr }} {{ $index }} {{$value}}  {{/each}}
​    注意点：
​        template.render(str, obj) ,其中 obj 必须是对象
11.0 cnpm
​    由于 npm 下载时有可能非常慢，大家可以安装另一个下载工具， cnpm ，它的速度可能会快一点
​    cnpm:
​        也是一个第三方包下载工具
​    安装：
​        npm install -g cnpm
​    使用：
​        cnpm install 



#### 第三天

1.0 复习 
2.0 今日内容：
​    a. 通过浏览器查看路径下的所有文件
​    b. 留言板

        - json
                - form 表单的 post 提交
                - 核心模块 querystring
                        - art-template 的使用
3.0 查看路径下所有文件的浏览器
        ​    目标：写一个服务器，用来显示一个路径下所有的文件和文件夹
        ​    步骤：
                ​        1）创建一个服务器
                ​        2）当请求根据目录得到静态页面
                ​        3）需要得到对应目录下所有的文件和文件夹的数据
                ​        4）进行渲染
                ​        3）将数据渲染到浏览器上
        ​    问题：
                ​        1）无法得到大小和日期
        ​    新方法：
                ​        fs 核心模块：
                        ​            readFile(): 读取文件
                        ​            writeFile(): 写入文件
                        ​            readdir(): 读取传入路径下的所有文件列表
                                ​                path: 要读取的路径
                                ​                callback : 回调函数
                                        ​                    err:
                                        ​                    files:  得到的所有文件列表
                        ​            fs.stat()：得到文件的状态信息：
                                ​                path: 路径
                                ​                callback:
                                        ​                    err
                                        ​                    status： 当前路径的状态信息
                          size: 文件大小
                          ctime: 创建时间
4.0 动态网站和静态网站
        ​    静态网站：
                ​        所有的数据都是写死的
        ​    动态网站：
                ​        所有的数据都是动态获取，并且可以改变，改变以后，重新刷新，不会还原
5.0 json
        ​    是什么：
                ​        是一种数据格式，与对象或者是数组的字面量很像
                ​        例：
                        ​            对象的字面量：
                                ​                var obj = {
                                        ​                    name: '小追命',
                                        ​                    age: 18,
                                        ​                    gender: '男'
                                ​                }
                        ​            json：
                                ​                var obj = {
                                        ​                    "name": "小追命",
                                        ​                    "age": 18,
                                        ​                    "gender": "男"
                                ​                }
                        ​            数组：
                                ​                var arr = [1,2,3,4,5]
                                ​                var arr = [{id: 1, name: "张三"}]
                        ​            json:
                                ​                var arr = [1,2,3,4,5]
                                ​                var arr = [{"id": 1, "name": "张三"}]
                ​        应用：
                        ​            一般情况下如果要存储少量数据可以使用 json 来进行存储
                ​        数据的存储：
                        ​            可以单独创建一个 json 后缀的文件进行数据的保存
                ​        数据的使用：
                        ​            可以先使用 fs.readFile 读取 json 文件中的内容（结果是字符串）
                                ​                json 格式的字符串转为对象
                                          ​                     var jsonObj = JSON.parse(str)
                ​        数据的添加：
                        ​            可以先使用 fs.readFile 读取 json 文件中的内容，添加一条数据，再将内容转为字符串（不能直接使用toString()）
                                ​                json 对象转为字符串，可以使用：
                                        ​                    JSON.stringify() // 直接一行显示
                                        ​                    JSON.stringify(str, null, "  ") // 将jsons格式的字符串添加到 json 文件中的时会有结构
                ​        总结：
                        ​            取：
                                ​                1）先取
                                ​                2）再转
                        ​            存：
                                ​                1）先取
                                ​                2）再转
                                ​                3）添加
                                ​                4）再转
                                ​                5）再存
6.0 表单提交数据：
        ​    问题：书写留言板时，需要得到用户输入的内容和用户名称，并且将这些数据提交到服务器，如何提交呢 ？
        ​    解决方案：表单来进行提交
        ​    form 提交数据：
                ​        action: 提交参数的地址
                ​        method: 提交方式
        ​    将 form 表单中的数据全部提交到服务器：
                ​        1）每个表单元素必须添加属性；name
                ​        2）必须有 submit 按钮
                ​        3）将来数据会以键值对的形式传递到服务器
                        ​            以表单元素的 name 作为键
                        ​            以输入的内容作为 值
7.0 在 nodejs 中的接收 post 提交的参数
        ​    使用两个事件来接收
                ​        // data: 用来接收参数：
                ​        //  chunck: 拼接到的数据
                ​        req.on('data', chunck => {

        })
        // end: 当接收参数完成时会执行
        req.on('end', () => {
    
        })
    如果接收到的是中文，需要进行转码：
        decodeURI: 可以将编码过的文本转为中文件
        encodeURI：将中文转为编码
8.0 核心模块： querystring
​    作用：用来操作参数
​    方法：
​        querystring.parse()
9.0 完成留言板：
​    步骤： 
​        1）创建一个服务器
​        2）当请求根目录时，获取静态页面
​        3）动态获取参数
​            3.1 先将参数保存到 json 文件中
​            3.2 再从 json 中取出
​        4）将参数与页面进行渲染
​        5）将结果响应回浏览器

#### 第四天

1.0 今日内容
​    npm 
​    package.json 的使用
​    重做王者荣耀
2.0 npm
​    概念：
​        a. 它是一个网站：用来管理所有的第三方包的网站
​        b. 第三方包的下载工具
​    指令：
​        npm install 包名: 下载包
​            npm install moment 
​            npm install moment art-template
​            补充指令：
​                npm install moment --save 
​                npm install moment -S
​                    作用: 将下载的第三方包的信息保存到 package.json 文件中 dependencies 属性：
​                        dependencies：管理当前项目的所有依赖项（生产依赖项）
​                    注意点：在 npm5.0 版本之前，如果不加 --save / -S ，依赖项是不会被自动添加到 dependencies 中，但是在 npm5.0 之后，就会自动添加了
​                npm install marked -D
​                    作用：将下载的第三方包的信息保存到 package.json 文件中 devDependencies 属性
​                        devDependencies：开发依赖项
​        npm uninstall 包名：卸载包
​            注意点：
​                在 node_modules 中删除第三方包，并且在 package.json 的 dependencies 属性中也删除第三方包
​        npm install --cache-min 99999 moment：从缓存中下载第三方包
​            --cache-min：从缓存中下载
​            999999: 缓存的时间（分钟）
​        npm install: 可以直接将 package.json 中的所有的依赖项（开发依赖和生产依赖）一次性全部下载下来
​        npm init： 用来初始化项目(项目中会自动生成一个文件： package.json 可以用来保存项目的相关信息)
​            依次输入：
​                package name：项目名称
​                version：项目版本
​                description：项目描述
​                entry point：项目入口 
​                test command：测试指令
​                git reposetitroy：git 地址（后面再说）
​                keywords：项目关键字
​                author：项目作者
​                license：项目协议
​            缩写指令： npm init -y 直接生成 package.json 文件，不需要手动一个个输入
​        npm cache clear -f：清除缓存
​        总结：
​            npm install 包名：
​                --save
​                -S
​                -D
​            npm uninstall 包名： 卸载包
​            npm install：下载所有的依赖项
​            npm init: 初始化 package.json 
​                -y 自动初始化
​            npm install --cacah-min 9999 moment
​            npm cacah clear -f
​            简写：
​                npm i 包名
​                npm uni 包名
​                npm i
2.0 package.json：
​    作用：用来管理当前项目中的相关信息
​        "name": 项目名称
​        "version": 项目版本
​        "description": 项目描术
​        "main": 项目入口文件
​        "scripts": {    项目脚本
​            "start": "node ./app.js" // npm run start / npm start
​        },
​        "keywords": [   项目关键字
​            "王者荣耀",
​            "英雄"
​        ],
​        "author": 项目作用
​        "license": 项目协议
​        "dependencies": {   生产依赖项
​            "jquery": "^3.4.1",
​            "moment": "^2.24.0"
​        },
​        "devDependencies": {    开发依赖项
​            "marked": "^0.6.2"
​        }
​    注意点：
​        1） name 属性不能是中文名
​        2） 不能添加注释
​    总结：
​        package.json    管理当前项目中的相关信息
​                不能添加注释
​                name 属性不能是中文名
3.0 王者荣耀的英雄管理
​    项目的开发流程：
​        1）产品经理整理需求文档
​        2）项目经理完成开发文档
​        3）完成代码开发
​            前端
​            后端
​        4）前后端的联调
​        5）测试，上线
​    准备工作：
​        静态文件，数据（db.json）
​    开始开发：
​        1）初始化项目
​        2）确定项目结构：
​            app.js  开启服务器
​                a. 使用 express 来开启
​                b. 
​            router.js   判断路由
​                a. 设置一个外置路由
​                b. 暴露出去
​            process.js  处理逻辑
​                a. 封装一个方法，用来处理逻辑
​                b. 将方法暴露
​        3）响应静态文件
​            a. 响应 views/index.html
​                使用 art-template 来进行响应
​                    下载 art-template express-art-template
​                    引用 express-art-template
​                    在 app.js 中注册 art-template
​                    直接使用方法： res.render 方法
​            b. 处理静态资源
​                app.use('访问路径'，express.static('静态资源文件夹名'))
​                    将来访问静态资源时必须加上访问路径
​                app.use(express.static('静态资源文件夹名'))
​                    将来访问静态资源时，直接以原路径访问
​        4）完成查询：
​            a. 准备数据
​                创建一个文件：db.json 来保存英雄数据
​            b. 得到数据，并且渲染到静态页面上（process.js 中）
​        5）完成新增功能：
​            a. 得到新增页面
​                浏览器：
​                    a1. 给添加英雄设置一个跳转路径：/add
​                服务器：
​                    a2. 设置 /add 的路由 (router.js)
​                    a3. 读取 add.html 并且响应 (process.js)
​            b. 提交新增数据
​                浏览器：
​                    b1. 给 form 表单添加提交操作（add.html）
​                服务器：
​                    b2. 接收请求（app.js）
​                    b3. 判断路由 /add post (router.js)
​                    b4. 处理具体的逻辑（process.js）
​        6）完成删除功能：
​            浏览器：
​                a1. 给删除按钮绑定路径： /del?id=1（index.html）
​            服务器：
​                a2. 接收请求（app.js）
​                a3. 判断路由 get del?id=1 （router.js）
​                a4. 处理逻辑 （process.js）
​        7）完成修改功能：
​            a. 获取修改页面
​                浏览器：
​                    a1. 点击修改按钮提交修改数据
​                服务器：
​                    a2. 接收请求（app.js）
​                    a3. 判断路由（router.js）
​                    a4. 处理逻辑（process.js）
​            b. 提交修改数据
​    修改
4.0 补充：
​    a. 表单元素的内容提交：
​        <input type="text" name="name">
​            将 name 当作键，请 输入框中的内容当作值进行传递
​        <input type="radio" name="gender" value="男">
​            将 gender 当作键，将 男 当作值进行传递
​    b. nodejs 中的获取 post 提交数据的方法：
​        事件：
​            req.on('data', chunk => {} )
​            req.on('end', () => {})
​            注意点：
​                1）要写两个事件
​                2）接收到的参数中如果有中文，需要进行解码
​                3）通过 querystring 来将参数转为对象
​    c. 使用一个第三方包来接收参数：formidabel
​        概念：A Node.js module for parsing form data, especially file uploads.
​        步骤：
​          1）下载
​            npm i formidable
​          2）引用
​            const fmd = require('formidable')
​          3）使用API  
​            3.1 创建一个 formidable 对象
​                const form = new fmd.IncomingForm()
​            3.2 调用 parse 方法
​                // req 请求对象
​                // callback 回调函数
​                //      err 异常信息
​                //      fields 提交的字段
​                //      files  上传过来的文件集合
​                form.parse(req, (err, fields, files) => {
​                })
​    d. url 的组成：
​        网址：https://re.taobao.com/action_ecpm_home?ali_trackid=19_ec68efdea28a04c3e4e996252f7aeda0&spm=a21bo.2017.201862-3.1
​        协议名：https
​        ip 地址: re.taobao.com
​        端口号：默认（80）
​        请求的路径：action_ecpm_home
​        参数：ali_trackid=19_ec68efdea28a04c3e4e996252f7aeda0&spm=a21bo.2017.201862-3.1
​            ali_trackid     19_ec68efdea28a04c3e4e996252f7aeda0&
​            spm             a21bo.2017.201862-3.1
​    e. 核心模块 url
​        协议名 - 主机名 - 端口号 - 请求路径 - 请求参数 - hash 值
​        url.parse() 将路径字符串转为一个对象
​    f. 在 express 中
​        在 3.x 中， 如果要接收url 中的参数，可以通过
​            1） uurl.parse(req.url)
​            2）一个第三方包 body-parse 来获取
​        到了 4.x 中，如果再要接收参数，不需要那么麻烦了直接可以通过 req.query 来获取

####  第五天

1.0 今日内容：
​    a 完成项目的提交修改功能
​    b npm
​    c mysql
2.0 完成项目的提交修改功能:
​    浏览器：
​        a1. 将修改好的数据提交到服务器
​    服务器：
​        a2. 接收提交的数据
​        a3. 将数据更新到 db.json 中
​        a4. 将结果响应回浏览器
3.0 npm
​    安装第三方包：
​        安装方式有两种：
​            本地安装：
​                npm i art-template
​                npm i moment
​                特点：将第三方包安装到当前目录的 node_modules 中，只供当前项目使用
​            全局安装： -g
​                工具：
​                    nodemon:
​                        作用：可以用来重启服务器
​                        步骤：
​                            1）下载 
​                                npm install -g nodemon
​                            2）查看版本
​                                nodemon -v
​                            3）使用：
​                                直接将运行文件的 node 指令改为 nodemon 就行了，将来只要修改代码，并且保存，nodemon 就会自动重启服务器
​                    http-server:
​                        作用：可以快速开启一个静态资源服务器
​                        步骤：
​                            1）下载
​                                npm install -g http-server
​                            2）开启服务器
​                                http-server path
​                    browser-sync:
​                        作用：用来监控文件是否改变，一旦改变会自动在浏览器中更新
​                        步骤：
​                            1）下载
​                                npm install -g browser-sync
​                            2）监视文件
​                                browser-sync start --server --files "./*"
​                特点：只要安装在任意目录下都可以使用（一般情况下不用来安装常用的第三方包，而是安装一些常用的工具）
​            总结：
​                npm 可以通过 -g 来安装全局工具
​                nodemon 可以帮助重启服务器
​                http-server 可以开启一个服务器
​                browser-sync 可以用来监视文件的改变，并自动更新
​                cnpm    也可以下载第三方包（下载服务器是国内）
4.0 请求方式：
​    get 
​        表现形式： 
​            直接在地址栏中输入 url
​            通过 a 标签跳转
​            通过 window.location 进行跳转
​            通过 form 表单的 get 提交方式来进行跳转
​        传递参数：
​            会将参数放到 url 后面以问号隔开，多个参数之间用 & 隔开，以键值对的形式存在，等号前面是键，等号后面是值
​        在 express 中接收参数：
​            req.query
​        注意点：
​            get 传参会通过 url ，这样的传参方式是不安全的
​    post
​        表现形式：
​            通过 fomr 表单的 post 提交方式来进行跳转
​        传递参数：
​            不会将参数放到 url 中，而是将参数放到请求报文体中
​        接收参数：
​            req.on('data', chunk=>{})
​            req.on('end')
​        注意点：
​            post 会通过 请求报文体 会参数，这样的传参方式相对安全
​    总结：
​        get
​            通过 url 传参
​        post
​            通过 请求报文体 传参
​        区别：
​            get 侧重于从服务器中获取数据
​            post 侧重于提交数据到服务器
​    王者荣耀的案例：
​        查询
​            GET
​        新增
​            得到新增页面
​                GET
​            提交新增数据
​                POST
​        删除
​            GET
​        修改
​            得到修改页面 
​                GET
​            提交修改数据
​                POST
4.0 mysql
​    什么是数据库：
​        1）数据管理的仓库
​        2）他可以很方便的对数据进行增删改查
​    安装：
​        安装 mysql 的服务（工具）
​            步骤：
​                全程下一步，
​                唯一需要注意是：需要将密码设置为 root
​            注意点：
​                默认情况下 Mysql 不提供操作界面，也就意味着如果要操作 mysql 必须通过 CMD
​        安装一个 Mysql 的可视化工具 Navicat：
​            作用：给操作提供一个可以可视 化界面
​            步骤：
​                全程下一步
​            破解：
​                直接将 PatchNavicat.exe 放到 安装目录下运行
​    结构概念：
​        mysql 的服务（工具） --- 数据库
​            数据库
​                表
​                    行
​                        列
​                        列
​                    行
​                表
​                    行
​                        列
​                        列
​            数据库
​                表
​                    行
​                        列
​                        列
​                    行
​                表
​                    行
​                        列
​                        列
​    常用数据库：
​        mysql
​        sqlserver
​        orical
​        mongodb
​        ...
​    操作 Navicat：
​       1）链接 mysql:
​            a. 选择连接中的 mysql
​            b. 输入连接名/主机名或者IP地址/端口号/用户名（root）/密码(root)
​            c. 测试连接
​            d. 确定
​       2）创建数据库：heros
​            a. 选中链接右键，创建数据库
​            b. 输入数据库名/字符集/排序规则
​            c. 确定
​       3）创建数据表： hero
​            a. 选中表右键，创建表
​            b. 设置表头
​                mysql 中的数据类型
​                主键：当前这个表的唯一标识
​                自增：当前这个字段是可以自己递增
​                默认值：如果不设置的默认值
​            c. 保存
​        4）使用图形化界面进行增删改查：
​            增
​            删
​            改
​            查
​        5）使用 sql 语句来对 mysql 进行操作
​            什么是 sql:
​                就是 mysql 的语言可以用来对 Mysql 中的数据进行操作
​            新增
​                INSERT INTO 表名 (字段1,字段2,字段3...) VALUES ('data1', 'data2', 'data3'..)
​            删除
​                DELETE FROM 表名 WHERE id = 1
​                DELETE FROM 表名
​            修改 
​                UPDATE 表名 SET 字段1=值1, 字段2=值2 WHERE id = 1
​            查询
​                SELECT * FROM 表名
​            条件查询
​                SELECT * FROM 表名 WHERE id = 3
​            模糊查询
​                %: 模糊匹配
​                SELECT * FROM 表名 WHERE name LIKE '%111%'
​            in 查询
​                SELECT * FROM 表名 WHERE name in ('杨贵妃', '貂蝉')
​            排序
​                SELECT * FROM 表名 ORDER BY ASC/DESC
​    在 nodejs 中操作数据库
​        可以使用一个第三方包来操作： Mysql
5.0 第三方包：mysql
​    作用： nodejs 中的第三方包，可以用来在 node 中操作 mysql 数据库
​    步骤：
​        1）下载
​            npm install mysql
​        2）代码：
​            a. 引入 mysql
​            b. 创建连接
​            c. 开启连接
​            d. 执行 sql 语法
​            e. 关闭链接
​    参数：
​        results:
​            新增时：
​                OkPacket { affectedRows:1 }
​            删除时：
​                OkPacket { affectedRows: 1}
​            修改时：
​                OkPacket { affectedRows: 1}
​            查询时：
​                [RowDataPacket{},RowDataPacket{}]
​    新增：
​    修改：
​    删除：
​    查询：
​    
end: 补充
​    隐藏域：
​        可以在表单元素中添加一些数据，但是不被用户看到
​    js 中的数据类型：
​        Number
​        String
​        Boolean
​        undefined
​        null
​        Array
​        Object
​        Function
​    mysql 数据库中的类型：
​        int 整数
​        double 浮点数
​        varchar(255) 字符串
​        text 文本
​        datetime 日期
​        float 浮点数

#### 第六天

1.0 今日内容
​    a. 将之前写的王者荣耀项目中的数据从 db.json 替换到 Mysql 中
​    b. express 中的中间件
​    c. 状态保持：cookie和session
​    d. commonjs 规范
2.0 将数据从 mysql 中获取
​    a. 将 db.json 删除
​    b. 在 mysql 中创建一个数据库用来存储数据
​        库名：
​            heros
​        表名：
​            hero
​            表头：
​                id  编号
​                name 姓名
​                gender 性别
​                img  图片
​    c. 将操作 Mysql 的代码进行封装
​    d. 改造 process.js 中的代码，从 Mysql 中获取数据
3.0 MVC 设计思想
​    M: model    数据层
​    V: views    视图层
​    C: controller 控制器
​    关系：
​        M 提供数据给 C,  C 将数据渲染到 V
​        V 改变数据给 C,  C 将数据提交到 M
4.0 express 的中间件
​    中间件：
​        功能：给 express 扩展很多其它的功能
​        概念：express 中为程序员提供的可以书写代码的结构
​    分类：
​        应用级中间件
​            概念：直接在 app 对象上使用的中间件
​            语法：
​                app.use((req, res, next) => {
​                    // req: 请求对象
​                    // res：响应对象
​                    // next: 函数（决定后续代码时否执行）
​                })
​                app.get('/',(req, res, next)=>{})
​                app.post('/',(req, res, next))
​        路由级中间件：
​            概念：直接在 路由 对象上使用的中间件
​        错误处理中间件：
​            概念：当系统中出错时，会自动跳转到错误处理中间件
​            注意点：
​                错误处理中间件必须放到所有中间件的最后面，否则处理不了错误
​        内置中间件：
​            express 框架已经写好的中间件：
​                express.static('./views'):统一处理静态资源
​        第三方中间件：
​            相当于是 express 的一些插件（express 的一些第三方包）
5.0 http 无状态
​    浏览器与服务器交互之后，在会保存彼此的信息
6.0 状态管理：
​    cookie
​        翻译：小饼干
​        步骤：
​            浏览器：
​                1）提交登录信息
​                4）接收 cookie，并且保存
​                5）再次请求带上 cookie
​            服务器：
​                2）接收信息，
​                3）创建 cookie 响应回浏览器
​                6）接收 cookie，判断登录
​        操作：
​            1）由服务器创建 (格式：键值对)
​                res.cookie('key', 'value')
​            2）使用第三方包来接收 cookie: cookie-parser
​                a. 下载
​                b. 注册 
​                c. 使用
​        特点：
​            1）不安全（存储在浏览器）
​            2）存储的数据很小只有 4kb
​            3）只能存在字符串 
​            4）只一个网站只能设置大概 20个
​    session：
​        操作：
​            使用第三方包：express-session
​        步骤：
​            1）下载
​            2）引用
​            3）注册
​                app.use(session({
​                    secret: 'keyboard cat',
​                    resave: false,
​                    saveUninitialized: true
​                }))
​                存储：
​                    req.session.views = {}
​                获取：
​                    req.session.views[]
​            使用第三方包 cookie-session
​        步骤：
​            1）下载
​            2）引用
​            3）注册
​            app.use(cookieSession({
​                name: 'session',
​                keys: ['key1', 'key2']
​            }))
​                存储：
​                    req.session.views = {}
​                获取：
​                    req.session.views[]
7.0 给王者荣耀添加登录功能
8.0 commonjs 规范(nodejs)：
​    模块导出（暴露）：
​        module.exports 
​        exports 
​        区别：
​            exports 仅仅只是 module.exports 的指向
​    模块导入：
​        var fs = require('fs')
​            1）可以帮助一个模块加载另一个模块
​            2）会将另一个模块中的代码执行一次
​            3）优先从缓存中加载
​        核心模块的步骤：
​            1）直接找到 node.exe 去里面加载对应的核心模块
​        文件模块的步骤：
​            注意点：
​                1）一定要加上 ./ / ../
​            情况：
​                如果路径上带有后缀 require('./03-files.js')
​                    1）直接去对应的路径中找对应的文件
​                如果路径上没有后缀 require('./03-files')
​                    1）直接去对应的路径中找对应的文件
​                    2）如果找不到文件，再去找对应的文件夹中的 index.js 文件
​        第三方模块的步骤：require('moment')
​            1）先去当前目录下面的 node_modules 中去对应的文件夹
​                1.1 继续去下面找 package.json
​                    1.1.1 继续去下面找属性： main
​                        1.1.1.1 根据 main 对应的属性去找对应的文件，并且加载
​                        1.1.1.2 如果找不到 main 对应的文件，会报错
​                    1.1.2 如果找不到 main 属性，会找 index.js ，找不到报错
​                1.2 找不到 package.json，会找 index.js ，找不到再报错
​            2）返回上一级目录去找 node_modules，如果没有，继续返回上一级,直接根目录

### Sql语句

    新增
                INSERT INTO 表名 (字段1,字段2,字段3...) VALUES ('data1', 'data2', 'data3'..)
            删除
                DELETE FROM 表名 WHERE id = 1
                DELETE FROM 表名
            修改 
                UPDATE 表名 SET 字段1=值1, 字段2=值2 WHERE id = 1
            查询
                SELECT * FROM 表名
            条件查询
                SELECT * FROM 表名 WHERE id = 3
            模糊查询
                %: 模糊匹配
                SELECT * FROM 表名 WHERE name LIKE '%111%'
            in 查询
                SELECT * FROM 表名 WHERE name in ('杨贵妃', '貂蝉')
            排序
                SELECT * FROM 表名 ORDER BY ASC/DESC