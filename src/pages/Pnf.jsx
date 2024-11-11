import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
   <>
        <Header/>
        <div style={{paddingTop:'100px',height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <h1 style={{fontSize:'30px'}} className="fw-bolder  mb-2">404</h1>
          <img width={'400px'} height={'500px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM2_DuSn-uPncTe2ghvsme_xi6_6677vdDA&s" alt="" />
          <h1 style={{fontSize:'30px'}} className='fw-bolder  mb-2'>Looks like You're Lost.</h1>
          <p className="mb-2">The page you are looking for is not available!!!</p>
          <Link style={{textDecoration:'none'}} to={'/'} className=' bg-warning p-2 text-white rounded'>Home</Link>
        </div>
   </>
  )
}

export default Pnf