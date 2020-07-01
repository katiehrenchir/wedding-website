import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import bannerphoto from './static/banner-photo.jpg';
import './App.css';

class WeddingSite extends React.Component {

  BannerPhoto() {
    return <img src={bannerphoto} alt="Paper Sun Photography" />;
  }

  render() {
    return (
      <div className="kp_container">
        {/* {this.BannerPhoto()} */}
        <Button outline size="lg" color="info" onClick={() => alert('welcome to our wedding website')}>
          Wedding Website
        </Button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    <WeddingSite />
  </div>,
  document.getElementById('root')
);

export default WeddingSite;