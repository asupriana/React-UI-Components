import React from 'react';
import './Header.css';
//import Moment from 'react-moment';

function HeaderTitle () {
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // const month = months[Moment().month()];
    // const day = Moment().date();
    // const year = Moment().year();
    return (

        <div className = "header-title"> 
            <h3 className ="display-name">Lambda School</h3>
            <p className ="link-text">@LambdaSchool</p>  
            <p className ="link-text">02 18, 2019</p>
        </div>
    );
};

export default HeaderTitle;