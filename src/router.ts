import { createWebHashHistory, createRouter } from 'vue-router'
import IconPage from './pages/IconPage.vue'
import ButtonPage from './pages/ButtonPage.vue'
import SwitchPage from './pages/SwitchPage.vue'
import InputPage from './pages/InputPage.vue'
import RadioPage from './pages/RadioPage.vue'
import CascaderPage from './pages/CascaderPage.vue'
import DatePickerPage from './pages/DatePickerPage.vue'
import TimePickerPage from './pages/TimePicker.vue'
import GridPage from './pages/RowPage.vue'
import ContainerPage from './pages/ContainerPage.vue'
import SpreadPage from './pages/SpreadPage.vue'
import CollapsePage from './pages/CollapsePage.vue'
import WaterfullPage from './pages/WaterfullPage.vue'
import StickyPage from './pages/StickyPage.vue'
import TabPage from './pages/TabPage.vue'
import PagerPage from './pages/PagerPage.vue'
const history = createWebHashHistory()

export const router = createRouter({
  history: history,
  routes: [
    { path: '/icon', component: IconPage },
    { path: '/button', component: ButtonPage },
    { path: '/switch', component: SwitchPage },
    { path: '/input', component: InputPage },
    { path: '/radio', component: RadioPage },
    { path: '/cascader', component: CascaderPage },
    { path: '/datePicker', component: DatePickerPage },
    { path: '/timePicker', component: TimePickerPage },
    { path: '/grid', component: GridPage },
    { path: '/container', component: ContainerPage },
    { path: '/spread', component: SpreadPage },
    { path: '/collapse', component: CollapsePage },
    { path: '/waterfull', component: WaterfullPage },
    { path: '/sticky', component: StickyPage },
    { path: '/tab', component: TabPage },
    { path: '/pager', component: PagerPage },
  ]
})