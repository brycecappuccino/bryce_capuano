import './App.css';
import GoogleMapReact from 'google-map-react';



function Burrito() {

    // GOTTA GET ALL THE BURRITOS HERE CSV?
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  
      
      

  return (
    <div className="mapContainer">
        <p className="subheader">The Burrito Guide !</p>
        <div className="row">
            <div style={{height: '90vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAFcl6ZmFN5EP8rqXnvcNNRgukLDBhp6mk" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
            </div>
            <p className="column">Burrito Info</p>
        </div>
    </div>

  );
}

export default Burrito;
