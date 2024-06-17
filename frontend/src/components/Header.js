import React, { useContext, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { FaShoppingCart } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import logo from '../assets/Divegenlogo.png'
const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay,setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  const handleLogout = async() => {
    if (window.confirm('Are you sure you want to logout?')) {
      const fetchData = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include',
      });

      const data = await fetchData.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        navigate("/");
      }

      if (data.error) {
        toast.error(data.message);
      }
    }

  }

  const handleSearch = (e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }
  }
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                  <div className='w-20 h-20 relative'>

                    <img src={logo} alt="Logo" />
                  </div>
                </Link>
            </div>

            <div className='hidden lg:flex items-center border-custom-orange w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='Search ' className='w-full outline-none px-5' onChange={handleSearch} value={search}/>
                <div className='text-lg hover:cursor-pointer min-w-[50px] h-8  flex items-center justify-center rounded-r-full text-white'>
                  {/* <GrSearch /> */}
                </div>
            </div>


            <div className='flex items-center gap-7'>
                
            
              <div className='relative flex justify-center' onClick={()=>setMenuDisplay(!menuDisplay)}>
                    {
                      user?._id && (
                        <div className='text-3xl cursor-pointer relative flex justify-center' title='Profile Options'>
                          {
                            user?.profilePic ? (
                              <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                            ) : (
                              <FcBusinessman />
                            )
                          }
                        </div>
                      )
                    }
                    
                    {
                      menuDisplay && (
                        <div className='absolute bg-white top-full mt-1 h-fit p-2 shadow-lg rounded'>
                          <nav>
                            {
                              user?.role === ROLE.ADMIN && (
                                <Link to={"/admin-panel/all-products"} className='whitespace-nowrap block hover:bg-slate-100 p-2'>Admin Panel</Link>
                              )
                            }
                            {
                              user?.role === ROLE.GENERAL && (
                                <Link to={"/becomeseller"} className='whitespace-nowrap block hover:bg-slate-100 p-2'>Become a seller</Link>
                              )
                            }
                            {
                              user?.role === ROLE.SELLER && (
                                <Link to={"/upload"} className='whitespace-nowrap block hover:bg-slate-100 p-2'>Upload a product</Link>
                              )
                            }
                          </nav>
                        </div>
                      )
                    }
                  </div>


                {
                     user?._id && (
                      <Link to={"/wishlist"} className='text-2xl relative' title='Wishlist'>
                          <span>
                            {/* <IoMdHeart /> */}
                            <CiHeart />
                          </span>
      
                      </Link>
                      )
                  }

                  {
                     user?._id && (
                      <Link to={"/cart"} className='text-2xl relative ' title='Cart'>
                          <span><HiOutlineShoppingBag /></span>
      
                          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'>{context?.cartProductCount}</p>
                          </div>
                      </Link>
                      )
                  }
              


                <div>
                  {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-custom-orange hover:bg-red-600'>Logout</button>
                    )
                    : (
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-custom-orange hover:bg-blue-700'>Login</Link>
                    )
                  }
                    
                </div>

            </div>

      </div>
    </header>
  )
}

export default Header