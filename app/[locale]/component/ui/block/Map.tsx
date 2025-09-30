'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
});

const coords: [number, number] = [48.1486, 17.1077]; // Bratislava
const placeName = "Bratislava";

export default function Map() {
    return (
        <div className="w-full h-[300px] overflow-hidden shadow">
            <MapContainer
                center={coords}
                zoom={12}
                scrollWheelZoom
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords}>
                    <Popup>
                        <strong>{placeName}</strong>
                        <br />
                        {coords[0].toFixed(4)}, {coords[1].toFixed(4)}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}