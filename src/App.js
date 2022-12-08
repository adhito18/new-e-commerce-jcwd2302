// Utilities
import './supports/stylesheets/utilities.css'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/body";
import Menu from './pages/menu/menu'
import Register from "./pages/register/register";
import Login from "./pages/signin/signin"
import DetailProducts from './pages/detail/detail'
import {createUserWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import {Suspense, useEffect, useRef, useState} from 'react'
import Cart from './pages/cart/cart'
// import{ useState,useEffect } from 'react'





// export default function App(){
//   const [username, setUsername] = useState('')
//   const [redirect, setRedirect] = useState(false)

//   useEffect(() => {
//     checkIsLogin()
//   }, [])
//   let checkIsLogin = async() =>{
//     // let getToken = JSON.parse(localStorage.getItem('token'))
//     // if(getToken){
//     // setUsername(getToken.username)
//     // setRedirect(true)
//     // }
//     try {
//       let getTokenId = localStorage.getItem('token')
//       if(getTokenId){
//         let response = await axios.get(`https://my-json-server.typicode.com/adhito18/jsonserver-jcwd230/users?id=${getTokenId}`)
//         setUsername(response.data[0].username)
//         setRedirect(true)
//       }
//     } catch (error) {
      
//     }

//     }
  

//   let onLogin = async(inputUsername, inputPassword) => {
//     try {
//         //step get value index
//         // let inputUsername = username.current.value 
//         // let inputPassword = password.current.value
//         let response = await axios.get(`https://my-json-server.typicode.com/adhito18/jsonserver-jcwd230/users?username=${inputUsername}&password=${inputPassword}`)
//         if(response.data.length === 0) throw {message: 'account not found'}
//         localStorage.setItem('token', `${response.data[0].id}`)
//         setUsername(response.data[0].username)
//         // let dataToSave={  //bisa pakek ini
//         //   id: response.data[0].id,
//         //   username: response.data[0].username
//         // }
//         // localStorage.setItem('token', JSON.stringify(dataToSave))
//         // setUsername(response.data[0].username)
//         toast('Login success')
//         setTimeout(() => {
//           setRedirect(true)
//         }, 3000)
        
//         // toast('Login success')
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// let onLogout = () => {
//   localStorage.removeItem('token')
//   setRedirect(false)
//   setUsername('')
// }
//   return(
//     <>
//       <Navbar data={{username}} myFunc={{onLogout}}/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/register' element={<Register isRedirect={{redirect}} />} />
//         <Route path='/login' element={<Login myFunc={{onLogin}} isRedirect={{redirect}}/>}/>
//         <Route path='/Menu' element={<Menu/>}/>
//         <Route path='/products/:id' element={<DetailProducts/>}/> {/*: => route params*/}
//       </Routes>
//       <Toaster/>
//     </>
//   )
// }
const provider = new GoogleAuthProvider();

export default function App() {
  const [redirect, setRedirect] = useState(false)
  const [username, setUsername] = useState('')

  const email = useRef()
  const password = useRef()
  
  const [data,setData] = useState('')
  useEffect(() => {
        checkIsLogin()
        checkTokenUid()
      }, [])
      let checkIsLogin = async() =>{
        try {
          let getTokenId = localStorage.getItem('token')
          if(getTokenId){
            let response = await axios.get(`https://my-json-server.typicode.com/adhito18/jsonserver-jcwd2302/users?id=${getTokenId}`)
            setUsername(response.data[0].username)
            setRedirect(true)
          }
        } catch (error) {
          
        }
    
        }
  let onRegister = async() => {
    try {
      let inputEmail = email.current.value
      let inputpassword = password.current.value

      let response = await createUserWithEmailAndPassword(
        auth,
        inputEmail,
        inputpassword
      )
      toast(response)
    } catch (error) {
      toast(error)
    }
  }
    // let onLogin = async() => {
    //   try {
    //     // let inputEmail = email.current.value
    //     // let inputPassword = password.current.value 

    //     let response = await signInWithEmailAndPassword(
    //       auth,
    //       inputEmail,
    //       inputPassword
    //     );
    //     toast(response)
    //   } catch (error) {
    //     toast(error)
    //   }
    //}
    let onLogin = async(inputUsername, inputPassword) => {
          try {
              // step get value index
              // let inputUsername = username.current.value 
              // let inputPassword = password.current.value
              let response = await axios.get(`https://my-json-server.typicode.com/adhito18/jsonserver-jcwd2302/users?username=${inputUsername}&password=${inputPassword}`)
              if(response.data.length === 0) throw {message: 'account not found'}
              localStorage.setItem('token', `${response.data[0].id}`)
              setUsername(response.user.email)
              toast('Login success')
              setTimeout(() => {
              setRedirect(true)
              }, 3000)
              // toast('Login success')
          } catch (error) {
              console.log(error.message)
          }
      }

    let onLoginWithGoogle = async() => {
      try {
        let response = await signInWithPopup(auth, provider)
        setUsername(response.user.email)
        localStorage.setItem('tokenUid', `${response.user.uid}`)
              setUsername(response.user.displayName)
              toast('Login success')
              setTimeout(() => {
                setRedirect(true)
              }, 3000)
      } catch (error) {
        toast(error)
      }
    }
    let checkTokenUid = () => {
      if(localStorage.getItem('tokenUid')){
      onAuthStateChanged(auth, (userFromFirebase) => {
        console.log('running')
        if(userFromFirebase){
          setData(userFromFirebase.email)
        }
      })
    }else{
      onLogoutFirebase()
    }

    }

    let onLogoutFirebase = async() => {
      try {
        await signOut(auth)
        setUsername('')
        localStorage.removeItem('tokenUid')
        // setData('')
        setRedirect(false)
      } catch (error) {
        
      }
    }
    let onLogout = () => {
        localStorage.removeItem('tokenUid')
        setRedirect(false)
        setUsername('')
    }
  
    // <Suspense fallback={<h1>Loading...</h1>}>
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/Profile' element={<Profile/>}/>
    // </Routes>
    // </Suspense>
    return(
          <>
            <Navbar data={{username}} myFunc1={{onLogout}}/>
            <Suspense>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={< Register myFunc={{onRegister}} />} />
              <Route path='/login' element={<Login myFunc={{onLogin}} myFunc1={{onLoginWithGoogle}} isRedirect={{redirect}}/>}/>
              <Route path='/Menu' element={<Menu/>}/>
              <Route path='/products/:id' element={<DetailProducts/>}/> {/*: => route params*/}
              <Route path='/Cart' element={<Cart/>} />
            </Routes>
            </Suspense>
            <Toaster/>
          </>
        )
}
