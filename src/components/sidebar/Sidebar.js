import React from 'react';
import './sidebar.css'
function Sidebar(props) {
    return (
      
    <div className='sidenav'>
    <a href="#"
    className='name'>HOME</a><br></br>      
    <a href="#"
    className='name'>ASSOCIATES</a><br></br>
   <a href="#" className='name'>ADD ASSOCIATES</a><br></br>
   <a href="#"className='name'>VIEW BOOKINGS</a><br></br>
   <a href="#"
    className='name'>LOG OUT</a>
        </div>

    );
}

export default Sidebar;