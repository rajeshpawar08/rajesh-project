const mainBody:any = document.querySelector(".mainbody");
var markup = `
<div class="header mx-0">
<div class="row h12">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="assets/icons/logo%20used%20in%20header.svg" alt="logo"
      /></a>
      <div class="d-flex flex-row order-2 order-lg-3">
        <ul class="navbar-nav flex-row ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="assets/icons/alerts.svg" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="assets/icons/announcements.svg" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="assets/icons/account_circle.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler order-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse order-3 order-lg-2"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link melement" href="#">DASHBOARD</a>
          </li>
          <li class="nav-item">
            <a class="nav-link melement" href="#">CONTENT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link melement" href="#">USERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link melement" href="#">REPORTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link melement" href="#">ADMIN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</div>

<!-- Main area  -->
<div class="mainarea container">
<div class="row container text-center candc justify-content-center">
  <div class="col" style="border-bottom: 4px solid #222222">
    <img src="assets/icons/courses.svg" alt="Courses" />
    <strong>4</strong> Courses
  </div>
  <div class="col">
    <img src="assets/icons/classes.svg" alt="" />
    <strong>4</strong> Classes
  </div>
</div>
<div class="row d-flex flex-row">
  <div class="col show1">Showing 4 of 4 courses</div>
  <div class="col sort1 d-flex ms-auto text-end justify-content-end">
    <div class="show1">Sort by:</div>
    <select name="cname" >
      <option value="">Course Name</option>
    </select>
  </div>
</div>
<hr />
.<div class="container-fluid">
  
  <div class="row">
    <div class="col cards col-sm-12 col-md col-12">
      <div class="imgmask">
        <img src="assets/images/imageMask.png" alt="">
      </div>
      <div class="alldata">
        <div class="staricon">
          <img src="assets/icons/favourite.svg" alt="">
        </div>
        <div class="row ">Acceleration</div>
        <div class="row"> <p class="show1 p-0 my-1">Physics | Grade 7+2</p> </div>
        <div class="row"> <p class="show1"> <strong> 4 </strong> Units <strong>18</strong> lessons <strong>24</strong> Topics</p> </div>
        <div class="row"> 
        <select name="tname"  class="selectincourse">
          <option value="" >Mr Frank's Class B</option>
        </select>
      </div>
        <div class="row"><p class="show1">50 Students | 21-Jan-2020 -  21-Aug-2020</p></div>
      </div>
      <div class="foot">
        <hr>
        <div class="row d-flex m-auto justify-content-center text-center">
          <div class="col">
            <img src="assets/icons/preview.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/manage%20course.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/grade%20submissions.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/reports.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="col cards col-sm-12 col-md col-12">
      <div class="imgmask">
        <img src="assets/images/imageMask-1.png" alt="">
      </div>
      <div class="alldata">
        <div class="staricon">
          <img src="assets/icons/favourite.svg" alt="">
        </div>
        <div class="row ">Displacement,Velocity and Speed</div>
        <div class="row"> <p class="show1 p-0 my-1">Physics 2 | Grade 6+3</p> </div>
        <div class="row"> <p class="show1"> <strong> 2 </strong> Units <strong>15</strong> lessons <strong>20</strong> Topics</p> </div>
        <div class="row"> 
          <select name="tname"  class="selectincourse">
            <option value="No class" disabled selected>No class</option>
          </select>
      </div>
        <div class="row"></div>
      </div>
      <div class="foot">
        <hr>
        <div class="row d-flex m-auto justify-content-center text-center">
          <div class="col">
            <img src="assets/icons/preview.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/manage%20course.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/grade%20submissions.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/reports.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col cards col-sm-12 col-md col-12">
      <div class="imgmask">
        <img src="assets/images/imageMask-3.png" alt="">
      </div>
      <div class="alldata">
        <div class="staricon">
          <img src="assets/icons/favourite.svg" alt="">
        </div>
        <div class="row ">Introduction to Biology:Micro orrganisms and how they affec...</div>
        <div class="row"> <p class="show1">Biology | Grade 4+1</p> </div>
        <div class="row"> <p class="show1"> <strong> 5 </strong> Units <strong>16</strong> lessons <strong>22</strong> Topics</p> </div>
        <div class="row"> 
          <select name="tname"  class="selectincourse">
            <option value="" >All classes</option>
          </select> 
        </div>
        <div class="row"><p class="show1">300 Students</p></div>
      </div>
      <div class="foot">
        <hr>
        <div class="row d-flex m-auto justify-content-center text-center">
          <div class="col">
            <img src="assets/icons/preview.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/manage%20course.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/grade%20submissions.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/reports.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="col cards col-sm-12 col-md col-12">
      <div class="imgmask">
        <img src="assets/images/imageMask-2.png" alt="">
      </div>
      <div class="alldata" id="fourthcontainer">
        <div class="row ">Introduction to High School Mathematics</div>
        <div class="row"> <p class="show1 p-0 my-1">Mathematics | Grade 8+3</p> </div>
        <div class="row">  </div>
        <div class="row"> 
          <select name="tname"  class="selectincourse">
            <option value="" >Mr Frank's Class A</option>
          </select></div>
        <div class="row"><p class="show1">44 Students | 14-Oct-2019 -  20-Oct-2020</p></div>
      </div>
      <div class="foot">
        <hr>
        <div class="row d-flex m-auto justify-content-center text-center">
          <div class="col">
            <img src="assets/icons/preview.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/manage%20course.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/grade%20submissions.svg" alt="" />
          </div>
          <div class="col">
            <img src="assets/icons/reports.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- footer  -->
<div class="container d-flex justify-content-center">
About | Contact us
</div>
<div class="footer">
<footer
  class="d-flex justify-content-center text-nowrap mx-0 text-center flex-flow-reverse w-100"
>
  <div class="row">
    <div class="col my-0">
      <img
        src="assets/icons/logo%20used%20in%20footer.svg"
        alt="footer logo"
        class="footerlogo"
      />
    </div>
    <div class="col my-0 text-center">
      Copyright &copy; 2020-2021
      <strong>Zeus Systems Pvt. Ltd</strong> All rights reserved
    </div>
  </div>
</footer>
</div>
`;


mainBody.innerHTML = markup;
