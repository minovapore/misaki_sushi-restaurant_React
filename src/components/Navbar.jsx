import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import icon from '../../public/icon.png'
import './Navbar.css';

export default function Navbar(){
    return(
        <div className="navbar bg-black text-white w-screen">
          <div className="navbar-start">
           <Link to='/'><img className='logo-size' src={logo} alt="misaki-logo" /></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
                <li><Link to='/menù'>Menù</Link></li>
                <li><Link to='/dolci'>Dolci</Link></li>
                <li><Link to='/bevande'>Bevande</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            </a>
            {/* <div className="dropdown ">
              <div tabindex="0" role="button" className="btn btn-ghost xl:hidden md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabindex="0" className="dropdown-content menu bg-white rounded-box z-[1]  text-black -ms-10 md:-ms-32">
                <li><a>Menù</a></li>
                <li><a>Dolci</a></li>
                <li><a>Bevande</a></li>
              </ul>
            </div> */}
          <div className="btn btn-ghost xl:hidden md:hidden" onClick={()=>document.getElementById('my_modal_2').showModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box rounded-none bg-black text-white text-center grid grid-cols-2">
              <ul tabIndex="0" className='text-start ms-5'>
                <li><Link to='/menù'>Menù</Link></li>
                <li className='my-4'><Link to='/dolci'>Dolci</Link></li>
                <li><Link to='/bevande'>Bevande</Link></li>
              </ul>
              <div>
                <img className='w-28 mx-auto' src={icon} alt="" />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
         </div>
        </div>
    );
}