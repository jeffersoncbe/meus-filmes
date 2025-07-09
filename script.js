const options ={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzJhMWU5NzA1ZmQ5OThlYWRkYjY1ZWY0MzhmZWMyNiIsIm5iZiI6MTc1MjAxODg1NC43MzYsInN1YiI6IjY4NmRhZmE2MjkxMzA3NjU2MzcwM2E1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJXlKvSxImiQKdosZS6WivzKR7R064r6k2jvDIYgg5c'
    }
}

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


// fetch('https://api.themoviedb.org/3/authentication', options)
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
// })
