//on click repositories
//remove old info and load new info in div cv container
//when click on cv, go back to page cv (load cv info in div cv container)
//


// function openNav(evt,navName) {
//   // Declare all variables
//   let i, repo, navContent;

//   // Get all elements with class="repo" and hide them
//   repo = document.getElementById("repo");
//   for (i = 0; i < repo.length; i++) {
//       repo[i].style.display = "none";
//   }

//   // Get all elements with class="navContent" and remove the class "active"
//   navContent = document.getElementsByClassName("navContent");
//   for (i = 0; i < navContent.length; i++) {
//       navContent[i].className = navContent[i].className.replace("active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(navName).style.display = "block";
//   evt.currentTarget.className += "active";
// }


(function () {

const portofolio = document.getElementById("pf")
portofolio.addEventListener("click", function(){
  
  function openNav(event,navName) {
    // Declare all variables
    let i, repo, navContent;
  
    // Get all elements with class="repo" and hide them
    repo = document.getElementById("repo");
    for (i = 0; i < repo.length; i++) {
        repo[i].style.display = "none";
    }
  
    // Get all elements with class="navContent" and remove the class "active"
    navContent = document.getElementsByClassName("navContent");
    for (i = 0; i < navContent.length; i++) {
        navContent[i].className = navContent[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += "active";
  }  

})

  // const baseURL = "https://api.github.com"
  // fetch('${baseURL}/users/berdowski')
  //   .then(response => response.json())
  //   .then(user => {
  //     console.log(user.login)

      const repoDiv=document.getElementById("repo")

      fetch("https://api.github.com/users/berdowski/repos")
          .then(response => response.json())
          .then (repositories => {

      for (let repo of repositories){
          const repositoryName = document.createElement("h1")
          repositoryName.innerText = repo.name
          repository.appendChild(repositoryName)

          const repositoryDescription = document.createElement("p")
          repositoryDescription.innerText = repo.description
          repository.appendChild(repositoryDescription)

          const repositoryLanguage = document.createElement("p")
          repositoryLanguage.innerText = repo.language
          repository.appendChild(repositoryLanguage)

          const repository = document.createElement("div")
          repoDiv.appendChild(repository)
           } 
          })
  }
)
   

// get the div where the repositories will be added, with id "repo"
       // <div id="repo"></div>

       // for every repository in repositories
       
       //     create an outer div (<div class="repository">)

       //     create a h1 with repository name (<h1><repository name></h1>)
       //     add h1 to outer div

       //     create a p with repo description (<p>Description: <repository)description></p>
       //     add p to outer div

       //     create a p with repo language (<p>Language: <repository language></p>)
       //     add p to outer div

       //     add outer div to repo div


































  //   const repoDiv =
  //   document.getElementById("repositories")

  //   fetch("https://api.github.com/users/berdowski/repos")
  //     .then(response => response.json())
  //     .then (repositories => {

  //     for (let repo of repositories) {
  //       const repoParagraph = document.createElement("p")
  //       repoParagraph.innerText = repo.name
  //       repoDiv.appendChild(repoParagraph)
  //     }
  //   })
  // }












// document.getElementById("pf").addEventListener("click", replaceTitle)
// document.getElementById("cv").addEventListener("click", replaceTitle2)

// function replaceTitle (title) {
//   const fieldRenameTitle = document.getElementById("title")
//   fieldRenameTitle.innerHTML="Repositories" 
// }
// function replaceTitle2 (title) {
//   const fieldRenameTitle = document.getElementById("title")
//   fieldRenameTitle.innerHTML="Maaike Berdowski" 
// }
// function replaceName (name) {
//   const fieldRenameName = document.getElementById("name")
//   fieldRenameName.innerText="user.login"
// } 

// function replaceParagraphTitles (ptitles) {
//   const fieldRenamePT = document.getElementById("ptitles")
//   fieldRenamePT.innerText="repotitles"
// }

// function replaceParagraph (p) {
// }



// function loadPF() {

//   const baseURL = "https://api.github.com"
//   fetch('${baseURL}/users/berdowski')
//     .then(response => response.json())
//     .then(user => {
//       console.log(user.login)
//     })

//     const repoDiv =
//     document.getElementById("repositories")

//     fetch("https://api.github.com/users/berdowski/repos")
//       .then(response => response.json())
//       .then (repositories => {

//       for (let repo of repositories) {
//         const repoParagraph = document.createElement("p")
//         repoParagraph.innerText = repo.name
//         repoDiv.appendChild(repoParagraph)
//       }
//     })
//   }


  // TODO: load CV tab

  // TODO: load portfolio tab

  // EVENT LISTENERS
//   const tabSwitchAnimationDuration = 750
//   document.addEventListener("DOMContentLoaded", function() {
//     $("[data-toggle='tooltip']").tooltip()

//     // scrollspy
//     $("body").scrollspy({target: "#spy"})

//     $(".cv").show(tabSwitchAnimationDuration, function() {
//       $(this).animate({opacity: 1.0})
//     })
//   })

//   const cvTab = document.getElementById("tab-cv")
//   const portfolioTab = document.getElementById("tab-portfolio")

//   const tabListener = event => {
//     const toShowClass = event.target.id === "tab-cv"
//       ? "cv"
//       : "portfolio"

//     const toHideClass = event.target.id === "tab-cv"
//       ? "portfolio"
//       : "cv"

//     $(`.${toHideClass}`)
//       .animate({opacity: 0.0})
//       .hide(tabSwitchAnimationDuration, function() {
//         $(`.${toShowClass}`).show(tabSwitchAnimationDuration, function() {
//           $(this).animate({opacity: 1.0})
//       })
//     })
//   }

//   cvTab.addEventListener("click", tabListener)
//   portfolioTab.addEventListener("click", tabListener)

//   for (let tab of document.getElementsByClassName("tab")) {
//     tab.addEventListener("click", event => {
//       const element = event.target
  
//       if (!element.classList.contains("active")) {
//         Array
//           .from(document.getElementsByClassName("tab active"))
//           .forEach(t => t.classList.remove("active"))
        
  
//       element.classList.add("active")
//       }
//     })
//   }
// })()
    
