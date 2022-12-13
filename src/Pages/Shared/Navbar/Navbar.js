import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/shopping.png';

const Navbar = () => {
    return (
       <div>
       
       {/* Navbar 1st Part START_____________________________________________________________________ */}

       <div className='text-center text-white bg-blue-800 p-2'>
            <h2 className='text-sm font-bold'>Welcome to the Biggest Primium online store Products Collection in Bangladesh</h2>
        </div>

        {/* Navbar 1st Part START_____________________________________________________________________ */}







        {/* Navbar 2nd Part START___________________________________________________________________ */}
       
        <div className='lg:grid grid-cols-3 hidden'>
          <div>
              <ul className='flex justify-center gap-5 text-sm py-2 text-slate-700'>
                <li><Link>About Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link>WishList</Link></li>
                <li><Link>Blogs</Link></li>
              </ul>
          </div>

          <div className='text-sm py-2 text-slate-700 text-center'>
              <h2>100% Secure delivery without contacting the courier</h2>
          </div>

          <div>
              <h2 className='text-sm py-2 text-slate-700 text-center'>Need help_? Call Us: <small className='text-sky-400 font-bold text-sm'>01631375174</small> </h2>
          </div>
        </div>
        <hr />

        {/*Navbar 2nd Part END___________________________________________________________________ */}






       
       {/* Navbar 3rd Part START_____________________________________________________________________ */}

       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <img src={logo} alt="HighLife" className='w-20 rounded-full' />
    <h1 className='text-4xl text-blue-800 font-bold '>HighLife</h1>
  </div>
  
  <div className="navbar-center">
    
    <div className="form-control lg:block hidden">
    <input type="text" placeholder="search products..." className="input input-bordered w-full" />
    </div>

  </div>
  <div className="navbar-end">
    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>

{/* Navbar 3rd Part END_______________________________________________________________________________*/}





{/* Navbar 4th Part START__________________________________________________________________________ */}

<div className='lg:flex justify-between hidden'>
    <div className="dropdown px-20 bg-sky-400 rounded-xl text-white">
      <label tabIndex={0}  className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

      </label>
    
     
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ">

        <p className='bg-sky-400 rounded-lg p-2 text-white text-center font-bold'>All Categories</p>
        <li><Link className='text-black'>Fruits & Vegetables</Link></li> <hr />
        <li><Link className='text-black'>Meats & SeaFoods</Link></li> <hr />
        <li><Link className='text-black'>Breakfast & Dairy</Link></li> <hr />
        <li><Link className='text-black'>Beverages</Link></li> <hr />
        <li><Link className='text-black'>Breades & Bakery</Link></li> <hr />
        <li><Link className='text-black'>Frozen Foods</Link></li> <hr />
        <li><Link className='text-black'>Biscuits & Snackes</Link></li> <hr />
        <li><Link className='text-black'>Grocery & Staples</Link></li> <hr />
        
      </ul>
    </div>

    <div className=''>
      <ul className='flex gap-14 '>
        <li className='hover:text-sky-400 font-semibold text-slate-700'><Link>HOME</Link></li>
        <li className='hover:text-sky-400 font-semibold text-slate-700'><Link>SHOP</Link></li>
        <li className='hover:text-sky-400 font-semibold text-slate-700'><Link>MEATS & SEAFOODS</Link></li>
        <li className='hover:text-sky-400 font-semibold text-slate-700'><Link>BAKERY</Link></li>
        <li className='hover:text-sky-400 font-semibold text-slate-700'><Link>BEVERAGES</Link></li>
      </ul>
      
    </div>
</div>
<hr className='mt-3'></hr>

{/* Navbar 4th Part START__________________________________________________________________________ */}








{/* Navbar Drawer Part START___________________________________________________________________________________ */}

{/* <div className='sm:block hidden'>
<div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

     
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
</div> */}

{/* Navbar Drawer Part START___________________________________________________________________________________ */}



  


       </div>
    );
};

export default Navbar;