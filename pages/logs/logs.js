//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onReady:function(){
    console.log('log page onReady')
  },
  onLoad: function () {
    console.log('log page onLoad')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReachBottom(opt){
    console.log('reachbottom'+JSON.stringify(opt))
  },
  onPageScroll(opt){
    console.log('scroll'+JSON.stringify(opt))
  }
})
