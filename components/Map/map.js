import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'


import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';

export default function Map() {

    const waterfront = [49.28594, -123.11129];
    const burrad = [49.28551915127894, -123.12021848382213];
    const graville = [49.283335629508564, -123.11596986500892];
    const chinatown = [49.27964021850514, -123.10979005566462];
    const scienceworld = [49.273158402556405, -123.10041975314638];
    const commercial = [49.262633133109155, -123.06921020765766];
    const nanaimo = [49.24833260243363, -123.05593127746688];
    const twentynineave = [49.24425835967752, -123.04608589927648];
    const joyce = [49.23850627417446, -123.03175780174723];
    const patterson = [49.229791306952684, -123.01269266010503];
    const metrotown = [49.225835954436505, -123.00387816001381];
    const royaloak = [49.220346164411616, -122.98860096360671];
    const edmonds = [49.212726507590254, -122.95932319254177];
    const twentytwoave = [49.19987964246359, -122.94922669996083];
    const newwest = [49.20138237079401, -122.9125840828822];
    const columbia = [49.204800681358165, -122.90615351737834];
    const scottroad = [49.2047202971487, -122.8739686056292];
    const gateway = [49.19920551537879, -122.85088228100167];
    const central = [49.189677754271415, -122.84847302772485];
    const kinggeorge = [49.18287262756074, -122.84482512207202];
    const sapperton = [49.224953771994976, -122.88947351791231];
    const braid = [49.23292554396378, -122.88304899451035];
    const loughheed = [49.24956181036186, -122.89744263444588];
    const productionway = [49.254229810707734, -122.91920203229402];


    // Color
    const blackOption = { color: 'black' };
    const redOption = { color: 'red' };


    const kinggeorgebranch = [
        // Waterfront
        [49.28594, -123.11129],
        // Burrad
        [49.28551915127894, -123.12021848382213],
        // Granville
        [49.283335629508564, -123.11596986500892],
        // Chinatown
        [49.27964021850514, -123.10979005566462],
        // Science World
        [49.273158402556405, -123.10041975314638],
        // Commercial
        [49.262633133109155, -123.06921020765766],
        // Nanaimo
        [49.24833260243363, -123.05593127746688],
        // 29
        [49.24425835967752, -123.04608589927648],
        // Joyce
        [49.23850627417446, -123.03175780174723],
        // Patterson
        [49.229791306952684, -123.01269266010503],
        // Metrotown
        [49.225835954436505, -123.00387816001381],
        // Royal Oak
        [49.220346164411616, -122.98860096360671],
        // Edmonds
        [49.212726507590254, -122.95932319254177],
        // 22 
        [49.19987964246359, -122.94922669996083],
        // New West
        [49.20138237079401, -122.9125840828822],
        // Columbia
        [49.204800681358165, -122.90615351737834],
        // Scott Road
        [49.2047202971487, -122.8739686056292],
        //Gateway
        [49.19920551537879, -122.85088228100167],
        // Central
        [49.189677754271415, -122.84847302772485],
        //King George
        [49.18287262756074, -122.84482512207202]
    ]

    const productionwaybranch = [
        //Columbia
        [49.204800681358165, -122.90615351737834],
        //Sapperton
        [49.224953771994976, -122.88947351791231],
        //Braid
        [49.23292554396378, -122.88304899451035],
        //Lougheed
        [49.24956181036186, -122.89744263444588],
        //ProductionWay
        [49.254229810707734, -122.91920203229402],
    ]



    return (
        <MapContainer className={style.map} center={edmonds} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Markers */}
            <Marker position={waterfront}>
                <Popup>
                    Skytrain: <br />Waterfront Station
                </Popup>
            </Marker>

            <Marker position={burrad}>
                <Popup>
                    Skytrain: <br />Burrad Station
                </Popup>
            </Marker>

            <Marker position={graville}>
                <Popup>
                    Skytrain: <br />Granville Station
                </Popup>
            </Marker>

            <Marker position={chinatown}>
                <Popup>
                    Skytrain: <br />Stadium - Chinatown Station
                </Popup>
            </Marker>

            <Marker position={scienceworld}>
                <Popup>
                    Skytrain: <br />Main Street - Science World Station
                </Popup>
            </Marker>

            <Marker position={commercial}>
                <Popup>
                    Skytrain: <br />Commercial - Broadway Station
                </Popup>
            </Marker>

            <Marker position={nanaimo}>
                <Popup>
                    Skytrain: <br />Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={twentynineave}>
                <Popup>
                    Skytrain: <br />29th Ave Station
                </Popup>
            </Marker>

            <Marker position={joyce}>
                <Popup>
                    Skytrain: <br />Joyce - Collingwood Station
                </Popup>
            </Marker>

            <Marker position={patterson}>
                <Popup>
                    Skytrain: <br />Patterson Station
                </Popup>
            </Marker>

            <Marker position={metrotown}>
                <Popup>
                    Skytrain: <br />Metrotown Station
                </Popup>
            </Marker>

            <Marker position={royaloak}>
                <Popup>
                    Skytrain: <br />Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={edmonds}>
                <Popup>
                    Skytrain: <br />Edmonds Station
                </Popup>
            </Marker>

            <Marker position={twentytwoave}>
                <Popup>
                    Skytrain: <br />22nd Ave Station
                </Popup>
            </Marker>

            <Marker position={newwest}>
                <Popup>
                    Skytrain: <br />New Westminster Station
                </Popup>
            </Marker>

            <Marker position={columbia}>
                <Popup>
                    Skytrain: <br />Columbia Station
                </Popup>
            </Marker>

            <Marker position={scottroad}>
                <Popup>
                    Skytrain: <br />Scott Road Station
                </Popup>
            </Marker>

            <Marker position={gateway}>
                <Popup>
                    Skytrain: <br />Gateway Station
                </Popup>
            </Marker>

            <Marker position={central}>
                <Popup>
                    Skytrain: <br />Surrey Cental Station
                </Popup>
            </Marker>

            <Marker position={kinggeorge}>
                <Popup>
                    Skytrain: <br />King George Station
                </Popup>
            </Marker>

            <Marker position={sapperton}>
                <Popup>
                    Skytrain: <br />Sapperton Station
                </Popup>
            </Marker>

            <Marker position={braid}>
                <Popup>
                    Skytrain: <br />Braid Station
                </Popup>
            </Marker>

            <Marker position={loughheed}>
                <Popup>
                    Skytrain: <br />Lougheed Center Station
                </Popup>
            </Marker>

            <Marker position={productionway}>
                <Popup>
                    Skytrain: <br />Production Way - University Station
                </Popup>
            </Marker>



            <Polyline pathOptions={blackOption} positions={productionwaybranch} />
            <Polyline pathOptions={blackOption} positions={kinggeorgebranch} />


            <CircleMarker center={[49.212726507590254, -122.95932319254177]} pathOptions={redOption} radius={20}>
                <Popup>You've arrived at your destination!</Popup>
            </CircleMarker>


        </MapContainer>
    )

}