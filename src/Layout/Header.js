import React, { Component }  from 'react';
import {  Route,Link } from "react-router-dom";
import '../Assests/css/footer.css';
import '../Assests/css/header.css';
import logo from '../Assests/images/logo.png'
import  'boxicons';
import { BiSearchAlt, BiBell , BiDesktop , BiTask ,BiPencil , BiChart , BiListCheck ,BiSpreadsheet , BiDice6 , BiBarChartSquare , BiTimeFive, BiHome, BiTestTube, BiPaperclip, BiBookBookmark, BiFootball, BiPaint,} from 'react-icons/bi';
import {BsPeopleCircle} from 'react-icons/bs';
import {GrGroup} from 'react-icons/gr';
import {AiOutlineForm,AiOutlineFall} from 'react-icons/ai';
import {MdPayment} from 'react-icons/md';
import {VscLaw} from 'react-icons/vsc';
import ava from '../Assests/images/avatar.jpg';
 

export default class Header extends Component {
	render(){
		if (window.location.pathname === '/login') {return null;}
		else if(window.location.pathname === '/Forgotpassword') {return null;}
		else{
  return (
		<div>
			<div className="top-bar">
				<div className="inner-top-bar">
					<div className="main-logo">
					<Link to="/" ><img className="logo" src={logo} alt="" /></Link>	
					</div>
					<div className="main-sreach-bar">
						<form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                  <BiSearchAlt/>
          				<input className="form-control" type="text" value=""  placeholder="Search..." />
          				</div>
          				</form>
					</div>
					<div className="main-profile">

						<div className="menu-icon">
							<BiBell className="bx-tada-hover" />
						</div>

						<div className="menu-profile">
							<button id="page-header-user-dropdown" aria-haspopup="true" className="header-btn" aria-expanded="false">
							<img className="header-profile-user" src={ava} alt="Header Avatar"/>
							<span className="header-profile-name">admin</span>
							<i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
							</button>
						</div>

					</div>
				</div>	
			</div>
<div className="top-nav-bar">
	<div className="nav-bar">
		<Route>
			
      <div>
        <ul className="nav-bar-menu">
          <li className="nav-bar-list">
            <Link className="cc" to="/Admin"><BiDesktop /> Admin</Link>
          </li>
          <li className="nav-bar-list">
            <Link className="cc" to="/Admission"><BiDesktop /> Admission <div className="arrow-down"></div></Link>
            <ul className="sub-nav-bar-menu">
            	<li className="nav-bar-list"> <Link to="/Admission/Queries"><AiOutlineForm/> Queries </Link> </li>
            	<li className="nav-bar-list"> <Link to="/Admission"><BiBarChartSquare /> Admissions </Link> </li>
              <li className="nav-bar-list"> <Link to="/Admission/Interview"><BiBarChartSquare /> Interview </Link> </li>
              <li className="nav-bar-list"> <Link to="/Admission/Reports"><BiBarChartSquare /> Reports </Link> </li>
            	</ul>
          </li>
          <li className="nav-bar-list">
            <Link className="cc" to="/dashboard"><BiTask/> Accounts <div className="arrow-down"></div></Link>
            <ul className="sub-nav-bar-menu">
				<li className="nav-bar-list"> <Link to="/Accounts/AddmissionFee/"><AiOutlineFall/>Admission Fee </Link> </li>
            	<li className="nav-bar-list"> <Link to="/Accounts/Challan"><MdPayment/> Challan </Link> </li>
            	<li className="nav-bar-list"> <Link to="/Accounts/Deafaulter"><AiOutlineFall/>Defaulters </Link> </li>
            	<li className="nav-bar-list"><Link to="/Accounts/AccReports"><BiBarChartSquare />  Reports </Link> </li>
            	</ul>
          </li>

          <li className="nav-bar-list">
            <Link className="cc" to="/dashboard"><BiPencil/> Academic Affairs <div className="arrow-down"></div></Link>
              	<ul className="sub-nav-bar-menu">
				  	<li className="nav-bar-list"> <Link to="/AA/Subjects"><BiBookBookmark/> Subjects </Link> </li>
				  	<li className="nav-bar-list"> <Link to="/AA/Exams"><BiBookBookmark/> Exams </Link> </li>
            		<li className="nav-bar-list"> <Link to="/AA/Teachers"><BsPeopleCircle/> Teachers </Link> </li>
            		<li className="nav-bar-list"> <Link to="/AA/TimeTable"><BiTimeFive/> TimeTable </Link> </li>
            	</ul>
          </li>

          <li className="nav-bar-list">
            <Link className="cc" to="/Consuling"><BiChart/> Counsling <div className="arrow-down"></div></Link>
            	<ul className="sub-nav-bar-menu">
            		<li className="nav-bar-list"> <Link to="/Consuling"><BiBarChartSquare /> Reports </Link> </li>
            	</ul>
          </li>
          <li className="nav-bar-list">
            <Link className="cc" to="/CSEP/Elective"><BiListCheck/> CSEP <div className="arrow-down"></div></Link>
                <ul className="sub-nav-bar-menu">
            		<li className="nav-bar-list"> <Link to="/CSEP/Houses"><BiHome/> Houses </Link> </li>
            		<li className="nav-bar-list"> <Link to="/CSEP/Elective"><BiPaint/>Elective </Link> </li>
            		<li className="nav-bar-list"> <Link to="/CSEP/Society"><GrGroup/> Society </Link> </li>
            	</ul>
          </li>
          <li className="nav-bar-list">
            <Link className="cc" to="/SA/Students"><BiSpreadsheet/> Student Affairs <div className="arrow-down"></div></Link>
                <ul className="sub-nav-bar-menu">
            		<li className="nav-bar-list"> <Link to="/SA/Students"><BsPeopleCircle/> Student </Link> </li>
            		<li className="nav-bar-list"> <Link to="/SA/Sports/"><BiFootball/> Sports </Link> </li>
            		<li className="nav-bar-list"> <Link to="/SA/Attendance"><VscLaw/>Discipline </Link> </li>
					<li className="nav-bar-list"> <Link to="/SA/Discipline"><VscLaw/>Attendance </Link> </li>
            	</ul>            
          </li>

          <li className="nav-bar-list">
            <Link className="cc" to="/Misscluess/Labs"><BiDice6/> Missclous <div className="arrow-down"></div></Link>
            	<ul className="sub-nav-bar-menu">
            	<li className="nav-bar-list"> <Link to="/Misscluess/Labs"><BiTestTube/> labs </Link> </li>
            	<li className="nav-bar-list"> <Link to="/Misscluess/Photocopy"><BiPaperclip/> PhotoCopy </Link> </li>
            	</ul>

          </li>

          <li className="nav-bar-list">
            <Link className="cc" to="/Users"><BiDice6/> HR <div className="arrow-down"></div></Link>
              <ul className="sub-nav-bar-menu">
              <li className="nav-bar-list"> <Link to="/Users"><BsPeopleCircle/> Users </Link> </li>
			  <li className="nav-bar-list"> <Link to="/Departments"><BsPeopleCircle/> Departments </Link> </li>
			  <li className="nav-bar-list"> <Link to="/Users/Role"><BsPeopleCircle/> Roles </Link> </li>
              </ul>

          </li>
        </ul>

    
      
      </div>
      </Route>
	
	</div>
	</div>
</div>

	 );
}
}
}