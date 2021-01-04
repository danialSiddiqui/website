import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route , withRouter} from "react-router-dom";

import Login from './Users/Login';
import Forgot from './Users/Forgot-password';

import Users from './Users/User/User';
import UsersAdd from './Users/User/Add';
import UsersEdit from './Users/User/Edit';
import UsersView from './Users/User/View';

import Departments from './Users/Department/Dep';
import DepartmentView from './Users/Department/View';
import DepartmentAdd from './Users/Department/Add';
import DepartmentEdit from './Users/Department/Edit';

import Roles from './Users/Roles/Roles';
import RolesView from './Users/Roles/View';
import RolesAdd from './Users/Roles/Add';
import RolesEdit from './Users/Roles/Edit';

import Dashboard from './Dashboard/index'

import Queries from './Admissions/Querires/Queries.component';
import QueriesView from './Admissions/Querires/View';
import QueriesAdd from './Admissions/Querires/Add';
import QueriesEdit from './Admissions/Querires/Edit';

import Admissions from './Admissions/Admissions/Index';
import AdmissionsView from './Admissions/Admissions/View';
import AdmissionsAdd from './Admissions/Admissions/Add';
import AdmissionsEdit from './Admissions/Admissions/Edit';

import Interview from './Admissions/Interview/Interviews';
import InterviewView from './Admissions/Interview/View';
import InterviewAdd from './Admissions/Interview/Add';
import InterviewEdit from './Admissions/Interview/Edit';
import ReInterview from './Admissions/Interview/Reshedule';

import AdminReports from './Admissions/Reports/Reports';

import Examadd from "./AA/Exams/Add";
import Examedit from "./AA/Exams/Edit";
import Examlist from "./AA/Exams/List";
import Examview from "./AA/Exams/View";

import Subjectsadd from "./AA/Subjects/Add";
import Subjectsedit from "./AA/Subjects/Edit";
import Subjectslist from "./AA/Subjects/List";
import Subjectsview from "./AA/Subjects/View";

import Teachadd from "./AA/Teachers/Add";
import Teachedit from "./AA/Teachers/Edit";
import Teachlist from "./AA/Teachers/List";
import Teachview from "./AA/Teachers/View";

import timeadd from "./AA/TimeTable/Add";
import timeedit from "./AA/TimeTable/Edit";
import timelist from "./AA/TimeTable/List";
import timeview from "./AA/TimeTable/View";

import Addfeeadd from "./Accounts/Admission Fee/Add";
import Addfeeedit from "./Accounts/Admission Fee/Edit";
import Addfeelist from "./Accounts/Admission Fee/List";
import Addfeeview from "./Accounts/Admission Fee/View";

import Challanadd from "./Accounts/Challan/Add";
import Challanedit from "./Accounts/Challan/Edit";
import Challanlist from "./Accounts/Challan/List";
import Challanview from "./Accounts/Challan/View";

import Defaulteradd from "./Accounts/Defaulter/Add";
import Defaulteredit from "./Accounts/Defaulter/Edit";
import Defaulterlist from "./Accounts/Defaulter/List";
import Defaulterview from "./Accounts/Defaulter/View";

import Accreportsadd from "./Accounts/Reports/Add";
import Accreportsedit from "./Accounts/Reports/Edit";
import Accreportslist from "./Accounts/Reports/List";
import Accreportsview from "./Accounts/Reports/View";

import Adminadd from "./Admin/Add";
import Adminedit from "./Admin/Edit";
import Adminlist from "./Admin/List";
import Adminview from "./Admin/View";

import Electiveadd from "./CSEP/Elective/Add";
import Electiveinedit from "./CSEP/Elective/Edit";
import Electivelist from "./CSEP/Elective/List";
import Electiveview from "./CSEP/Elective/View";

import houseadd from "./CSEP/Houses/Add";
import Housesedit from "./CSEP/Houses/Edit";
import Houseslist from "./CSEP/Houses/List";
import Housesview from "./CSEP/Houses/View";

