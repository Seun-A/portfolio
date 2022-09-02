import './card.style.scss';
import React from 'react';
import CardModal from './card-modal.component';

class Card extends React.Component {
  constructor() {
    super(); 

    this.state = { showComponent: false }

    this.viewDisplay = this.viewDisplay.bind(this);
    this.closeDisplay = this.closeDisplay.bind(this);
  }

  viewDisplay() { this.setState({ showComponent: true }); }
  closeDisplay() { this.setState({ showComponent: false }); }

  render() {
    return (
      <div className='card d-flex align-items-center justify-content-center'>
        <img className='h-100 ratio ratio-1x1' src={this.props.image} alt='card' />
        <span className='card-title d-flex align-items-center justify-content-center'>{this.props.title}</span>
        
        <div className='hover d-flex flex-column align-items-center justify-content-around'>
          <div className='d-flex flex-column align-items-center'>
            <span className='hover-title mb-1'>{this.props.title}</span>
            <span className='hover-languages'>{this.props.languages}</span>
          </div>
          <button className='hover-btn' onClick={this.viewDisplay}>LEARN MORE</button>
        </div>

        {/* Conditionally Render Modal */}
        {
          this.state.showComponent ? 
            <CardModal
              /** REPEATED CODE - Is there a better way to do this??? **/
              closeDisplay={this.closeDisplay}
              title={this.props.title}
              image={this.props.image}
              link={this.props.link}
              languages={this.props.languages}
              narration={this.props.narration}
              summary={this.props.summary}
              inProgress={this.props.inProgress}
            />
          : null
        }
      </div>
    )
  }
}

export default Card;
