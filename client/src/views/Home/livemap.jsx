import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LiveVotingMap = () => {
  const [voteData, setVoteData] = useState([]);

  useEffect(() => {
    // Fetch live vote data from your backend server or API
    // Update the voteData state with the new data
    const fetchData = async () => {
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      setVoteData(data);
    };
    fetchData();
  }, []);

  const markers = voteData.map((city) => (
    <Marker key={city.id} position={[city.lat, city.lng]}>
      <Popup>{city.name}</Popup>
    </Marker>
  ));

  

  return (
    <div>
      <MapContainer center={[7.9528, -1.0307]} zoom={7} style={{ height: '400px', width: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default LiveVotingMap;
