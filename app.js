//app.js
var date = new Date();
var hyphen = "-";
var colon = ":";
var month = date.getMonth() + 1;
var strDate = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
if (month >= 1 && month <= 9) {
  month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
  strDate = "0" + strDate;
}
if(minutes >=0  && minutes <=9){
  minutes = "0" + minutes;
}
if (hours >= 0 && hours <= 9) {
  hours = "0" + hours;
}
var currentdate = date.getFullYear() +
  hyphen + month + hyphen + strDate;


var currenttime = hours +
  colon + minutes;

App({

  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    userName: "",
    phoneNum: "",
    carId: "",
    carModel: "",
    email: "",
    gender: "",
    time: currenttime,
    date: currentdate
  },

  onShow: function(){
    console.log(this.globalData)
  },
})
