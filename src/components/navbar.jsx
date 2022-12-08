// Logo
import Logo from './../supports/assets/logo.png'

import './navbar.css'

import {MdLocationOn} from 'react-icons/md'

import {Link, useLocation} from 'react-router-dom'
import { AiOutlineUser} from "react-icons/ai";



export default function Navbar(props){
    const location = useLocation() // Digunakan untuk mendapatkan pathname
    return(
        <>
            <div className='navbar flex px-10'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src={Logo} width='50px' height='50px' />
                    </Link>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <span className='pl-10 font-bold'>
                                <Link to='/Cart'>
                                Carts
                                </Link> 
                            </span>
                            <span className='pl-10 font-bold'>
                                <Link to='/Menu'>
                                Order
                                </Link> 
                            </span>
                            <span className='pl-10 font-bold'>
                                Gift
                            </span>
                        </>
                    }
                </div>
                <div className='flex'>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <div className='flex items-center'>
                                <MdLocationOn />
                                <span className='mr-10 font-bold'>
                                    Find a store
                                </span>
                            </div>

                            {
                                props.data.username?
                                <div className='flex items-center'>
                                    <div className='font-bold'>
                                        {props.data.username}
                                    </div>
                                    <div className='my-fs-20 mt-1 ml-1'>
                                        <AiOutlineUser onClick={props.myFunc1.onLogout}/>
    
                                    </div>
                                </div>
                                // props.data.username:
                                :
                                <>
                                
                            <button className='my-bg-dark my-light rounded-full mr-3 px-3 py-2'>
                                <Link to='/login'>
                                    Sign in
                                </Link>
                            </button>
                            <button className='my-dark rounded-full px-3 py-2' style={{border: '1px solid black'}}>
                                <Link to='/register'>
                                    Join now
                                </Link>
                            </button>
                            </>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}