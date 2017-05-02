/**
 * Created by lucinyan on 2017/5/2.
 */
export default {
  // 未注册用户
  unregisteredUsers (state) {
    return state.users.filter(user => {
      return user.registered === false
    })
  },
  // 注册用户
  registrations (state) {
    return state.registrations
  },
  // 注册用户总计
  totalRegistrations (state) {
    return state.registrations.length
  }
}
