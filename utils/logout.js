import Cookies from "js-cookie"

export const Logout = (router) =>{
    Cookies.remove('user', { path: '/', domain: 'localhost'  })
    Cookies.remove('email', { path: '/', domain: 'localhost' })
    Cookies.remove('token', { path: '/', domain: 'localhost' })
    Cookies.remove('image', { path: '/', domain: 'localhost' })
    router.push('/login')
  }