import React, {useContext, lazy} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
//import CharacterScreen from '../pages/CharacterScreen'
/*import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomanScreen from '../pages/WomanScreen'
import LoginScreen from './../pages/LoginScreen'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'*/



const CharacterScreen = lazy( () => import('../pages/CharacterScreen'))
const ManScreen = lazy( () => import('../pages/ManScreen'))
const SearchScreen = lazy( () => import('../pages/SearchScreen'))
const WomanScreen = lazy( () => import('../pages/WomanScreen'))
const LoginScreen = lazy( () => import('../pages/LoginScreen'))
const PrivateRouter = lazy( () => import('./PrivateRouter'))
const PublicRouter = lazy( () => import('./PublicRouter'))

const LoginRouter = () => { 

  const {log} = useContext(AuthContext)  

  return (
   
    
    <Router>
        
        <Routes>
            <Route exact path="login" element={<LoginScreen />} />

            <Route element={<PublicRouter log={log} />}>
                
            </Route>

            <Route element={<PrivateRouter log={log} />}>
                <Route path="/" element={<ManScreen />}  />
                <Route path="/mans" element={<ManScreen />}  />
                <Route path="/womans" element={<WomanScreen />}  />
                <Route path="/search" element={<SearchScreen />}  />
                <Route path="/characters/:id" element={<CharacterScreen />}  />
            </Route>
        
        </Routes>
    </Router>
  )
}

export default LoginRouter