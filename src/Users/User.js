import React from "react";

import ava from '../Assests/images/avatar.jpg';
import "../Assests/css/user.css";

function AddUser() {
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

// You can think of these components as "pages"
// in your app.

function UserList() {
  return (
   <div class="inter-body">
   	<div class="container-fluid">
   		<div class="row">
   			<div class="col-12">
   				<div class="card">
   					<div class="card-body">
   					<div class="row">
   					<h3 class="col-10">User</h3>
   					<span class="col-2 btn btn-primary">add new user</span>
   					</div>
   					<hr />

   					<table class="table table-striped">
  						<thead>
    						<tr>
      							<th scope="col">ID</th>
      							<th scope="col">Username</th>
      							<th scope="col">Name</th>
      							<th scope="col">Email</th>
      							<th scope="col">Role</th>
      							<th scope="col">Action</th>
    						</tr>
  						</thead>
 						<tbody>
   							<tr>
    							<th scope="row">12</th>
      							<td>doerevolt</td>
      							<td>Danial Siddiqui</td>
      							<td>Daniyal.siddiqui@credo.edu.pk</td>
      							<td>Software Developer</td>
      							<td>View Details</td>

    						</tr>
    						<tr>
    							<th scope="row">12</th>
      							<td>doerevolt</td>
      							<td>Danial Siddiqui</td>
      							<td>Daniyal.siddiqui@credo.edu.pk</td>
      							<td>Software Developer</td>
      							<td>View Details</td>

    						</tr>
    						<tr>
    							<th scope="row">12</th>
      							<td>doerevolt</td>
      							<td>Danial Siddiqui</td>
      							<td>Daniyal.siddiqui@credo.edu.pk</td>
      							<td>Software Developer</td>
      							<td>View Details</td>

    						</tr>
  						</tbody>
					</table>

   					</div>
   				</div>
   			</div>
   		</div>
   	</div>

    </div>
  );
}

function ViewUser() {
  return (
<div class="inter-body">
   	<div class="container-fluid">
   		<div class="row">
   			<div class="col-4">
   				<div class="card">
   					<div class="card-body text-center">
   						<img class="profile-images" src={ava} alt="" />
   						<p>ID: 12</p>
   						<p>User: Doerevolt</p>
   						<p>Software Developer</p>
   					</div> 
   				</div>
   			</div>
   			<div class="col-8">
   				<div class="card">
   					<div class="card-body">
   						<div class="table-responsive">
   						<div class="mb-4 card-title">Personal Information</div>
   						<table class="table-nowrap mb-0 table">
   						<tbody>
   						<tr>
   						<th scope="row">Full Name :</th>
   						<td>Cynthia Price</td>
   						</tr>
   						<tr>
   						<th scope="row">Mobile :</th>
   						<td>((123) 123 1234</td>
   						</tr>
   						<tr>
   						<th scope="row">E-mail :</th>
   						<td>cynthiaskote@gmail.com</td>
   						</tr>
   						<tr>
   						<th scope="row">Location :</th><td>California, United States</td>
   						</tr>
   						</tbody>
   						</table>
   						</div>
   					</div>
   				</div>
   			</div>
   		</div>
   		<div class="row">
   			<div class="col-12">
   				<div class="card">
   					<div class="card-body">
   					
   					<h3 class="">Monthly Attendances Record</h3>
   					<div class="row">
   					<span class="col-3">Starting Date : 01-Dec-2020</span>
   					<span class="col-3">Closing Date : 31-Dec-2020</span>
   					</div>
   					<hr />

   					<table class="table table-striped">
  						<thead>
    						<tr>
      							<th scope="col">Status</th>
      							<th scope="col">Time In </th>
      							<th scope="col">Time Out </th>
      							<th scope="col">Date</th>
      							<th scope="col">Day</th>
      							<th scope="col">Timing</th>
      							<th scope="col">Relax</th>
      							<th scope="col">Reason</th>
      							<th scope="col">Duration In</th>
      							<th scope="col">Duration Out</th>

    						</tr>
  						</thead>
 						<tbody>
   							<tr>
    							<th scope="row">Present</th>
      							<td>8:12 am</td>
      							<td>2:20 Pm</td>
      							<td>12/9/2020</td>
      							<td>Tuesday</td>
      							<td>6 hrs</td>
      							<td>none</td>
      							<td>none</td>
      							<td>6</td>
      							<td>12</td>


    						</tr>
  						</tbody>
					</table>

   					</div>
   				</div>
   			</div>
   		</div>
   	</div>

    </div>
  );
}

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


function DelUser() {
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

export default  ViewUser;
