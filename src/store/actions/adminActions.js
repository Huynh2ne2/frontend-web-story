import actionTypes from './actionTypes';
import {
    getAllCodeService, getAlCategories,
    getAllUsers, createNewUserService,
    deleteUserService, editUserService,
    getAllStories, getAllAuthor, createNewStoryService,
    deleteUStoryService,
    editStoryService, saveDetailStory
} from '../../services/userService';
import { toast } from "react-toastify";


export const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

//lấy gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService('GENDER')
            if (res && res.errCode == 0) {
                dispatch(fetchGenderSucess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    }
}

export const fetchGenderSucess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData//data ở đây như là một biến hay gọi là key
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

//Role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE')
            if (res && res.errCode == 0) {
                dispatch(fetchRoleSucess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    }
}

export const fetchRoleSucess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData//data ở đây như là một biến hay gọi là key
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//lẤY TẤT CẢ TÊN THỂ LOẠI TRUYỆN
export const fetchAllCategories = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAlCategories();
            if (res && res.errCode == 0) {
                dispatch(fetchAllCategoriesSucess(res.data));
                console.log('check data: ', res.data);
            } else {
                dispatch(fetchAllCategoriesFailed());
            }
        } catch (e) {
            console.log('fetchAllCategoriesFailed: ', e)
            dispatch(fetchAllCategoriesFailed());
        }
    }
}

export const fetchAllCategoriesSucess = (dataInput) => ({
    type: actionTypes.FETCH_ALL_CATEGORY_SUCCESS,
    dataCat: dataInput
})

export const fetchAllCategoriesFailed = () => ({
    type: actionTypes.FETCH_ALL_CATEGORY_FAILED
})

//Lấy tất cả users

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllUsers('ALL');
            // let res1 = await getTopDocTorHomeService(3);
            // console.log('Huynh check response get top doctor: ', res1)
            if (res && res.errCode == 0) {
                // console.log('Huynh check getState : ', getState)
                dispatch(fetchAllUsersSucess(res.users.reverse()))
            } else {

                dispatch(fetchAllUsersFailed());
            }

        } catch (e) {

            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed error: ', e)
        }
    }

}
export const fetchAllUsersSucess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data//users  ở đây như là một biến hay gọi là key
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})


//tạo user
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode == 0) {
                toast.success("Create a new user suceed!");
                dispatch(saveUserSucess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
                toast.error("Error!");
            }

        } catch (e) {
            dispatch(saveUserFailed());
            toast.error("Error: Image size is too large!");
            console.log('saveUserFailed error: ', e)
        }
    }

}

export const saveUserSucess = () => ({
    type: actionTypes.CREATE_USER_SUCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode == 0) {
                toast.success("Delete user suceed!");
                dispatch(deleteUserSucess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Faile user !!!");
                dispatch(deleteUserFailed());
            }

        } catch (e) {
            toast.error("Faile user !!!");
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error: ', e)
        }
    }

}

export const deleteUserSucess = () => ({
    type: actionTypes.DELETE_USER_SUCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(userId);
            if (res && res.errCode == 0) {
                toast.success("Update user suceed!");
                dispatch(editUserSucess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update user falied !!!");
                dispatch(editUserFailed());
            }

        } catch (e) {
            toast.error("Update user falied !!!");
            dispatch(editUserFailed());
            console.log('editUserFailed error: ', e)
        }
    }

}

export const editUserSucess = () => ({
    type: actionTypes.EDIT_USER_SUCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})
//get all stories 

export const fetchAllStories = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllStories();
            if (res && res.errCode == 0) {
                dispatch(fetchAllStoriesSucess(res.data.reverse()));
            } else {
                dispatch(fetchAllStoriesFailed());
            }
        } catch (e) {
            console.log('fetchAllStoriesFailed: ', e)
            dispatch(fetchAllStoriesFailed());
        }
    }
}

export const fetchAllStoriesSucess = (dataInput) => ({
    type: actionTypes.FETCH_ALL_STORIES_SUCCESS,
    dataStr: dataInput
})

