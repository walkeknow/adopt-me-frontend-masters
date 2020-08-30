import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };
  handleIndexClick = event => {
    this.setState(() => ({
      active: +event.target.dataset.index,
    }));
  };
  render() {
    const { active } = this.state;
    const { media } = this.props
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
