// pages/dom/dom.js
let timer=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0,
    scrollTarget:'A',
    percent:0,
    index:0,
    list:['请选择','111','222','333','444','555'],
    multiIndex:[0,0],
    list1: [[{ id: 0, name: '请选择', data: [{ id: 0, name: '请选择' }] }, { id: 1, name: '111', data: [{ id: 0, name: 'a' }, { id: 1, name: 'b' }] }, { id: 2, name: '222', data: [{ id: 0, name: 'c' }, { id: 1, name: 'd' }] }], [{ id: 0, name: '请选择' }]],
    radioList: [
      { id: 'USA', name: '美国' },
      { id: 'CHN', name: '中国', checked: 'true' },
      { id: 'BRA', name: '巴西' },
      { id: 'JPN', name: '日本' },
      { id: 'ENG', name: '英国' },
      { id: 'TUR', name: '法国' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    timer=setInterval(that.changePercent,100)
  },
  changePercent(){
    let that = this,
      percent = that.data.percent;
    if (percent >= 100) {
      clearInterval(timer);
    }
    that.setData({
      percent: percent+1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showMoveData(e){
    this.setData({x:e.detail.x,y:e.detail.y})
    console.log(e.detail)
  },

  changeTarget(e){
    this.setData({ scrollTarget:e.detail.value})
  },
  getUserInfo(data){
    console.log(data)
  },
  signSelectChange(e){
    //单选选择器
    console.log(e.detail.value);
    this.setData({
      index:e.detail.value
    })
  },
  multiSelectChange(e){
    //多选选择器
    console.log(2222,e.detail.value)
    this.setData({
      multiIndex:[...e.detail.value],
    })
  },
  multiSelectColChange(e){
    console.log(e);
    let col=e.detail.column,
        val=e.detail.value;
        if(col==0){
      
          let list1=this.data.list1;
          list1[1]=[...list1[0][val]['data']];
          console.log(list1)
          this.setData({
            list1: [...list1],
            multiIndex:[val,0]
          })
        }
  },
  gotoMultiSelectDom(){
    wx.navigateTo({
      url: '../multiSelect/multiSelect',
    })
  }
  })