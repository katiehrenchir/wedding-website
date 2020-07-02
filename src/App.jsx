import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Image } from 'react-bootstrap';
import './App.css';

class WeddingSite extends React.Component {


  render() {
    return (
      <React.Fragment>

      <Image src={require("./static/banner-photo.jpg")} fluid />

      <div className="kp_container">
        <Button outline size="lg" variant="success" onClick={() => alert('welcome to our wedding website')}>
          Wedding Website
        </Button>
      </div>
      </React.Fragment>
    );
  }
}

// ========================================

ReactDOM.render(
  <div>
    <hr/>
    <WeddingSite />
  </div>,
  document.getElementById('root')
);

export default WeddingSite;