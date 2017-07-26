//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    items: [
      { name:"刁豫东三", qidian:"BDL", date:"2017-8-9", time:"18:00", zhongdian:"Amherst", usertype:"人找车", seat:2},
      { name: "刁豫东四", qidian: "Logan", date: "2017-7-9", time: "18:00", zhongdian: "Amherst", usertype: "人找车", seat: 2},
      { name: "刁豫东五", qidian: "Boston", date: "2017-8-9", time: "18:00", zhongdian: "Amherst", usertype: "车找人", seat: 3},
      { name: "刁豫东三", qidian: "Amherst", date: "2017-9-9", time: "18:00", zhongdian: "BDL", usertype: "车找人", seat: 2},
      { name: "刁豫东一", qidian: "JFK", date: "2017-9-9", time: "18:00", zhongdian: "Amherst", usertype: "人找车", seat: 1},
      { name: "刁豫东二", qidian: "Boston", date: "2017-10-9", time: "18:00", zhongdian: "Amherst", usertype: "车找人", seat: 2},
    ]
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

  },

  onShow:function(){
    console.log(app.globalData)
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
