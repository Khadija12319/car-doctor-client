import { Link } from "react-router-dom";
import logo from "../../../assets/asset/logo.svg"
const NavBar = () => {
    const navmid= <>
        <li><Link to="/">Home</Link></li>
        <li><Link>About</Link></li>        
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contacts</Link></li>
    </>
return (
    <div className="container mx-auto lg:w-[1140px]">
         <div className="md:navbar">
          <div className="md:navbar-start flex items-center justify-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        navmid
                    }
              </ul>
            </div>
            <Link to="/" className="btn-ghost text-xl">
                <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                navmid
              }
            </ul>
          </div>
          <div className="md:navbar-end justify-center flex">
          <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-none ml-7">Appointment</button>
          </div>
        </div>           
    </div>
    );
};

export default NavBar;