import {useRouter} from 'next/router'
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])

    return ( 
    <div className="not-found bg-light container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
       <div className='text-white content bg-secondary p-5 w-75 rounded'>  
            <h1>Ooops that was not found!</h1>
            <h3>Redirecting to Home in 3 seconds...</h3>
        </div>
    </div> 
    );
}
 
export default NotFound;
