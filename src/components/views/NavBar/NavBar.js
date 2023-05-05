import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className={styles.navBar}>
      <Navbar.Brand as={NavLink} to="/" className={styles.navBarItem}>Waiter.App</Navbar.Brand>
      <Nav className={styles.navBarList}>
        <Nav.Link as={NavLink} to="/" className={styles.navBarItem}>Home</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;