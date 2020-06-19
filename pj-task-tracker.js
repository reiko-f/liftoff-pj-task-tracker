// 1 Home

// 1) open tabs
function openTab(tabName, element, color) {
  let tabContent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  let tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  element.style.backgroundColor = color;
}
setTimeout(_ => document.getElementById("defaultOpen").click(), 1000);


// 2) login

function loginForm(form) {      
  if (form.username.value == "lavender123" && form.password.value == "lavender") {  
    
      let homeLogin = document.getElementById("home-login");
      homeLogin.innerHTML = "Hi, " + form.username.value + "!";

      let plans = document.getElementById("tasks");
      plans.innerHTML = form.username.value + " 's Tasks for Today";
      
      let achievements = document.getElementById("achievements");
      achievements.innerHTML = form.username.value + " 's Achievement";

      let rewards = document.getElementById("rewards");
      rewards.innerHTML = form.username.value + " 's Reward";
      
      let loginForm = document.getElementById("to-login");
      loginForm.innerHTML = 
      `
      <div id="point-storage">
        <h2>Point Bank</h2>
        <br>
        <h3>Your Point as of</h3>
        <p id="as-of-today"></p>
        <div id="point-container"></div>        
        <br>
      </div>
      
      `;

  } else {
      alert("Invalid password.");
  }     
}

// 3) signup

// target points

function start() {
  let startDate = document.getElementById("start-date");  
  let startDateValue = startDate.value;
  let userStartDate = new Date(startDateValue);
  let startTime = userStartDate.getTime();
  document.getElementById("user-start").innerHTML = startTime;
  //document.getElementById();
  return startTime;
}  

function end() {
  let endDate = document.getElementById("end-date");
  let endDateValue = endDate.value;
  let userEndDate = new Date(endDateValue);
  let endTime = userEndDate.getTime();
  document.getElementById("user-end").innerHTML = endTime;
  return endTime;
}  
function calculateDays() {
  let calStart = document.getElementById("user-start").innerHTML;
  let calEnd = document.getElementById("user-end").innerHTML;
  let targetDaysInTimes = Math.abs(calEnd - calStart);
  let targetDays = Math.ceil(targetDaysInTimes / (1000 * 60 * 60 * 24) + 1);  
  document.getElementById("target-days").innerHTML = targetDays;  
  return targetDays;
} 


// setting coupon

document.getElementById("coupon-btn").addEventListener("click", function yesCoupon(){});
  
function yesCoupon() { 

  let couponChoice = document.getElementById("coupon");  
  
  if (couponChoice.value == "yes") {
      let set = document.getElementById("coupon-set");
      set.innerHTML = `
      
      <br>
      <label for="coupon-numbers">How Many?</label>
                <select id="coupon-numbers">
                  <option id="coupon-nums">numbers</option> 
                  <option value=1>1</option>            
                  <option value=2>2</option>
                  <option value=3>3</option>
                </select>
                <button onclick="numsCoupon()" id="couponNums-btn">Coupon Nums</button>
                <div id="coupon-number"></div>      
      `;      
  }  
}

function numsCoupon() {  
  
  if (document.getElementById("coupon-numbers")) {
    let couponNumbers = document.getElementById("coupon-number").innerHTML
    couponNumbers = document.getElementById("coupon-numbers").value;     
  
// coupon user input
    if (couponNumbers == 1) {    
      let couponSet = document.getElementById("couponContent-set");
      couponSet.innerHTML = `
        
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">   
        <button onclick="makeCoupon()" id="makeCoupon-btn">Make Coupon</button>    
        <p class="make-coupon"></p> 
              
        `
    } else if (couponNumbers == 2) {
      couponSet = document.getElementById("couponContent-set");
      couponSet.innerHTML = `
        
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">       
        <p class="make-coupon"></p>
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">       
        <button onclick="makeCoupon()" id="makeCoupon-btn">Make Coupon</button>    
        <p class="make-coupon"></p>       
        `
    } else if (couponNumbers == 3) {
      couponSet = document.getElementById("couponContent-set");
      couponSet.innerHTML = `
        
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">       
        <p class="make-coupon"></p>
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">       
        <p class="make-coupon"></p>
        <br>
        <label for="coupon-content">Enter what you would like to get a coupon</label>
        <input type="text" class="coupon-content" placeholder="enter anything">       
        <button onclick="makeCoupon()" id="makeCoupon-btn">Make Coupon</button>    
        <p class="make-coupon"></p> 

        `
    } 
  }
}

function makeCoupon() {
  let coupons = document.getElementsByClassName("coupon-content").innerHTML;  
  document.getElementsByClassName("make-coupon").innerHTML = coupons;
}


