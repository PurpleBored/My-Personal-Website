function getCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        let catImg = document.getElementById('cat-img');
        catImg.src = data[0].url;
        catImg.width = 400;
        catImg.height = 400;
      })
      .catch(error => {
        console.error('Error fetching cat picture', error);
      });
  }