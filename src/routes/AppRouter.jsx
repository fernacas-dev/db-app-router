import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import CharacterScreen from '../pages/CharacterScreen'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomanScreen from '../pages/WomanScreen'
import Navbar from './../components/Navbar'

const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/men" element={<ManScreen />}  />
            <Route path="/women" element={<WomanScreen />}  />
            <Route path="/search" element={<SearchScreen />}  />
            <Route path="/characters/:id" element={<CharacterScreen />}  />
            

            {/*<Route path="/" element={<Navigate replace to="/men" />} />*/}
        
        </Routes>
    </>
  )
}

export default AppRouter