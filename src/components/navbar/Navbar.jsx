// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import shoplogo from '../../asse/shop-logo.png';
// import usericon from '../../asse/user-icon.png';
// import cartlogo from '../../asse/cart-logo.png';
// import searchicon from '../../asse/search-icon.png';
// import hamburger from '../../asse/hamburger-logo.png';
// import './Navbar.css';

// function Navbar({ name }) {
//   const [state, setState] = useState('shop');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cartItems } = useCart();

//   return (
//     <>
//       <div className='navbar'>
//         <Link to='/'><img onClick={() => { setState('shop'); setMenuOpen(false); }} className='shoplogo' src={shoplogo} alt="Shop Logo" /></Link>
//         <img className="hamburger" src={hamburger} alt="Menu" onClick={() => setMenuOpen(!menuOpen)} />
        
//         <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
//           <li onClick={() => { setState('shop'); setMenuOpen(false); }}><Link to='/'>Shop</Link> {state === 'shop' ? <h1 /> : null}</li>
//           <li onClick={() => { setState('men'); setMenuOpen(false); }}><Link to='/men'>Men</Link> {state === 'men' ? <h1 /> : null}</li>
//           <li onClick={() => { setState('women'); setMenuOpen(false); }}><Link to='/women'>Women</Link> {state === 'women' ? <h1 /> : null}</li>
//           <li onClick={() => { setState('kids'); setMenuOpen(false); }}><Link to='/kids'>Kids</Link> {state === 'kids' ? <h1 /> : null}</li>
//         </ul>
        
//         <div className='nav-right-side'>
//           <div className='search-box'>
//             <input placeholder='Search' />
//             <img src={searchicon} alt="Search" />
//           </div>
//           <Link to='/login'><button onClick={() => setState('')} className='loginbtn'>Login</button></Link>
//           <div className='user'>
//             <Link to='/datauser'><img src={usericon} alt="User" /></Link>
//             <p>{name}</p>
//           </div>
//           <div className='cart'>
//             <Link to='/cartpage'><img onClick={() => setState('')} src={cartlogo} alt="Cart" /></Link>
//             <p>{cartItems.length}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import React, { useState } from 'react'
import shoplogo from '../../asse/shop-logo.png'
import cartlogo from '../../asse/cart-logo.png'
import searchicon from '../../asse/search-icon.png'
import hamburger from  '../../asse/hamburger-logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar({name}) {
  const [state,setstate]=useState('shop') 
  const {cartItems}=useCart()
  return (
    <>
    <div className='navbar'>

      <Link to='/'><img onClick={()=>{setstate('shop')}} className='shoplogo' src={shoplogo}></img></Link>
      <img className="hamburger" src={hamburger}></img>
      
      <ul className='nav-menu'>
          <li onClick={()=>{setstate('shop')}} ><Link to='/'>Shop</Link> {state==='shop' ?<h1/> :null} </li>
          <li onClick={()=>{setstate('men')}} ><Link to='/men'>Men</Link> {state==='men' ?<h1/> :null}</li>
          <li onClick={()=>{setstate('women')}} ><Link to='/women'>Women</Link> {state==='women' ?<h1/> :null}</li>
          <li onClick={()=>{setstate('kids')}} ><Link to='/kids'>Kids</Link> {state==='kids' ?<h1/> :null}</li>
        </ul>
           
        <div className='nav-right-side'>
        <div className='search-box'>
          <input placeholder='Search'/> 
          <img src={searchicon}></img>
        </div>
        
        <div className='cart'>
         <Link to='/cartpage'><img onClick={()=>{setstate('')}} src={cartlogo}/>  </Link> 
          <p>{cartItems.length}</p>
        </div>
        
        </div>
        </div>
    </>
  )
  
}


export default Navbar