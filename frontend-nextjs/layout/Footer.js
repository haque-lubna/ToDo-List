import styles from '../styles/Layout.module.css'
const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <p>Copy Right &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
 
export default Footer;