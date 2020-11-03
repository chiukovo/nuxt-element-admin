export default function ({ app, route, store, redirect }) {
  //admin login token
  let adminLoginToken = app.$cookies.get('adminLoginToken')

  if (typeof adminLoginToken == 'undefined') {
    adminLoginToken = ''
  }

  // 登入頁的話 需判斷是否要跳轉
  if (route.name === 'index' && adminLoginToken != '') {
    //跳轉
    //redirect('/home')
  }

  //判斷是否token過期

  console.log(adminLoginToken)
}