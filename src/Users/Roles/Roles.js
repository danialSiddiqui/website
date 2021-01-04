import React, { Component } from "react";
import "../../Assests/css/user.css";
import { Link } from "react-router-dom";
import axios from "axios";


const Userview = props => (
	<tr>
	  <th scope="row">{props.users.Id}</th>
	  <td>{props.users.RoleName}</td>
	  <td>{props.users.RoleType}</td>
	  <td><Link to={"/Users/Role/View/"+props.users._id}>View</Link></td>
	</tr>
  )




export default class Deplist extends Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Role/')
		.then((response) => {
		  const users = response.data;
		  console.log(response);
		  this.setState({users: response.data})
		})
		  .catch((error) => {
			console.log(error);
		  })
	  }
	
	  userlist() {
		return this.state.users.map(currentuser => {
		  return <Userview users={currentuser}  key={currentuser._id}/>;
		})
	  }

	render(){
		return (
			<div className="inter-body">

				<div className="container-fluid">
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
				  <span >Role List</span>
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
								<div className="row">
								<h3 className="col-9">Role</h3>
								<Link to="/Users/Role/Add/" className="col-3 btn btn-primary">add new Role</Link>
								</div>
								<br/>
		 
								<table className="table table-striped">
								   <thead>
									 <tr>
										   <th scope="col">Sno</th>
										   <th scope="col">Role Name</th>
										   <th scope="col">Role Type</th>									   
										   <th scope="col">Action</th>
									 </tr>
								   </thead>
								  <tbody>
								  { this.userlist() }
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
		 
	}
  








