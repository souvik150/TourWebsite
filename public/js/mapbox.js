/* eslint-disable */

// console.log('Hello from the client side');

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic291dmlrLW0iLCJhIjoiY2wxcnlsaHE0MWlhdjNkcGRmcmcyZHhrdiJ9.yagK7_4a1KcOPJACzg8Y1w';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/souvik-m/cl1ryoxd8000614pbcv60h3oo',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 7.5
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Create the marker
    const el = document.createElement('div');
    el.className = 'marker';
    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Entend the map bounds
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
