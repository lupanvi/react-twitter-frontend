export const isLoggedIn = ()=>{
    return !!localStorage.getItem('authenticated')
}
export const setAuth = (value)=>{
    localStorage.setItem('authenticated', value)
}
export const removeAuth = ()=>{
    localStorage.removeItem('authenticated')
}
