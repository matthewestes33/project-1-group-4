let eosData = 

fetch('https://api.waqi.info/feed/phoenix/?token=df975e5218ef33ecbd33be41365e612135104e9b')
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
    .then(response => response.json())
    .then(data => console.log(data));


