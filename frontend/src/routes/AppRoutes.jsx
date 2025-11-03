// import React from 'react'
// import {Routes,BrowserRouter,Route} from 'react-router-dom'
// import Login from '../screens/Login'
// import Register from '../screens/Register'
// import Home from '../screens/Home'
// import Project from '../screens/Project'
// import UserAuth from '../auth/UserAuth'

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<UserAuth><Home /></UserAuth>}></Route>
//             <Route path='/login' element={<Login/>}></Route>
//             <Route path='/register' element={<Register/>}></Route>
//             <Route path='/project' element={<UserAuth><Project/></UserAuth>}></Route>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRoutes


import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Project from '../screens/Project'
import UserAuth from '../auth/UserAuth'
import Overview from '../screens/Overview'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Overview Page */}
        <Route path='/' element={<Overview />} />

        {/* Auth Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Routes */}
        <Route
          path='/home'
          element={
            <UserAuth>
              <Home />
            </UserAuth>
          }
        />
        <Route
          path='/project'
          element={
            <UserAuth>
              <Project />
            </UserAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
