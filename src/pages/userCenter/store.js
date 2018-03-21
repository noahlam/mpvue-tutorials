const store = {
  state: {
    userInfo: {
      id: 1,
      name: 'mpVue-tutorials',
      nickname:'mpVue教程',
      role: 1,
      mobile: 15985817766,
      tel: 15985817766,
      email: '284516433@qqcom',
      avatar: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=2018315',
      sex: 1,
      birthday: '1995-05-06',
      joinTime: '2004-05-06',
      idcard: '350322199505064333',
      scanNum: 99,
      createTime: '2018-03-20',
      modifyTime: '2018-03-25',
      provinceName: '福建',
      cityName: '厦门',
      deviceNum: 9,
      totalEarthworkVolume: 13,
      totalProjectNum: 4,
      driverNum: 1,
      workTime: 107,
      handleDevice: 5,
      totalCommentNum: 2,
      lengthOfService:5,
    },
    idArray:['设备老板','司机','商家']
  },
  getters:{
    // 获取 用户信息
    'GET_USERINFO': function (state) {
      return state.userInfo
    },
    // 获取 用户角色ID
    'GET_IDENTITY': function (state) {
      return state.userInfo.role
    },
    // 获取 中文角色名称
    'GET_IDENTITY_IN_CHINESE': function (state) {
      if (state.userInfo.role > 0 && state.userInfo.role < 3) {
        return state.idArray[state.userInfo.role - 1]
      } else {
        return '未知'
      }

    },
  },
  mutations: {
    setUserInfo (state,data) {
      state.userInfo = data
    },
    setIdentity (state,data) {
      state.userInfo.role = data
    },
  }
}

export default store
