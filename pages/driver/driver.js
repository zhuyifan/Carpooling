// pages/driver/driver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items: [
        { gender: 'male', value: '男', checked: 'true' },
        { gender: 'female', value: '女' },
      ],
      date: "2017-07-01",
      time: "12:01",

      countryCodes: ["+1", "+86"],
      countryCodeIndex: 0,

      location: ["Amherst", "Boston", "New York City", "BOS Airport", "BDL Airport", "JFK Airport"],
      index1: 0,
      index2: 0
    
  },

  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  bindLocationChange1: function (e) {
    console.log('picker location 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index1: e.detail.value
    })
  },

  bindLocationChange2: function (e) {
    console.log('picker location 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index2: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  submit: function () {
   
  },


  showSuccess: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
    });
  },

  back: function () {
    wx.navigateBack({
      url: '../index/index'
    })
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
  
  }
})