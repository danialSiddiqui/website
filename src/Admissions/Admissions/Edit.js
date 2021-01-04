import React from "react";
import { Link } from "react-router-dom";
import '../Assests/css/style.css';


function EditAdmissions() {
  return (
   <div class="inter-body">
    <div class="container-fluid">
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
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
            <h3>Add New Student</h3>
            <p>You can crete a brand new Student by Filling the following details.</p>
            <hr />

            <form >

   <h3>Student Information</h3>
              <div class="row">
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Name:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">CNIC/Passpot No/ SmartCard No:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                </div>
              </div>
              <div class="row">
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Image:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Email:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
              <div class="row">
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Family Language:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Nationality:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
              <div class="row">
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Date of Brith:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-6 form-group">
                  <label class="sec-1">
                      <span class="label-text">Gender:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
              <div class="row">
                <div class="col-12 form-group">
                  <label class="sec-1">
                      <span class="label-text">Current Address:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-12 form-group">
                  <label class="sec-1">
                      <span class="label-text">Permanent Address:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-12 form-group">
                  <label class="sec-1">
                      <span class="label-text">Applying For:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>

              <h3>Parent Information</h3>

            <div class="row">
               <div class="col-12">
                  <h5>Father Info</h5>
                  <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Status:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>


                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Father Name:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Email:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
                  <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Phone No:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Office No:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>

                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">CNIC Number:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  </div>
                <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Bussiness Address:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>

                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Occupation:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Industry:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
               </div>
               </div>
               <div class="row">
               <div class="col-12">
                  <h5>Mother Info</h5>
                  <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Status:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>


                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Mother Name:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Email:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
                  <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Phone No:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Office No:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">CNIC Number:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
                <div class="row">
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Bussiness Address:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>

                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Occupation:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Industry:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
               </div>
               </div>

               <div class="row">
               <div class="col-12">
                  <h5>Sibiling Details</h5>

                     <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Name:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Relation Ship:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>

                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Age:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Name of Institute:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
              </div>
               </div>
               </div>

               <div class="row">
               <div class="col-12">
                  <h5>Emergency Details</h5>

                     <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Contact Person Name:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Phone Number:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Relation Ship:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div class="row">
               <div class="col-12">
                  <h5>Academic Information</h5>

                     <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Subject 1:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Subject 2:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Subject 3:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Subject 4:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div class="row">
               <div class="col-12">
                  <h5>O Level Results</h5>

                     <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Accounting:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Economics:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Business:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Maths:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
               <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Physics:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Chemistry:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Biology:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Sociology:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
               <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Computer Sciences:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">English literature:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">English language:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Pakistan Studies:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
               <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Add Maths:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Urdu:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Islamiat:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Enivormental Management:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
            </div>
         </div>

         <div class="row">
               <div class="col-12">
                  <h5>Extra Details</h5>

                     <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Career Choice:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Extra & Co-Curricular Activites:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Sports:</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Responsibility held in school</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
               <div class="row">
                <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Short paragraph on yourself:</span> <br />
                      <textarea class="form-control" type="text" value=""  > test </textarea>
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">Health Problems:</span> <br />
                      <textarea class="form-control" type="text" value=""   > test</textarea>
                    </label>
                  </div>
                  <div class="col-3 form-group">
                  <label class="sec-1">
                      <span class="label-text">How did you come to know about Credo College?</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>
               <div class="row">

                  <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">What is your main reason for taking admission in Credo College?</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
                  <div class="col-4 form-group">
                  <label class="sec-1">
                      <span class="label-text">Does the child have any sibling studying at Credo School or Credo College?
</span> <br />
                      <input class="form-control" type="text" value=""  placeholder="Username" />
                    </label>
                  </div>
               </div>

            </div>
         </div>


              <div class="row">
                <div class="col-12 form-group">
                  <label class="sec-1">

                      <input class="btn btn-primary" type="submit" value="Add User"  placeholder="Username" />
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

export default  EditAdmissions;