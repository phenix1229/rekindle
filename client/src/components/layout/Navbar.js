import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar({title, icon}) {
    return (
        <div className="navbar bg-primary" style={{margin:"none"}}>
            <img src='logoMain.png' id="logo" alt="" style={{width:"200px", margin:"none"}} />
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/register'>Register</Link>
                </li>
                <li>
                    <Link to = '/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
