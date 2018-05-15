import Vue from 'vue'
import {
  Notification,
  Input,
  Icon
} from 'element-ui'

export default () => {
  Vue.use(Icon)
  Vue.use(Input)
  Vue.prototype.$notify = Notification
}
