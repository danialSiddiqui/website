import React,{ Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default class AddInquery extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Number: '',
      SchoolName: "",
      Section:"",
      query: []
    }
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      Number: e.target.value
    })
  }

  onChangeSchoolName(e) {
    this.setState({
      SchoolName: e.target.value
    })
  }

  onChangeSection(e) {
    this.setState({
      Section: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const query = {
      Name: this.state.Name,
      Number: this.state.Number,
      SchoolName: this.state.SchoolName,
      Section: this.state.Section
    }

    console.log(query);

    axios.post('http://localhost:5000/Qurries/add', query)
      .then(res => console.log(res.data));

    window.location = '/Admission/Queries';

  }

  render(){
  return (

    <div className="inter-body">
    <div className="container-fluid">
    <div className="row">
    <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Qurries</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Admission/Queries">Qurries</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Qurries Add</span>
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
                
                  <h3>New Query</h3>
                  <p>You can crete a brand new Query by Filling the following details.</p>

                  <hr />

            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-6 form-group">
                  <label className="sec-1">
                      <span className="label-text">Name:</span> <br />
                      <input className="form-control" type="text"   placeholder="Name"
                       value={this.state.Name}
                       onChange={this.onChangeName} />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className="sec-1">
                      <span className="label-text">Number:</span> <br />
                      <input className="form-control" type="number"   placeholder="03331234567"
                       value={this.state.Number}
                       onChange={this.onChangeNumber} />
                    </label>
                </div>
              </div>
              <div className="row">
                <div className="col-6 form-group">
                  <label className="sec-1">
                      <span className="label-text">School:</span> <br />
                     <input className="form-control" type="text"  placeholder="School Name"
                       value={this.state.SchoolName}
                       onChange={this.onChangeSchoolName} /> 
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className="sec-1">
                      <span className="label-text">Section:</span> <br />
                      <select className="form-control" value={this.state.Section} onChange={this.onChangeSection}>
                      <option value="AS">AS</option>
                      <option value="A2">A2</option>
                      </select>
                    </label>
                  </div>
              </div>
              
              <div className="row">
                <div className="col-12 form-group">
                  <label className="sec-1">
                      
                      <input className="btn btn-primary" type="submit" value="Add Query"  placeholder="Username" />
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

