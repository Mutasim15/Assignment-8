import React from 'react';

const Resource = (props) => {
    const {contentTopic,name,profile,coverUrl,reading}= props.resource
    console.log(coverUrl)
    return (
     
    <div className='resources_container'>
        <div className='programming_content'>
            <img src={coverUrl} width={"850px"} alt="" />
            <h2>Resource:{contentTopic}</h2>
      <nav className='content_container'>
         <nav1 className="blogger_details"> 
            <img src={profile} width={"80px"} ></img>
            <div>
            <h2>{name}</h2>
            <h3 className='date'>March 23 ,2024(4 days ago)</h3>
            </div>
         </nav1>
         <nav2>
            <h2 className='reading_time'><span id='readingtime'>{reading}</span> min read</h2>
         </nav2>
      </nav>
        </div>
        <div className='blogs_container'>
             <h2>Time spend:</h2>
        </div>
    </div>
    );
};

export default Resource;