import React from 'react';
import './topbar.css'

function Topbar(props) {
    return (
        <div className="top">
            <img
              className="topImg"
              src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
              alt=""
            />
            <i className="admin">Welcome Admin</i>
        </div>
    );
}

export default Topbar;