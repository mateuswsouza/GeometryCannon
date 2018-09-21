import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Shapes.css'
import './Animations.css'

const styles = {
    position: 'absolute',
    display: 'block',
    animationName: ['shape-spin', 'shape-slide'],
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }

export class Shape extends Component {
  render() {
    return (
        <div id='shape' style={{ ...styles, 
            height: this.props.size, width: this.props.size, top: this.props.top,
            animationDuration: this.props.speed + 's', animationDirection: this.props.direction }}>
            <div className={ this.props.shape }/>
        </div>
    )
  }
}

export const shape = [
    'circle',
    'square',
    'triangle'
]
export const direction = [
    'normal'
    // 'reverse'
]
export const size = {
    minimum: 60,
    maximum: 140
}
export const speed = {
    minimum: 10,
    maximum: 5
}
Shape.propTypes = {
  shape: PropTypes.oneOf(shape),
  direction: PropTypes.oneOf(direction),
  size: PropTypes.number,
  speed: PropTypes.number,
  top: PropTypes.number
}

export default Shape
