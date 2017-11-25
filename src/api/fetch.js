import axios from 'axios';

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {},
      options: {},
      params:{
        apkPackageName: "com.to8to.housekeeper",
        "imei": "869677028151723",
        "systemversion": "21",
        "appversion": "5.3.0",
        "appostype": "1",
        "version": "2.5",
        "appid": "15",
        "house_type": "2",
        "model": "ad",
        "channel": "to8toapp",
      },
      timeout: 10 * 1000
    });

    instance(options)
      .then(res => {
          resolve(res.data)
        }
      ).catch(err => {
      reject(err)
    });
  });
}
