import {fetch} from './fetch';//应用 fetch 函数
import url from './url'

export default {

  getLatest() {
    return fetch({
      url: url.pre_url + '/news/latest',
      method: 'get',
      param: {}
    })
  }

}
