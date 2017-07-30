// pages/passenger/passenger.js
var app = getApp();
var currentdate = app.globalData.date;
var currenttime = app.globalData.time;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    phoneNum:"",
    gender: 'male',
    date: currentdate,
    time: currenttime,
    start:"Amherst",
    end: "Amherst",
    bag: "",
    view: 'APP',
    nop:["1","2","3","4","5"],
    nopIndex: 0,
    countryCodes: ["+1", "+86"],
    countryCodeIndex: 0,

    location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
    index1: 0,
    index2: 0,
  },

  

  bindStartChange: function (e) {
    console.log('index1 发生选择改变，携带值为', e.detail.value);
    this.setData({
      index1: e.detail.value,
    })
    this.data.start = this.data.location[this.data.index1]
    console.log('出发地城市为 ', this.data.start)
  },

  bindEndChange: function (e) {
    console.log('index2 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index2: e.detail.value
    })
    this.data.end = this.data.location[this.data.index2]
    console.log('目的地城市为 ', this.data.end)
  },

  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

    nopChange: function (e) {
    console.log('picker nop code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      nopIndex: e.detail.value
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

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      driverName: app.globalData.userName,
      phoneNum: app.globalData.phoneNum,
      gender: app.globalData.gender,
      wechatID: app.globalData.wechatId
    })
    console.log(currentdate)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
  //   console.log(this.data)
  //   if (this.data.driverName == "") {
  //     wx.showModal({
  //       title: '不给你进',
  //       content: '还没填写个人信息哦',
  //       showCancel: false,
  //       success: function (res) {
  //         if (res.confirm) {
  //           console.log('用户点击确定')
  //           wx.navigateBack({
  //             url: '../add/add'
  //           })
  //         } else if (res.cancel) {
  //           console.log('用户点击取消')
  //         }
  //       }
  //     })
  //   }
  // },

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