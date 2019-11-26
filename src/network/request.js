import axios from 'axios'


//拦截器
//全局
// axios.interceptors


export function request1(config, success, failure) {
  //1.创建axios 实例
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000,
    headers: {}
  })


  //局部  //请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log('config1', config);
    //一些信息不符合服务器的要求
    //每次发送网络请求时，都希望在界面中显示一个请求的图标
    //某些网络请求必须携带一些特殊信息（比如：登录：token）

    return config
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {
    console.log("响应成功", res);
    return res.data
  }, err => {
    console.log("响应失败", err);
  }) //响应拦截


  instance(config).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}



export function request2(config) {
  return new Promise((resolve, reject) => {
    //1.创建axios 实例
    const instance = axios.create({
      baseURL: 'http://localhost:8081',
      timeout: 5000
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}



export function request3(config) {
  //1.创建axios 实例
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })

  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}




export function request4(config) {
  //1.创建axios 实例
  const instance = axios.create({
    // baseURL: 'http://47.98.63.219:8081/',
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  return instance(config)
}
