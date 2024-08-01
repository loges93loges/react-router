import React from 'react';

const AllCourses = () => {
  return (
    <div>
      <h2>All Courses</h2>
      <div className='box'>
        <img src='images\cyber.jpeg' />
      <h2>Cyber Security</h2>
      <p>Cyber Security course content...</p>
      <button>View Courses</button>
    </div><br/>
    <div className='box'>
      <img src='images\science.jpg' />
      <h2>Data Science</h2>
      <p>Data Science course content...</p>
      <button>View Courses</button>
    </div><br/>
    <div className='box'>
      <img src='images\stack.jpeg' />
      <h2>Full Stack Development</h2>
      <p>Full Stack Development course content...</p>
      <button>View Courses</button>
    </div><br/>
    <div className='box'>
      <img src='images\OIP.jpeg' />
      <h2>Machine Learning</h2>
      <p>Machine Learning course content...</p>
      <button>View Courses</button>
    </div>
    </div>
  );
};

export default AllCourses;
