// 封装请求工具 requestAnimationFrame.js
// 对于axios的二次封装
// 配置拦截器  以及其他
import axios from 'axios'
// 拦截器及其他组件
// 配置axios的baseURL  公共的请求头地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
  // 成功时执行 第一个参数 会有一个config config就是所有的axios的请求信息
  // 在第一个函数中 需要将配置进行返回 返回的配置 会作为请求参数进行请求
  // 在返回之前 就是我们统一注入token的最佳时间
  // const token = localStorage.getItem('urse-token')// 从缓存中取token
  // config.headers.Authorization = `Bearer ${token}`// 统一注入token
  // debugger
  const token = localStorage.getItem('urse-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  // 失败时 会有一个错误 直接reject错误即可
  // 失败时执行第二个 axios是一个支持promise 如果失败 我们应该直接reject reject会直接进入到axios的catch中
  return Promise.reject(error)
})

export default axios