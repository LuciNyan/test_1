/**
 * Created by lucinyan on 2017/5/2.
 */
export default {
  register (context, userId) {
    context.commit('register', userId)
  }
}

