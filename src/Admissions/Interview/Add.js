import React , { Component, useState  } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';
import "../Assests/css/style.css"
import axios from 'axios';

export default class AddInterview extends Component {

  constructor(props) {
    super(props);

    this.onChangeRegNum = this.onChangeRegNum.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeInterviewee = this.onChangeInterviewee.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangedate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      RegNum: '',
      Name: '',
      Interviewee: '',
      date: new Date(),
      Interview: []
    }
  }

  

  onChangeRegNum(e) {
    this.setState({
      RegNum: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    })
  }


  onChangeInterviewee(e) {
    this.setState({
      Interviewee: e.target.value
    })
  }

  onChangeTime(e){
    this.setState(
      { Time : e.target.value }
    )
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      RegNum: this.state.RegNum,
      Name: this.state.Name,
      Interviewee: this.state.Interviewee,
      Time: this.state.Time,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/Interview/add', exercise)
      .then(res => console.log(res.data));

      window.location = '/Admission/Interview';
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
              <span >Interview Add</span>
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
						<h3>Schedule Interview</h3>
<p>You can schedule interview by filling  the following details.</p>
<br />

<form onSubmit={this.onSubmit} >
              <div className="row">
                <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Registrion Number:</span> <br />
                      <input className="form-control" type="text" value={this.state.RegNum}  onChange={this.onChangeRegNum} placeholder="Crc001" />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Name:</span> <br />
                      <input className="form-control" type="text" value={this.state.Name}  onChange={this.onChangeName}   placeholder="Full Name" />
                    </label>
                </div>
              </div>
              <div className="row">
               <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Interviewee:</span> <br />
                      <select  className="form-control" value={this.state.Interviewee} onChange={this.onChangeInterviewee} >
                        <option value="Teacher1">Teacher 1</option>
                        <option value="Teacher2">Teacher 2</option>
                        <option value="Teacher3">Teacher 3</option>
                        <option value="Teacher4">Teacher 4</option>
                        <option value="Teacher5">Teacher 5</option>
                      </select>
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Date:</span> <br />
                      <DatePicker  onChange={this.onChangedate} value={this.state.date}  />
                    </label>
                  </div>
                  <div className="col-6 form-group">
                  <label className="sec-12">
                      <span className="label-text">Time:</span> <br />
                      <input className="form-control" type="text" placeholder="XX : XX AM/PM"  onChange={this.onChangeTime} value={this.state.Time}  />
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

