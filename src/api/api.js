import {fetch} from './fetch';//应用 fetch 函数
import url from './url'

export default {

  getIndexData() {
    return fetch({
      url: '/api',
      method: 'get',
      params: {
        action: "eggV_5_0",
        "cityName": "玉溪",
        "to8to_token": "",
        "uid": "",
        "gcjd": "1",
      }
    })
  }

}


