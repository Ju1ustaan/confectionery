import axios from "axios";

export const getTest = () => {
    return axios('https://jsonplaceholder.typicode.com/comments?postId=1')
}

export const getTestContent = (id) => {
    return axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}