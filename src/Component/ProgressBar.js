import React, { useEffect } from 'react'
import useStorage from './useStorage'
const ProgressBar = ({file ,setfile ,caption }) => {
    const {url,progress}=useStorage(file)
   // console.log(progress , url)

    useEffect(
        ()=>{
            if(url){
           setfile(url);

            }
        },[url,setfile]
    )

  return (
    <div className='progress-bar' style={{width:progress + "%"}}>progress

    </div>
  )
}

export default ProgressBar