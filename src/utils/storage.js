export const isLoggedIn = ()=>{
    return !!localStorage.getItem('authenticated')
}
export const setAuth = ()=>{
    return localStorage.setItem('authenticated', 'true')
}
export const removeAuth = ()=>{
    return localStorage.removeItem('authenticated')
}