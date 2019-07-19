// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  downloadImg() {
    downloadFile('https://img2.xgo-img.com.cn/line_head/3/240x180/5c3561d619805.jpg')
  },
  addStorage() {
    wx.setStorage({
      key: 'a',
      data: '111',
    })
  },
  getStorage() {
    wx.getStorage({
      key: 'a',
      success: function (res) {
        console.log(res)
      },
    })
    wx.getStorageInfo({
      success: function (res) {
        console.log(res)
      },
    })
  },
  removeStorage() {
    wx.removeStorage({
      key: 'a',
      success: function (res) { console.log(res) },
    })
  },
  gotoMap() {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  priviewImage: function () {
    wx.previewImage({
      urls: ['https://img2.xgo-img.com.cn/line_head/3/240x180/5c3561d619805.jpg'],
      current: 'https://img2.xgo-img.com.cn/line_head/3/240x180/5c3561d619805.jpg',
      success: function (json) {
        console.log(json)
      }
    })
  },
  compressImg: function () {
    wx.downloadFile({
      url: 'https://img2.xgo-img.com.cn/line_head/3/240x180/5c3561d619805.jpg',
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res)
          wx.compressImage({
            src: res.tempFilePath,
            quality: 40,
            complete: function (obj) {
              wx.previewImage({
                urls: [obj.tempFilePath],
              })
              console.log(obj.tempFilePath)
            }
          })
        }
      }
    })

  },
  chooseFile:function(){
    wx.chooseMessageFile({
      count:5,
      //type: all/video/image/file
      success:function(res){
        console.log(res)
      }
    })
  },
  choosePhone:function(){
    wx.chooseImage({
      count:5,
      //sourceType:['album','camera'],
      success:function(res){
        console.log(res)
      }
    })
  },
  getLocation:function(){
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
    })
  }
})
function downloadFile(fileUrl, type = 'img') {
  wx.downloadFile({
    url: fileUrl, complete(res) {
      if (res.statusCode == 200) {
        //文件临时下载到本地
        if (type == 'img') {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              //下载成功
              wx.showToast({
                title: '下载成功'
              })
              console.log(res)

            },
            fail(res) {
              //下载失败
              wx.showToast({
                title: `下载失败`,
                icon: 'none'
              })
              console.log(res)

            }
          })
        } else {
          wx.saveVideoToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              //下载成功
              wx.showToast({
                title: '下载成功'
              })
              console.log(res)

            },
            fail(res) {
              //下载失败
              wx.showToast({
                title: `下载失败`,
                icon: 'none'
              })
              console.log(res)

            }
          })
        }
      } else {
        //临时下载失败
        wx.showToast({
          title: `下载失败`,
          icon: 'none'
        })
      }

    }
  })

}