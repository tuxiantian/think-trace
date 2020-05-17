import axios from 'axios';
import { getToken } from '@/utils/auth'
import store from '../store'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

export const register = params => {
  return service.post(`/api/user/register`, params).then(res => res.data);
};

export const login = params => {
  return service.post(`/api/user/login`, params).then(res => res.data);
};

export const getInfo = params => {
  return service.get(`/api/user/info`, params).then(res => res.data);
};

export const logout = params => {
  return service.post(`/api/user/logout`, params).then(res => res.data);
};

export const getTodoList = params => {
  return service.get(`/api/todo/list`, {
    params: params
  });
};

export const getTodo = id => {
  return service.get(`/api/todo/${id}`);
};

export const addRecord = params => {
  return service.post(`/api/todo/addRecord`, params).then(res => res.data);
};

export const editTodo = params => {
  return service.post(`/api/todo/editTodo`, params).then(res => res.data);
};
export const editRecord = params => {
  return service.post(`/api/todo/editRecord`, params).then(res => res.data);
};

export const addTodo = params => {
  return service.post(`/api/todo/addTodo`, params).then(res => res.data);
};

export const deleteTodo = id => {
  return service.get(`/api/todo/delete/${id}`).then(res => res.data);
};

export const editArticle = params =>{
  return service.post(`/api/article/edit`, params).then(res => res.data);
};

export const getArticle = id =>{
  return service.get(`/api/article/get/${id}`).then(res => res.data);
};

export const getTwoDimensionTable = id =>{
  return service.get(`/api/twoDimensionTable/get/${id}`).then(res => res.data);
};

export const editTwoDimensionTable = params => {
  return service.post(`/api/twoDimensionTable/edit`, params).then(res => res.data);
};

export const getFactOpinionCard = id =>{
  return service.get(`/api/factOpinionCard/get/${id}`).then(res => res.data);
};

export const editFactOpinionCard = params => {
  return service.post(`/api/factOpinionCard/edit`, params).then(res => res.data);
};

export const getWhyHowWhatCard = id =>{
  return service.get(`/api/whyHowWhatCard/get/${id}`).then(res => res.data);
};

export const editWhyHowWhatCard = params => {
  return service.post(`/api/whyHowWhatCard/edit`, params).then(res => res.data);
};

export const findPreferenceRank = id => {
  return service.get(`/api/preferenceRank/find/${id}`).then(res => res.data);
}

export const insertPreferenceRank = id => {
  return service.get(`/api/preferenceRank/insert/${id}`).then(res => res.data);
}

export const getPreference = id => {
  return service.get(`/api/preference/${id}`).then(res => res.data);
}

export const getSortedPreference = id => {
  return service.get(`/api/preference/sorted/${id}`).then(res => res.data);
}

export const deletePreference = id => {
  return service.get(`/api/preference/delete/${id}`).then(res => res.data);
}

export const addPreference = params => {
  return service.post(`/api/preference/add`,params).then(res => res.data);
}

export const answerPreferenceRank = params => {
  return service.post(`/api/preferenceRank/answer`, params).then(res => res.data);
}

export const pageTimelineItem = params => {
  return service.get(`/api/timelineItem/page`,params).then(res => res.data);
}

export const editImageGallery = params => {
  return service.post(`/api/imageGallery/edit`, params).then(res => res.data);
}

export const removeImageGallery = params => {
  return service.post(`/api/imageGallery/remove`, params).then(res => res.data);
}

export const getImageGallery = id => {
  return service.get(`/api/imageGallery/get/${id}`).then(res => res.data);
}