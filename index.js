async function fetchCat() {

fetch('https://api.thecatapi.com/v1/images/search?api_key=live_GFIYHexpH8EFIWc6luJbMx31ulFzohfoNqWN8xHb9oE2tCVvKgCNXC5Ct4ERF74v&limit=4&has_breeds=1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Log data to see its structure
    
    const catBreeds = []; // Initialize an array to store breed names and images

    // Iterate over data array
    data.forEach(item => {
      if (item.breeds && item.breeds[0].name.length > 0) {
        const breedName = item.breeds[0].name;
        const breedImg = item.url;
        catBreeds.push({name: breedName, image: breedImg});
      }
    });

    console.log(catBreeds); // Log array to see stored breed names and images
  
    const catSection = document.getElementById('cat-breeds');

    catBreeds.forEach(item => {
      const catName = document.createElement('div');
      catName.classList.add('breed');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.loading = "lazy";

      const p = document.createElement('p');
      p.textContent = item.name;

      catName.appendChild(img);
      catName.appendChild(p);

      catSection.appendChild(catName);
    });
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

}

document.getElementById('reload-button').addEventListener('click', fetchCat);

fetchCat();