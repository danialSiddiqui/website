import React,{ Component } from "react";
import "../../Assests/css/user.css";
import axios from 'axios';

export default class AddUser extends Component {
	constructor(props) {
	  super(props);
  
	  this.onChangeId = this.onChangeId.bind(this);
	  this.onChangeUsername = this.onChangeUsername.bind(this);
	  this.onChangeFirstName = this.onChangeFirstName.bind(this);
	  this.onChangeLastName = this.onChangeLastName.bind(this);
	  this.onChangeEmail = this.onChangeEmail.bind(this);
	  this.onChangePassword = this.onChangePassword.bind(this);
	  this.onChangeRole = this.onChangeRole.bind(this);
	  this.onChangeDepName = this.onChangeDepName.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
  
	  this.state = {
		
		Id: '',
    	Username: '',
    	FirstName: '',
    	LastName: '',
    	Email: '',
		Password: '',
		Role: '',
		DepName: '',
		roley: [],
		dep:[]
	  }
	}

	

	  componentDidMount() {

		axios.get('http://localhost:5000/Role/')
		  .then(response => {
			
			if (response.data.length > 0) {
				
				

			   this.setState({
				/* roley: response.data.RoleName */
				  roletype: response.data.RoleType,
				 roley: response.data.map(rname => rname.RoleName , rid => rid.test),
				RoleName: response.data[0].RoleName,
				test: response.data.RoleType, 
			  }) 
			  
			}
		  })
		  
			  
		  
		  .catch((error) => {
			console.log(error);
		  })



		axios.get('http://localhost:5000/Department/')
		.then(response =>
			 { 
				if (response.data.length > 0) {
			  this.setState({
				dep: response.data.map(duser => duser.DepName),
				DepName: response.data[0].DepName
			  })
				}
		  })
		  .catch((error) => {
			console.log(error);
		  })
	
	  }

  
	onChangeId(e) {
	  this.setState({
		Id: e.target.value
	  })
	}
  
	onChangeUsername(e) {
	  this.setState({
		Username: e.target.value
	  })
	}
  
	onChangeFirstName(e) {
	  this.setState({
		FirstName: e.target.value
	  })
	}

	onChangeLastName(e) {
		this.setState({
			LastName: e.target.value
		})
	  }

	  onChangeEmail(e) {
		this.setState({
			Email: e.target.value
		})
	  }

	  onChangePassword(e) {
		this.setState({
			Password: e.target.value
		})
	  }

	  onChangeRole(e){
		  this.setState({
			  Role: e.target.value
		  })
	  }

	  onChangeDepName(e){
		this.setState({
			DepName: e.target.value
		})
	}
  
	onSubmit(e) {
	  e.preventDefault();
  
	  const user = {
		Id: this.state.Id,
		Username: this.state.Username,
		FirstName: this.state.FirstName,
		LastName: this.state.LastName,
		Email: this.state.Email,
		Password: this.state.Password,
	  }
  
	  console.log(user);
  
	  axios.post('http://localhost:5000/Users/add', user)
		.then(res => console.log(res.data));
  
	  window.location = '/Users';
  
	}
  
	render(){
		const user = this.state;
  return (
   <div className="inter-body">
   	<div className="container-fluid">
   		<div className="row">
   			<div className="col-12">
   				<div className="card">
   					<div className="card-body">
   					<h3>Add New User</h3>
   					<p>You can crete a brand new user by Filling the following details.</p>
   					<hr />

   					<form onSubmit={this.onSubmit} >
   						<div className="row">
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">ID:</span> <br />
          						<input className="form-control" type="text"   placeholder="000" value={this.state.Id}
                       onChange={this.onChangeId}  />
        						</label>
        					</div>
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Username:</span> <br />
          						<input className="form-control" type="text"   placeholder="Username"  value={this.state.Username}
                       onChange={this.onChangeUsername} />
        						</label>
   							</div>
   						</div>
   						<div className="row">
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">First Name:</span> <br />
          						<input className="form-control" type="text"   placeholder="First Name" value={this.state.FirstName}
                       onChange={this.onChangeFirstName}  />
        						</label>
        					</div>
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Last Name:</span> <br />
          						<input className="form-control" type="text"   placeholder="Last Name"  value={this.state.LastName}
                       onChange={this.onChangeLastName} />
        						</label>
        					</div>
   						</div>
   						
   						<div className="row">
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Email:</span> <br />
          						<input className="form-control" type="text"   placeholder="Email" value={this.state.Email}
                       onChange={this.onChangeEmail}  />
        						</label>
        					</div>
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Password:</span> <br />
          						<input className="form-control" type="password"   placeholder="Password" value={this.state.Password}
                       onChange={this.onChangePassword}  />
        						</label>
        					</div>
   						</div>
   						<div className="row">
						   <div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Role:</span> <br />
          						<select className="form-control" value={this.state.Role} onChange={this.onChangeRole}>
								  {
              /* */ this.state.roley.map(function(rname) {
                  return <option 
                    key={rname}
                    value={rname}>{rname}
                    </option>;
                }) 
              }	  
								  </select>
        						</label>
        					</div>
   							<div className="col-6 form-group">
   								<label className="sec-1">
          						<span className="label-text">Department:</span> <br />
          						<select className="form-control" value={this.state.DepName} onChange={this.onChangeDepName}>
								  {
              /* */ this.state.dep.map(function(duser) {
                  return <option 
                    key={duser}
                    value={duser}>{duser}
                    </option>;
                }) 
              }
								  </select>
        						</label>
        					</div>
   						
   						</div>
   						<div className="row">
   							<div className="col-12 form-group">
   								<label className="sec-1">
          						
          						<input className="btn btn-primary" type="submit" value="Add User"  placeholder="Username" />
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


}