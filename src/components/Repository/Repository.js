import React from 'react';
import './Repository.css';

const Repository=(props)=>{
    const timeInterval=  new Date().getTime()-new Date(props.creationDate).getTime() ;
  const  daysTimeInterval= (timeInterval/ (1000 * 3600 * 24)) .toFixed(0);
  
    return (

        
            <div className="repository-row">
                <figure>
                 <img className="avatar" src={props.avatar} alt="Avatar"/>
                </figure>

                <div className="repos-infos">
                    <h3>{props.name}</h3>
                    <p className="repos-description">{props.description}</p>
                      
                    <div className="statistics" >
                        <span >Stars: {(+props.starsCount/1000).toPrecision(2) }K</span>
                        <span >Issues: {props.issuesCount}</span>
                        <p>Submitted {daysTimeInterval} days ago by {props.owner}</p>
                    </div>

                </div>
            </div>
    );

}

export default Repository;