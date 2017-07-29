//index.js  
//获取应用实例  
var app = getApp()
var currentdate = app.globalData.date;
Page({
  data: {

    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    items:app.globalData.items,

    itemsIndex:0,

    location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
    index1: 0,
    index2: 0,

    da:currentdate,
    curdate: currentdate,

    start: "Amherst",
    end: "Amherst",

    condition0:false,
    condition1:false,
    
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

  copyWechat:function(e){
    var self = this;
    wx.setClipboardData({
      data: self.data.items.wechat,
      success: function (res) {
        // self.setData({copyTip:true}),  
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    }); 
  },

  bindStartChange: function (e) {
    console.log('index1 发生选择改变，携带值为', e.detail.value);
    this.setData({
      index1: e.detail.value,
      condition0:true,
    })
    this.data.start = this.data.location[this.data.index1]
    console.log('出发地城市为 ', this.data.start)
  },

  bindEndChange: function (e) {
    console.log('index2 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index2: e.detail.value,
      condition1:true,
    })
    this.data.end = this.data.location[this.data.index2]
    console.log('目的地城市为 ', this.data.end)
  },

  bindDateChange: function (e) {
    this.setData({
      da: e.detail.value
    })
    console.log('date is ', e.detail.value)
  },

  callmeTap: function () {
    wx.makePhoneCall({
      phoneNumber: "4139926367"
    })
  }, 

  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },

  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },

  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('circle 下一页');
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
