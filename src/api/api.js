import {fetch} from './fetch';//应用 fetch 函数
import url from './url'

export default {

  getIndexData() {
    return fetch({
      url: '/api',
      method: 'get',
      params: {
        "action": "eggV_5_0",
        "apkPackageName": "com.to8to.housekee",
        "style": "13",
        "appid": "15",
        "cityName": "玉溪",
        "to8to_token": "",
        "systemversion": "21",
        "imei": "869677028151723",
        "appversion": "5.3.0",
        "appostype": "1",
        "version": "2.5",
        "uid": "",
        "gcjd": "1",
        "house_type": "2",
        "channel": "to8toapp",
        "model": "ad"
      }
    })
  }

}


