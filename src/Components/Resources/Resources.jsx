import React, { useEffect, useState } from 'react';
import './Resources.css'
import Resource from '../Resource/Resource';
const Resources = () => {
  
    const [resources, setResources]=useState([]);

    useEffect(()=>{
         fetch('data.json')
         .then(res=>res.json())
         .then(data=>setResources(data))

    },[])
    return (

     
      <div>
        
          {
            // resources.map(resource=>console.log(resource))
            resources.map(resource=><Resource 
                key={resource.id}
                resource={resource}
                ></Resource>)
          }
            {/* <div className='resources_container'>
           <div className='programming_content'>
            <h2>Programming Knowledge</h2>

           </div>
           <div className='blogs_container'>
                <h2>Time spent</h2>
           </div>
            </div> */}
      </div>
    );
};

export default Resources;