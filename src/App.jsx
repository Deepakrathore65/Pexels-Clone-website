import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState("nature")


  const API_KEY = "OhDShRj6U8bSJ5m3fj7GnHgktvqCeP29W3q1YUHhhK7WAgJCgruX28pY";


  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("response from api = ", res.data.photos)
      setImages(res.data.photos)
      console.log(images)
    }

    fetchImage();
  }, [search])


  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/"element={<Home images={images} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App