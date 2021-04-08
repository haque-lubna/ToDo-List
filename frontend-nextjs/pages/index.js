import { useEffect, useState } from 'react'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
import { dummyTaskList } from '../data/dummy.data'
import styles from '../styles/Index.module.css'
import api from './api/api'

function Home(props) {
  const [taskList, setTaskList] = useState(null)

  useEffect(() => {
    api.getAllTaskList()
      .then(res => {
        setTaskList(res.data)
      })
      .catch(error => {
        console.log("Error occured ", error)
      })
  }, [setTaskList])

  const deleteButtonClickHandler = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?')){
      api.deleteTask(id).then(res => {
        console.log(res)
        setTaskList(taskList.filter((task) => task.id !== id))
      }).catch(error => {
        console.log("Error occured ", error)
      })
    }
  }

  const saveButtonClickHandler = (task) => {
    api.newTask(task).then(res => {
      setTaskList([task, ...taskList])
      {props.toggleAddNewButtonFun(props.showNew)}
    }).catch((error) => {
      console.log('Error occured ', error)
    })
  }

  const doReminderToggle = (id) => {
    setTaskList(taskList.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className={ styles.container }>
      {props.showNew && <NewTask saveFunction={ saveButtonClickHandler }/>}
      <TaskList taskList={taskList} deleteFunction={ deleteButtonClickHandler } toggleFunction={ doReminderToggle }/>
    </div>
  )
}

export default Home