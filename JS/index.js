// create memory for footer section in DOM//

const footer = document.createElement("footer");
//add id to footer section //

footer.setAttribute("id", "fooTer");

//add footer to web page

document.body.appendChild(footer);

//get footer element by id=fooTer//

const footerElement = document.getElementById("fooTer");

//create a variable for date //

const today = new Date();

//create a variable for year//

const thisYear = today.getFullYear();

// create memory in DOM for paragraph element to write copyright text//

const copyright = document.createElement("p");

// add name ,year and unicode of copywrite in copyright section //

copyright.textContent = "\u00A9  Archana" + "  " + thisYear;


//Append copyrite to footer section //

footerElement.appendChild(copyright);
const myLinks = document.createElement('section');
myLinks.classList.add('my_links');

// Email link
const emailLink = document.createElement('a');
emailLink.href = 'mailto:archana.chavan2@gmail.com';
emailLink.title = 'Email Me';
emailLink.innerHTML = '<img src="Image/Gmail_Icon.png" alt="Email" class="icon">';
myLinks.appendChild(emailLink);

// LinkedIn link
const linkedinLink = document.createElement('a');
linkedinLink.href = 'https://www.linkedin.com/in/archana-chavan-b276b0262/';
linkedinLink.target = '_blank';
linkedinLink.rel = 'noopener noreferrer';
linkedinLink.title = 'LinkedIn Profile';
linkedinLink.innerHTML = '<img src="Image/LinkedIn_logo_initials.png" alt="LinkedIn" class="icon">';
myLinks.appendChild(linkedinLink);

// GitHub link
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/ArchanaPrithvirajChavan';
githubLink.target = '_blank';
githubLink.rel = 'noopener noreferrer';
githubLink.title = 'GitHub Profile';
githubLink.innerHTML = '<img src="Image/GitHub-Mark.png" alt="GitHub" class="icon">';
myLinks.appendChild(githubLink);

// Append links to footer
footer.appendChild(myLinks);
// creating array of slills

let skill = [
  "JavaScript",
  "HTML",
  "CSS",
  "Postman",
  "Cypress",
  "GitHub",
  "Tableau",
  "SQL",
];

// Get section of skills with id=Skills //

const skillsSection = document.getElementById("Skills");

//select ul element from skills section //

const skillsList = skillsSection.querySelector("ul");

//use for loop to write array skill on Skills section //

for (let i = 0; i < skill.length; i++) {
  //create list element li for each skill //

  const skillsLi = document.createElement("li");

  //write each skills on li section //

  skillsLi.textContent = skill[i];

  //append li to ul (i.e skillsList”)//

  skillsList.appendChild(skillsLi);
}
  function toggleMode() {
    const body =document.body;
    const toggle = document.getElementById("modeToggle");

  if(toggle.checked){
   
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    
  }
  else{
    body.classList.remove("dark-mode");
    body.classList.add("light-mode")
    
  }
  
 }
//create messageForm veriable to get form by name//

const messageForm = document.querySelector('form[name="leave_message"]');

//get submit button by id ="button-click"//

const button = document.getElementById("button_click");

//get output messege paragraph by id=output_message//
const output = document.getElementById("output_message");

//get message section by id=messages//
const messageSection = document.getElementById("Messages");

//get message list section by id =ul //
const messageList = messageSection.querySelector("ul");

//add eventLicener to submit button//

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  messageSection.style.display = "block";

  const userName = event.target.elements["usersName"].value;
  const userEmail = event.target.elements["usersEmail"].value;
  const userMessage = event.target.elements["usersMessage"].value;

  //create list element //
  const newMessage = document.createElement("li");
  //set attributs for newMessage//
  newMessage.setAttribute("class", "message-item");
  

  newMessage.innerHTML = `<a href="mailto:${userEmail}"> ${userName}</a><br><br> <span>${userMessage}</span>`;

  
  // create Edit button
  const editButton = document.createElement("button");
  editButton.setAttribute("class","edit_button")
    
  
  editButton.innerText = "Edit";

  // addEventListerner to edit button //
  editButton.addEventListener("click", function () {
     messageSpan = newMessage.querySelector("span");
   
      if(messageSpan){
      messageSpan.setAttribute("contenteditable","true")
      messageSpan.focus();
      const range=document.createRange();
      const selection =window.getSelection();
      range.selectNodeContents(messageSpan)
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }}
  );
  //creat a new button removeButton//
  const removeButton = document.createElement("button");

  //set attribute for removeButton //
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("class", "removeBtn");

  //set innerText remove //
  removeButton.innerText = "Remove";
  removeButton.style.fontSize = "15px";

  //add evenlistener to removeButton //
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  }
  });

  //append Edit remove button to form//
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  console.log(userName);
  console.log(userEmail);
  console.log(userMessage);
  // Display userName and Email on anchor tag  //

  messageForm.reset();
});

const form_text = document.querySelector(".form_text");

const messageInput = document.querySelector('[name="usersMessage"]');

// create GET requist to fetch Github projects//
fetch("https://api.github.com/users/ArchanaPrithvirajChavan/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    return response.json();
  })
  .then((data) => {
    //create a veriable name repositories to store data//
    const repositories = data;
    //create a variable name projectSection to select project section by  id="projects"//

    const projectSection = document.getElementById("projects");
    //create a variable name projectList to select ul element from project section//
    const projectList = projectSection.querySelector("ul");
    //create a for loop to iterate over your repositories Array//
    for (let i = 0; i < repositories.length; i++) {
      //create li element name project//
      const project = document.createElement("li");
      //create <a>
      const link = document.createElement("a");
      //write each repository name on prject//
      link.textContent = repositories[i].name;
      link.href = repositories[i].html_url;
      //display repository in new tab
      link.target = "_blank";
      //append project to projectlist//

      projectList.appendChild(project);
      project.appendChild(link);
    }

    console.log(repositories);
  })
  .catch((error) => {
    console.error("response not found");
     document.getElementById('error-message').textContent="failed to load projects: " + error.message;
  });
