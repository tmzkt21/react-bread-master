import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import './shop-detail.css'
import "@reach/combobox/styles.css";

const MAP_KEY ='AIzaSyBXIXkgYyr6JzmxB2MlvZc4R4CL6nSqxn4'

const libraries = ["places"];

const mapContainerStyle = {
    width: "100%",
    height: "980px",
};
const options = {
    zoomControl: true,
};
const center = {
    lat: 36.620505,
    lng: 128.001429,
};

export const ShopLocation = () => {
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region: 'kr'
    });
    const [ selected, setSelected ] = useState({})

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    const storeList = [
        {
            name: '더 브래드 블루 신촌점',
            location: {lat:37.555340, lng: 126.932604},
            address: '서울특별시 마포구 동교동 번지 1층 186-12 연지빌딩',
            image : 'https://lh5.googleusercontent.com/p/AF1QipPPsVqGplcyNOh4TTaiCf9OnbHbpn3jEBVNH5uo=w413-h240-k-no'

        }

    ];

    {storeList.map((store,i) => (
        <Marker
            key={i}
            position={store.loaction}
            onClick={()=>setSelected(store)}
            icon={
                {
                    scaledSize : new window.google.maps.Size(40,40)}
            }
        ></Marker>
    ))
    }

    return (
        <>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom = {8}
                center = {center}
                options={options}
                onLoad = {onMapLoad}
            >
                {
                    storeList.map((store, i) => (

                        <Marker
                            key={i}
                            position={store.location}
                        >
                        </Marker>
                    ))
                }

            </GoogleMap>
        </>
    );
};

