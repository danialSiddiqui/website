import React, { Component } from "react";
import axios from 'axios';
import '../Assests/css/style.css';
import ava from '../../Assests/images/avatar.jpg';
import { Link } from "react-router-dom";

export default class ViewAddmissions extends Component {

  constructor(props) {
    super(props);
    this.state = {persons: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Admissions/'+this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          Name : response.data.Name,
          CNIC : response.data.CNIC,
          Regno : response.data.Regno,
          Enail : response.data.Enail,
          Phone : response.data.Phone,
          Familylanguage : response.data.Familylanguage,
          Nationality : response.data.Nationality,
          DoB : response.data.DoB,
          Gender : response.data.Gender,
          CAddress : response.data.CAddress,
          PAddress : response.data.PAddress,
          Applyingfor : response.data.Applyingfor,
          FStatus : response.data.FStatus,
          FName : response.data.FName,
          FEmail : response.data.FEmail,
          FPhone : response.data.FPhone,
          FOfficeNO : response.data.FOfficeNO,
          FCNIC : response.data.FCNIC,
          FBAddress : response.data.FBAddress,
          FOccution : response.data.FOccution,
          FIndustry : response.data.FIndustry,
          MStatus : response.data.MStatus,
          MName : response.data.MName,
          MEmail : response.data.MEmail,
          MPhone : response.data.MPhone,
          MOfficeNO : response.data.MOfficeNO,
          MCNIC : response.data.MCNIC,
          MBAddress : response.data.MBAddress,
          MOccution : response.data.MOccution,
          MIndustry : response.data.MIndustry,
          Sname : response.data.Sname,
          Relationship : response.data.Relationship,
          Age : response.data.Age,
          NOI : response.data.NOI,
          CPname : response.data.CPname,
          Ephone : response.data.Ephone,
          Relationship : response.data.Relationship,
          Subject1 : response.data.Subject1,
          Subject2 : response.data.Subject2,
          Subject3 : response.data.Subject3,
          Subject4 : response.data.Subject4,
          Acc : response.data.Acc,
          Eco : response.data.Eco,
          Bus : response.data.Bus,
          Math : response.data.Math,
          Phy : response.data.Phy,
          Che : response.data.Che,
          Bio : response.data.Bio,
          Soc : response.data.Soc,
          Cs : response.data.Cs,
          Englit : response.data.Englit,
          Englag : response.data.Englag,
          PS : response.data.PS,
          Addmath : response.data.Addmath,
          Urdu : response.data.Urdu,
          Isl : response.data.Isl,
          EM : response.data.EM,
          CareerChoice : response.data.CareerChoice,
          ExCurricular : response.data.ExCurricular,
          Sports : response.data.Sports,
          Responsiblites : response.data.Responsiblites,
          ShortParah: response.data.ShortParah,
          Health : response.data.Health,
          CredoCollage : response.data.CredoCollage,
          AddmissionCredoCollage : response.data.AddmissionCredoCollage,
          SiblingCredoCollage : response.data.SiblingCredoCollage,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })}


  render(){
  return(
   <div className="inter-body">
     <div className="container-fluid">
     <div className="row">
  <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Admissions</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Admission">Admissions</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Admissions List</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
       <div className="row">
         <div className="col-4">
           <div className="card">
             <div className="card-body ">
             
              <div className="text-center">
                <h4 >Student Info</h4>
              <img className="profile-images" src={ava} alt="" />
              </div>
                <p>Registion No: {this.state.Regno}</p>
                <p>Name: {this.state.Name}</p>
                <p>CNIC: {this.state.CNIC}</p>
                <p>Email: {this.state.Enail}</p>
                <p>Phone: {this.state.Phone}</p>
             </div>
            </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                   <h4 >Detail Info</h4>
                   <div className="row">
                     <div className="col-6">
                        <p>Gender: {this.state.Gender}</p>
                        <p>Date of Birth: {this.state.DoB}</p>
                        <p>Family Language: {this.state.Familylanguage}</p>
                        <p>Nationality: {this.state.Nationality}</p>
                     </div>
                     <div className="col-6"><p>Applying For: {this.state.Applyingfor}</p>
                        <p>Current Address: {this.state.CAddress}</p>
                        <p>Permenat Address: {this.state.PAddress}</p></div>
                   </div>

                </div>
               </div>
               </div>
           </div>
<div className="row">
            <div className="col-6">
            <div className="card">
              <div className="card-body">
           <h4>Father Info</h4>
                  <div className="row">
                    <div className="col-6">
                        <p>Father Name: {this.state.FName}</p>
                        <p>Email: {this.state.FEmail}</p>
                        <p>CNIC: {this.state.FCNIC}</p>
                        <p>Office NO: {this.state.FOfficeNO}</p>
                        <p>Bussiness Address: {this.state.FBAddress}</p>
                       
                      </div>
                    <div className="col-6">
                      <p>Status: {this.state.FStatus}</p>
                      <p>Phone:  {this.state.FPhone}</p>
                      <p>Industry: {this.state.FIndustry}</p>
                      <p>Occupation: {this.state.FOccution}</p>
                      <p>Address: {this.state.CAddress} </p>
                        
                    </div>
                  </div>
                </div></div></div>
                <div className="col-6">
            <div className="card">
              <div className="card-body">
           <h4>Mother Info</h4>
                  <div className="row">
                    <div className="col-6">
                        <p>Mother Name: {this.state.MName}</p>
                        <p>Email: {this.state.MEmail}</p>
                        <p>CNIC: {this.state.MCNIC}</p>
                        <p>Office No: {this.state.MOfficeNO}</p>
                        <p>Bussiness Address: {this.state.MBAddress}</p>
                       
                      </div>
                    <div className="col-6">
                      <p>Status: {this.state.MStatus}</p>
                      <p>Phone: {this.state.MPhone}</p>
                      <p>Industry: {this.state.MIndustry}</p>
                      <p>Occupation: {this.state.MOccution}</p>
                      <p>Address: {this.state.CAddress}</p>
                         
                        
                    </div>
                  </div>
                </div></div></div>
                <div className="col-12">
            <div className="card">
              <div className="card-body">
           <h4>Sibling Info</h4>
                  <div className="row">
                    <div className="col-6">
                        <p> Name: {this.state.Sname}</p>
                        <p>Age: {this.state.Age}</p>                      
                      </div>
                    <div className="col-6">
                        <p>Relationship: {this.state.Relationship}</p>
                        <p>Name Of Institute: {this.state.NOI}</p>
                    </div>
                  </div>
                </div></div></div>
              </div>
           <div className="row">
            <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4>Emergency  Dteails</h4>
                <div className="row">
                    <div className="col-4">
                        <p> Contact Person Name: {this.state.CPname}</p>               
                      </div>
                      <div className="col-4">
                        <p> Phone Number: {this.state.Ephone}</p>               
                      </div>
                      <div className="col-4">
                        <p> Relationship: {this.state.Relationship}</p>               
                      </div>
                </div>
              </div>

            </div>
            </div>
           </div>
           <div className="row">
            <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4>Subject Choice</h4>
                <div className="row">
                    <div className="col-3">
                        <p> Subject 1: {this.state.Subject1}</p>               
                      </div>
                      <div className="col-3">
                        <p> Subject 2: {this.state.Subject2}</p>               
                      </div>
                      <div className="col-3">
                        <p> Subject 3: {this.state.Subject3}</p>               
                      </div>
                      <div className="col-3">
                        <p> Subject 4: {this.state.Subject4}</p>               
                      </div>
                </div>
              </div>

            </div>
            </div>
           </div>
          <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <h4 className="col-10">Interview details Info </h4>
                <span className="col-2 btn btn-primary">Schedule Interview</span>
                </div>
                <br/ >
                <table className="table table-striped">
              <thead>
                <tr>
                    <th scope="col">Interview Schedlue On</th>
                    <th scope="col">Interviewee </th>
                </tr>
              </thead>
            <tbody>
                <tr>
                  <th scope="row">8:12 am</th>
                    <td>Dean</td>
                   
                    


                </tr>
              </tbody>
          </table>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4>Academic Info </h4>
                <div className="row">
                    <div className="col-3">
                      <p>Accounting:{this.state.Acc}</p>
                      <p>Economic:{this.state.Eco}</p>
                      <p>Business:{this.state.Bus}</p>
                      <p>Maths:{this.state.Math}</p>
                    </div>
                
                    <div className="col-3">
                      <p>Physics:{this.state.Phy}</p>
                      <p>Chemistry:{this.state.Che}</p>
                      <p>Biology:{this.state.Bio}</p>
                      <p>Sociology:{this.state.Soc}</p>
                    </div>
               
                    <div className="col-3">
                      <p>Computer Sciences:{this.state.Cs}</p>
                      <p>English litrature:{this.state.Englit}</p>
                      <p>Englist Language:{this.state.Englag}</p>
                      <p>Pakistan Studies:{this.state.PS}</p>
                    </div>
                
                    <div className="col-3">
                      <p>Add Maths:{this.state.Addmath}</p>
                      <p>Urdu:{this.state.Urdu}</p>
                      <p>Islamiat:{this.state.Isl}</p>
                      <p>Enviromental Managment:{this.state.EM}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h4>Extra details</h4>
                <div className="row">
                  <div className="col-12">
                  
                  <p>Have you made a career choice?</p>
                  <p>{this.state.CareerChoice}</p>
                  <p>Are there any extra and co-curricular activities you have actively participated in? </p>
                  <p>{this.state.ExCurricular}</p>
                  <p>Which sports do you play regularly and as part of your school team? </p>
                  <p>{this.state.Sports}</p>
                  <p>List positions of responsibility held in school </p>
                  <p>{this.state.Responsiblites}</p>
                  <p>Short Paragraph </p>
                  <p>{this.state.ShortParah}</p>
</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h4>Refaral Info</h4>
                <div className="row">
                  <div className="col-12">
                    <p>How did you come to know about Credo College? </p>
                    <p>{this.state.CredoCollage}</p>
                    <p>What is your main reason for taking admission in Credo College?</p>
                    <p>{this.state.AddmissionCredoCollage}</p>
                    <p>Does the child have any sibling studying at Credo School or Credo College?</p>
                    <p>{this.state.SiblingCredoCollage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

<div class="row text-center">
<span class="col-2 btn btn-primary ttx">Genrate ID</span>
</div>

           </div>
          </div>

  );
}

}

