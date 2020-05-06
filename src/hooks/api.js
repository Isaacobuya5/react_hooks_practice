import { useResource } from "react-request-hook";

export function useAPILogin() {
    return useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }));
};

export function useAPIRegister() {
    return useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: { 
            username: username,
            password: password 
            }
    }));
};

export function useAPICreatePost(user) {
    return useResource(({ title, content, author}) => ({
        url: '/posts',
        method: 'post',
        data: { title, content, author: user }
    }));
};

export function useAPIThemes() {
    return useResource(() => ({
        url: '/themes',
        method: 'get'
    }));
};