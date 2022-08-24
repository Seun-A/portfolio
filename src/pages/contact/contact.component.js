import React from 'react';
import Form from '../../components/form/form.component';
import Pill from '../../components/pill/pill.component';
import './contact.style.scss'

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
  handleSubmit = event => event.preventDefault(); 

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='page contact-page text-center d-flex flex-column justify-content-center align-items-center'> 
        <h1>Send me an email!</h1>

        <Form onSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange} />

        <h1 className='mt-5 mb-4'>OR</h1>

        {/* Links */}
        <div className='d-flex mt-2 mb-5'>
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
      </div>
    );
  }
}


export default ContactPage; 
