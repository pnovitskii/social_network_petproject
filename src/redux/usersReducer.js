const FOLLOW =  'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage});

let initialState = {
    dataUsers: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            //if (state.newTextMessage === '') return state;
            return {
                ...state,
                dataUsers: state.dataUsers.map(user => {
                    if (user.id === action.id)
                        return {...user, followed: true};
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                dataUsers: state.dataUsers.map(user => {
                    if (user.id === action.id)
                        return {...user, followed: false};
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                dataUsers: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            debugger; 
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}

export default usersReducer;