import axios from 'axios';
import qs from 'qs'

export function fetch(options) {
  return new Promise((resolve, reject) => {
    var getParams = {};
    var postData = {};
    var commontParams = {
      apkPackageName: "com.to8to.housekeeper",
      appid: "15",
      imei: "869677028151723",
      systemversion: "21",
      appversion: "5.3.0",
      appostype: "1",
      version: "2.5",
      house_type: "2",
      model: "ad",
      channel: "to8toapp",
    };

    if (!options.method || options.method.toLowerCase() === 'get') {
      getParams = commontParams;
    } else {
      postData = commontParams;
    }
    const instance = axios.create({
      headers: {},
      options: {},
      params: getParams,
      data: postData,
      timeout: 30 * 1000
    });

    if (options.method.toLowerCase() === 'post') {
      // instance.option.data = qs.stringify(instance.option.data)
      instance.interceptors.request.use(config => {
        config.data = qs.stringify(config.data);
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    }


    instance(options)
      .then(res => {
          resolve(res.data)
        }
      ).catch(err => {
      reject(err)
    });
  });
}
