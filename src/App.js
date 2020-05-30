import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import './App.css';

class WeddingButton extends React.Component {
  render() {
    return (
      <div className="kp_container">
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
    <WeddingButton />
  </div>,
  document.getElementById('root')
);

export default WeddingButton;