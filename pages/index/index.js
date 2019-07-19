//index.js
//获取应用实例
const app = getApp()
require('../../utils/a.js');
console.log('this is index');
require('../../utils/b.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arr: [{ id: 1, unique: 'unique_1' }, { id: 2, unique: 'unique_2' }]
  },
  //添加数据
  add:function(){
    console.log(this.data.arr)
    this.setData({
      arr:[...this.data.arr,{id:3,unique:'unique_3'}]
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loadImg:function(event){
    console.log(event.detail.width)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gototest(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  gotoApi(){
    wx.navigateTo({
      url: '../api/api',
    })
  },
  gotoVideo(){
    wx.navigateTo({
      url: '../video/video',
    })
  }
  
})


