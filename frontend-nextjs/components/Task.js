import {FaTimes} from 'react-icons/fa'
import styles from '../styles/Index.module.css'

const Task = (props) => {
  const task = props.task
  const deleteFunction = props.deleteFunction
  const toggleFunction = props.toggleFunction
  
  return (
    <div className={styles.task} onDoubleClick={() => toggleFunction(task.id)}>
      <FaTimes className={styles.taskCancel} onClick={() => deleteFunction(task.id) }/>
      <p><span>Task Title: </span>{task.title}</p>
      <p><span>Task Description: </span>{task.description}</p>
      <p><span>Task Date: </span>{task.timeDate} </p>
      <p><span>Task Reminder: </span><reminderText  className={task.reminder ? styles.reminderTrue : styles.reminderFalse}>{task.reminder.toString()}</reminderText></p>
    </div>
  );
}
 
export default Task;