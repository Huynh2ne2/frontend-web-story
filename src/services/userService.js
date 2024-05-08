import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    //gọi server nodejs
    //email và password là một cái object
    return axios.post('/api/login', { email: userEmail, password: userPassword });
    //có biến object emil còn value là userEmail
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const getAlCategories = () => {
    return axios.get(`/api/get-all-stories`)
}

const getAllStoriesByCategory = (inputId) => {
    return axios.get(`api/get-all-stories-by-category?categoryId=${inputId}`)
}

//CRUD users by redux

const getAllCodeService = (typeInput) => {
    return axios.get(`/api/allcode?type=${typeInput}`)
}


const getContentByStory = (inputId, chapId) => {
    return axios.get(`/api/get-content-by-stories?id=${inputId}&chapId=${chapId}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', {id: userId})
    return axios.delete('/api/delete-user', {
        // headers: {
        //     Authorization: authorizationToken
        // },
        data: {
            id: userId
        }
    });
}

const editUserService = (inputdata) => {
    return axios.put('/api/edit-user', inputdata);
}

//thêm, sửa, xóa story
const createNewStoryService = (data) => {
    return axios.post('/api/create-new-story', data)
}

const deleteUStoryService = (storyId) => {
    return axios.delete('/api/delete-story', {
        // headers: {
        //     Authorization: authorizationToken
        // },
        data: {
            id: storyId
        }
    });
}

const editStoryService = (inputdata) => {
    return axios.put('/api/edit-story', inputdata);
}



const getAllStories = () => {
    return axios.get(`/api/get-all-stories-all`)
}

const getAllAuthor = (authorId) => {
    return axios.get(`/api/all-author?authorId=${authorId}`)
}

//Lưu thông tin nhập cho story

const saveDetailStory = (data) => {
    return axios.post(`/api/save-infor-stories`, data)
}

const getChapByStory = (storyId) => {
    return axios.get(`/api/get-chap-story?storyId=${storyId}`)
}

//get 10 data story
const getAllStory = (limit) => {
    return axios.get(`api/get-all-story?limit=${limit}`)
}


const changepassword = (data) => {
    return axios.post(`/api/change-password`, data)
}

const changePasswordVerifyEmail = (data) => {
    return axios.post(`/api/verify-change-password`, data)
}
export {
    handleLoginApi,
    getAlCategories,
    getAllStoriesByCategory,
    getAllUsers,
    getAllCodeService,
    getContentByStory,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllStories,
    getAllAuthor,
    createNewStoryService,
    deleteUStoryService,
    editStoryService,
    saveDetailStory,
    getChapByStory, getAllStory,
    changepassword, changePasswordVerifyEmail
}


