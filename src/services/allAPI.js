import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// registerAPI called by Auth
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
} 
// loginAPI called by Auth component when user click login here
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
} 

// addProjectAPI called by Add component, when user click add button
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)

}

// getHomeProjectAPI called by Home component when page loaded in browser(useEffect)
export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

//allProjectAPI called by Project component when page loaded in browser
export const allProjectAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

//userProjectAPI called by View component page loaded in browser(useEffect)
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,{},reqHeader)
}

// updateProjectAPI called by Edit component when user clicks update btn, projects/6725f83c8d347ac93579ac84/edit
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// userProjectRemoveAPI called by View component when user clicks delete btn
export const userProjectRemoveAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

// updateUserAPI called by Profile component when user clicks update btn, edit-user
export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}