/**
 * Created by lucinyan on 2017/5/2.
 */
export default {
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
  }
}
