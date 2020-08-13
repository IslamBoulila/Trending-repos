import React, { Component } from 'react';
import './Pagination.css';

const Pagination=(props)=>{
      
return(
    props.show &&
    <div className="pagination">
        {props.currentPage != 1
         && <button name="first" className="first" onClick={ props.firstPageOnClick}>&laquo; Back to first</button>}
            <button name="previous" className="previous" onClick={props.pageOnClick}>❮ Previous</button>
            <button name="next" className="next" onClick={ props.pageOnClick}>Next ❯</button>

            <button name="previous" className="previous-small" onClick={props.pageOnClick}>❮ </button>
            <button name="next" className="next-small" onClick={ props.pageOnClick}> ❯</button>

    </div>
);
}

export default Pagination;