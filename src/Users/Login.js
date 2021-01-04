import logo from '../Assests/images/Logo-login.png';
import '../Assests/css/login.css';
import React from "react";
import {
  Link, Route
} from "react-router-dom";





function Login() {
  return (

<div class="container-fluid">
    <div class="row body-login" >
    <div class="col-6 Side-1 hv-100">
      <div>
      <img src={logo} class="logo-img"  alt=""/>
      </div>
    </div>

<div class="col-6 Side-2 hv-100">
  <div class="side-2-content">
<h3 class="main-text"> Welcome Back</h3>
<p class="p-text">Please sign in to your account.</p>
<span class="hr"/>
<form >
        <label class="sec-1">
          <span class="label-text">Username:</span> <br />
          <input class="input-field" type="text" value=""  placeholder="Username" />
        </label>

        <label class="sec-2">
          <span class="label-text"> Password:</span> <br />
          <input class="input-field" type="text" value=""  placeholder="Password" />
        </label>
<span class="hr"/>
<label class="link">


<Route >

<Link to="/Forgotpassword"> forgot Password</Link> 


     
        
        </Route>
      
      

</label>

<label class="btn">
        <input type="submit" value="Submit" class="btn-submit" />
        </label>
      </form>

 </div>
</div>
</div>
</div>
  );
}





export default Login;
