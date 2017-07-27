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
    
    

    items: [
      { name:"刁豫东", phone:4139945357, wechat:"yudongdiao2", qidian:"BDL", date:"2017-8-9", time:"18:00", zhongdian:"Amherst", usertype:"人找车", mode:"miniBus", seat:"2人"},
      { name: "刁豫西", phone: 4139926367, wechat: "yudongdiao2", qidian: "Logan", date: "2017-7-9", time: "18:00", zhongdian: "Amherst", usertype: "人找车", mode: "SUV", seat: "2人"},
      { name: "刁豫南", phone: 4139926367, wechat: "yudongdiao2", qidian: "Boston", date: "2017-8-9", time: "18:00", zhongdian: "Amherst", usertype: "车找人", mode: "Coupe", seat: "3空位"},
      { name: "刁豫北", phone: 4139926367, wechat: "yudongdiao2", qidian: "Amherst", date: "2017-9-9", time: "18:00", zhongdian: "BDL", usertype: "车找人", mode: "SUV", seat: "2空位"},
      { name: "刁豫东北", phone: 4139926367, wechat: "yudongdiao2", qidian: "JFK", date: "2017-9-9", time: "18:00", zhongdian: "Amherst", usertype: "人找车", mode: "Sedan", seat: "1人"},
      { name: "刁豫西南", phone: 4139926367, wechat: "yudongdiao2", qidian: "Boston", date: "2017-10-9", time: "18:00", zhongdian: "Amherst", usertype: "车找人", mode: "SUV", seat: "2空位"},
    ],

    location: ["Amherst", "Boston", "New York City", "Logan Airport", "BDL Airport", "JFK Airport"],
    index1: 0,
    index2: 0,

    da:currentdate,
    curdate: currentdate,

    start: "Amherst",
    end: "Amherst",

    
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
