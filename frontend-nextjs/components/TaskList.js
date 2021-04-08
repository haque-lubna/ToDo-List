import Task from "./Task";
import styles from '../styles/Index.module.css'


const TaskList = (props) => {
  const taskList = props.taskList
  return (
    <div className={styles.taskList}>
      { taskList ? taskList.map((task) => (
        <Task key={task.id} task = {task} deleteFunction={ props.deleteFunction } toggleFunction={ props.toggleFunction }/>)) : <p>No task added</p>}
    </div>
  );
}
 
export default TaskList;