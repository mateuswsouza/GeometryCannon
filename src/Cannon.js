import React, { Component } from 'react';
import { Shape, shape, direction, speed, size } from './Shape'

const newShape = () => { 
  return <Shape key={Math.random()}  shape={randomShape()} direction={randomDirection()}
    speed={randomSpeed()} size={randomSize()} top={randomTop()}/>; }

const randomShape = () => shape[Math.floor(Math.random() * shape.length)];
const randomDirection = () => direction[Math.floor(Math.random() * direction.length)];
const randomSpeed = () => (Math.random() * speed.maximum) + speed.minimum;
const randomSize = () => (Math.random() * size.maximum) + size.minimum;
const randomTop = () => (Math.random() * 50);

let styles = {
  position: 'absolute', 
  margin: 'auto',
  alignItems: 'center',
  top: '100px', 
  height: '200px', 
  width: '50px'  
}

class Cannon extends Component {
  constructor(props) {
    super(props);
    this.state = { shapes: [] };
    this.shapesForever();
  }  

  shapesForever = () => {
    for(let i=0; i<50; i++) {
      ((i) => {
        setTimeout(() => {
          this.setState(prevState => ({
            shapes: [...prevState.shapes, newShape()]}));
        }, 500*i);
      })(i);
    }
  }

  render() {
    return (
      <div id='cannon' style={styles}>
        {/* {newShape()} */}
        {this.state.shapes && this.state.shapes.map((shape, key) => shape)}
      </div>
    );
  }
}
export default Cannon;
