<script>
  // Use Vuex
export default {
  methods:{
  },
  created () {
    let that = this
    wx.getStorage({
      key: 'wxInfo',
      success (res) {
        console.log('您已授权过了')
      },
      fail(err) {
        //获取微信code,然后用code获取后端openid,session_key等信息
        wx.login({
          success: async (res) => {
            // 这个url就是我们后端的接口地址,省略了前面的服务器名称,服务器名称配置看 /src/main.js里面的配置
            let url = 'mobileWechatApplets/jscode2session'
            let body={jsCode:res.code}
            let loginRes = await that.$post(url,body)
            if(loginRes.code == 1) {
              wx.setStorage({key:"wxInfo", data:loginRes.data})
              console.log('登录成功!:', loginRes)
            }
            // console.log('code!:', res)
          }
        })
      }
    })
  }
}
</script>

<style>
  /*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/
  @import '~@/styles/common.css';
</style>
