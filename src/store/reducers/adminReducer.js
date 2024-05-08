import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    users: [],
    allStories: [],
    allAuthors: [],
    allCategories: [],
    chapter: []
}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;

            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            // let copyState = {...state};
            state.genders = action.data;
            state.isLoadingGender = false;

            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED:

            // let copyState = {...state};
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_SUCCESS:
            // let copyState = {...state};
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            // let copyState = {...state};
            state.users = action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_CATEGORY_SUCCESS:
            state.allCategories = action.dataCat;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_CATEGORY_FAILED:
            state.allCategories = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_STORIES_SUCCESS:
            state.allStories = action.dataStr;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_STORIES_FAILED:
            state.allStories = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_AUTHORS_SUCCESS:
            state.allAuthors = action.dataAuth;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_AUTHORS_FAILED:
            state.allAuthors = [];
            return {
                ...state
            }
        case actionTypes.FETCH_CHAPTER_SUCCESS:
            state.chapter = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_CHAPTER_FAILED:
            state.chapter = [];
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;