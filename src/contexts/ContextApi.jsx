import React, { useState } from 'react'
import { createContext } from 'react'
export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()
// children is a predefined props object , it can access child components
const ContextApi = ({children}) => {
    const [addProjectResponse,setAddProjectResponse] = useState("")
    const [editProjectResponse,setEditProjectResponse] = useState("")
  return (
   <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
      <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
          {children}
      </addProjectResponseContext.Provider>
   </editProjectResponseContext.Provider>
  )
}

export default ContextApi