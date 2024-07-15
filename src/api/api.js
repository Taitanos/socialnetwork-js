import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '98931042-5b41-4b1a-9370-73a11d1bce97'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data)
    },
}

export const followUnfollowAPI = {
    getFollow(id) {
        return instance.post(`/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '98931042-5b41-4b1a-9370-73a11d1bce97'
            },
        })
            .then(response => response.data)
    },

    getUnfollow(id) {
        return instance.delete(`/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '98931042-5b41-4b1a-9370-73a11d1bce97'
            },
        })
            .then(response => response.data)
    }
}