import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filtre";
import './App.css'
function App() {
  // Liste initiale des films
  const initialMovies = [
    {
      title: "hansel and grettel : witch hunters",
      description: "Brother/sister duo Hansel and Gretel are professional witch-hunters who help innocent villagers. One day they stumble upon a case that could hold the key to their past.",
      posterURL: "https://play-lh.googleusercontent.com/dTe7QyFRPc3wjyGjbWtoWb935fyS31kiywe4LMnUu4NVBTu8TexxjDvt8YPT8vMzTnnI",
      rating: 8.8
    },
    {
      title: "king kong",
      description: "Set in 1933, it follows the story of an ambitious filmmaker who coerces his cast and hired ship crew to travel to mysterious Skull Island.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMWY0NWE0ZjUtNjRlOS00ZDViLTgxNTQtMGMwN2FhNDY1YTg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 9.0
    },
    {
      title: "Titanic",
      description: "It was the largest and most luxurious passenger ship of its time and was reported to be unsinkable. Titanic, launched on May 31, 1911, and set sail on its maiden voyage from Southampton on April 10, 1912, with 2,240 passengers and crew on board.",
      posterURL: "https://m.media-amazon.com/images/I/61WsubZB6hL._AC_UF894,1000_QL80_.jpg",
      rating: 7.8
    },
    {
      title : "Forrest gump",
      description :"The movie Forrest Gump follows the life events of a man who shares the name as the title of the film. Gump faces many tribulations throughout his life, but he never lets any of them interfere with his happiness",
      posterURL:"https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF1000,1000_QL80_.jpg",
      rating:8.0
    },
    {
      title:"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      description:"While playing, Lucy and her siblings find a wardrobe that lands them in a mystical place called Narnia. Here they realize that it was fated and they must now unite with Aslan to defeat an evil queen.",
      posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbXrEJ2dlo1hXGzh43Uh8mG8wKPJTDZ2hJw&s",
      rating : 9.1
    },
    {
      title: "BOLICE || بوليس",
      description: "In a building in the Jardins de Carthage, a district of Tunis created by the old regime but whose construction was abruptly halted at the beginning of the revolution, two cops, Fatma and Batal, discover a charred body. As construction work gradually resumes, they look into this mysterious case.",
      posterURL: "https://www.haya-mag.com/uploads/2024/11/465373638_834797288862178_5931125807882967263_n-67266521effad.jpeg",
      rating: 9.9
    },
    {
      title: "Jumanji",
      description: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game. Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTyG43mzmiIQkvGMu67GO0YBK2ErCeS-eQQ&s",
      rating: 7.9
    },
    {
      title: "une seconde vie",
      description: "Gad7a, is hospitalized following a road accident. His mother receives help from a family who pays the hospital fees and provides his family with a place to live. But the child soon discovers the secret of the change in his family's standard of living. He will be devastated.",
      posterURL: "https://cinematunisien.com/wp-content/uploads/2022/04/Gadha-aff2-225x300.jpg",
      rating: 6.4
    },
  ];

  // État pour la liste des films
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  // Fonction pour filtrer les films
  const handleFilterChange = (filter) => {
    setFilteredMovies(
      movies.filter((movie) => {
        return (
          (filter.title ? movie.title.toLowerCase().includes(filter.title.toLowerCase()) : true) &&
          (filter.rating ? movie.rating >= filter.rating : true)
        );
      })
    );
  };

  // Fonction pour ajouter un film
  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: ""
    });
  };

  // Fonction de gestion des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <div className="app">
      <h1>Ma Collection de Films</h1>

      {/* Filtrage des films */}
      <Filter onFilterChange={handleFilterChange} />

      {/* Liste des films filtrés */}
      <MovieList movies={filteredMovies} />

      {/* Ajouter un nouveau film */}
      <div className="add-movie">
        <h3>Ajouter un nouveau film</h3>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="URL du Poster"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          placeholder="Note"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>Ajouter</button>
      </div>
    </div>
  );
}

export default App;
