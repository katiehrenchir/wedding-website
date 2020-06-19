import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import { connect, sendMsg } from "./api";
import './App.css';

class WeddingButton extends React.Component {
  constructor(props) {
    super(props);
    connect();
  }
  
  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="kp_container">
        <Button outline size="lg" color="info" onClick={this.send}>
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