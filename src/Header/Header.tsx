import {React, ReactDOM } from 'react';
import { Link, NavLink} from 'react-router-dom';
import "../App.css";
//import Home from '../Home/Home';
const Header = () => {
  return (
    <div className="text-white bg-gray-400 p-5">
      <ul className='flex flex-row justify-between'>
        <li> 
            <NavLink to={`Home`} className={"hover:text-green-600  text-2xl font-bold  text-2xl font-bold"}
                    >Home</NavLink>
            
        </li>
        <li>
        <NavLink to={`CreateRequest`} className={"hover:text-green-600  text-2xl font-bold"}>Create Request</NavLink>
            

        </li>
        <li>
        <NavLink to={`Dashboard`} className={"hover:text-green-600  text-2xl font-bold"}>Dashboard</NavLink>
            

        </li>
        <li>
        <NavLink to={`Help`} className={"hover:text-green-600  text-2xl font-bold"}>Help</NavLink>
            

        </li>
        <li>
        <NavLink to={`Admin`} className={"hover:text-green-600  text-2xl font-bold"}>Admin</NavLink>
            

        </li>
      </ul>
    </div>
  )
}

export default Header;
