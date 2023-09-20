import { Link } from 'react-router-dom';

import './Navbar.css'
function Navbar()
{
    return(
        <div>
            <div className="navbarRoot">
            <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p>React App</p>
            </span>

            <div className='list-content'>
                <ul>
                    <li><Link to="/" style={{marginLeft:50}}>Home</Link></li>
                    <li><Link to="/UserList">User List</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/">To Do</Link></li>
                </ul>
            </div>

            <Link to="/Login"><button style={{float:'right', margin:0}}>Login</button></Link>
            
            </div>
        </div>
    );
}

export default Navbar;