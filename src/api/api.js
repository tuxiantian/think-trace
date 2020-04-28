import axios from 'axios';
export const requestLogin = params => {
  return axios.post(`/login`, params).then(res => res.data);
};

export const getTodoList = params => {
  return axios.get(`http://localhost:8085/todo/list`, {
    params: params
  });
};

export const getTodo = params => {
  return axios.get(`http://localhost:8085/todo/listId`, {
    params: params
  });
};

export const addRecord = params => {
  return axios.post(`http://localhost:8085/todo/addRecord`, params).then(res => res.data);
};

export const editTodo = params => {
  return axios.post(`http://localhost:8085/todo/editTodo`, params).then(res => res.data);
};
export const editRecord = params => {
  return axios.post(`http://localhost:8085/todo/editRecord`, params).then(res => res.data);
};

export const addTodo = params => {
  return axios.post(`http://localhost:8085/todo/addTodo`, params).then(res => res.data);
};

export const deleteTodo = id => {
  return axios.get(`http://localhost:8085/todo/delete/${id}`).then(res => res.data);
};

export const editArticle = params =>{
  return axios.post(`http://localhost:8085/article/edit`, params).then(res => res.data);
};

export const getArticle = id =>{
  return axios.get(`http://localhost:8085/article/get/${id}`).then(res => res.data);
};

export const getTwoDimensionTable = id =>{
  return axios.get(`http://localhost:8085/twoDimensionTable/get/${id}`).then(res => res.data);
};

export const editTwoDimensionTable = params => {
  return axios.post(`http://localhost:8085/twoDimensionTable/edit`, params).then(res => res.data);
};

export const getFactOpinionCard = id =>{
  return axios.get(`http://localhost:8085/factOpinionCard/get/${id}`).then(res => res.data);
};

export const editFactOpinionCard = params => {
  return axios.post(`http://localhost:8085/factOpinionCard/edit`, params).then(res => res.data);
};

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
