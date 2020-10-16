import Leaflet from 'leaflet'

import mapMarkerImg from '../images/logoLocal.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [42, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

export default mapIcon