import Vue from 'vue'
import * as validate from '~/utils/validate'
import * as app from '~/utils/validate'
import SvgIcon from '@/components/SvgIcon'

Vue.prototype.$validate = validate
Vue.prototype.$app = app
Vue.component('svg-icon', SvgIcon)
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)