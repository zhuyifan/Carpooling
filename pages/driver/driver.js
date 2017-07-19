// pages/driver/driver.js
var app = getApp();
var date = new Date();
var hyphen = "-";
var colon = ":";
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {
  month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
  strDate = "0" + strDate;
}
var currentdate = date.getFullYear() + 
hyphen+ month + hyphen + strDate;

var currenttime = date.getHours() + 
colon +date.getMinutes();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      driverName:"",
      gender:"",
      phoneNum:"",
      start:"Amherst",
      end:"Amherst",
      date: currentdate,
      time: currenttime,

      countryCodes: ["+1", "+86"],
      countryCodeIndex: 0,

      location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
      index1: 0,
      index2: 0
    
  },

  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  bindStartChange: function (e) {
    console.log('index1 发生选择改变，携带值为', e.detail.value);
    this.setData({
      index1: e.detail.value,
    })
    this.data.start = this.data.location[this.data.index1]
    console.log('出发地城市为 ',this.data.start)
  },

  bindEndChange: function (e) {
    console.log('index2 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index2: e.detail.value
    })
    this.data.end = this.data.location[this.data.index2]
    console.log('目的地城市为 ', this.data.end)
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

  submit: function () {
    if(this.data.start==this.data.end){
      wx.showModal({
        title: '别搞事',
        content: '出发地与目的地不可一致',
        showCancel: false,
      })
    }
    else{
      this.showSuccess()
      var b = setTimeout(this.back,1000)
    }
    console.log(this.data)
  },

  back: function(){
    wx.navigateBack({
      url: '../add/add'
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
      driverName: app.globalData.userName,
      phoneNum: app.globalData.phoneNum,
      gender: app.globalData.gender
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
  onShow: function () {
    console.log(this.data)
    // if(this.data.driverName==""){
    //   wx.showModal({
    //     title: '不给你进',
    //     content: '还没填写个人信息哦',
    //     showCancel: false,
    //     success: function (res) {
    //       if (res.confirm) {
    //         console.log('用户点击确定')
    //         wx.navigateBack({
    //           url: '../add/add'
    //         })
    //       } else if (res.cancel) {
    //         console.log('用户点击取消')
    //       }
    //     }
    //   })
    // }
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