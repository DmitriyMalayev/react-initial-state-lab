import React from "react";
class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    //   console.log(this.props.initialCount)
    if(this.props.initialCount != 0){
        return <div>{this.props.initialCount} seconds left before I go boom!</div>;    
    } else{ 
        
        return "Boom!"
}
  }
}

export default Bomb;
// import React from "react";
// class ImageSlider extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       currentSlideIndex: 0,
//     };
//   }
//   currentSlideIndex = () => {
//     currentSlide = this.state.count = 0;
//     this.setState({
//       count: currentSlide,
//     });
//   };

//   render() {
//     return `I am on slide ${this.state.currentSlideIndex}`;
//   }
// }

// export default ImageSlider;
