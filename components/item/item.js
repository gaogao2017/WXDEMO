// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  relations:{
    '../header/header':{
      type:'parent',
      linked:function(target){
        console.log('header 插入',target)
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    login:function(){
      this.triggerEvent('acceptItem',{bb:11})
    }
  }
})
