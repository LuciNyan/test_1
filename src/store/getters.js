/**
 * Created by lucinyan on 2017/5/2.
 */
export default {
  unregisteredUsers (state) {
    return state.users.filter(user => {
      return !user.registered
    })
  },
  //
  registrations (state) {
    return state.registrations
  },
  totalRegistrations (state) {
    return state.registrations.length
  }
}
