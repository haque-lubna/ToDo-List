import { useState } from 'react/cjs/react.development'
import api from '../pages/api/api'
import styles from '../styles/Index.module.css'
import Router from 'next/router'

const NewTask = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [timeDate, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  const saveFunction = props.saveFunction

  return (
    <form className={styles.newTask} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formGroup}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title"/>
      </div>
      <div className={styles.formGroup}>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"/>
      </div>
      <div className={styles.formGroup}>
        <label>Time and Date</label>
        <input type="datetime-local" value={timeDate} onChange={(e) => setTime(e.target.value)} placeholder="Task Time and Date"/>
      </div>
      <div className={styles.formGroup-styles.reminder}>
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={() => setReminder(!reminder)}/>
      </div>
      <div className={styles.formGroup}>
        <input className={styles.btn} type="submit" value="Save Task" onClick={ () => {saveFunction({title, description, timeDate, reminder})} }/>
      </div>
    </form>
  );
}
 
export default NewTask;