import Societyadd from "./CSEP/Society/Add";
import Societyedit from "./CSEP/Society/Edit";
import Societylist from "./CSEP/Society/List";
import Societyview from "./CSEP/Society/View";

import Consulingadd from "./Consuling/Add";
import Consulingedit from "./Consuling/Edit";
import Consulinglist from "./Consuling/List";
import Consulingview from "./Consuling/View";

import Labsadd from "./Missclness/Labs/Add";
import Labsedit from "./Missclness/Labs/Edit";
import Labslist from "./Missclness/Labs/List";
import Labsview from "./Missclness/Labs/View";

import Photocopyadd from "./Missclness/Photocopy/Add";
import Photocopyedit from "./Missclness/Photocopy/Edit";
import Photocopylist from "./Missclness/Photocopy/List";
import Photocopyview from "./Missclness/Photocopy/View";

import Attendanceadd from "./SA/Attendance/Add";
import Attendanceedit from "./SA/Attendance/Edit";
import Attendancelist from "./SA/Attendance/List";
import Attendanceview from "./SA/Attendance/View";

import Disciplineadd from "./SA/Discipline/Add";
import Disciplineedit from "./SA/Discipline/Edit";
import Disciplinelist from "./SA/Discipline/List";
import Disciplineview from "./SA/Discipline/View";

import Sportsadd from "./SA/Sports/Add";
import Sportsedit from "./SA/Sports/Edit";
import Sportslist from "./SA/Sports/List";
import Sportsview from "./SA/Sports/View";

import Studentsadd from "./SA/Students/Add";
import Studentsedit from "./SA/Students/Edit";
import Studentslist from "./SA/Students/List";
import Studentsview from "./SA/Students/View";

