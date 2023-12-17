import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result';
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";




function App() {

  const [movies, setMovies] = useState([1])
  const [search, setSearch] = useState("")

  const ChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getsearchMovies = () => {
    axios.get(SEARCHAPI + search)
      .then(
        (response) => {
          setMovies(response.data.results)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          setMovies(response.data.results);
        }

      )
      .catch(
        () => {
          (error)
          console.log(error)
        }
      )
  }

  useEffect(
    () => {
      // console.log("hello")
      if (search == "") {
        getAllMovies()
      }
      else {
        getsearchMovies()
      }
    },
    [search]
  )

  return (
    <>
      <h1 className='text-3xl text-center bg-slate-900 text-white'>My  Movie Searching App</h1>
      <div className='w-full h-[7890px] mx-auto bg-slate-900'>
        <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
          <input type="search" value={search} onChange={ChangeSearch} className="w-full border border-black rounded text-slate-700 p-4" />
          {
            movies.length === 0
              ?
              <div className='text-3xl'>loading...</div>
              :
              <Result movies={movies} />
          }
        </div>
      </div>
    </>
  )
}

export default App
