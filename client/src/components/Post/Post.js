// 게시글 

import React, { useEffect, useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Comment from './Comment'

const Post = ({id, user_address,user_nickname, user_img, post_content, post_image, post_date, post_categorie}) => {
    const [showComment, setShowComment] = useState(false)
    // 댓글 클릭시 댓글창 오픈
    const handleClickButton = e => {
        // const { name } = e.target;
        setShowComment((e) => !e);
    };
    // 시간계산
    const betweenTime = (value) =>{
        const date_at=new Date(value);
        const date_now=new Date();
        const date=Math.floor((date_now.getTime() - date_at.getTime())/1000/60);
        if(date < 1) return '방금전';
        if(date <60) return `${date}분전`;
        const betweenTimeHour = Math.floor(date/60);
        if(betweenTimeHour<24) return `${betweenTimeHour}시간전`;
        const betweenTimeDay = Math.floor(betweenTimeHour/60/24);
        if(betweenTimeDay < 365) return `${betweenTimeDay}일전`;
        
        return `${Math.floor(betweenTimeDay / 365)}년전`;
    };


    return (
    <div className='Post'>
        {/* 상단 작성 유저 정보, 시간 */}
        <div className='Post_UserInfo'>
            <img className='Post_UserInfo-img' src={user_img}/>
            <div className='Post_UserInfo-container'>
                <span className='Post_UserInfo-name'> {user_nickname} </span>
                <span className='Post_UserInfo-date'> {betweenTime(post_date)} </span>
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
            <div className='Post_bottom-like'  > 
                <FavoriteBorderIcon fontSize=''/>  
                {/* <FavoriteIcon/> */}
                <span className='Post_bottom-span'>좋아요</span>
            </div>
            
            <div className='Post_bottom-comments' onClick={handleClickButton}> 
                <ChatBubbleOutlineIcon/>
                <span className='Post_bottom-span'>댓글 달기 </span>
            </div>
        </div>
        {/* 댓글 창 */}
        {showComment && (<Comment post_id={id}/>) }

    </div>
  )
}

export default Post