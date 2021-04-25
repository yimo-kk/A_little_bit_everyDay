## uni-App

#### 1.生命周期
​	1.在uni-App中完全支持vue中的生命周期，8个.

​	2.应用生命周期（相当于小程序的应用生命周期）

```js
onLaunch	//初始化完成时触发（全局只触发一次），例如：点击分享页面进入应用，可以捕获在分享链接的参数
onShow	//启动，或从后台进入前台显示
onHide	//从前台进入后台
onError	//报错时触发
```

​	3.还有也面生命周期（相当于小程序的页面周期）

```js
// 基本都是以对象的形式存在
onLoad						//监听页面加载，每个页面触发一次，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
onShow						//监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
onReady						//监听页面初次渲染完成。如果渲染速度快，会在页面进入动画完成前触发
onHide						//监听页面隐藏
onUnload					//监听页面卸载
onResize					//监听窗口尺寸变化
onPullDownRefresh			//监听下拉刷新
onReachBottom				//监听触底上拉加载
onShareAppMessage			//监听点击右上角分享
onPageScroll				//监听页面滚动
onBackPress					//监听左上角返回按钮或 android 返回键
```

#### 2.数据绑定（遵循vue）

​	1.数据绑定完全遵循vue的数据绑定模式。

​	2.组件方式也完全遵循vue 

​	3.使用标签的时候注意：尽量不使用浏览器中的标签，使用<template/> （一般if语句使用），<block/> （一般for循环使用）它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。用<view/>标签名替代<div/>

​	4.把常用的方法挂载到vue.prototype上面（在mian.js中挂载）。也支持小程序的globalData来存放公共数据，以及vuex状态管理

#### 3.组件

​	1.uni-App有自带的组件，基本支持所有的小程序的组件

​	2.自定义组件（vue类似）,可以定义全组件（需要在main.js引入）

#### 4.跳转

​	1.类似小程序跳转

```
// 在起始页面跳转到list.vue页面并传递参数
// 该页面需要在 pages.json 注册
uni.navigateTo({
    url: '/pages/list/list?id=1&name=uniapp'
});

// 或者使用标签形式跳转
<navigator url="/pages/list/list?id=1&name=uniapp">去列表</navigator>

// 在list.vue页面接受参数
export default {
    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
        console.log(option.id); //打印出上个页面传递的参数。
        console.log(option.name); //打印出上个页面传递的参数。
    }
}

//常见的api跳转
uni.navigateTo() 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面。
uni.redirectTo() 关闭当前页面，跳转到应用内的某个页面。
uni.reLaunch() 关闭所有页面，打开到应用内的某个页面。reLaunch 可以打开任意页面。
uni.switchTab() 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。switchTab 只能打开 tabBar 页面。
//注意
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* 页面跳转路径有层级限制，不能无限制跳转新页面
* 跳转到 tabBar 页面只能使用 switchTab 跳转
* 路由 API 的目标页面必须是在 pages.json 里注册的 vue 页面。如果想打开 web url，在 App 平台可以使用 plus.runtime.openURL 或 web-view 组件；H5 平台使用 window.open；小程序平台使用 web-view 组件（url需在小程序的联网白名单中）。在 hello uni-app 中有个组件 ulink.vue 已对多端进行封装，可参考。
```

在通过标签来跳转时可以设置相应的open-type属性值

```

```

#### 5.网络请求

​	1.uni-request()发送网络请求

```
let requestTask = uni.request({
    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
    data: {
        text: 'uni.request'
    },
    header: {
        'custom-header': 'hello' //自定义请求头信息
    },
    success: (res) => {
        console.log(res.data);
        this.text = 'request success';
    }
});

// 中断请求任务
requestTask.abort();
```

