import React from "react";
import Card from "../card/card.component";

/** INDIVIDUAL IMPORTS - Is there a better way to do this??? **/
import ecomImg from "../../assets/directory-assets/e-commerce.jpeg";
import cusnavImg from "../../assets/directory-assets/custom-nav.jpg";
import infscrollImg from "../../assets/directory-assets/infinite-scroll.jpg";
import moneyImg from "../../assets/directory-assets/money.png";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      cards : [
        {
          title: "E-Commerce App",
          languages : ['react', 'redux', 'firebase', 'sass'],
          summary: "React JS E-Commerce Web Application",
          narration : "This E-Commerce React Web App user can see product collections and individual products, sign in and sign up using either E-mail or Google",
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
          title: "Money",
          languages : ['react', 'sass'],
          summary: "React Mobile Banking Application **IN PROGRESS**",
          narration : "This is a Mobile Banking Application, rendered as a Web Application",
          link: "https://money-by-korede.netlify.app/",
          image: moneyImg,
          inProgress : true
        }
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