import React from 'react';
import './Repository.css';

const Repository=(props)=>{

    return (
            <div className="Repository-row">
                <figure>
                 <img src="logo192.png" alt="Avatar"/>
                </figure>

                <div className="Repos-infos">
                    <h3>Tenserflow</h3>
                    <p className="repos-description">An open source Maching learning Framework</p>
                      
                    <div className="statistics" >
                        <span >Stars: 118K </span>
                        <span >Issues: 1.6K </span>
                        <p>Submitted 30 days ago by Avatar Name</p>
                    </div>

                </div>
            </div>
    );

}

export default Repository;