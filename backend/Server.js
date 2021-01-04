const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const UsersRouter = require('./Routes/Users');
const InterviewRouter = require('./Routes/Interview');
const QurriesRouter = require('./Routes/Qurries');
const AdmissionsRouter = require('./Routes/Admissions');
const RoleRouter = require('./Routes/Role');
const DepartmentRouter = require('./Routes/Department');






app.use('/Users',UsersRouter);
app.use('/Interview',InterviewRouter);
app.use('/Qurries',QurriesRouter);
app.use('/Admissions',AdmissionsRouter);
app.use('/Role',RoleRouter);
app.use('/Department',DepartmentRouter);





app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});