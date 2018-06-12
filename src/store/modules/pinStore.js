import axios from '../axios'
import echarts from 'echarts'
export default {
    //初始状态
    state:{
        graph:{

        },
        option : {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:[]
            },
            series: [
                {
                    name:'邮件分类',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[]
                },
                {
                    name:'邮件分类',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 22,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[]
                }
            ]
        }
    },
    //获取器
    getters:{
        //页面读取数据
        pinData:state=>state.graph,
        pinOption:state=>state.option
    },
    //突变
    mutations:{
        //数据修改操作
        alterPinData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getPinData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('pin/').then(({data})=>{
                    //通过mutations中的alterTestData提交数据
                    context.commit('alterPinData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
    }
}