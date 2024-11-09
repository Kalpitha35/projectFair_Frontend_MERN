import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/landing_image.webp'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'

const Home = () => {
    const [allHomeProjects,setAllHomeProjects] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAllHomeProjects()
    },[])
    const getAllHomeProjects =async()=> {
     try{
        const result = await getHomeProjectAPI()
        if(result.status==200){
            setAllHomeProjects(result.data)
        }
     }catch(err){
        console.log(err);
        
     }
    }
    console.log(allHomeProjects);


    const handleProjects = ()=>{
        if(sessionStorage.getItem("token")){
           navigate('/projects') 
        }else{
            alert("Please login to get full access to our projects!!!")
        }
    }
    // console.log(allHomeProjects);
    
  return (
    <>
        <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 style={{fontSize:'70px'}}><i className="fa-brands fa-docker me-2"></i> Project Fair</h1>
                        <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
                       
                       {
                        sessionStorage.getItem("token")?
                        <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                        :
                        <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
                       
                       }

                    </div>
                    <div className="col-lg-6">
                        <img src={landingImg} alt="landing" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-5 text-center">
            <h1 className="mb-5">Explore Our Projects</h1>
            <marquee>
                <div className="d-flex">
                { 
                allHomeProjects.map(project=>(
                    <div key={project?._id} className="me-5">
                    <ProjectCard displayData={project}/>
                </div>
                ))
                }

                </div>
            </marquee>
            <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJETCS...</button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
            <h1>Our Testimonials</h1>
            <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center justify-content-center  flex-column'>
                    <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://w7.pngwing.com/pngs/2/55/png-transparent-computer-icons-girl-female-beauty-parlour-others-purple-girl-magenta.png" alt="" />
                    <span>Julia</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                    </div>
                    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, explicabo neque ut exercitationem labore nesciunt.
            
                    </p>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center justify-content-center  flex-column'>
                    <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://w7.pngwing.com/pngs/2/55/png-transparent-computer-icons-girl-female-beauty-parlour-others-purple-girl-magenta.png" alt="" />
                    <span>Julia</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                    </div>
                    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, explicabo neque ut exercitationem labore nesciunt.
            
                    </p>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center justify-content-center  flex-column'>
                    <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://w7.pngwing.com/pngs/2/55/png-transparent-computer-icons-girl-female-beauty-parlour-others-purple-girl-magenta.png" alt="" />
                    <span>Julia</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                    </div>
                    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, explicabo neque ut exercitationem labore nesciunt.
            
                    </p>
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    </>
  )
}

export default Home