import styles from '../styles/Layout.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>Task Tracker</h1>
      <button className={`${styles.btn} ${props.showNew ? styles.redBackground : ''}`} 
      onClick={() => {props.toggleAddNewButtonFun(props.showNew)}}>{props.showNew ? 'Close New Form':'Add New Form'}</button>
    </header>
  );
}
 
export default Header;