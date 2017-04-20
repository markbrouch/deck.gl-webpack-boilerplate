import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGL from 'deck.gl';

import index from './index.html';
import style from './app.css';

const MAPBOX_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

if (!MAPBOX_TOKEN) {
  throw new Error('Please specify a valid mapbox token');
}

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 500,
      height: 500,
      viewport: {
        latitude: 41.882059,
        longitude: -87.6288953,
        zoom: 12,
        bearing: 0,
        pitch: 60
      }
    };
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const { viewport, width, height } = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        onChangeViewport={v => this.setState({viewport: v})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        perspectiveEnabled
        width={width}
        height={height}
      >
        <DeckGL
          {...viewport}
          width={width}
          height={height}
          layers={[ ]}
        />
      </MapGL>
    );
  }

}

const root = document.createElement('div');
document.body.appendChild(root);

render(<Root />, root);
