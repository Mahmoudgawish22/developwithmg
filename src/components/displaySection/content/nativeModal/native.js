import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function NativeModal(props) {
    const [lightbox, setLightbox] = React.useState({
        photoIndex: 0,
        isOpen: false,
    })
    const handleClick = (i) => {
        props.closethis(false);
        setLightbox({photoIndex: i, isOpen: true})
    }

    return (
        <div>
            {lightbox.isOpen && (
          <Lightbox
            mainSrc={props.posts[lightbox.photoIndex]}
            nextSrc={props.posts[(lightbox.photoIndex + 1) % props.posts.length]}
            prevSrc={props.posts[(lightbox.photoIndex + props.posts.length - 1) % props.posts.length]}
            onCloseRequest={() => setLightbox({ isOpen: false })}
            onMovePrevRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + props.posts.length - 1) % props.posts.length, isOpen: true})}
            onMoveNextRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + 1) % props.posts.length, isOpen: true})}
            imageTitle= 'Responsive Web Design Projects @freeCodeCamp'
          />
        )}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Responsive Web Design Certfication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ul className='photoposts'>
                {
           props.posts.map((item, i) => <li key={i} className='photolink'>
          <a className='itemlink' onClick={()=> handleClick(i)}>
              <img className='imgposts' style={{height: '100px', width: '150px' , objectFit: 'cover',  verticalAlign: 'bottom'}} src={item} alt='post'/>
          </a>
      </li>)
}
                </ul>
          <p>
               In JAN 2021, And to get the certificate for the Responsive Web Design course.. I had to go through two hundred questions whose goal was to consolidate the important information I had learned about HTML5 and CSS3.
Also, there were a number of final projects before the certification was received.
It included:
Personal portfolio
Product Landing Page
Technical Documentation
          </p>
          <a href="https://codepen.io/mahmoud-gawish" target="_blank" className="btn btn-block btn-dark">View source code!</a>
          <br/>
          <a href="https://www.freecodecamp.org/certification/mahmoudgawish22/responsive-web-design" target="_blank" className="btn btn-block btn-danger">View Certfication!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        
      </Modal>
      
      </div>
    );
  }
  export default NativeModal