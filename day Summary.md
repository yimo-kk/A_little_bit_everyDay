### 第七天

一.一天时间都在对接口，需要的数据不知道怎么去获取。

​	问题：1.下拉框是写死的数据是自己写的（一个选择分类），我不知道到到底有些什么数据，需要返回给后台的是以数字代表不同分类的数字。不知道怎么把怎么的得到数字和不知道怎么把数字转为我想要的字符串和布尔类型。

​	解决：

​		1）用if - else  的方式来转，注意细节上的东西有时候一个很小的东西搞半天不知道错在哪儿。

​		2）用switch（条件）{  case n: 代码块 break;     default: 代码块； }          

​	总结：方法很死板代码比较繁琐，加油会更好的  (^v^ )         

### 第八天     

一.  问题: 怎么把后台返回的一个数组(数组中又有多个对象.对象中又有10个(假如)属性,在vue的data中定义了一个数组来接受后台返回的数据,但是我用了数据又要把这个数据返回给后台,但是我只需要一个对象中的7 个属性?

​	1) 通过forEach方法遍历, 先在data中创建一个数组来存需要的对象数据, 再在回调函数中创建一个对象, 把需要的方法添加到创建的对象中,在通过数组的push()方法 把添加属性的对象,添加到data中声明的数组中. 缺点:代码稍微麻烦点,会单独创建一个数组和对象,  优点: 不会改变原来的数组里面的数据

​	2) 通过delete 方法直接删除 对象中的属性(可以直接删除键与值)   缺点:会改变原来数组里面的数据,  优点:代码简单,方便.

```

<script>
export default {
  data(){
    return{
      data:"",
      a :[
        {name:'yimo',age:"18",address:"深圳"},
        {name:'小胖',age:"16",address:"重庆"},
        {name:'小红',age:"20",address:"杭州"}
        ],
        b:[]
    }
  },
  created() {
    // this.add()
    this.subtract()
  },
  methods:{
    // 第一种
  //  add(){
  //     this.a.forEach(e => {
  //       let obj ={}
  //       obj.name = e.name
  //       obj.age = e.age
  //       this.b.push(obj)
  //   });
  //   console.log(this.b)
  //  }
  // 第二种
  subtract(){
    this.a.forEach(element => {
      delete element.age
    });
    console.log(this.a)
  }
  }

};
</script>

```

