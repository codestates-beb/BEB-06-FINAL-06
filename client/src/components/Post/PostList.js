// 게시글 리스트 
import React, {useState, useEffect, useContext} from 'react'
import './PostList.css'
import Post  from './Post'
import axios from 'axios';
import { BugReportTwoTone } from '@material-ui/icons';
import { useRecoilState } from "recoil";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
      axios.get("http://localhost:8000/post/findall",
      {withCredentials: true})
      .then((response) =>{
        setPosts(response.data)
         console.log(response.data)
      })
      .catch((Error)=>{
          console.log(Error)
      })
  }, [])

  return (
    <div>

   {posts
            // .slice(offset, offset + 10)
            .map((el)=>(
                <div key={el.id}>
                <Post
                id={el.id}
                user_address={el.user_address}
                user_nickname={el.user_nickname}
                user_img={el.user_img}
                post_content={el.post_content}
                post_image={el.post_image}
                post_date={el.post_date}
                post_categorie={el.post_categorie} />
                </div>
            ))}  
  </div>
  )
}

export default PostList