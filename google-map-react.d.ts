declare module 'google-map-react' {
  import * as React from 'react'

  interface Properties {
    className?: string
    key?
    style?: Object
  }

  interface GoogleMapProperties extends Properties {
    bootstrapURLKeys: {}
    defaultCenter: {lat: number, lng: number}
    defaultZoom: number
  }

  export default class GoogleMap extends React.Component<GoogleMapProperties, {}> {}
}
