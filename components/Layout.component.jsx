import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout