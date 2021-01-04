import React, { Component }  from 'react';
import '../Assests/css/footer.css';


export default class Footer extends Component {
	render(){
		if (window.location.pathname === '/login') {return null;}
		else if(window.location.pathname === '/Forgotpassword') {return null;}
		else{
  return (

	
		<div class="footer">
			<div class="center-align">
				<p class="footer-copy-text">Copyright © 2020 All Rights Reserved.</p>
			</div>
		</div>

		);


}
	}}

