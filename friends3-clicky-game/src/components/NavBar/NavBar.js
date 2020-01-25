import React from 'react';
import Score from '../Score/Score';


const NavBar = (props) => {
    return (
        <div className="container" id="nav">



            <div className="row">
                <div className="scores">
                    <li>
                        <div className="col-md-1"><h2>Score: {props.scores}</h2></div>

                        <div className="col-md-3"><h2>High Score: {props.highscore}</h2></div>

                    </li>
                </div>
            </div>



        </div>

    );
};













export default NavBar;