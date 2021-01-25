import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [

  {
    id: 'default-berlin',
    predictionPlace: {
      address: 'Berlin, Germany',
      bounds: new LatLngBounds(new LatLng(52.70794,13.72112), new LatLng(52.39016, 13.06052)),
    },
  },
  {
    id: 'default-hamburg',
    predictionPlace: {
      address: 'Hamburg, Germany',
      bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
    },
  },
  {
    id: 'default-munich',
    predictionPlace: {
      address: 'München, Germany',
      bounds: new LatLngBounds(new LatLng(61.83657, 24.11838), new LatLng(61.42728, 23.5422)),
    },
  },
  {
    id : 'default-dortmund',
    predictionPlace: {
      address: 'Dortmund, Germany',
      bounds: new LatLngBounds ( new LatLng(51.60093575458882, 7.649132152130464),new LatLng(51.418455092942914, 7.290359887893382)),
    }
  },
  {
    id : 'default-dusseldorf',
    predictionPlace: {
      address: 'Düsseldorf, Germany',
      bounds: new LatLngBounds ( new LatLng(51.29851726597012, 6.976392582552891),new LatLng(51.09714902694525, 6.659849015446108)),
    }
  },
  {
    id : 'default-bremen',
    predictionPlace: {
      address: 'Bremen, Germany',
      bounds: new LatLngBounds ( new LatLng(53.24257509680227, 9.023297880667903),new LatLng(53.00482378449081, 8.480161304569279)),
    }
  },
  {
    id : 'default-leipzig',
    predictionPlace: {
      address: 'Leipzig, Germany',
      bounds: new LatLngBounds ( new LatLng(51.45650809042227, 12.53576457552385),new LatLng(51.23133138353749, 12.185575379809187)),
    }
  },
  {
    id : 'default-lingen',
    predictionPlace: {
      address: 'Lingen, Germany',
      bounds: new LatLngBounds(new LatLng(52.610092635876555, 7.445126132820083), new LatLng(52.413265816232084, 7.132702438604061)),
    }
  },

];
