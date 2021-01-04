import React from "react";

import "../../Assests/css/user.css";

function EditUser() {
  return (
   <div class="inter-body">
   	<div class="container-fluid">
   		<div class="row">
   			<div class="col-12">
   				<div class="card">
   					<div class="card-body">
   					<h3>Add New User</h3>
   					<p>You can crete a brand new user by Filling the following details.</p>
   					<hr />

   					<form >
   						<div class="row">
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">ID:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Username:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
   							</div>
   						</div>
   						<div class="row">
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">First Name:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Last Name:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   						</div>
   						<div class="row">
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Role:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Deparment:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   						</div>
   						<div class="row">
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Email:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   							<div class="col-6 form-group">
   								<label class="sec-1">
          						<span class="label-text">Password:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   						</div>
   						<div class="row">
   							<div class="col-12 form-group">
   								<label class="sec-1">
          						<span class="label-text">Address:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   							<div class="col-12 form-group">
   								<label class="sec-1">
          						<span class="label-text">Picture:</span> <br />
          						<input class="form-control" type="text" value=""  placeholder="Username" />
        						</label>
        					</div>
   						</div>
   						<div class="row">
   							<div class="col-12 form-group">
   								<label class="sec-1">
          						
          						<input class="btn btn-primary" type="submit" value="Add User"  placeholder="Username" />
        						</label>
        					</div>
   						</div>
   					</form>

   					</div>
   				</div>
   			</div>
   		</div>
   	</div>

    </div>
  );
}


export default  EditUser;