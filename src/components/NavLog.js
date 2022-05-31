import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const NavLog = (props) => {
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    if (props.log === 'logged') {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [props, logged])

  function Logout() {
    localStorage.clear()
    window.location.href = "/login"
  }

  if (logged) {
    return (
      <Nav.Link className="text-center text-white navlink" onClick={Logout}>Logout</Nav.Link>
    )
  } else {
    return (
      <Nav.Link className="text-center text-white navlink" href="/login">Login</Nav.Link>
    )
  }

}

export default NavLog;
