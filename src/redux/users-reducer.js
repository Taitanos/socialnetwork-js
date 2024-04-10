const initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count/100}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount})

export default usersReducer;