import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {
  return (
   <Router >

   <Header />
   	<Switch>

      <Route path="/" exact component={withRouter(Dashboard)} />

      <Route path="/Users" exact component={withRouter(Users)} />
      <Route path="/Users/View/:id" exact component={withRouter(UsersView)} />
      <Route path="/Users/Add" exact component={withRouter(UsersAdd)} />
      <Route path="/Users/Edit/:id" exact component={withRouter(UsersEdit)} />

      <Route path="/Departments" exact component={withRouter(Departments)} />
      <Route path="/Departments/View/:id" exact component={withRouter(DepartmentView)} />
      <Route path="/Departments/Add" exact component={withRouter(DepartmentAdd)} />
      <Route path="/Departments/Edit/:id" exact component={withRouter(DepartmentEdit)} />

      <Route path="/Users/Role" exact component={withRouter(Roles)} />
      <Route path="/Users/Role/View/:id" exact component={withRouter(RolesView)} />
      <Route path="/Users/Role/Add" exact component={withRouter(RolesAdd)} />
      <Route path="/Users/Role/Edit/:id" exact component={withRouter(RolesEdit)} />

      <Route path="/Login" exact component={withRouter(Login)} />
      <Route path="/Forgotpassword" exact component={withRouter(Forgot)} />

      <Route path="/Admission/Queries" exact component={withRouter(Queries)} />
      <Route path="/Admission/Queries/View/:id" exact component={withRouter(QueriesView)} />
      <Route path="/Admission/Queries/Add" exact component={withRouter(QueriesAdd)} />
      <Route path="/Admission/Queries/Edit/:id" exact component={withRouter(QueriesEdit)} />

      <Route path="/Admission" exact component={withRouter(Admissions)} />
      <Route path="/Admission/View/:id" exact component={withRouter(AdmissionsView)} />
      <Route path="/Admission/Add" exact component={withRouter(AdmissionsAdd)} />
      <Route path="/Admission/Edit/:id" exact component={withRouter(AdmissionsEdit)} />
          
      <Route path="/Admission/Interview"exact component={withRouter(Interview)} />
      <Route path="/Admission/Interview/View/:id"exact component={withRouter(InterviewView)} />
      <Route path="/Admission/Interview/Add"exact component={withRouter(InterviewAdd)} />
      <Route path="/Admission/Interview/Edit/:id"exact component={withRouter(InterviewEdit)} />
      <Route path="/Admission/Interview/Reshedule/:id"exact component={withRouter(ReInterview)} />

      <Route path="/Admission/Reports" exact component={withRouter(AdminReports)} />

      <Route path="/AA/Exams/Add" exact component={withRouter(Examadd)} />
      <Route path="/AA/Exams/Edit/:id" exact component={withRouter(Examedit)} />
      <Route path="/AA/Exams" exact component={withRouter(Examlist)} />
      <Route path="/AA/Exams/View/:id" exact component={withRouter(Examview)} />

      <Route path="/AA/Subjects/Add" exact component={withRouter(Subjectsadd)} />
      <Route path="/AA/Subjects/Edit/:id" exact component={withRouter(Subjectsedit)} />
      <Route path="/AA/Subjects" exact component={withRouter(Subjectslist)} />
      <Route path="/AA/Subjects/View/:id" exact component={withRouter(Subjectsview)} />

      <Route path="/AA/Teachers/Add" exact component={withRouter(Teachadd)} />
      <Route path="/AA/Teachers/Edit/:id" exact component={withRouter(Teachedit)} />
      <Route path="/AA/Teachers" exact component={withRouter(Teachlist)} />
      <Route path="/AA/Teachers/View/:id" exact component={withRouter(Teachview)} />

      <Route path="/AA/TimeTable/Add" exact component={withRouter(timeadd)} />
      <Route path="/AA/TimeTable/Edit/:id" exact component={withRouter(timeedit)} />
      <Route path="/AA/TimeTable" exact component={withRouter(timelist)} />
      <Route path="/AA/TimeTable/View/:id" exact component={withRouter(timeview)} />

      <Route path="/Accounts/AddmissionFee/Add" exact component={withRouter(Addfeeadd)} />
      <Route path="/Accounts/AddmissionFee/Edit/:id" exact component={withRouter(Addfeeedit)} />
      <Route path="/Accounts/AddmissionFee" exact component={withRouter(Addfeelist)} />
      <Route path="/Accounts/AddmissionFee/View/:id" exact component={withRouter(Addfeeview)} />

      <Route path="/Accounts/Challan/Add" exact component={withRouter(Challanadd)} />
      <Route path="/Accounts/Challan/Edit/:id" exact component={withRouter(Challanedit)} />
      <Route path="/Accounts/Challan" exact component={withRouter(Challanlist)} />
      <Route path="/Accounts/Challan/View/:id" exact component={withRouter(Challanview)} />

      <Route path="/Accounts/Deafaulter/Add" exact component={withRouter(Defaulteradd)} />
      <Route path="/Accounts/Deafaulter/Edit/:id" exact component={withRouter(Defaulteredit)} />
      <Route path="/Accounts/Deafaulter" exact component={withRouter(Defaulterlist)} />
      <Route path="/Accounts/Deafaulter/View/:id" exact component={withRouter(Defaulterview)} />

      <Route path="/Accounts/AccReports/Add" exact component={withRouter(Accreportsadd)} />
      <Route path="/Accounts/AccReports/Edit/:id" exact component={withRouter(Accreportsedit)} />
      <Route path="/Accounts/AccReports" exact component={withRouter(Accreportslist)} />
      <Route path="/Accounts/AccReports/View/:id" exact component={withRouter(Accreportsview)} />

      <Route path="/Admin/Add" exact component={withRouter(Adminadd)} />
      <Route path="/Admin/Edit/:id" exact component={withRouter(Adminedit)} />
      <Route path="/Admin" exact component={withRouter(Adminlist)} />
      <Route path="/Admin/View/:id" exact component={withRouter(Adminview)} />

      <Route path="/CSEP/Elective/Add" exact component={withRouter(Electiveadd)} />
      <Route path="/CSEP/Elective/Edit/:id" exact component={withRouter(Electiveinedit)} />
      <Route path="/CSEP/Elective" exact component={withRouter(Electivelist)} />
      <Route path="/CSEP/Elective/View/:id" exact component={withRouter(Electiveview)} />

      <Route path="/CSEP/Houses/Add" exact component={withRouter(houseadd)} />
      <Route path="/CSEP/Houses/Edit/:id" exact component={withRouter(Housesedit)} />
      <Route path="/CSEP/Houses" exact component={withRouter(Houseslist)} />
      <Route path="/CSEP/Houses/View/:id" exact component={withRouter(Housesview)} />

      <Route path="/CSEP/Society/Add" exact component={withRouter(Societyadd)} />
      <Route path="/CSEP/Society/Edit/:id" exact component={withRouter(Societyedit)} />
      <Route path="/CSEP/Society" exact component={withRouter(Societylist)} />
      <Route path="/CSEP/Society/View/:id" exact component={withRouter(Societyview)} />

      <Route path="/Consuling/Add" exact component={withRouter(Consulingadd)} />
      <Route path="/Consuling/Edit/:id" exact component={withRouter(Consulingedit)} />
      <Route path="/Consuling/" exact component={withRouter(Consulinglist)} />
      <Route path="/Consuling/View/:id" exact component={withRouter(Consulingview)} />

      <Route path="/Misscluess/Labs/Add" exact component={withRouter(Labsadd)} />
      <Route path="/Misscluess/Labs/Edit/:id" exact component={withRouter(Labsedit)} />
      <Route path="/Misscluess/Labs" exact component={withRouter(Labslist)} />
      <Route path="/Misscluess/Labs/View/:id" exact component={withRouter(Labsview)} />

      <Route path="/Misscluess/Photocopy/Add" exact component={withRouter(Photocopyadd)} />
      <Route path="/Misscluess/Photocopy/Edit/:id" exact component={withRouter(Photocopyedit)} />
      <Route path="/Misscluess/Photocopy" exact component={withRouter(Photocopylist)} />
      <Route path="/Misscluess/Photocopy/View/:id" exact component={withRouter(Photocopyview)} />

      <Route path="/SA/Attendance/Add" exact component={withRouter(Attendanceadd)} />
      <Route path="/SA/Attendance/Edit/:id" exact component={withRouter(Attendanceedit)} />
      <Route path="/SA/Attendance" exact component={withRouter(Attendancelist)} />
      <Route path="/SA/Attendance/View/:id" exact component={withRouter(Attendanceview)} />

      <Route path="/SA/Discipline/Add" exact component={withRouter(Disciplineadd)} />
      <Route path="/SA/Discipline/Edit/:id" exact component={withRouter(Disciplineedit)} />
      <Route path="/SA/Discipline" exact component={withRouter(Disciplinelist)} />
      <Route path="/SA/Discipline/View/:id" exact component={withRouter(Disciplineview)} />

      <Route path="/SA/Sports/Add" exact component={withRouter(Sportsadd)} />
      <Route path="/SA/Sports/Edit/:id" exact component={withRouter(Sportsedit)} />
      <Route path="/SA/Sports" exact component={withRouter(Sportslist)} />
      <Route path="/SA/Sports/View/:id" exact component={withRouter(Sportsview)} />

      <Route path="/SA/Students/Add" exact component={withRouter(Studentsadd)} />
      <Route path="/SA/Students/Edit/:id" exact component={withRouter(Studentsedit)} />
      <Route path="/SA/Students" exact component={withRouter(Studentslist)} />
      <Route path="/SA/Students/View/:id" exact component={withRouter(Studentsview)} />

    </Switch>
    <Footer />
    </Router>
  );
}



export default  App;
