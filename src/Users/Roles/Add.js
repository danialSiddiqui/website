import React, { Component } from "react";
import "../../Assests/css/user.css";
import { Link } from "react-router-dom";
import axios from "axios";





export default class RoleAdd extends Component {

	constructor(props) {
		super(props);
	
		this.onChangeRoleName = this.onChangeRoleName.bind(this);
		this.onChangeRoleType = this.onChangeRoleType.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	
		this.state = {
			RoleName: '',
			RoleType:'',
			Role: []
		}
	  }
	
	  
	
	  onChangeRoleName(e) {
		this.setState({
			RoleName: e.target.value
		})
	  }
	
	  
	  onChangeRoleType(e){
		  this.setState({
			  RoleType: e.target.value
		  })
	  }
	

	  onSubmit(e) {
		e.preventDefault();
	
		const roles = {
			RoleName: this.state.RoleName,
			RoleType: this.state.RoleType
		}
	
		console.log(roles);
	
		axios.post('http://localhost:5000/Role/add', roles)
		  .then(res => console.log(res.data));
	
		  window.location = '/Users/Role';
	  }
	

	render(){
		return (
			<div className="inter-body">

				<div className="container-fluid">
				<div className="row">
	  <div className="col-12">
		<div className="page-title-box d-flex align-items-center justify-content-between">
		  <h4 className="mb-0 font-size-18">Interview</h4>
		  <div className="page-title-right">
			<nav className="" aria-label="breadcrumb">
			  <ol className="breadcrumb m-0">
				<li className="breadcrumb-item">
				  <Link to="/Users/Role">Role</Link>
				</li>
				<li className="active breadcrumb-item" aria-current="page">
				  <span >Role Add</span>
				</li>
			  </ol>
			</nav>
		  </div>
		</div>
	  </div>
	</div>
	<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-body">
						<h3>Add Role</h3>
						<p>You can create new Role by filling  the following details.</p>
						<br />

						<form onSubmit={this.onSubmit} >
						<div className="row">
                <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Role Name:</span> <br />
                      <input className="form-control" type="text" value={this.state.RoleName}  onChange={this.onChangeRoleName} placeholder="Role Name" />
                    </label>
                  </div>
				  <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Role Type:</span> <br />
                      <input className="form-control" type="text" value={this.state.RoleType}  onChange={this.onChangeRoleType} placeholder="Role Type" />
                    </label>
                  </div>
				  </div>
				  <div className="row">
					  <div className="col-12 form-group"><h5>Access to Role</h5></div>			  
				  </div>
				  <div className="row">
                <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Admin:</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Admissions</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Accounts</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Academic Affairs</span> 
                    </label>
                  </div>
				  </div>
				  <div className="row">
                <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Student Affairs</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">CSEP</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Consuling</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">HR</span> 
                    </label>
                  </div>
				  <div className="col-3 form-group">
                  <label className="sec-12">
                      
                      <input className="form-check-label" type="checkbox" value=""  onChange=""  />
					  &nbsp;
					  <span className="label-text">Miscellaneous</span> 
                    </label>
                  </div>
				  </div>
				  <div className="row">
                <div className="col-12 form-group">
                  <label className="sec-1">
                      
                      <input className="btn btn-primary" type="submit" value="Save"  placeholder="Username" />
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
  








