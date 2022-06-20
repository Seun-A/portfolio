// PAGES
const [ homePage, portfolioPage, aboutPage, contactPage ] = [
  document.getElementById('home-page'),
  document.getElementById('about-page'),
  document.getElementById('portfolio-page'),
  document.getElementById('contact-page'),
]
// ITERABLE
const pagesArr = [ homePage, portfolioPage, aboutPage, contactPage ]

function display(page) {  
  pagesArr.forEach(obj => {
    obj.hidden = true
  })

  page.hidden = false
}
