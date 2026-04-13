// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
  const header = document.querySelector(".navbar")
  window.onscroll = function () {
    const top = window.scrollY
    if (top >= 100) {
      header.classList.add("navbarDark")
    } else {
      header.classList.remove("navbarDark")
    }
  }
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
  const navLinks = document.querySelectorAll(".nav-item")
  const menuToggle = document.getElementById("navbarSupportedContent")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      new bootstrap.Collapse(menuToggle).toggle()
    })
  })
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
  const container = document.querySelector("#skills .container")
  let row = document.createElement("div")
  row.classList.add("row")

  // Load the JSON file
  fetch("data/skills.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the JSON data and create HTML elements
      data.forEach((item, index) => {
        const card = document.createElement("div")
        card.classList.add("col-lg-4", "mt-4")
        card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="${item.title}" />
                            <h3 class="card-title mt-3 fs-4">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `

        // Append the card to the current row
        row.appendChild(card)

        // If the index is a multiple of 3 or it's the last element, create a new row
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row)
          row = document.createElement("div")
          row.classList.add("row")
        }
      })
    })
}
// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
  const container = document.querySelector("#portfolio .container")
  let row = document.createElement("div")
  row.classList.add("row")

  // Load the JSON file
  fetch("data/portfolio.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the JSON data and create HTML elements
      data.forEach((item, index) => {
        const card = document.createElement("div")
        card.classList.add("col-lg-4", "mt-4")
        card.innerHTML = `
                    <div class="card portfolioContent h-100">
                    <img class="card-img-top" src="images/${item.image}" style="width:100%" alt="${item.title}">
                    <div class="card-body">
                        <h3 class="card-title fs-4">${item.title}</h3>
                        <p class="card-text">${item.text}</p>
                    </div>
                    <div class="card-footer text-center">
                            <a href="${item.link}" class="btn btn-success" target="_blank">Lien</a>
                            ${item.websiteLink ? `<a href="${item.websiteLink}" class="btn btn-primary ms-2" target="_blank">Site Web</a>` : ""}
                    </div>
                    
                </div>
                `

        // Append the card to the current row
        row.appendChild(card) // Correction : before was row.apendChild(card);

        // If the index is a multiple of 3 or it's the last element, create a new row
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row)
          row = document.createElement("div")
          row.classList.add("row")
        }
      })
    })
}

// Function to dynamically create HTML elements from the JSON file
function createToolsFromJSON() {
  const container = document.querySelector("#tools .container")
  let row = document.createElement("div")
  row.classList.add("row")

  // Load the JSON file
  fetch("data/tools.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the JSON data and create HTML elements
      data.forEach((item, index) => {
        const card = document.createElement("div")
        card.classList.add("col-lg-4", "mt-4")
        card.innerHTML = `
                    <div class="card portfolioContent h-100" data-bs-toggle="tooltip" data-bs-title="${item.text}" data-bs-placement="auto" data-bs-custom-class="custom-tooltip">
                    <img class="card-img-top" src="images/${item.image}" style="width:100%" alt="${item.title}">
                    <div class="card-body">
                        <h3 class="card-title fs-4">${item.title}</h3>
                    </div>
                    
                </div>
                `

        // Append the card to the current row
        row.appendChild(card) // Correction : before was row.apendChild(card);

        // If the index is a multiple of 3 or it's the last element, create a new row
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row)
          row = document.createElement("div")
          row.classList.add("row")
        }
      })
      const tooltipTrigger = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
      )
      tooltipTrigger.forEach((el) => {
        new bootstrap.Tooltip(el, {
          delay: { show: 200, hide: 100 },
        })
      })
    })
}

// Call the functions to execute the code
handleNavbarScroll()
handleNavbarCollapse()
createSkillsFromJSON()
createPortfolioFromJSON()
createToolsFromJSON()
