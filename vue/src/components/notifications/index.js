import notifications from "./notifications.vue";

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$notify", {
      get() {
        return notifications.methods.notify;
      }
    })

    Vue.component("notifications", notifications)
  }
}