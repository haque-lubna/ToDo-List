import axios from "axios"

export const getAllTaskList = () => {
  return axios.get("http://localhost:8081/api/tasks")
}

export const getTaskDetails = (id) => {
  return axios.get("http://localhost:8081/api/tasks" + id)
}

export const newTask = (newTask) => {
  return axios.post("http://localhost:8081/api/tasks/new", newTask)
}

export const editTask = (id) => {
  return axios.put("http://localhost:8081/api/tasks/edit/" + id)
}

export const deleteTask = (id) => {
  return axios.delete("http://localhost:8081/api/tasks/" + id)
}


const api = {
  getAllTaskList,
  getTaskDetails,
  newTask,
  editTask,
  deleteTask
}

export default api;