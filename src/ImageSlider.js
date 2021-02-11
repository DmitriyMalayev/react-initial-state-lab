import React from 'react'
class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0,
    };
  }
  currentSlideIndex = () => {
    currentSlide = this.state.count = 0;
    this.setState({
      count: currentSlide,
    });
  };


  
  render() {
    return `I am on slide ${this.state.currentSlideIndex}`;
  }
}

export default ImageSlider