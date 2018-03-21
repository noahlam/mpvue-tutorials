var post = function (url, data = {}, isJson) {
  let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
  return new Promise((resolve, reject) => {
    try {
      // 从本地存储里面获取 openid
      data.openId = wx.getStorageSync('wxInfo').openid || ''
      // 调用微信的请求方法,请求后端接口
      wx.request({
        url: this.$server + url,
        data: data,
        method: 'POST',
        header: {'content-type': contentType},
        success (res) {
          resolve(res.data)
        },
        fail (e) {
          e.code = 666666
          resolve(e)  //注意,这里要用resolve,否则前端代码会崩溃
        }
      })
    } catch (e) {
      e.code = 777777
      console.error('网络异步请求出错,', e)
      resolve(e)  //注意,这里要用resolve,否则前端代码会崩溃
    }
  })
}


export default { post }
