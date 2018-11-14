import React from 'react';
import cn from 'classnames';

/*The slider rotates images by applying CSS-class "active". 
Prop "images" of Carousel component contains an array of links for src atrribute of <image> tag.
Each time state of Carousel component changes image which index in array equal to imageNum value is rendered. 
Others are not displayed.   */

export default class Carousel extends React.Component {
// default value of imageNum is 0. The slider starts with the first image.
  constructor() {
    super();
    this.state = { imageNum : 0 }; 
  }

  
// Clicking the left button decreases imageNum value. If it is equal to 0, the last image will be rendered.
  leftClick = (event) => { 
  event.preventDefault();
  if (this.state.imageNum === 0) {
    this.setState({ imageNum : this.props.images.length - 1 })
    return;
  }
  this.setState({ imageNum : this.state.imageNum - 1 })
  }
 
//Clicking the right button increases imageNum value. If it is equal to images array length, the first image will be rendered.
  rightClick = (event) => { 
  event.preventDefault();
  if (this.state.imageNum === this.props.images.length - 1) {
    this.setState({ imageNum : 0 })
    return;
  }
  this.setState({ imageNum : this.state.imageNum + 1 })
  }
  
  renderImages() {
    return (
        this.props.images.map((elem, index) => {
            const whether = index === this.state.imageNum;
            const classObj = cn({
              ['carousel-item'] : true,
              active : whether
            });
            return (
               <div className={classObj} key = {index}> 
                 <img alt="" className="d-block w-100" src={elem} />
               </div>
            )
          })
    )
  }
  // Using cn library to work with classNames. Using key attr to optimise updating of virtual DOM. 
  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    {this.renderImages()}
  </div>
  <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" onClick={this.leftClick}>
    <span className="carousel-control-prev-icon"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" onClick={this.rightClick}>
    <span className="carousel-control-next-icon"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
  }
}

