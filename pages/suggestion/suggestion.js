// pages/suggestion/suggestion.js
var Bmob = require('../../utils/bmob.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:""
  },

  /**
   * 生命周期函数--监听页面加载
   */

  commentChange: function (e) {
    this.setData({
      comment: e.detail.value
    })

    console.log('comment：', e.detail.value)
  },

  submit: function(){
    if(this.data.comment==""){
      wx.showModal({
        title: '建议为空',
        content: '给点建议吧老铁',
        showCancel: false,
      })
    }
    else{
      var Diary = Bmob.Object.extend("suggestion_data");
      var suggestion_data = new Diary();
      suggestion_data.set("suggestion", this.data.comment);
      //添加数据，第一个入口参数是null
      suggestion_data.save(null, {
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
      url: '../index/index'
    })
  },

  showSuccess: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
    });
  },

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