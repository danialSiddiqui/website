import React, { Component }  from "react";
import { Link } from "react-router-dom";
import "../Assests/css/style.css"
import axios from 'axios';


const Interviews = props => (
  <tr>
    <th scope="row">1</th>
    <td>{props.interview.RegNum}</td>
    {/* <td>{props.interview.Number}</td>
    <td>{props.interview.SchoolName}</td> */}
    <td>{props.interview.date.substring(0,10)}</td>
    <td>{props.interview.Interviewee}</td>
    <td>N/a</td>
    <td>N/a</td>
    <td><Link to={"/Admission/Interview/View/"+props.interview._id}>View</Link></td>
  </tr>
)



export default class Interviewlist extends Component {

  constructor(props) {
    super(props);
    this.state = {interview: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Interview/')
    .then((response) => {
      const interview = response.data;
      console.log(response);
      this.setState({interview: response.data})
    })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:5000/Admissions/')
		  .then(response => {
			console.log(response);
			this.setState({ 
			  Phone: response.data.Phone,
			  Name: response.data.Name,
			  createdAt: response.data.createdAt.substring(0,10)
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })

  }

  interviewList() {
    return this.state.interview.map(currentinterview => {
      return <Interviews interview={currentinterview}  key={currentinterview._id}/>;
    })
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
              <Link to="/Admission/Interview">Interview</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Interview List</span>
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
						<h3 className="col-9">Interview List</h3>
            <p className="col-3">
   					<Link  className=" btn btn-primary " to="/Admission/Interview/Add">Schedule Interview</Link>
   					</p>
            
            </div>
   					</div>
   					<br />
						<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Registration No</th>
     {/*   <th scope="col">Application Reivied On</th>
      <th scope="col">Contact Number</th> */}
      <th scope="col">Interview Scheduled On</th>
      <th scope="col">Interviee</th>
      <th scope="col">Status</th>
      <th scope="col">Comments</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { this.interviewList() }
  </tbody>
</table>
						</div>
					</div>
				</div>   
			</div>
		</div>
	
  	);
}

}






