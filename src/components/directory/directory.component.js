import React from "react";
import Card from "../card/card.component";

/** INDIVIDUAL IMPORTS - Is there a better way to do this??? **/
import ecomImg from "../../assets/directory-assets/e-commerce.jpeg";
import cusnavImg from "../../assets/directory-assets/custom-nav.jpg";
import infscrollImg from "../../assets/directory-assets/infinite-scroll.jpg";
import moneyImg from "../../assets/directory-assets/money.png";
import quoteImg from "../../assets/directory-assets/quote-gen.png";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      cards : [
        {
          title: "Money",
          languages : ['react', 'sass'],
          summary: "React Mobile Banking Application",
          narration : "The MONEY app is a Mobile Banking Application, rendered as a React Web Application",
          link: "https://money-by-korede.netlify.app/",
          image: moneyImg,
          inProgress : false
        },
        {
          title: "E-Commerce App",
          languages : ['react', 'redux', 'firebase', 'sass'],
          summary: "React-JS E-Commerce Web Application",
          narration : "In this E-Commerce React Web Application, the user can see product collections and individual products, sign in and sign up using either E-mail or Google",
          link: "https://seun-a-ecommerce.netlify.app",
          image: ecomImg,
          inProgress : true
        },
        {
          title: "Custom Navigation",
          languages : ['javascript'],
          summary: "CSS Animation",
          narration : "This is a simple and responsive training app based on HTML, CSS and Vanilla Javascript.",
          link: "https://seun-a.github.io/Custom-Navigation/",
          image: cusnavImg,
          inProgress : false
        },
        {
          title: "Infinite Scroll",
          languages : ['javascript'],
          summary: "Infinite Scroll UI Implementation",
          narration : "This solution provides a seamless data fetch. When the user approached the bottom of the content, a trigger is executed and is  used to implement infinite scrolling",
          link: "https://seun-a.github.io/Infinite-Scroll/",
          image: infscrollImg,
          inProgress : false
        },
        {
          title: "Quote Generator",
          languages : ['javascript'],
          summary: "Random Quote Generator",
          narration : "Randomly fetches from a json file which is working like a database to get the random quote. The user can generate random quotes and tweet them",
          link: "https://seun-a.github.io/quote-generator/",
          image: quoteImg,
          inProgress : false
        },
      ]
    }
  }



  render() {
    const filtered = this.props.filter ? this.state.cards.filter(card => card.languages.includes(this.props.filter)) : this.state.cards

    return (
      <div className='container-fluid'>
        <div className='row gx-3 d-flex justify-content-center'>
          {
            filtered.map(({languages, ...otherProps}, i) => {
              let splitLang = ''
              languages.forEach((e, i) => splitLang += i+1 !== languages.length ? `${e.toUpperCase()} | ` : e.toUpperCase())

              return (
                <div key={i} className='card-holder col-12 col-sm-6 col-md-4'>
                  <Card languages={splitLang}  {...otherProps} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
