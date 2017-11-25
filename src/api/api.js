import {fetch} from './fetch';//应用 fetch 函数
import url from './url'

export default {

  //获取首页数据
  getIndexData() {
    return fetch({
      url: url.pre_url,
      method: 'get',
      params: {
        action: "eggV_5_0",
        "cityName": "玉溪",
        "to8to_token": "",
        "uid": "",
        "gcjd": "1",
        "style": "13"
      }
    });
  },

  //获取图库-定制
  getGallery() {
    return fetch({
      url: url.pre_url2,
      method: 'get',
      params: {
        module: "works",
        action: "list",
        apkPackageName: "com.to8to.housekeeper",
        pageSize: 20,
        kind: "home",
        space:"",
        "style": "0",
        "to8to_token": "",
        "uid": "",
        page: 1,
      }
    });
  }

}


