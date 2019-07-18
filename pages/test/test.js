Page({
  /**
   * 页面的初始数据
   */
  data: {
    animation: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setTopBarText({
      text: 'hello, world!'
    })
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    // 实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间 单位ms 默认 400
      duration: 5000,
      timingFunctionL: 'linear',
      // 延迟多长时间开始
      delay: 100,
      /**
      * 以什么为基点做动画  效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
    *多个动画组 旋转
  */
  rotate: function () {
    //  两个动画组 一定要以step()结尾
    /**
      *动画顺序 顺时针旋转150度 
      * x,y 放大二倍, 
      * x,y 平移10px 
      * x ,y顺时针倾斜 改变样式 和 设置高度 宽度
    */
    this.animation.rotate(150).step().scale(2).step().translate(10).step().skew(10).step().opacity(0.5).width(10).step({ duration: 3000 })

    this.setData({
      //输出动画
      animation: this.animation.export()
    })

  },

})
