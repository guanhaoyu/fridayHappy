import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    level: '第二周', //活动周数
    itemNum: 1, //第几题
}

export default new Vuex.Store({
	state,
})