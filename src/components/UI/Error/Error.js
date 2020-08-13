import  React from 'react';
import './Error.css';

const Error=(props)=>{
return(
    <div className="error" >
        <div className="error-message">
            Oups something went wrong!<br/>
            {props.errorMessage}
        </div>
              <button name="firstPage" id="firstPageBtn" onClick={props.onClickButton}>Back to previous  page</button>
              
             </div>
);
}

export default Error;