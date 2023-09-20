import { Link } from 'react-router-dom';

import './Nav.scss'
function Nav()
{
    return(
        <div className='root'>

            <span>Navbar</span>
            
            <nav>
                <ul className='navbar-content'>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/UserList">User List</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/">To Do</Link></li>

                </ul>
            </nav>

            <Link to="/Login"><button>Login</button></Link>

        </div>
    );
}

export default Nav;