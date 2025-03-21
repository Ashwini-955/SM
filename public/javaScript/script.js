function refreshData() {
    fetch('/home/get-update')
      .then(weatherData => {
        console.log("updated");
        return weatherData.json()})
      .then(data => {
       
        document.getElementById('location').textContent = `Location: ${data.location}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
        document.getElementById('temperature').textContent = `Temperature: ${((data.temperature - 32)*5)/9}°C`;
        document.getElementById('status').textContent = `Status: ${data.status}`;
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Placeholder for locating umbrella
  function locateUmbrella() {
    alert('Opening map to locate umbrella...');
    
    let latitude = 18.457664;  // Example Latitude
    let longitude = 73.851044; // Example Longitude
    
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
}
