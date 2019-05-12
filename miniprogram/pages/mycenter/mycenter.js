var App = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad: function (options) {
    var that = this
    // 以调用实例的方法获取个人信息
    wx.getUserInfo(function(userInfo) {
      console.log(userInfo);
      // 更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  grabTicket:function(){
    wx.navigateTo({
      url:'../grabticket/grabticket'
    })
  }
})