// sign-up form
function signUpForm(form) {
  // if (form.username.value == "Reiko" && form.password.value == "lavender") {  
    
    let homeLogin = document.getElementById("home-login");
    homeLogin.innerHTML = "Hi, " + form.username.value + "!";

    let plans = document.getElementById("tasks");
    plans.innerHTML = form.username.value + " 's Tasks for Today";
    
    let achievements = document.getElementById("achievements");
    achievements.innerHTML = form.username.value + " 's Achievement";

    let rewards = document.getElementById("rewards");
    rewards.innerHTML = form.username.value + " 's Reward";

    let signUpTitle = document.getElementById("signup-title");
    signUpTitle.innerHTML = "Sign Up Confirmed";

    let signUpDirection = document.getElementById("signup-direction");
    signUpDirection.innerHTML = "Your account is set up";

    let confirmPw = document.getElementById("confirm-pw");
    confirmPw.textContent = "";
    
    let rememberMe = document.getElementById("remember-me");
    rememberMe.textContent = "";

    
  // let username = document.getElementById("username-placed");
  // let password = document.getElementById("password-placed");    
  // let startDate = document.getElementById("user-start");    
  // let endDate = document.getElementById("user-end");    
  // let targetDays = document.getElementById("target-days");     
  // let setUpCoupons = document.getElementsByClassName("set-coupon").value;    
  // let numOfCoupons = document.getElementById("coupon-number").value; 
     
    // let signUpForm = document.getElementById("to-signup");
    // signUpForm.innerHTML = 
    // `
    // <div id=submit-confirm-container>
    //   <h2>Account Set Up</h2>
    //   <br>
    //     <h3>  Username: </h3>
    //     <h3>   Password: </h3>
    //     <h3>   Start Date: </h3>
    //     <h3>   End Date: </h3>
    //     <h3>   Target Days: </h3>
    //     <h3>   Set Up Coupon: </h3>
    //     <h3>   Number Of Coupons: </h3>
    // </div>    
    // <br>
    // <br>
    // <div id="point-storage">
    //   <h2>Point Bank</h2>
    //   <br>
    //   <h3>Your Point as of</h3>
    //   <p id="as-Of-today">0</p>m
    //   <div id="point-container"></div>        
    //   <br>
    // </div>    
    // `;

  // } else {
  //   alert("Invalid setting.");
  // }
}  


// 2 Plan

// 1) calendar

let today = new Date();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

let calendar = document.getElementById("calender");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let monthAndYear = document.getElementById("monthAndYear");  
loadCalendar(thisMonth, thisYear);

function next() {
  if (thisMonth == 11) {
    thisYear = thisYear + 1;
  } else {
    thisYear = thisYear;
  }
  if (thisMonth == 11) {
    thisMonth = thisMonth -11;
  } else {
    thisMonth = thisMonth + 1;
  }
  loadCalendar(thisMonth, thisYear);
}

function previous() {
  if (thisMonth == 0) {
    thisYear = thisYear -1;
  } else {
    thisYear = thisYear;
  }
  if (thisMonth == 0) {
    thisMonth = thisMonth + 11;
  } else {
    thisMonth = thisMonth -1;
  }
  loadCalendar(thisMonth, thisYear);
}

function loadCalendar(month, year) {

  let dayOne = (new Date(year, month)).getDay();
  
  let daysOfMonth = function (year, month) {
    if (month == 1 && year %4 == 0) {
      return 29;
    } else if (month == 1 && year %4 != 0) {
      return 28;
    } else if (month = 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return 31;
    } else {
      return 30;
    }
  };
  
  let calendarDays = document.getElementById("calendar-body");
  calendarDays.innerHTML = "";
  
  monthAndYear.innerHTML = months[month] + " " + year;  

  // calender contents
  let days = 1;

  for (let i = 0; i < 6; i++) {
    let daysRow = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      //while (days <= daysOfMonth(month, year)) { 
        if (i == 0 && j < dayOne) {
          let daysCell = document.createElement("td");
          let daysText = document.createTextNode("");
          daysCell.appendChild(daysText);
          daysRow.appendChild(daysCell);
        } else if (days > daysOfMonth(year, month)) {
            break;
        } else {      
          daysCell = document.createElement("td");
          daysText = document.createTextNode(days);
          
          if (days == today.getDate() && year == today.getFullYear() && month == today.getMonth()) {
            daysCell.style.backgroundColor = "cyan";
          } 
          daysCell.appendChild(daysText);
          daysRow.appendChild(daysCell);
          days++;          
        }
      //} 
    }
    calendarDays.appendChild(daysRow);
  }  
}

// 2) task list

