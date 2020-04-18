// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 视频详情
  videoInfo:null,
  // 推荐视频
  othersList:[],
  // 评论数据
  commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
  getCurrentVideo(videoId){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videoDetail?id='+videoId,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 获取推荐视频
  getOthersList(videoId){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id='+videoId,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            othersList:res.data.data.othersList
          })
        }
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getCommentList(videoId){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id='+videoId,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            commentData:res.data.data.commentData
          })
        }
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
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