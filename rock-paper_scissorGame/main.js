const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const rocks = document.querySelector(".rock");
const yourLi = document.querySelectorAll(".player-table li");
const computerLi = document.querySelectorAll(".computer-table li");
const yourPoints = document.querySelector(".your-points");
const computerPoints = document.querySelector(".computer-points");
const greeting = document.querySelector('.greeting-box');
const btn = document.querySelector('#button');
const greetingText = document.querySelector('.greeting-box h4');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  container.style.opacity = "1";
  greeting.style.display = "none";

});

  for(let i=0; i<yourLi.length; i++)
  {
    yourLi[i].addEventListener('click', display); 
  }

//for displaying border on clicked icon and random icon from computer's side
  function display(e)
  {
    let targetIcon = e.target;
    e.target.style.border = "4px solid black";
    let num = (Math.random()*2).toFixed();
    computerLi[num].style.border = "4px solid black";

    for(let i=0; i<computerLi.length; i++)
    {
      if(computerLi[num] != computerLi[i])
      {
        computerLi[i].style.border = "none";
      }

      if(e.target != yourLi[i])
      {
        yourLi[i].style.border = "none";
      }
    }
    scores(targetIcon,computerLi[num]);
  }
  
  let yourscore = 0;
  let computerscore = 0;
  function scores(targetIcon,computericon)
  {
    if(targetIcon.className == "scissor" && computericon.className == "paper")
    {
       yourscore++;
    }

    if(targetIcon.className == "rock" && computericon.className == "scissor")
    {
       yourscore++;
    }

    if(targetIcon.className == "paper" && computericon.className == "rock")
    {
       yourscore++;
    }

    if(targetIcon.className == "paper" && computericon.className == "scissor")
    {
       computerscore++;
    }

    if(targetIcon.className == "scissor" && computericon.className == "rock")
    {
       computerscore++;
    }

    if(targetIcon.className == "rock" && computericon.className == "paper")
    {
       computerscore++;
    }
    yourPoints.textContent = yourscore;
    computerPoints.textContent = computerscore;
    result();
  }
  
  function result()
  {
    if(yourscore == 10 || computerscore == 10)
    {
      container.style.opacity = "0.2";
      greeting.style.display = "flex";

      
      if(yourscore == 10)
      {
        greetingText.textContent = "Congrats You Won!!";
      }

      if(computerscore == 10)
        {
          greetingText.textContent = "Sorry You Lost";
          greetingText.style.backgrounColor = "red";
        }
        yourscore = 0;
        computerscore = 0;
        yourPoints.textContent = yourscore;
        computerPoints.textContent = computerscore;
    }
  }


  
  
