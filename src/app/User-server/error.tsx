"use client"

import React, { useEffect } from 'react'

function error({error}:{error:Error}) {
    useEffect(()=>{
        console.log('Error while fetching the users ',error)
    },[error])
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='text-2xl text-red-600'>
            Error while fetching the user data 

        </div>
    </div>
  )
}

export default error
