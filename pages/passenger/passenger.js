// pages/passenger/passenger.js
var Bmob = require('../../utils/bmob.js');
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
    seat:1,
    view: 'APP',
    countryCodes: ["+1", "+86"],
    countryCodeIndex: "0",
    comment: "",

    location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
    index1: 0,
    index2: 0,

    nop: ["1", "2", "3", "4", "5"],
    nopIndex: 0,
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
    this.data.seat = this.data.nop[this.data.nopIndex];
    console.log('remained seat is ', this.data.seat);
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

  commentChange: function (e) {
    this.setData({
      comment: e.detail.value
    })

    console.log('comment：', e.detail.value)
  },

  submit: function () {
    if (this.data.start == this.data.end) {
      wx.showModal({
        title: '别搞事',
        content: '出发地与目的地不可一致',
        showCancel: false,
      })
    }
    else {
      var Diary = Bmob.Object.extend("event_data");
      var event_data = new Diary();
      event_data.set("person", "人找车");
      event_data.set("name", app.globalData.userName);
      event_data.set("gender", app.globalData.gender);
      event_data.set("wechat", app.globalData.wechatId);
      event_data.set("countrycode", this.data.countryCodeIndex);
      event_data.set("phone", this.data.phoneNum);
      event_data.set("seat", this.data.seat+"人");
      event_data.set("from", this.data.start);
      event_data.set("to", this.data.end);
      event_data.set("date", this.data.date);
      event_data.set("time", this.data.time);
      event_data.set("comment", this.data.comment);
      //添加数据，第一个入口参数是null
      event_data.save(null, {
        success: function (result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          console.log("日记创建成功, objectId:" + result.id);
        },
        error: function (result, error) {
          // 添加失败
          console.log('创建日记失败');
        }
      });
      this.showSuccess()
      var b = setTimeout(this.back, 1000)
    }
    console.log(this.data)
  },

  back: function () {
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
      userName: app.globalData.userName,
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
  onShow: function () {
    console.log(this.data)
    if (this.data.userName == "") {
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