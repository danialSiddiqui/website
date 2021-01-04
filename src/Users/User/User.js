import React, { Component } from "react";
import { Route,Link } from "react-router-dom";
import "../../Assests/css/user.css";
import axios from "axios";

const Userview = props => (
	<tr>
	  <th scope="row">{props.users.Id}</th>
	  <td>{props.users.Username}</td>
	  <td>{props.users.FirstName} {props.users.LastName}</td>
	  <td>{props.users.Email} </td>
	  <td>{props.users.createdAt.substring(0,10)}</td>
	  
	  <td><Link to={"/Users/View/"+props.users._id}>View</Link></td>
	</tr>
  )


export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Users/')
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
							<div className="card">
								<div className="card-body">
								<div className="row">
								<h3 className="col-10">User</h3>
								<Link to="/Users/Add/" className="col-2 btn btn-primary">add new user</Link>
								</div>
								<br/>
		 
								<table className="table table-striped">
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
  








