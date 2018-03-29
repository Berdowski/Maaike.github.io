(function() {
    /*
     *  Event listeners!
     */

    // get the cv button element with id "cv"

    const cvButton = document.getElementById("cv")
        
    // get the cv container element with id "cv-container"

    const containerCv = document.getElementById("cv-container")

    // get the portfolio button element with id "portfolio"

    const portfolioButton = document.getElementById("pf")
    // get the portfolio container element with id "portfolio-container"
    const containerPortfolio = document.getElementById("portfolio-container")


    portfolioButton.addEventListener("click", function(){
        containerPortfolio.style.display = "block";
        containerCv.style.display = "none";
        })
  
    cvButton.addEventListener("click", function(){
        containerCv.style.display = "block";
        containerPortfolio.style.display="none";
        })



    // add onclick event listeners to both buttons that, when clicked, hide 
    // the currently shown container and show the target container

    /*
     *  Loading GitHub data!
     */

    // get all repositories from GitHub API

    const repoDiv = document.getElementById("repo")

    fetch("https://api.github.com/users/berdowski/repos")
        .then(response => response.json())
        .then (repositories => {

    // for every repository in the repositories array

    for (let repo of repositories){

    //   create an HTML element for the repository
    //   append the HTML element to the "portfolio-container" div


        const repositoryName = document.createElement("h2")
        repositoryName.innerText = repo.name
        repoDiv.appendChild(repositoryName)

        const repositoryLanguage = document.createElement("p2")
        repositoryLanguage.innerText = repo.language
        repoDiv.appendChild(repositoryLanguage)

        const repositoryDescription = document.createElement("p")
        repositoryDescription.innerText = repo.description
        repoDiv.appendChild(repositoryDescription)

        const repository = document.createElement("div")
        repoDiv.appendChild(repository)
         } 
        })
    
})()
