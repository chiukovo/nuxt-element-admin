export const state = () => ({
})

export const mutations = {
  SET_LOGIN_DATA(state, data) {
    //儲存token
    this.$cookies.set('adminLoginToken', 'zxcagqwrdasd', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    //儲存會員資料
    this.state.localStorage.adminUser = data
  }
}

export const actions = {
  doLogin({ commit }, data) {
    commit('SET_LOGIN_DATA', data)
  }
}

export const getters = {
}