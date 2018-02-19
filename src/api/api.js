import {fetch} from './fetch';//应用 fetch 函数
import url from './url'

export default {

  //获取首页数据
  getIndexData() {
    return fetch({
      url: url.pre_url+"/eggV_5_0",
      method: 'get',
      params: {
        action: "eggV_5_0",
        "cityName": "玉溪",
        "apkPackageName": "com.to8to.housekee",
        "to8to_token": "",
        "uid": "",
        "gcjd": "1",
        "style": "13"
      }
    });
  },

  //获取轮播图
  getCarouselData() {
    return fetch({
      url: url.pre_url+"/getv_3_6",
      method: 'get',
      params: {
        module: "ad",
        action: "getv_3_6",
        appname: "土巴兔装修",
        cityName: "玉溪",
        to8to_token: "",
        addtype: "2",
        version: "2.5",
        uid: "",
      }
    });
  },

  //获取图库-定制
  getGalleryCustomData() {
    return fetch({
      url: url.pre_url2+"/list2",
      method: 'get',
      params: {
        module: "works",
        action: "list",
        pageSize: 20,
        kind: "home",
        space: "",
        "style": "0",
        "to8to_token": "",
        "uid": "",
        page: 1,
      }
    });
  },

  //获取图库-全景
  getGallery3DData() {
    return fetch({
      url: url.pre_url+"/threedlist",
      method: 'post',
      data: {
        action: "threedlist",
        initialize: "0",
        style: "",
        to8to_token: "",
        perpage: 20,
        uid: "",
        house_type: "",
        page: 1,
        paging: true,
        model: "images",
      }
    });
  },

  //获取图库-套图
  getGallerySetsPicData() {
    return fetch({
      url: url.pre_url+"/setsList",
      method: 'post',
      data: {
        action: "setsList",
        initialize: "0",
        perPage: "30",
        style: "",
        to8to_token: "",
        homeType: "",
        area: "",
        color: "",
        uid: "",
        page: "1",
        paging: "true",
        model: "images",
      }
    });
  },

  //获取图库-单图
  getGalleryOnePicData() {
    return fetch({
      url: url.pre_url+"/list",
      method: 'post',
      data: {
        action: "list",
        initialize: "0",
        perPage: "30",
        style: "",
        to8to_token: "",
        space: "",
        color: "",
        local: "",
        uid: "",
        page: "1",
        channel: "to8toapp",
        paging: "true",
        model: "images",
      }
    });
  },

  //获取装修公司列表
  getDecorationConpanyList() {
    return fetch({
      url: url.pre_url+"/Index",
      method: 'post',
      data: {
        action: "Index",
        comStyle: "0",
        longitude: "102.531633",
        perPage: "20",
        appid: "15",
        cityName: "深圳",
        to8to_token: "",
        comType: "0",
        price: "0",
        townId: "0",
        withCase: "1",
        latitude: "24.325026",
        uid: "",
        type: "3",
        page: "1",
        paging: "true",
        model: "company",
      }
    });
  },
}


