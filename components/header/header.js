// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA:{
      type:String
    }
  },
  relations:{
    '../item/item':{
      type:'child',
      linked:function(target){
        console.log('item 插入',target.is)
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
  },
  ready:function(){
    console.log('propA',this.data.propA)
    this.triggerEvent('acceptHeader',{a:1})
  }
})