export const fetchAllStoriesFailed = () => ({
    type: actionTypes.FETCH_ALL_STORIES_FAILED
})


export const createNewStory = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewStoryService(data);
            if (res && res.errCode == 0) {
                toast.success("Create story suceed!");
                dispatch(saveStorySucess());
                dispatch(fetchAllStories());
            } else {
                toast.error("Faile create story !!!");
                dispatch(saveUserFailed());
            }

        } catch (e) {
            toast.error("Faile create story !!!");
            dispatch(saveStoryFailed());
            console.log('saveStoryFailed error: ', e)
        }
    }

}

export const saveStorySucess = () => ({
    type: actionTypes.CREATE_USER_SUCESS
})

export const saveStoryFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


//sửa story
export const editStory = (storyId) => {
    return async (dispatch, getState) => {
        try {
            let res = await editStoryService(storyId);
            if (res && res.errCode == 0) {
                toast.success("Update story suceed!");
                dispatch(editStorySucess());
                dispatch(fetchAllStories());
            } else {
                toast.error("Fail update story !!!");
                dispatch(editStoryFailed());
            }

        } catch (e) {
            toast.error("Fail update story !!!");
            dispatch(editStoryFailed());
            console.log('editStoryFailed error: ', e)
        }
    }

}

export const editStorySucess = () => ({
    type: actionTypes.EDIT_STORY_SUCESS
})

export const editStoryFailed = () => ({
    type: actionTypes.EDIT_STORY_FAILED
})

//Xóa story
export const deleteStory = (storyId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUStoryService(storyId);
            if (res && res.errCode == 0) {
                toast.success("Delete story suceed!");
                dispatch(deleteStorySucess());
                dispatch(fetchAllStories());
            } else {
                toast.error("Eror!");
                dispatch(deleteStoryFailed());
            }

        } catch (e) {
            toast.error("Eror!");
            dispatch(deleteStoryFailed());
            console.log('deleteStoryFailed error: ', e)
        }
    }

}

export const deleteStorySucess = () => ({
    type: actionTypes.DELETE_STORY_SUCESS
})

export const deleteStoryFailed = () => ({
    type: actionTypes.DELETE_STORY_FAILED
})

//get all author
export const fetchAllAuthor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllAuthor();
            if (res && res.errCode == 0) {
                dispatch(fetchAllAuthorSucess(res.data));
            } else {
                dispatch(fetchAllAuthorFailed());
            }
        } catch (e) {
            console.log('fetchAllStoriesFailed: ', e)
            dispatch(fetchAllAuthorFailed());
        }
    }
}

export const fetchAllAuthorSucess = (dataInput) => ({
    type: actionTypes.FETCH_ALL_AUTHORS_SUCCESS,
    dataAuth: dataInput
})

export const fetchAllAuthorFailed = () => ({
    type: actionTypes.FETCH_ALL_AUTHORS_FAILED
})

//Save infor story input
export const saveDetailInforStory = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailStory(data);
            if (res && res.errCode == 0) {
                toast.success("Save infor detail story suceed!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_STORY_SUCCESS
                })
            } else {
                toast.error("Save infor detail doctor failed !!!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_STORY_FAILED
                });
            }
        } catch (e) {
            toast.error("Save infor detail doctor failed !!!");
            dispatch({
                type: actionTypes.SAVE_DETAIL_STORY_FAILED
            });
        }
    }
}


//all chap
export const fetchChapterStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_CHAPTER_START
            })
            let resChap = await getAllCodeService('CHAP')
            if (resChap && resChap.errCode == 0) {
                // console.log('Huynh check resChap in adminActions: ', resChap)
                dispatch(fetchChapterSucess(resChap.data))
            } else {
                dispatch(fetchChapterFailed())
            }
        } catch (e) {
            dispatch(fetchChapterFailed());
        }
    }
}

export const fetchChapterSucess = (chapterData) => ({
    type: actionTypes.FETCH_CHAPTER_SUCCESS,
    data: chapterData//data ở đây như là một biến hay gọi là key
})
export const fetchChapterFailed = () => ({
    type: actionTypes.FETCH_CHAPTER_FAILED
})




