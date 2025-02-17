import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import MyEnrollements from "./pages/student/MyEnrollements";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/DashBoard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:id" element={<CourseList />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/my-enrollements" element={<MyEnrollements/>} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator/>}>
              <Route path="/educator" element={<Dashboard/>}/>
              <Route path="add-course" element={<AddCourse/>}/>
              <Route path="my-courses" element={<MyCourses/>}/>
              <Route path="student-enrolled" element={<StudentsEnrolled/>}/>

        </Route>
      </Routes>
    
    </div>
  );
};

export default App;
