import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from '../helpers/displayCurrency'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)


    const fetchData = async() =>{
        
        // try{
            const response = await fetch(SummaryApi.viewwishlist.url,{
                method : SummaryApi.viewwishlist.method,
                credentials : 'include',
                headers : {
                    "content-type" : 'application/json'
                },
            })
        // }
        // catch(error){
        //     console.log(error)
        // }
       
        // console.log(response)
        const responseData = await response.json()

        if(responseData.success){
            setData(responseData.data)
        }


    }

    const handleLoading = async() =>{
        await fetchData()
    }

    useEffect(()=>{
        setLoading(true)
        handleLoading()
         setLoading(false)
    },[])



    const deleteProduct = async(id)=>{
        const response = await fetch(SummaryApi.deleteWishlistProduct.url,{
            method : SummaryApi.deleteWishlistProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                }
            )
        })
        // console.log(data.len)

        const responseData = await response.json()

        if(responseData.success){
            fetchData()
            context.fetchUserAddToCart()
        }
    }

  return (
    <div className='container mx-auto'>
        
        <div className='text-center text-lg my-3'>
            {
                data.length === 0 && !loading && (
                    <p className='bg-white py-5'>No Data</p>
                )
            }
        </div>

        <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>   
                {/***view product */}
                <div className='w-full max-w-3xl'>
                    {
                        loading ? (
                            loadingCart?.map((el,index) => {
                                return(
                                    <div key={el+"Add To Cart Loading"+index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                                    </div>
                                )
                            })
                             
                        ) : (
                          data.map((product,index)=>{
                            console.log(product)
                           return(
                            <Link to={"/product/" + product?.productId._id}>
                            <div key={product?._id+"Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                <div className='w-32 h-32 bg-slate-200'>
                                    <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' />
                                </div>
                                <div className='px-4 py-2 relative'>
                                    {/**delete product */}
                                    <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={()=>deleteProduct(product?._id)}>
                                        <MdDelete/>
                                    </div>

                                    <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.productId?.category}</p>
                                    <div className='flex items-center justify-between'>
                                            {/* <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p> */}
                                            <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                    </div>
                                </div>    
                            </div>
                            </Link>
                           )
                          })
                        )
                    }
                </div>
        </div>
    </div>
  )
}

export default Wishlist