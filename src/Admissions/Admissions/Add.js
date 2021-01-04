import React,{ Component } from "react";
import axios from 'axios';
import '../Assests/css/style.css';
import { Link } from "react-router-dom";

export default class AddAdmissions extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCNIC = this.onChangeCNIC.bind(this);
    this.onChangeRegno = this.onChangeRegno.bind(this);
    this.onChangeEnail = this.onChangeEnail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeNationality = this.onChangeNationality.bind(this);
    this.onChangeFamilylanguage = this.onChangeFamilylanguage.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDoB = this.onChangeDoB.bind(this);
    this.onChangeCAddress = this.onChangeCAddress.bind(this);
    this.onChangePAddress = this.onChangePAddress.bind(this);
    this.onChangeApplyingfor = this.onChangeApplyingfor.bind(this);

    this.onChangeFStatus = this.onChangeFStatus.bind(this);
    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeFEmail = this.onChangeFEmail.bind(this);
    this.onChangeFPhone = this.onChangeFPhone.bind(this);
    this.onChangeFOfficeNO = this.onChangeFOfficeNO.bind(this);
    this.onChangeFCNIC = this.onChangeFCNIC.bind(this);
    this.onChangeFBAddress = this.onChangeFBAddress.bind(this);
    this.onChangeFOccution = this.onChangeFOccution.bind(this);
    this.onChangeFIndustry = this.onChangeFIndustry.bind(this);

    this.onChangeMStatus = this.onChangeMStatus.bind(this);
    this.onChangeMName = this.onChangeMName.bind(this);
    this.onChangeMEmail = this.onChangeMEmail.bind(this);
    this.onChangeMPhone = this.onChangeMPhone.bind(this);
    this.onChangeMOfficeNO = this.onChangeMOfficeNO.bind(this);
    this.onChangeMCNIC = this.onChangeMCNIC.bind(this);
    this.onChangeMBAddress = this.onChangeMBAddress.bind(this);
    this.onChangeMOccution = this.onChangeMOccution.bind(this);
    this.onChangeMIndustry = this.onChangeMIndustry.bind(this);

    this.onChangeSname = this.onChangeSname.bind(this);
    this.onChangeRelationship = this.onChangeRelationship.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeNOI = this.onChangeNOI.bind(this);

    this.onChangeCPname = this.onChangeCPname.bind(this);
    this.onChangeEphone = this.onChangeEphone.bind(this);
    this.onChangeCpRelationship = this.onChangeCpRelationship.bind(this);

    this.onChangeSubject1 = this.onChangeSubject1.bind(this);
    this.onChangeSubject2 = this.onChangeSubject2.bind(this);
    this.onChangeSubject3 = this.onChangeSubject3.bind(this);
    this.onChangeSubject4 = this.onChangeSubject4.bind(this);

    this.onChangeAcc = this.onChangeAcc.bind(this);
    this.onChangeEco = this.onChangeEco.bind(this);
    this.onChangeBus = this.onChangeBus.bind(this);
    this.onChangeMath = this.onChangeMath.bind(this);
    this.onChangePhy = this.onChangePhy.bind(this);
    this.onChangeChe = this.onChangeChe.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeSoc = this.onChangeSoc.bind(this);
    this.onChangeCs = this.onChangeCs.bind(this);
    this.onChangeEnglit = this.onChangeEnglit.bind(this);
    this.onChangeEnglag = this.onChangeEnglag.bind(this);
    this.onChangePS = this.onChangePS.bind(this);
    this.onChangeAddmath = this.onChangeAddmath.bind(this);
    this.onChangeUrdu = this.onChangeUrdu.bind(this);
    this.onChangeIsl = this.onChangeIsl.bind(this);
    this.onChangeEM = this.onChangeEM.bind(this);

    this.onChangeCareerChoice = this.onChangeCareerChoice.bind(this);
    this.onChangeExCurricular = this.onChangeExCurricular.bind(this);
    this.onChangeSports = this.onChangeSports.bind(this);
    this.onChangeResponsiblites = this.onChangeResponsiblites.bind(this);
    this.onChangeShortParah = this.onChangeShortParah.bind(this);

    this.onChangeHealth = this.onChangeHealth.bind(this);
    this.onChangeCredoCollage = this.onChangeCredoCollage.bind(this);
    this.onChangeAddmissionCredoCollage = this.onChangeAddmissionCredoCollage.bind(this);
    this.onChangeSiblingCredoCollage = this.onChangeSiblingCredoCollage.bind(this);

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
          Name : '',
          CNIC : '',
          Regno : '',
          Enail : '',
          Phone : '',
          Familylanguage : '',
          Nationality : '',
          DoB : '',
          Gender : '',
          CAddress : '',
          PAddress : '',
          Applyingfor : '',
          FStatus : '',
          FName : '',
          FEmail : '',
          FPhone : '',
          FOfficeNO : '',
          FCNIC : '',
          FBAddress : '',
          FOccution : '',
          FIndustry : '',
          MStatus : '',
          MName : '',
          MEmail : '',
          MPhone : '',
          MOfficeNO : '',
          MCNIC : '',
          MBAddress : '',
          MOccution : '',
          MIndustry : '',
          Sname : '',
          Relationship : '',
          Age : '',
          NOI : '',
          CPname : '',
          Ephone : '',
          CpRelationship : '',
          Subject1 : '',
          Subject2 : '',
          Subject3 : '',
          Subject4 : '',
          Acc : '',
          Eco : '',
          Bus : '',
          Math : '',
          Phy : '',
          Che : '',
          Bio : '',
          Soc : '',
          Cs : '',
          Englit : '',
          Englag : '',
          PS : '',
          Addmath : '',
          Urdu : '',
          Isl : '',
          EM : '',
          CareerChoice : '',
          ExCurricular : '',
          Sports : '',
          Responsiblites : '',
          ShortParah: '',
          Health : '',
          CredoCollage : '',
          AddmissionCredoCollage : '',
          SiblingCredoCollage : '',
      query: []
    }
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    })
  }

  onChangeCNIC(e) {
    this.setState({
      CNIC: e.target.value
    })
  }

  onChangeRegno(e) {
    this.setState({
      Regno: e.target.value
    })
  }

  onChangeEnail(e) {
    this.setState({
      Enail: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      Phone: e.target.value
    })
  }

  onChangeFamilylanguage(e) {
    this.setState({
      Familylanguage: e.target.value
    })
  }

  onChangeNationality(e) {
    this.setState({
      Nationality: e.target.value
    })
  }

  onChangeDoB(e) {
    this.setState({
      DoB: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      Gender: e.target.value
    })
  }

  onChangeCAddress(e) {
    this.setState({
      CAddress: e.target.value
    })
  }

  onChangePAddress(e) {
    this.setState({
      PAddress: e.target.value
    })
  }

  onChangeApplyingfor(e) {
    this.setState({
      Applyingfor: e.target.value
    })
  }

  onChangeFStatus(e) {
    this.setState({
      FStatus: e.target.value
    })
  }

  onChangeFName(e) {
    this.setState({
      FName: e.target.value
    })
  }

  onChangeFEmail(e) {
    this.setState({
      FEmail: e.target.value
    })
  }

  onChangeFPhone(e) {
    this.setState({
      FPhone: e.target.value
    })
  }

  onChangeFOfficeNO(e) {
    this.setState({
      FOfficeNO: e.target.value
    })
  }

  onChangeFCNIC(e) {
    this.setState({
      FCNIC: e.target.value
    })
  }

  onChangeFBAddress(e) {
    this.setState({
      FBAddress: e.target.value
    })
  }

  onChangeFOccution(e) {
    this.setState({
      FOccution: e.target.value
    })
  }

  onChangeFIndustry(e) {
    this.setState({
      FIndustry: e.target.value
    })
  }

  onChangeMStatus(e) {
    this.setState({
      MStatus: e.target.value
    })
  }

  onChangeMName(e) {
    this.setState({
      MName: e.target.value
    })
  }

  onChangeMEmail(e) {
    this.setState({
      MEmail: e.target.value
    })
  }
  onChangeMPhone(e) {
    this.setState({
      MPhone: e.target.value
    })
  }

  onChangeMOfficeNO(e) {
    this.setState({
      MOfficeNO: e.target.value
    })
  }

  onChangeMCNIC(e) {
    this.setState({
      MCNIC: e.target.value
    })
  }
  onChangeMBAddress(e) {
    this.setState({
      MBAddress: e.target.value
    })
  }

  onChangeMOccution(e) {
    this.setState({
      MOccution: e.target.value
    })
  }

  onChangeMIndustry(e) {
    this.setState({
      MIndustry: e.target.value
    })
  }
  onChangeSname(e) {
    this.setState({
      Sname: e.target.value
    })
  }

  onChangeRelationship(e) {
    this.setState({
      Relationship: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      Age: e.target.value
    })
  }
  onChangeNOI(e) {
    this.setState({
      NOI: e.target.value
    })
  }

  onChangeCPname(e) {
    this.setState({
      CPname: e.target.value
    })
  }

  onChangeEphone(e) {
    this.setState({
      Ephone: e.target.value
    })
  }
  onChangeCpRelationship(e) {
    this.setState({
      CpRelationship: e.target.value
    })
  }

  onChangeSubject1(e) {
    this.setState({
      Subject1: e.target.value
    })
  }

  onChangeSubject2(e) {
    this.setState({
      Subject2: e.target.value
    })
  }
  onChangeSubject3(e) {
    this.setState({
      Subject3: e.target.value
    })
  }

  onChangeSubject4(e) {
    this.setState({
      Subject4: e.target.value
    })
  }

  onChangeAcc(e) {
    this.setState({
      Acc: e.target.value
    })
  }
  onChangeEco(e) {
    this.setState({
      Eco: e.target.value
    })
  }

  onChangeBus(e) {
    this.setState({
      Bus: e.target.value
    })
  }

  onChangeMath(e) {
    this.setState({
      Math: e.target.value
    })
  }
  onChangePhy(e) {
    this.setState({
      Phy: e.target.value
    })
  }

  onChangeChe(e) {
    this.setState({
      Che: e.target.value
    })
  }

  onChangeBio(e) {
    this.setState({
      Bio: e.target.value
    })
  }
  onChangeSoc(e) {
    this.setState({
      Soc: e.target.value
    })
  }

  onChangeCs(e) {
    this.setState({
      Cs: e.target.value
    })
  }

  onChangeEnglit(e) {
    this.setState({
      Englit: e.target.value
    })
  }
  onChangeEnglag(e) {
    this.setState({
      Englag: e.target.value
    })
  }

  onChangePS(e) {
    this.setState({
      PS: e.target.value
    })
  }

  onChangeAddmath(e) {
    this.setState({
      Addmath: e.target.value
    })
  }
  onChangeUrdu(e) {
    this.setState({
      Urdu: e.target.value
    })
  }

  onChangeIsl(e) {
    this.setState({
      Isl: e.target.value
    })
  }

  onChangeEM(e) {
    this.setState({
      EM: e.target.value
    })
  }
  onChangeCareerChoice(e) {
    this.setState({
      CareerChoice: e.target.value
    })
  }

  onChangeExCurricular(e) {
    this.setState({
      ExCurricular: e.target.value
    })
  }

  onChangeSports(e) {
    this.setState({
      Sports: e.target.value
    })
  }
  onChangeResponsiblites(e) {
    this.setState({
      Responsiblites: e.target.value
    })
  }

  onChangeShortParah(e) {
    this.setState({
      ShortParah: e.target.value
    })
  }

  onChangeHealth(e) {
    this.setState({
      Health: e.target.value
    })
  }
  onChangeCredoCollage(e) {
    this.setState({
      CredoCollage: e.target.value
    })
  }

  onChangeAddmissionCredoCollage(e) {
    this.setState({
      AddmissionCredoCollage: e.target.value
    })
  }

  onChangeSiblingCredoCollage(e) {
    this.setState({
      SiblingCredoCollage: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();

    const Admission = {
      
          Name : this.state.Name,
          CNIC : this.state.CNIC,
          Regno : this.state.Regno,
          Enail : this.state.Enail,
          Phone : this.state.Phone,
          Familylanguage : this.state.Familylanguage,
          Nationality : this.state.Nationality,
          DoB : this.state.DoB,
          Gender : this.state.Gender,
          CAddress : this.state.CAddress,
          PAddress : this.state.PAddress,
          Applyingfor : this.state.Applyingfor,
          FStatus : this.state.FStatus,
          FName : this.state.FName,
          FEmail : this.state.FEmail,
          FPhone : this.state.FPhone,
          FOfficeNO : this.state.FOfficeNO,
          FCNIC : this.state.FCNIC,
          FBAddress : this.state.FBAddress,
          FOccution : this.state.FOccution,
          FIndustry : this.state.FIndustry,
          MStatus : this.state.MStatus,
          MName : this.state.MName,
          MEmail : this.state.MEmail,
          MPhone : this.state.MPhone,
          MOfficeNO : this.state.MOfficeNO,
          MCNIC : this.state.MCNIC,
          MBAddress : this.state.MBAddress,
          MOccution : this.state.MOccution,
          MIndustry : this.state.MIndustry,
          Sname : this.state.Sname,
          Relationship : this.state.Relationship,
          Age : this.state.Age,
          NOI : this.state.NOI,
          CPname : this.state.CPname,
          Ephone : this.state.Ephone,
          CpRelationship : this.state.CpRelationship,
          Subject1 : this.state.Subject1,
          Subject2 : this.state.Subject2,
          Subject3 : this.state.Subject3,
          Subject4 : this.state.Subject4,
          Acc : this.state.Acc,
          Eco : this.state.Eco,
          Bus : this.state.Bus,
          Math : this.state.Math,
          Phy : this.state.Phy,
          Che : this.state.Che,
          Bio : this.state.Bio,
          Soc : this.state.Soc,
          Cs : this.state.Cs,
          Englit : this.state.Englit,
          Englag : this.state.Englag,
          PS : this.state.PS,
          Addmath : this.state.Addmath,
          Urdu : this.state.Urdu,
          Isl : this.state.Isl,
          EM : this.state.EM,
          CareerChoice : this.state.CareerChoice,
          ExCurricular : this.state.ExCurricular,
          Sports : this.state.Sports,
          Responsiblites : this.state.Responsiblites,
          ShortParah: this.state.ShortParah,
          Health : this.state.Health,
          CredoCollage : this.state.CredoCollage,
          AddmissionCredoCollage : this.state.AddmissionCredoCollage,
          SiblingCredoCollage : this.state.SiblingCredoCollage,
    }

    console.log(Admission);

    axios.post('http://localhost:5000/Admissions/add', Admission)
      .then(res => console.log(res.data));

    window.location = '/Admission/';

  }


  render(){


  return (
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
        <div className="col-12">
          <div className="card">
            <div className="card-body">
            <h3>Add New Student</h3>
            <p>You can crete a brand new Student by Filling the following details.</p>
            <hr />

            <form onSubmit={this.onSubmit} >

   <h3>Student Information</h3>
              <div className="row">
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Name:</span> <br />
                      <input className="form-control" type="text"   placeholder="Full Name" 
                       value={this.state.Name}
                       onChange={this.onChangeName} />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">CNIC/Passpot No/ SmartCard No:</span> <br />
                      <input className="form-control" type="text"   placeholder="CNIC" 
                       value={this.state.CNIC}
                       onChange={this.onChangeCNIC} />
                    </label>
                </div>
              </div>
              <div className="row">
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Registration Numerber:</span> <br />
                      <input className="form-control" type="text"   placeholder="CRC001" 
                       value={this.state.Regno}
                       onChange={this.onChangeRegno} />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Phone:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.Phone}
                       onChange={this.onChangePhone} />
                    </label>
                  </div>
                  <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Email:</span> <br />
                      <input className="form-control" type="text"   placeholder="example@example.com" 
                       value={this.state.Enail}
                       onChange={this.onChangeEnail} />
                    </label>
                  </div>
                  <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Applying For:</span> <br />
                      <input className="form-control" type="text"   placeholder="A2" 
                       value={this.state.Applyingfor}
                       onChange={this.onChangeApplyingfor} />
                    </label>
                  </div>
              </div>
              <div className="row">
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Family Language:</span> <br />
                      <input className="form-control" type="text"   placeholder="Urdu" 
                       value={this.state.Familylanguage}
                       onChange={this.onChangeFamilylanguage} />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Nationality:</span> <br />
                      <input className="form-control" type="text"   placeholder="Pakistani" 
                       value={this.state.Nationality}
                       onChange={this.onChangeNationality} />
                    </label>
                  </div>
              </div>
              <div className="row">
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Date of Brith:</span> <br />
                      <input className="form-control" type="text"   placeholder="12/12/20202" 
                       value={this.state.DoB}
                       onChange={this.onChangeDoB}  />
                    </label>
                  </div>
                <div className="col-6 form-group">
                  <label className=" ">
                      <span className="label-text">Gender:</span> <br />
                      <input className="form-control" type="text"   placeholder="Male" 
                       value={this.state.Gender}
                       onChange={this.onChangeGender} />
                    </label>
                  </div>
              </div>
              <div className="row">
                <div className="col-12 form-group">
                  <label className=" ">
                      <span className="label-text">Current Address:</span> <br />
                      <input className="form-control" type="text"   placeholder="Enter current address" 
                       value={this.state.CAddress}
                       onChange={this.onChangeCAddress} />
                    </label>
                  </div>
                <div className="col-12 form-group">
                  <label className=" ">
                      <span className="label-text">Permanent Address:</span> <br />
                      <input className="form-control" type="text"   placeholder="Enter permanent address" 
                       value={this.state.PAddress}
                       onChange={this.onChangePAddress} />
                    </label>
                  </div>
                  
              </div>
              

              <h3>Parent Information</h3>

            <div className="row">
               <div className="col-12">
                  <h5>Father Info</h5>
                  <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Status:</span> <br />
                      <input className="form-control" type="text"   placeholder="Status" 
                       value={this.state.FStatus}
                       onChange={this.onChangeFStatus} />
                    </label>
                  </div>


                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Father Name:</span> <br />
                      <input className="form-control" type="text"  placeholder="Full Name" 
                       value={this.state.FName}
                       onChange={this.onChangeFName} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Email:</span> <br />
                      <input className="form-control" type="text"   placeholder="example@example.com" 
                       value={this.state.FEmail}
                       onChange={this.onChangeFEmail} />
                    </label>
                  </div>
               </div>
                  <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Phone No:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.FPhone}
                       onChange={this.onChangeFPhone} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Office No:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.FOfficeNO}
                       onChange={this.onChangeFOfficeNO} />
                    </label>
                  </div>

                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">CNIC Number:</span> <br />
                      <input className="form-control" type="text"   placeholder="CNIC" 
                       value={this.state.FCNIC}
                       onChange={this.onChangeFCNIC} />
                    </label>
                  </div>
                  </div>
                <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Bussiness Address:</span> <br />
                      <input className="form-control" type="text"   placeholder="Bussiness Address" 
                       value={this.state.FBAddress}
                       onChange={this.onChangeFBAddress} />
                    </label>
                  </div>

                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Occupation:</span> <br />
                      <input className="form-control" type="text"   placeholder="Occupation" 
                       value={this.state.FOccution}
                       onChange={this.onChangeFOccution} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Industry:</span> <br />
                      <input className="form-control" type="text"  placeholder="Industry" 
                       value={this.state.FIndustry}
                       onChange={this.onChangeFIndustry} />
                    </label>
                  </div>
              </div>
               </div>
               </div>
               <div className="row">
               <div className="col-12">
                  <h5>Mother Info</h5>
                  <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Status:</span> <br />
                      <input className="form-control" type="text"   placeholder="Status"
                       value={this.state.MStatus}
                       onChange={this.onChangeMStatus} />
                    </label>
                  </div>


                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Mother Name:</span> <br />
                      <input className="form-control" type="text"   placeholder="Mother Full Name" 
                       value={this.state.MName}
                       onChange={this.onChangeMName} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Email:</span> <br />
                      <input className="form-control" type="text"   placeholder="example@example.com" 
                       value={this.state.MEmail}
                       onChange={this.onChangeMEmail} />
                    </label>
                  </div>
               </div>
                  <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Phone No:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.MPhone}
                       onChange={this.onChangeMPhone} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Office No:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.MOfficeNO}
                       onChange={this.onChangeMOfficeNO} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">CNIC Number:</span> <br />
                      <input className="form-control" type="text"   placeholder="CNIC" 
                       value={this.state.MCNIC}
                       onChange={this.onChangeMCNIC} />
                    </label>
                  </div>
               </div>
                <div className="row">
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Bussiness Address:</span> <br />
                      <input className="form-control" type="text"   placeholder="Bussiness Address" 
                       value={this.state.MBAddress}
                       onChange={this.onChangeMBAddress} />
                    </label>
                  </div>

                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Occupation:</span> <br />
                      <input className="form-control" type="text"   placeholder="Occupation" 
                       value={this.state.MOccution}
                       onChange={this.onChangeMOccution} />
                    </label>
                  </div>
                <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Industry:</span> <br />
                      <input className="form-control" type="text"   placeholder="Industry" 
                       value={this.state.MIndustry}
                       onChange={this.onChangeMIndustry} />
                    </label>
                  </div>
              </div>
               </div>
               </div>

               <div className="row">
               <div className="col-12">
                  <h5>Sibiling Details</h5>

                     <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Name:</span> <br />
                      <input className="form-control" type="text"   placeholder="Full Name" 
                       value={this.state.Sname}
                       onChange={this.onChangeSname} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Relationship:</span> <br />
                      <input className="form-control" type="text"   placeholder="Relationship" 
                       value={this.state.Relationship}
                       onChange={this.onChangeRelationship} />
                    </label>
                  </div>

                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Age:</span> <br />
                      <input className="form-control" type="text"   placeholder="Age" 
                       value={this.state.Age}
                       onChange={this.onChangeAge} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Name of Institute:</span> <br />
                      <input className="form-control" type="text"   placeholder="Institute"  
                       value={this.state.NOI}
                       onChange={this.onChangeNOI} />
                    </label>
                  </div>
              </div>
               </div>
               </div>

               <div className="row">
               <div className="col-12">
                  <h5>Emergency Details</h5>

                     <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Contact Person Name:</span> <br />
                      <input className="form-control" type="text"   placeholder="Full Name" 
                       value={this.state.CPname}
                       onChange={this.onChangeCPname} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Phone Number:</span> <br />
                      <input className="form-control" type="text"   placeholder="0333xxxxxxx" 
                       value={this.state.Ephone}
                       onChange={this.onChangeEphone} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Relationship:</span> <br />
                      <input className="form-control" type="text"   placeholder="Relationship" 
                       value={this.state.CpRelationship}
                       onChange={this.onChangeCpRelationship} />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div className="row">
               <div className="col-12">
                  <h5>Academic Information</h5>

                     <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Subject 1:</span> <br />
                      <input className="form-control" type="text"   placeholder="Subject Name" 
                       value={this.state.Subject1}
                       onChange={this.onChangeSubject1} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Subject 2:</span> <br />
                      <input className="form-control" type="text"   placeholder="Subject Name" 
                       value={this.state.Subject2}
                       onChange={this.onChangeSubject2} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Subject 3:</span> <br />
                      <input className="form-control" type="text"   placeholder="Subject Name" 
                       value={this.state.Subject3}
                       onChange={this.onChangeSubject3} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Subject 4:</span> <br />
                      <input className="form-control" type="text"   placeholder="Subject Name" 
                       value={this.state.Subject4}
                       onChange={this.onChangeSubject4} />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div className="row">
               <div className="col-12">
                  <h5>O Level Results</h5>

                     <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Accounting:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Acc}
                       onChange={this.onChangeAcc} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Economics:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Eco}
                       onChange={this.onChangeEco} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Business:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Bus}
                       onChange={this.onChangeBus} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Maths:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Math}
                       onChange={this.onChangeMath} />
                    </label>
                  </div>
               </div>
               <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Physics:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Phy}
                       onChange={this.onChangePhy} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Chemistry:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Che}
                       onChange={this.onChangeChe} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Biology:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Bio}
                       onChange={this.onChangeBio} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Sociology:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Soc}
                       onChange={this.onChangeSoc} />
                    </label>
                  </div>
               </div>
               <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Computer Sciences:</span> <br />
                      <input className="form-control" type="text"  placeholder="Grade" 
                       value={this.state.Cs}
                       onChange={this.onChangeCs} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">English literature:</span> <br />
                      <input className="form-control" type="text"  placeholder="Grade" 
                       value={this.state.Englit}
                       onChange={this.onChangeEnglit} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">English language:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Englag}
                       onChange={this.onChangeEnglag} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Pakistan Studies:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.PS}
                       onChange={this.onChangePS} />
                    </label>
                  </div>
               </div>
               <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Add Maths:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Addmath}
                       onChange={this.onChangeAddmath} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Urdu:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Urdu}
                       onChange={this.onChangeUrdu} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Islamiat:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.Isl}
                       onChange={this.onChangeIsl} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Enivormental Management:</span> <br />
                      <input className="form-control" type="text"   placeholder="Grade" 
                       value={this.state.EM}
                       onChange={this.onChangeEM} />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div className="row">
               <div className="col-12">
                  <h5>Extra Details</h5>

                     <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Career Choice:</span> <br />
                      <input className="form-control" type="text"   placeholder="Career Choice" 
                       value={this.state.CareerChoice}
                       onChange={this.onChangeCareerChoice} />
                    </label>
                  </div>
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Extra & Co-Curricular Activites:</span> <br />
                      <input className="form-control" type="text"   placeholder="Activites" 
                       value={this.state.ExCurricular}
                       onChange={this.onChangeExCurricular} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Sports:</span> <br />
                      <input className="form-control" type="text"   placeholder="Sports" 
                       value={this.state.Sports}
                       onChange={this.onChangeSports} />
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Responsibility held in school</span> <br />
                      <input className="form-control" type="text"   placeholder="Responsibility" 
                       value={this.state.Responsiblites}
                       onChange={this.onChangeResponsiblites} />
                    </label>
                  </div>
               </div>
               <div className="row">
                <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Short paragraph on yourself:</span> <br />
                      <textarea className="form-control" type="text" 
                       value={this.state.ShortParah}
                       onChange={this.onChangeShortParah}  > test </textarea>
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">Health Problems:</span> <br />
                      <textarea className="form-control" type="text" 
                       value={this.state.Health}
                       onChange={this.onChangeHealth}   > test</textarea>
                    </label>
                  </div>
                  <div className="col-3 form-group">
                  <label className=" ">
                      <span className="label-text">How did you come to know about Credo College?</span> <br />
                      <input className="form-control" type="text"   placeholder="Source" 
                       value={this.state.CredoCollage}
                       onChange={this.onChangeCredoCollage} />
                    </label>
                  </div>
               </div>
               <div className="row">

                  <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">What is your main reason for taking admission in Credo College?</span> <br />
                      <input className="form-control" type="text"   placeholder="Reason"  value={this.state.AddmissionCredoCollage}
                       onChange={this.onChangeAddmissionCredoCollage}/>
                    </label>
                  </div>
                  <div className="col-4 form-group">
                  <label className=" ">
                      <span className="label-text">Does the child have any sibling studying at Credo School or Credo College?
</span> <br />
                      <input className="form-control" type="text"   placeholder="Info" value={this.state.SiblingCredoCollage}
                       onChange={this.onChangeSiblingCredoCollage} />
                    </label>
                  </div>
               </div>

            </div>
         </div>


              <div className="row">
                <div className="col-12 form-group">
                  <label className=" ">

                      <input className="btn btn-primary" type="submit" value="Add User"  placeholder="Username"  />
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

