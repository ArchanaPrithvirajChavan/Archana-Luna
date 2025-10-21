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

          const li = document.createElement('li');

         //write each skills on li section //

          li.textContent=((skill[i]));

         //append li to ul (i.e skillsList”)//

          skillsList.appendChild(li);
}

