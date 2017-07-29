// pages/driver/driver.js
var app = getApp();
var currenttime = app.globalData.time;
var currentdate = app.globalData.date;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:{
        name: "",
        phoneNum: "",
        wechatId:"",
        start:"Amherst",
        date:currentdate,
        time:currenttime,
        end:"Amherst",
        usertype:"driver",
        mode:"Sedan",
        remainedSeat: "1",
        id:""
      },
      
      name:"",
      phoneNum:"",
      wechatId:"",

      gender:"",
      start:"Amherst",
      end:"Amherst",
      mode: "轿车",
      tempFilePaths:'',
      condition: false,
      date: currentdate,
      curdate:currentdate,
      time: currenttime,

      countryCodes: ["+1", "+86"],
      countryCodeIndex: 0,


      location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
      index1: 0,
      index2: 0,

      model: ["Sedan", "SUV", "MPV", "BPV", "MINIBUS","Coupe"],
      index: 0,

      seat:["1", "2", "3", "4", "5", "6"],
      index0: 0
    
  },

  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, 
      sizeType: ['compressed'],  
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          tempFilePaths: res.tempFilePaths,
          condition:true
        })
      }
    })
  },
  
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  bindSeatChange: function (e) {
    this.setData({
      index0: e.detail.value
    })
    this.data.user.remainedSeat = this.data.seat[this.data.index0];
    console.log('remained seat is ', this.data.user.remainedSeat);
  },

  bindModelChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.data.user.mode = this.data.model[this.data.index]
    console.log('车型为 ', this.data.user.mode)
  },

  bindStartChange: function (e) {
    this.setData({
      index1: e.detail.value,
    })
    this.data.user.start = this.data.location[this.data.index1]
    console.log('出发地城市为 ', this.data.user.start)
  },

  bindEndChange: function (e) {
    this.setData({
      index2: e.detail.value
    })
    this.data.user.end = this.data.location[this.data.index2]
    console.log('目的地城市为 ', this.data.user.end)
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    console.log('date is ',e.detail.value)
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
    console.log('time is ', e.detail.value)
  },

  submit: function (e) {
    if (this.data.user.start == this.data.user.end) {
      wx.showModal({
        title: '别搞事',
        content: '出发地与目的地不可一致',
        showCancel: false,
      })
    }
    else {
      console.log(app.globalData.items)
      var data = this.data.user
      app.globalData.items[0] = data
      console.log(app.globalData.items[0])
      console.log(app.globalData.items)
      console.log(app.globalData)
      // app.globalData.items = this;
      // app.globalData.items[app.globalData.items.length].phoneNum = this.data.phoneNum;
      // app.globalData.items[app.globalData.items.length].remainedSeat = this.data.remainedSeat;
      // app.globalData.items[app.globalData.items.length].start = this.data.start;
      // app.globalData.items[app.globalData.items.length].time = this.data.time;
      // app.globalData.items[app.globalData.items.length].date = this.data.date;
      // app.globalData.items[app.globalData.items.length].end = this.data.end;
      // app.globalData.items[app.globalData.items.length].usertype = this.data.usertype;
      // app.globalData.items[app.globalData.items.length].mod = this.data.mod;
      // app.globalData.items[app.globalData.items.length].key = app.globalData.items.length;
      this.showSuccess()
      var b = setTimeout(this.back, 1000)
    }
    // console.log(obj)
  },

  back: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },

  showSuccess: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        name: app.globalData.userName,
        phoneNum: app.globalData.phoneNum,
        gender: app.globalData.gender,
        wechatId: app.globalData.wechatId
      })
      this.data.user.name = app.globalData.userName,
      this.data.user.phoneNum = app.globalData.phoneNum,
      this.data.user.gender = app.globalData.gender,
      this.data.user.wechatId = app.globalData.wechatId
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
  onShow: function () {
    if (this.data.user.name==""){
      wx.showModal({
        title: '不给你进',
        content: '还没填写个人信息哦',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack({
              url: '../add/add'
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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