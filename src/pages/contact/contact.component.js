import './contact.style.scss';

import React from 'react';
import emailjs from '@emailjs/browser';

import Form from '../../components/form/form.component';
import Pill from '../../components/pill/pill.component';
import Alert from '../../components/alert/alert.component';

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name:'',
      email: '',
      subject: '',
      message: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const state = this.state;
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      { sender: state.name, email: state.email, subject: state.subject, message:state.message },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
      this.setState({name:'', email: '', subject: '', message: ''}); 
      document.getElementById("alert").style.display = "flex";
    })
    .catch(error => console.log(error));
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='page contact-page text-center d-flex flex-column justify-content-center align-items-center'> 
        <Alert />
        <div className='d-flex mt-2 mb-3'>
          {
            [
              ['linkedin', 'https://www.linkedin.com/in/seunajayi'], 
              ['twitter', 'http://twitter.com/shun_nnnnnn'], 
              ['instagram', 'https://www.instagram.com/shunnnn.__/'],
              ['github', 'https://github.com/Seun-A'], 
              ['stack-overflow', 'https://stackoverflow.com/users/19377577/seun-ajayi']

            ].map((e, i) => (
              <a href={e[1]} target='_blank' key={i} rel="noreferrer">
                <Pill icon={e[0]} />
              </a>

            ))
          }
        </div>

        <h1>Or send me an email!</h1>

        <Form onSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default ContactPage; 
