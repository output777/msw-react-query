import axios from 'axios';

export const getTodos = () => axios.get('/api/todos').then((res) => res.data);

export const postTodo = () => axios.post('/api/todos').then((res) => res.data);
