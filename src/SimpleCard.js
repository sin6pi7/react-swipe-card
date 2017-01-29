import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { translate3d } from './utils'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = { initialPosition: { x: 0, y: 0 } }
    this.setInitialPosition = this.setInitialPosition.bind(this)
  }
  setInitialPosition () {
    const card = ReactDOM.findDOMNode(this)
    const initialPosition = {
      x: Math.round((this.props.containerSize.x - card.offsetWidth) / 2),
      y: Math.round((this.props.containerSize.y - card.offsetHeight) / 2)
    }
    this.setState({ initialPosition })
  }

  componentDidMount () {
    this.setInitialPosition()
    window.addEventListener('resize', this.setInitialPosition)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setInitialPosition)
  }

  render () {
    const { initialPosition: { x, y } } = this.state
    const { className = 'inactive' } = this.props
    var style = {
      ...translate3d(x, y),
      zIndex: this.props.index,
      ...this.props.style
    }
    const buttonLeft = this.props.buttonLeft
      ? <button className="buttonLeft"
                onClick={() => {
                  if (this.props.onSwipeLeft) this.props.onSwipeLeft()
                  this.props.onOutScreenLeft()
                }}>{this.props.buttonLeft}</button>
      : null
    const buttonRight = this.props.buttonRight
      ? <button className="buttonRight"
                onClick={() => {
                  if (this.props.onSwipeRight) this.props.onSwipeRight()
                  this.props.onOutScreenRight()
                }}>{this.props.buttonRight}</button>
      : null

    return (
      <div style={style} className={`card ${className}`}>
        {this.props.children}
        {buttonLeft}
        {buttonRight}
      </div>
    )
  }
}

export default Card
