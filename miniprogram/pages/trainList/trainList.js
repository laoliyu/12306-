// miniprogram/pages/trainList/trainList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    trainList: [],
    winHeight: 600

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // console.log(e);
    var startStation = e.startStation;//出发站
    var endStation = e.endStation;//终点站
    var date = e.date;//日期：2月2日
    console.log("startStation =" + startStation + "---endStation=" + endStation + "---date=" + date);
    wx.setNavigationBarTitle({
      title: startStation + '——>' + endStation
    });
    this.setData({ data: date });
    this.loadTrainsList(startStation, endStation);
  },
  loadTrainsList: function (startStation, endStation) {
    var page = this;
    wx.request({
      url: 'http://v.juhe.cn/multway/plans',
      data: {
        start: startStation,
        end: endStation,
        date: '',
        dtype: '',
        key: 'da56071221704d72c2211ebe5736d1a1'
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        var trainList = res.data.result;//?
        var trainList = wx.getStorageSync('trainList');
        var size = trainList.length;
        var winHeight = size * 100 + 30;
        page.setData({trainList:trainList});
        page.setData({winHeight:winHeight});
      }
    });
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

  }
})