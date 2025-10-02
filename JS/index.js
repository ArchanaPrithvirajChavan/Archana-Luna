 // create memory for footer section in DOM//

      const footer=document.createElement("footer");

  //add some style to footer//

       footer.setAttribute("style", "  margin-top: 0px; margin-bottom:20px; margin-left:50px;");

  //add id to footer section //

      footer.setAttribute("id" ,"fooTer");

  //add footer to web page 

       document.body.appendChild(footer);

   //get footer element by id=fooTer//

       const footerElement =document.getElementById("fooTer");
       


   //create a variable for date //

        const today= new Date();

   //create a variable for year//

        const thisYear=today.getFullYear();

// create memory in DOM for paragraph element to write copyright text//

       const copyright= document.createElement("p")

// add name ,year and unicode of copywrite in copyright section //

      copyright.textContent= "\u00A9  Archana" +"  "+ thisYear ;

//Append copyrite to footer section //

       footerElement.appendChild(copyright);

// creating array of slills

       let skill =["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]

// Get section of skills with id=Skills //

          const skillsSection = document.getElementById("Skills");

//select ul element from skills section //

         const skillsList = skillsSection.querySelector("ul")

//use for loop to write array skill on Skills section //

for(let i=0;i<skill.length;i++) 
    {
         //create list element li for each skill //

          const skillsLi = document.createElement('li');

         //write each skills on li section //

          skillsLi.textContent=((skill[i]));

         //append li to ul (i.e skillsList”)//

          skillsList.appendChild(skillsLi);
}

         //create messageForm veriable to get form by name//
      
        const messageForm=  document.querySelector('form[name="form_name"]')


         //get submit button by id ="button-click"//
       
         const button =document.getElementById('button_click')


        //get output messege paragraph by id=output_message//
         const output =document.getElementById('output_message')

        //get message section by id=messages//
          const messageSection=document.getElementById('Messages')

        //get message list section by id =ul //
          const messageList =messageSection.querySelector("ul")

         //create list element // 
        const newMessage =document.createElement('li')

        // create Anchor tag // 
      const a =document.createElement("a") 

         //create a spam //
      const formSpan= document.createElement("span")
        
               //creat a new button removeButton//
      const removeButton = document.createElement("button");


          //append a to li (newMessage)//
         newMessage.appendChild(a);

          //append span to li//
         newMessage.appendChild(formSpan);
         
          //append li to ul i.e messageList //
          messageList.appendChild(newMessage);
      
          //append button to form//
          newMessage.appendChild(removeButton);

          
          //set innerText remove //
          removeButton.innerText ='Remove';

          //set attribute type button //
          removeButton.setAttribute("type","button")

          
          removeButton.style.fontSize = "15px";

            //add evenlistener to removeButton //
          removeButton.addEventListener('click',(Event)=>{
              Event.preventDefault();


           // create a variable entry that finds the button's parent element //
           const entry = Event.target.parentNode;
            entry.remove();
           })
        
           //add eventLicener to messageForm//

           messageForm.addEventListener('submit',(event)=>
           {
          event.preventDefault();
          messageSection.style.display = 'block';
          const userName = event.target.elements['usersName'].value;
          const userEmail= event.target.elements['usersEmail'].value;
          const userMessage=event.target.elements['usersMessage'].value;
          
          output.innerText = `Information Submitted: ${userName}`;
          
          console.log(userName);
          console.log(userEmail);
          console.log(userMessage);
          // Display userName and Email on anchor tag  //
         
          a.href = `mailto:${userEmail}`;
          a.textContent = `${userName} (${userEmail})`;
          formSpan.textContent=userMessage;
          messageForm.reset();

           })
         
         const form_text = document.querySelector(".form_text");
         const editButton = document.getElementById("edit_button")
         const messageInput = document.querySelector('[name="usersMessage"]');
         


        editButton.addEventListener('click', (event) => {

          event.preventDefault();
           messageInput.focus();
  
    
 
         })

         
          
          
         
         
          
    
