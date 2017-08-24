// pages/driver/driver.js
var Bmob = require('../../utils/bmob.js');
var app = getApp();
var currenttime = app.globalData.time;
var currentdate = app.globalData.date;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      driverName:"",
      gender:"",
      phoneNum:"",
      remainedSeat:1,
      start:"Amherst",
      end:"Amherst",
      mod: "轿车",
      tempFilePaths:'',
      condition: false,
      date: currentdate,
      curdate:currentdate,
      time: currenttime,
      price:"",
      comment:"",

      countryCodes: ["+1", "+86"],
      countryCodeIndex: "0",


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
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  bindSeatChange: function (e) {
    console.log('index0 code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index0: e.detail.value
    })
    this.data.remainedSeat = this.data.seat[this.data.index0];
    console.log('remained seat is ', this.data.remainedSeat);
  },

  bindModelChange: function (e) {
    console.log('index 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index: e.detail.value
    })
    this.data.mod = this.data.model[this.data.index]
    console.log('车型为 ', this.data.mod)
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

  priceChange: function (e) {
    this.setData({
      price: e.detail.value
    })

    console.log('price：', e.detail.value)
  },

  commentChange: function (e) {
    this.setData({
      comment: e.detail.value
    })

    console.log('comment：', e.detail.value)
  },

  submit: function () {
    if(this.data.start==this.data.end){
      wx.showModal({
        title: '别搞事',
        content: '出发地与目的地不可一致',
        showCancel: false,
      })
    }
    else if(this.data.price==""){
      wx.showModal({
        title: '别搞事',
        content: '你没写价格哦',
        showCancel: false,
      })
    }
    else{
      var Diary = Bmob.Object.extend("event_data");
      var event_data = new Diary();
      event_data.set("person", "车找人");
      event_data.set("name", app.globalData.userName);
      event_data.set("gender", app.globalData.gender);
      event_data.set("wechat", app.globalData.wechatId);
      event_data.set("countrycode", this.data.countryCodeIndex);
      event_data.set("phone", this.data.phoneNum);
      event_data.set("mode", this.data.mod);
      event_data.set("seat", this.data.remainedSeat+"空位");
      event_data.set("from", this.data.start);
      event_data.set("to", this.data.end);
      event_data.set("date", this.data.date);
      event_data.set("time", this.data.time);
      event_data.set("price", this.data.price);
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
      gender: app.globalData.gender,
      wechatID: app.globalData.wechatId
    })
    console.log(currentdate)
  },

  openAlert: function () {
    wx.showModal({
      content: '建议价格：Amherst往返Boston为35美元/人到50美元/人，Amherst往返NYC为50美元/人到65美元/人，Amherst往返BDL为20美元/人到30美元/人',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
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
    console.log(this.data)
    if(this.data.driverName==""){
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