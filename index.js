fetch('https://api.thecatapi.com/v1/images/search?api_key=live_GFIYHexpH8EFIWc6luJbMx31ulFzohfoNqWN8xHb9oE2tCVvKgCNXC5Ct4ERF74v&limit=10&has_breeds=1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Do something with the data
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });