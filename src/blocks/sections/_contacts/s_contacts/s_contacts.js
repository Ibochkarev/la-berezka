ymaps.ready(function () {
  var myMap = new ymaps.Map(
      'map',
      {
        center: [55.7629, 37.556002],
        zoom: 17,
        controls: ['smallMapDefaultSet'],
      },

      { searchControlProvider: 'yandex#search' },
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: medium;">$[properties.iconContent]</div>',
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [55.7629, 37.556002],
      { hintContent: 'La Berёzka' },
      {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://laberezka.com/assets/template/img/global/pin.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [0, 0],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout,
      },
    )
  myMap.geoObjects.add(myPlacemarkWithContent)
})
