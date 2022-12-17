const mapContainer = document.querySelector('#map');

ymaps.ready(() => {
  const map = new ymaps.Map(mapContainer, {
    center: [55.76, 37.64],
    zoom: 10,
    type: 'yandex#map',
    controls:[]
  });
});
