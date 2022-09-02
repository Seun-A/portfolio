const CardModal = ({ closeDisplay, image, title, summary, languages, narration, link, inProgress }) => (
  <div className='card-modal-container'>
    <div className='card-modal pb-4'>
      <button className='close-modal d-flex align-items-center justify-content-center' onClick={closeDisplay}>
        <i className="fa-solid fa-xmark" />
      </button>

      <img className='ratio ratio-1x1' src={image} alt='card' />
      
      <div className='modal-title mt-3'>{title}</div>
      <div className='modal-summary text-capitalize'>{summary}</div>
      <div className='modal-technologies my-2 text-uppercase'>{languages}</div>

      <hr />
      { inProgress ? <strong className="text-danger">**IN PROGRESS**</strong> : null }
      <p className='modal-narration mx-auto'>{narration}</p>

      <a href={link} target="_blank" rel="noreferrer" className='view-btn d-flex mx-auto align-items-center justify-content-between'>
        <i className="fa-solid fa-arrow-up-right-from-square" />
        VIEW SITE
      </a>
    </div>
  </div>
)

export default CardModal;
