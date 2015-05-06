import React from 'react';
import Child  from './child';

let APP =
    React.createClass({
        render: function() {
            return <div> 
	            		<h1> MY FLUX APP </h1> 
	            		<Child/> 
            		</div>
        }
    });
module.exports = APP;
