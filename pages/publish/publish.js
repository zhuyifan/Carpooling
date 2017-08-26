// pages/publish/publish.js
var Bmob = require('../../utils/bmob.js');
var app = getApp()
var currentdate = app.globalData.date;
var res;
var len;



  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: "",
    items: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'phoneNum',
      success: function (res) {
        // success
        that.setData({
          phoneNum: res.data
        })
      }
    });

    var Diary = Bmob.Object.extend("event_data");
    var query = new Bmob.Query(Diary);
    query.equalTo("phone", this.data.phoneNum);
    query.find({
      success: function (results) {
        console.log("共查询到 " + results.length + " 条记录");
        len = results.length;
        // 循环处理查询到的数据
        res = results;
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.get('name') + ' - ' + object.get('phone'));
        }
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });

    for (var i = 0; i < len; i++) {
      this.data.items = [{
        id: res[i].get("id"), gender: res[i].get("gender"), name: res[i].get("name"),
        phone: res[i].get("phone"), wechat: res[i].get("wechat"),
        qidian: res[i].get("from"), date: res[i].get("date"), time: res[i].get("time"),
        zhongdian: res[i].get("to"), usertype: res[i].get("person"), mode: res[i].get("mode"),
        seat: res[i].get("seat")
      }].concat(this.data.items),

        this.setData({
          items: this.data.items
        })
    }
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