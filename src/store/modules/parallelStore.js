import axios from '../axios'
import echarts from 'echarts'
export default {
    //初始状态
    state:{
        graph:{

        },
        option:{
        }
    },

    //获取器
    getters:{
        //页面读取数据
        parallelData:state=>state.graph,
        parallelOption:state=>state.option
        // graphOption(state){
        //     return state.option
        // }
    },
    //突变
    mutations:{
        //数据修改操作
        alterParallelData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getParallelData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('parallel/').then(({data})=>{
                    //通过mutations中的alterTestData提交数据
                    context.commit('alterParallelData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
       
        },
        

}