'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: '/image/map/map-pin.png',
    iconUrl: '/image/map/map-pin.png',
    shadowUrl: '/image/map/map-pin-shadow.png',
    iconSize: [30, 40],
    shadowSize: [40, 40],
    iconAnchor: [15, 40],
    shadowAnchor: [2, 40],
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
