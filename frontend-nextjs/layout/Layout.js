import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <div>
      <Header showNew={props.showNew} toggleAddNewButtonFun={props.toggleAddNewButtonFun}/>
      { props.children }
      <Footer />
    </div>
  );
}
 
export default Layout;