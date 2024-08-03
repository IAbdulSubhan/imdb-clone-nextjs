"use client"

import { useEffect } from "react"

const error = ({ error, reset }) => {
    useEffect(()=>{
        console.log(error)
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h1>Something Went Wrong, Please try again later.</h1>
            <button className="hover:text-amber-600 border-solid" onClick={()=>reset()}>Try Again</button>
        </div>
    );
}

export default error
