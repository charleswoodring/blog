// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const changeWelcomeText = document.querySelector(".article__header")
changeWelcomeText.textContent = "Welcome to the Charles blog"


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const changeClassProperty = document.querySelectorAll(".article__header")
changeClassProperty.forEach(e => {
    e.classList = "article__header important"
  })

// Obtain a reference the element with a class of dashed and remove it.
const removeDashed = document.querySelector(".dashed")
removeDashed.classList.remove ("dashed")


// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const addGoldenrod = document.querySelector(".article__footer")
addGoldenrod.classList.add ("goldenrod")
