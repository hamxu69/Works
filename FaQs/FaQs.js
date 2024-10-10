// const data = [
//   {
//     heading: "The Future of Technology",
//     id: 1,
//     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit."
//   },
//  {
//     heading: "Innovative Solutions for All",
//     id: 2,
//     message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   }, 
//   {
//     heading: "Empowering the Next Generation",
//     id: 3,
//     message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
//   },
//   {
//     heading: "Unlocking Global Opportunities",
//     id: 4,
//     message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
//   },
//   {
//     heading: "Leading the Digital Revolution",
//     id: 5,
//     message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
//   }
// ];

const data = [
  
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    phone: "555-1234",
    status: "active",
    company: "TechCorp",
    role: "Software Engineer",
    salary: 85000,
    projects: ["ProjectA", "ProjectB", "ProjectC"],
    heading: "New Software Features",
    message: "John is working on the new software update that includes multiple new features for the upcoming release."
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    address: "456 Elm St, Townsville",
    phone: "555-5678",
    status: "inactive",
    company: "Innovate Inc.",
    role: "Product Manager",
    salary: 92000,
    projects: ["ProjectD", "ProjectE"],
    heading: "Product Redesign Initiative",
    message: "Jane is leading the product redesign initiative but is currently on a sabbatical."
  },
  {
    id: 3,
    name: "Robert Brown",
    age: 42,
    email: "robert.brown@example.com",
    address: "789 Oak St, Villageview",
    phone: "555-9876",
    status: "active",
    company: "DesignWorks",
    role: "Creative Director",
    salary: 105000,
    projects: ["ProjectF", "ProjectG", "ProjectH"],
    heading: "New Marketing Campaign",
    message: "Robert is responsible for directing the new marketing campaign set to launch next month."
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 30,
    email: "emily.davis@example.com",
    address: "101 Maple St, Metropolis",
    phone: "555-4321",
    status: "active",
    company: "MarketPlus",
    role: "Marketing Specialist",
    salary: 71000,
    projects: ["ProjectI", "ProjectJ"],
    heading: "Campaign Performance Review",
    message: "Emily is reviewing the performance of the recent ad campaigns and preparing a report."
  },
  {
    id: 5,
    name: "Michael Johnson",
    age: 37,
    email: "michael.johnson@example.com",
    address: "234 Pine St, Downtown",
    phone: "555-8765",
    status: "on leave",
    company: "FinTech Solutions",
    role: "Financial Analyst",
    salary: 98000,
    projects: ["ProjectK", "ProjectL"],
    heading: "Financial Planning Break",
    message: "Michael is currently on leave, taking a break from managing financial planning for the firm."
  },
  {
    id: 6,
    name: "Olivia Wilson",
    age: 25,
    email: "olivia.wilson@example.com",
    address: "567 Cedar St, Uptown",
    phone: "555-6543",
    status: "active",
    company: "HealthCare Inc.",
    role: "HR Manager",
    salary: 68000,
    projects: ["ProjectM", "ProjectN"],
    heading: "HR Policy Updates",
    message: "Olivia is drafting new HR policies to improve employee satisfaction and retention."
  },
  {
    id: 7,
    name: "Daniel Garcia",
    age: 29,
    email: "daniel.garcia@example.com",
    address: "890 Birch St, Suburbia",
    phone: "555-3210",
    status: "active",
    company: "EduLearn",
    role: "Teacher",
    salary: 56000,
    projects: ["ProjectO", "ProjectP", "ProjectQ"],
    heading: "Online Course Development",
    message: "Daniel is developing new online courses to enhance the remote learning experience for students."
  },
  {
    id: 8,
    name: "Sophia Martinez",
    age: 33,
    email: "sophia.martinez@example.com",
    address: "345 Spruce St, Midcity",
    phone: "555-7890",
    status: "active",
    company: "GreenEnergy",
    role: "Environmental Scientist",
    salary: 87000,
    projects: ["ProjectR", "ProjectS"],
    heading: "Sustainable Energy Solutions",
    message: "Sophia is researching sustainable energy solutions to be implemented in the next fiscal year."
  },
  {
    id: 9,
    name: "David Anderson",
    age: 45,
    email: "david.anderson@example.com",
    address: "678 Willow St, Riverside",
    phone: "555-0987",
    status: "retired",
    company: "Legacy Corp",
    role: "CEO",
    salary: 150000,
    projects: ["ProjectT", "ProjectU"],
    heading: "Business Growth Strategies",
    message: "David is consulting on business growth strategies after retiring from his role as CEO."
  },
  {
    id: 10,
    name: "Emma Clark",
    age: 27,
    email: "emma.clark@example.com",
    address: "901 Redwood St, Highlands",
    phone: "555-1230",
    status: "active",
    company: "Creative Minds",
    role: "UX Designer",
    salary: 73000,
    projects: ["ProjectV", "ProjectW", "ProjectX"],
    heading: "UX Design Improvements",
    message: "Emma is working on improving the user experience for the company's flagship product."
  }
];