// add a task
function addTask() {
  let taskItem = document.createElement("li");
  let inputValue = document.getElementById("task-input").value;
  let itemText = document.createTextNode(inputValue);
  taskItem.appendChild(itemText);
  if (inputValue == "") {
    alert("Enter a task!");
  } else {
    document.getElementById("task-list").appendChild(taskItem)
  }  
  inputValue = "";

  // put a trash button
  //for (let i=0; i<taskItem.length; i++) {
    let spanIcon = document.createElement("SPAN");    
    spanIcon.innerHTML = "<i class='far fa-trash-alt'></i>";        
    spanIcon.className = "delete-btn";       
    taskItem.appendChild(spanIcon);      
    //taskItem[i].appendChild(span);
     
  //}      
}   

// put a checkmark
let list = document.querySelector("ul");  
list.addEventListener("click", function(event) {
  if (event.target.tagName == "LI") {  
      event.target.classList.toggle("checked");  
  }
}, false); 

// put a trash button
taskItem = document.createElement("li");
//for (let i=0; i<taskItem.length; i++) {
  let spanIcon = document.createElement("SPAN");    
  spanIcon.innerHTML = "<i class='far fa-trash-alt'></i>";        
  spanIcon.className = "delete-btn";  
  taskItem++; 
//}
     

// delete a task
function deleteTask(event) {         
  if (event.target.classList.contains("delete-btn")) {
    list.removeChild(event.target.parentElement);              
  } 
}
let deleteBtn = document.getElementsByClassName("delete-btn");
list.addEventListener("click", deleteTask, false); 
 

// 3 Achievement

// 1) self assessment

// today's date
let todaysDate = new Date();
//document.getElementById("as-of-today").innerHTML = todaysDate.toLocaleString().split(',')[0];
//document.getElementById("as-Of-today").innerHTML = todaysDate.toLocaleString().split(',')[0];
document.querySelector(".today").innerHTML = todaysDate.toLocaleString().split(',')[0];
document.getElementById("asof-today").innerHTML = todaysDate.toLocaleString().split(',')[0];

// choose today's point

// let rateOption = document.getElementById("option-select").value ;
// let selectedPoint = document.getElementById("rate");

function todaysRate() {
   
  let rateOption = document.getElementById("option-select").value ;
  let selectedPoint = document.getElementById("rate");

  if (rateOption ==5) {
    selectedPoint.innerHTML = '\n' + 'Great job!';
    document.getElementById("todays-rate").innerHTML = rateOption;    

  } else if (rateOption == 3) {
    selectedPoint.innerHTML = '\n' + 'Nice!';
    document.getElementById("todays-rate").innerHTML = rateOption;

  } else if (rateOption == 1) {
    selectedPoint.innerHTML = '\n' + 'Keep up!';
    document.getElementById("todays-rate").innerHTML = rateOption;

  } else {
    selectedPoint.innerHTML = rateOption;
  }  
}


// 2) point bank

// keep points 


function pointUpdate() {
  // for (let i=0; i<targetDays.length; i++) { 
  
  let rateOption = Number(document.getElementById("todays-rate").innerHTML);

  let totalPoints = document.querySelector("#point-counter").innerHTML;
  let totalPointsText = document.querySelector("#point-counter");

  let counter = Number(totalPoints);

  totalPointsText.innerHTML = counter +  rateOption;

}


// 3) progress bar

// points to bar
function progressUpdate() {    
  let j=0;
  if (j==0) {
    j=1;
    let bar = document.getElementById("bar");  
    let width = 0;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {   
        clearInterval(id);   
        j=0;     
      } else {
        width++;
        
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
                 
      }
    }    
  }  
}  


// 4 Reward

//get a coupon

function getCoupon() {

  //pointUpdate();

  //calculateDays();  

  let totalPoints = 60;
  let targetDays = 15;

  let coupon1 = document.getElementById("coupon1");
  let coupon2 = document.getElementById("coupon2");
  let coupon3 = document.getElementById("coupon3");
  let noCoupon = document.getElementById("not-yet"); 
  


  if (totalPoints >= ((targetDays * 5) * 0.8)) {  
    coupon1.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-1</p>
    <br>       
    <br>
    `;
   
  } else if (totalPoints >= ((targetDays * 5) / 2 * 0.8)) {  
    coupon1.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-1</p>
    <br>       
    <br>
    `; 
  coupon2.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-2</p>
    <br>       
    <br>
    `;

  } else if (totalPoints >= ((targetDays * 5) / 3 * 0.8)) {
    coupon1.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-1</p>
    <br>       
    <br>
    `; 
  coupon2.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-2</p>
    <br>       
    <br>
    `;
  coupon3.innerHTML = `
    <div class="title-container">
    <br>
    <h2>You've got a reward!</h2>
    </div>
    <img src="cup-img.png" alt="coupon" width="200" height="150">
    <div class="coupon-text">
      <h3>You got</h3>
      <h2 class="coupon-content"></h2>
    </div>
    <div class="coupon-footer">
      <p>coupon-3</p>
    <br>       
    <br>
    `;

  } else {
    noCoupon.innerHTML = `<h2>You don't have enough points yet!  Keep going!</h2>`;
  } 

}
