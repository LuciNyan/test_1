/**
 * Created by lucinyan on 2017/5/2.
 */
export default {
  // 注册
  register (state, userId) {
    const date = new Date()
    const user = state.users.find(user => {
      return user.id === userId
    })
    user.registered = true
    const registration = {
      userId: user.id,
      name: user.name,
      date: date.getMonth() + '/' + date.getDay()
    }
    state.registrations.push(registration)
  },
  // 撤销注册
  unRegister (state, registration) {
    const user = state.users.find(user => {
      return user.id === registration.userId
    })
    user.registered = false
    state.registrations.splice(state.registrations.indexOf(registration), 1)
  }

}