$(document).ready(function() {
  display()

});


function display() {
  let html = "";
  loader.show
  if (data.length === 0) {
    return;
  }
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  
   html += ` <div class="faq" id="parentDiv-${element.id}">
  <div class="click" onclick="toggle(${element.id})">
  
  <p>${element.heading}</p>
  <img class="plus" src="icon-plus.svg" alt="" style="display: block;">
  <img class="minus" src="icon-minus.svg" alt="" srcset="" style="display: none;">          </div>
  <div class="para" id="message-${element.id}" style="display: none;">
  <p class="ansOne">
${displayProject(element.projects)}
  </p>
  </div>
  <div class="new" style="height: 2px; width: 100%; background-color: rgba(145, 31, 31, 0.055);"></div>
  </div>`
}


document.querySelector(".parent").innerHTML = html

}

function displayProject(arrData) {
  console.log(arrData);
let html = ""
  for (let index = 0; index < arrData.length; index++) {
    const element = arrData[index];
    html += `<span> ${element} </span> ` 
    
  }

  return html;

  
  
}

function toggle(id) {
  console.log({"id":id});
  // const elm = document.querySelector(`#message-${id}`)
  // if (elm.style.display === "block") {
  //   elm.style.display = "none"
  // }
  // else{
    
  //   elm.style.display = "block"
  // }

  // 2nd way 

  const elm = document.querySelector(`#parent-${id}`)
  if (elm.classList.contains("displayBlock")) {
    elm.classList.remove("displayBlock")
    elm.classList.add("displayNone")
  }
  else{
    
    elm.classList.remove("displayNone")
    elm.classList.add("displayBlock")
  }

}



// function display() {
//   const parentElement = document.querySelector(".parent");
//   parentElement.innerHTML = ''; // Clear the parent element
  
//   for (let index = 0; index < data.length; index++) {
//     const element = data[index];

//     // Create parent div with class "faq"
//     const parentDiv = document.createElement("div");
//     parentDiv.classList.add("faq");
//     parentDiv.id = `parentDiv-${element.id}`;
//     // parentDiv.id = `parentDiv-` + element.id;

//     // Create click div
//     const clickDiv = document.createElement("div");
//     clickDiv.classList.add("click");
//     clickDiv.setAttribute("onclick", `toggle(${element.id})`);

//     // Create the heading paragraph
//     const headingPara = document.createElement("p");
//     headingPara.textContent = element.heading;

//     // Create the plus image
//     const plusImg = document.createElement("img");
//     plusImg.classList.add("plus");
//     plusImg.src = "icon-plus.svg";
//     plusImg.setAttribute("src", "icon-plus.svg");

//     plusImg.style.display = "block";

//     // Create the minus image
//     const minusImg = document.createElement("img");
//     minusImg.classList.add("minus");
//     minusImg.src = "icon-minus.svg";
//     minusImg.alt = "";
//     minusImg.style.display = "none";

//     // Append heading and images to the click div
//     clickDiv.appendChild(headingPara);
//     clickDiv.appendChild(plusImg);
//     clickDiv.appendChild(minusImg);

//     // Create the message div
//     const messageDiv = document.createElement("div");
//     messageDiv.classList.add("para");
//     messageDiv.id = `message-${element.id}`;
//     messageDiv.style.display = "none";

//     // Create the answer paragraph
//     const ansPara = document.createElement("p");
//     ansPara.classList.add("ansOne");
//     ansPara.textContent = element.message;

//     // Append answer paragraph to the message div
//     messageDiv.appendChild(ansPara);

//     // Create the separator div
//     const separatorDiv = document.createElement("div");
//     separatorDiv.classList.add("new");
//     separatorDiv.style.height = "2px";
//     separatorDiv.style.width = "100%";
//     separatorDiv.style.backgroundColor = "rgba(145, 31, 31, 0.055)";

//     // Append clickDiv, messageDiv, and separatorDiv to parentDiv
//     parentDiv.appendChild(clickDiv);
//     parentDiv.appendChild(messageDiv);
//     parentDiv.appendChild(separatorDiv);

//     // Append parentDiv to the parent element
//     parentElement.appendChild(parentDiv);
//   }
// }

// function toggle(id) {
//   const elm = document.querySelector(`#message-${id}`);
//   if (elm.classList.contains("displayBlock")) {
//     elm.classList.remove("displayBlock");
//     elm.classList.add("displayNone");
//   } else {
//     elm.classList.remove("displayNone");
//     elm.classList.add("displayBlock");
//   }
// }
