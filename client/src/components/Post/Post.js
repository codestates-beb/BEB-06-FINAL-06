// 게시글 

import React, { useEffect, useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const Post = ({id, user_address,user_nickname, user_img, post_content, post_image, post_date, post_categorie}) => {

    return (
    <div className='Post'>
        {/* 상단 작성 유저 정보, 시간 */}
        <div className='Post_UserInfo'>
            <img className='Post_UserInfo-img' src={user_img}/>
            <div className='Post_UserInfo-container'>
                <span className='Post_UserInfo-name'> {user_nickname} </span>
                <span className='Post_UserInfo-date'> {post_date} </span>
            </div>
        </div>
        {/* 중간 게시글 내용 */}
        <div className='Post_PostContent'>
        <img className='Post_PostContent-img' src={post_image} />
            <pre>
                {post_content}
            </pre>
        </div>
        {/* 댓글/좋아요 등 */}
        <div className='Post_bottom-container'>
            <div className='Post_bottom-like'> 
                <FavoriteBorderIcon fontSize=''/>  
                {/* <FavoriteIcon/> */}
                <span className='Post_bottom-span'>좋아요</span>
            </div>
            
            <div className='Post_bottom-comments'> 
                <ChatBubbleOutlineIcon/>
                <span className='Post_bottom-span'>댓글 달기 </span>
            </div>
        </div>
    </div>
  )
}

export default Post