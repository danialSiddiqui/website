import logo from '../Assests/images/Logo-login.png';
import '../Assests/css/login.css';
import React from "react";



function Forgot() {
  return (
<div class="container-fluid">
    <div class="row body-login" >
    <div class="col-6 Side-1 hv-100">
      <div>
      <img src={logo} class="logo-img"  alt=""/>
      </div>
    </div>

<div class="col-6 Side-2 hv-100 forgot-e">
  <div class="side-2-content">
<h3 class="main-text"> What's My Password</h3>
<p class="p-text">If you have forgotten your Password you can reset it here.</p>
<span class="hr"/>
<form >
        <label class="forgot-email">
          <span class="label-text">Email:</span> <br />
          <input class="input-field" type="text" value=""  placeholder="Example@credo.edu.pk" />
        </label>

        
<span class="hr"/>


<label class="btn">
        <input type="submit" value="Send My Password" class="btn-submit" />
        </label>
      </form>

 </div>
</div>
</div>
</div>

   );
}

export default Forgot;