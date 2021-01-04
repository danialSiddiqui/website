import React,{ Component } from "react";
import ava from '../../Assests/images/avatar.jpg';
import "../../Assests/css/user.css";
import axios from "axios";
import moment from 'moment';
export default class ViewUser extends Component {

	constructor(props){
		super(props);
		this.state = {user: []};
		
	}

	componentDidMount() {
		axios.get('http://localhost:5000/Users/'+this.props.match.params.id)
		  .then(response => {
			console.log(response);
			this.setState({
				Id: response.data.Id,
				Username: response.data.Username,
				FirstName: response.data.FirstName,
				LastName: response.data.LastName,
				Email: response.data.Email,
			  createdAt: response.data.createdAt.substring(0,10)
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })}
   const
render(){
	return (
		<div className="inter-body">
			   <div className="container-fluid">
				   <div className="row">
					   <div className="col-4">
						   <div className="card">
							   <div className="card-body text-center">
								   <img className="profile-images" src={ava} alt="" />
								   <p>ID: {this.state.Id}</p>
								   <p>User: {this.state.Username}</p>
								   <p>Software Developer</p>
							   </div> 
						   </div>
					   </div>
					   <div className="col-8">
						   <div className="card">
							   <div className="card-body">
								   <div className="table-responsive">
								   <div className="mb-4 card-title">Personal Information</div>
								   <table className="table-nowrap mb-0 table">
								   <tbody>
								   <tr>
								   <th scope="row">Full Name :</th>
								   <td>{this.state.FirstName}  {this.state.LastName}</td>
								   </tr>
								   <tr>
								   <th scope="row">Mobile :</th>
								   <td>((123) 123 1234</td>
								   </tr>
								   <tr>
								   <th scope="row">E-mail :</th>
								   <td>{this.state.Email}</td>
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
				   <div className="row">
					   <div className="col-12">
						   <div className="card">
							   <div className="card-body">
							   
							   <h3 className="">Monthly Attendances Record</h3>
							   <div className="row">
							   <span className="col-3">Starting Date : 01-Dec-2020</span>
							   <span className="col-3">Closing Date : 31-Dec-2020</span>
							   </div>
							   <hr />
		
							   <table className="table table-striped">
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

}
  

