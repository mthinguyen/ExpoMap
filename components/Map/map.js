import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'


import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129]

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}
        >f
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Skytrain: <br />Waterfront Station
                </Popup>

            </Marker>
        </MapContainer>
    )

}