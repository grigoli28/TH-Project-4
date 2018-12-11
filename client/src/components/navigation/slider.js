import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 3
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
  render() {
    let { volume } = this.state
    return (
        <div className="slider">
      <Slider
        
        value={volume}
        orientation="horizontal"
        onChange={this.handleOnChange}
        min={100}
        max={700}
      />
      </div>
    )
  }
}
export default VolumeSlider