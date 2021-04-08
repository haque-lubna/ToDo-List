import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_API_PATH;

export const getAllTaskList = () => {
  return axios.get(BASE_URL + "/tasks")
}

export const getTaskDetails = (id) => {
  return axios.get(BASE_URL + "/tasks" + id)
}

export const newTask = (newTask) => {
  return axios.post(BASE_URL + "/tasks/new", newTask)
}

export const editTask = (id) => {
  return axios.put(BASE_URL + "/tasks/edit/" + id)
}

export const deleteTask = (id) => {
  return axios.delete(BASE_URL + "/tasks/" + id)
}


const api = {
  getAllTaskList,
  getTaskDetails,
  newTask,
  editTask,
  deleteTask
}

export default api;