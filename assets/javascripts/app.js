;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document);
  window.SoftwareLiber = {
    init: function() {
      this.renderMap( '.mapit' );
    },
    // Renders the Google Map with relevant markers
    renderMap: function( selector ) {
      $( selector ).goMap({
        navigationControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        zoom: 7,
        markers: [
        {
          latitude: 45.976306,
          longitude: 23.60429,
          title: 'Cluj-Napoca Linux User Group'
        },
        {
          latitude: 45.649004,
          longitude: 25.607148,
          title: 'OSS și Brașov Linux User Group'
        },
        {
          latitude: 46.179241,
          longitude: 21.315015,
          title: 'Arad Linux User Group'
        },
        {
          latitude: 45.747937,
          longitude: 21.225176,
          title: 'Timișoara Linux User Group'
        },
        {
          latitude: 44.447924,
          longitude: 26.097879,
          title: 'ROSEdu: Romanian Open Source Education, București Linux User Group'
        },
        {
          latitude: 44.173414,
          longitude: 28.624352,
          title: 'Constanța Linux User Group'
        },
        {
          latitude: 47.156951,
          longitude: 27.589853,
          title: 'Iași Linux User Group'
        },
        {
          latitude: 44.993959,
          longitude: 24.873876,
          title: 'Argeș Linux User Group'
        },
        {
          latitude: 47.664164,
          longitude: 23.578962,
          title: 'Baia Mare Linux User Group'
        },
        {
          latitude: 45.443506,
          longitude: 28.02202,
          title: 'Galați Linux User Group'
        },
        {
          latitude: 46.069003,
          longitude: 23.572665,
          title: 'Alba Iulia Linux User Group'
        },
        {
          latitude: 45.7931069,
          longitude: 24.15059,
          title: 'Sibiu Linux User Group'
        },
        {
          latitude: 46.5362424,
          longitude: 24.55590,
          title: 'Mureș Linux User Group'
        },
        ]
      });
    }
  };

  $( document ).ready(function() {
    SoftwareLiber.init();
  });
})( jQuery, this );
