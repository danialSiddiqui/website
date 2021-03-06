import React, { Component } from "react";
import "../../Assests/css/user.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class DepEdit extends Component {

	constructor(props) {
		super(props);
	
		this.onChangeDepName = this.onChangeDepName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	
		this.state = {
			DepName: '',
		  Department: []
		}
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Department/' + this.props.match.params.id)
		  .then(response => {
			console.log(response);
			this.setState({
				DepName: response.data.DepName,
			  
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	
		
	
	  }
	  
	
	  onChangeDepName(e) {
		this.setState({
			DepName: e.target.value
		})
	  }
	
	  
	
	

	  onSubmit(e) {
		e.preventDefault();
	
		const Department = {
			DepName: this.state.DepName,
		}
	
		console.log(Department);
	
		axios.post('http://localhost:5000/Department/update/' + this.props.match.params.id, Department)
		  .then(res => console.log(res.data)).catch(function (error) {
			console.log(error);
		  })
	;
	
		 window.location = '/Departments/View/' +this.props.match.params.id;
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
				  <Link to="/Departments/">Department</Link>
				</li>
				<li className="active breadcrumb-item" aria-current="page">
				  <span >Department Edit</span>
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
						<h3>Edit Department</h3>
						<p>You can Edit department by filling the following details.</p>
						<br />

						<form onSubmit={this.onSubmit} >
						<div className="row">
                <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Deparment Name:</span> <br />
                      <input className="form-control" type="text" value={this.state.DepName}  onChange={this.onChangeDepName} placeholder="Department Name" />
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
  








