// pages/publish/publish.js
var Bmob = require('../../utils/bmob.js');
var app = getApp()
var currentdate = app.globalData.date;
var res;
var len;
var Diary = Bmob.Object.extend("event_data");
var query = new Bmob.Query(Diary);
query.equalTo("phone", app.globalData.phoneNum);
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        id: 0, name: "川普", gender: "male", phone: "9177568000", wechat: "DTrump", qidian: "White House",
        date: "2020-09-01", time: "7:00", zhongdian: "Congress", usertype: "车找人", mode: "Lincoln", seat: "3"
      },
    ],
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