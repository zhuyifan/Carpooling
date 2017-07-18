// pages/passenger/passenger.js
var app = getApp();
var me = require('../profile/profile.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    phoneNum:"",
    gender: 'male',
    time: "",
    destination: "",
    bag: "",
    view: 'APP',
    items: [
      { gender: 'male', value: '男', checked: 'true' },
      { gender: 'female', value: '女' },
    ],
    date: "2016-09-01",
    time: "12:01",

    countryCodes: ["+1", "+86"],
    countryCodeIndex: 1
  },

  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  numChange: function (e) {
    this.setData({
      phoneNum: this.data.countryCodeIndex+e.detail.value
    })
    console.log('num：', e.detail.value)
  },

  nameChange: function(e) {
    this.setData({
      userName: e.detail.value
    })
    console.log('name:',this.data.userName)
  },

  genderChange: function (e) {
    console.log('gender：', e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      console.log('onLoad')
      var that = this;
      app.getUserInfo(function (userInfo) {
        that.setData({
          userInfo: userInfo
        })
        // console.log(userInfo.nickName)
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
  
  }
})