import Vuex from 'vuex'
import Vue from 'vue'
import GraphStore from './modules/graphStore'
import PinStore from './modules/pinStore'
import Parallel from './modules/parallelStore'
import  Radar from './modules/radarStore'
import Themeriver from './modules/themeriverStore'
import Line from './modules/lineStore'
import Heatmap from './modules/heatmapStore'
Vue.use(Vuex);

 // 默认导出接口，即访问这个文件相当于访问这个函数，每个文件或组件只能有一个export default
export default new Vuex.Store({
    modules:{
        GraphStore,
        PinStore,
        Parallel,
        Radar,
        Themeriver,
        Line,
        Heatmap
    }
});