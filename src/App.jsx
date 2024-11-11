import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import { useContext, useEffect } from 'react'
import { tokenAuthContext } from './contexts/AuthContextApi'
import { Nav } from 'react-bootstrap'
import Pnf from './pages/Pnf'

function App() {
   const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
   useEffect(()=>{
      if(sessionStorage.getItem("token")){
          setIsAuthorised(true)
      }else{
        setIsAuthorised(false)
      }
   },[isAuthorised])
   console.log(isAuthorised);
   
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {
          isAuthorised &&
         <>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/projects' element={<Projects/>}/>
         </>


        }
        {/* <Route path='/dashboard' element={isAuthorised? <Dashboard/>: <Navigate to={'/login'}/>}/> */}
        {/* <Route path='/projects' element={isAuthorised? <Projects/>: <Navigate to={'/login'}/>}/> */}
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
