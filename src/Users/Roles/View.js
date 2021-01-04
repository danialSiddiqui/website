import React, { Component } from "react";
import "../../Assests/css/user.css";
import { Link } from "react-router-dom";
import axios from "axios";






export default class Rolelist extends Component {

	constructor(props) {
		super(props);
		this.state = {persons: []};
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Role/'+this.props.match.params.id)
		  .then(response => {
			console.log(response);
			this.setState({
			  id: response.data._id,
			  RoleName: response.data.RoleName,
			  RoleType: response.data.RoleType,
			  createdAt: response.data.createdAt.substring(0,10)
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })}
	

      render(){
		return (
			<div class="inter-body">
			<div class="container-fluid">
			<div className="row">
	  <div className="col-12">
		<div className="page-title-box d-flex align-items-center justify-content-between">
		  <h4 className="mb-0 font-size-18">Role</h4>
		  <div className="page-title-right">
			<nav className="" aria-label="breadcrumb">
			  <ol className="breadcrumb m-0">
				<li className="breadcrumb-item">
				  <Link to="/Users/Role">Role</Link>
				</li>
				<li className="active breadcrumb-item" aria-current="page">
				  <span >Role View</span>
				</li>
			  </ol>
			</nav>
		  </div>
		</div>
	  </div>
	</div>
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
							<div class="row">
							<h3 class="col-9">Role details</h3>
							<p className="col-3">	<Link  class=" btn btn-primary" to={"/Users/Role/Edit/"+this.state.id}>Edit Deparmtent</Link> </p>
							
							
						   
							</div>
							<hr/>
							<p>Name : {this.state.RoleName}</p>
							<p>Role Type:{this.state.RoleType}</p>
							
							</div>
						</div>
					</div>   
				</div>
			</div>
		</div>
		   );
		 }
		 
	}








