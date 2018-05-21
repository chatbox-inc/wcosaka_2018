import Vue from 'vue'
import {
  Notification,
  Input,
  Icon
} from 'element-ui'
// import Notification from '../node_modules/element-ui/packages/notification/index.js'

export default () => {
  // Vue.use(ElemntUI)
  // Vue.use(Icon)
  // Vue.use(Input)
  Vue.prototype.$notify = Notification
}
