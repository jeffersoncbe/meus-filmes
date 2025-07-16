const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzJhMWU5NzA1ZmQ5OThlYWRkYjY1ZWY0MzhmZWMyNiIsIm5iZiI6MTc1MjAxODg1NC43MzYsInN1YiI6IjY4NmRhZmE2MjkxMzA3NjU2MzcwM2E1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJXlKvSxImiQKdosZS6WivzKR7R064r6k2jvDIYgg5c'
  }
}

fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', options)
  .then(data => data.json())
  .then(data => {
    console.log(data.results)
    loadCardMovies(data.results)
  })
  .catch(err => console.error(err));


const loadCardMovies = (filmes) => {
  const container = document.getElementById('movie-container')

  filmes.forEach(objeto => {
    const divCol = document.createElement('div')
    divCol.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

    const divCard = document.createElement('div')
    divCard.className = 'card h-100 d-flex flex-column';

    // divCard.style = "height: 18rem;";

    const imageURL = 'https://media.themoviedb.org/t/p/w440_and_h660_face'

    divCard.innerHTML =
      `<img src="${imageURL}/${objeto.poster_path}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${objeto.title}</h5>
    <p class="card-text text-overview">${objeto.overview}</p>
    <div class='mt-auto d-flex justify-content-between align-items-center">
    <a href="#" class="btn-primary btn-sm">Ver mais</a>
    <small class="text-muted"><strong>Estréia: </strong>
    ${formatDate(objeto.release_date)}</small>
  </div>
</div>`

    divCol.appendChild(divCard)
    container.appendChild(divCol)
    // console.log(objeto.title);
  });

};

const formatDate = (data) => {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
};

// fetch('https://api.themoviedb.org/3/authentication', options)
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
// })
