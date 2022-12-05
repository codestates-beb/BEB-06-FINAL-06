import React, {useState, useContext, useEffect} from 'react' // 선언
import axios from 'axios';
import './Comment.css'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';

const Comment = ({post_id}) => {
    // const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    const [content, setContent] = useState('')  //내용
    const [comment, setComment] = useState([]); // 댓글 
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언

    // 댓글 서버에서 불러오기
    useEffect(()=> {
        axios.post("http://localhost:8000/post/comment",{
            post_id : post_id
        },{withCredentials: true})
        .then((response) =>{
            setComment(response.data)
        //    console.log(response.data)

        })
        .catch((Error)=>{
            console.log(Error)
        })
    }, [])
    

    // textarea 값 가져오기
    const getContent =(e) =>{
        const content = e.target.value
        setContent(content);
      }

      // 댓글 입력 (엔터키 시 입력됨)
    const onClick = () => {
        if( user.user_address === "" ){
            alert("다시 로그인해 주세요")
            navigator('/')
        }else{
        axios.post("http://localhost:8000/post/commentsave", {
            // 지갑주소, 닉네임, 프로필이미지, 
            // 게시글내용, 게시글추가된이미지, 게시글 작성 시간, 게시글 카테고리
            post_id : post_id,
            user_address : user.user_address,
            user_nickname : user.user_nickname,
            user_img : user.user_img,
            comment_content : content,

            },{withCredentials : true})
            .then(function (response) {
                console.log("성공")
                console.log(response.data)
                setContent("")
                window.location.reload();
            })
            .catch((Error) => {
                console.log("실패")
                console.log(Error)
            })
    }
    };
       
        
    const onKeyPress = (e) => {
        if(e.key == 'Enter') {
          onClick();
        }
    }
       
    // 시간 변환
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
    <div className='Comment'>
        {/* 댓글 뷰 */}
        {comment.map(el => {
            return(
                <div className='Comment_View' key={el.id}>
                    <img className='Comment_View-UserImg' src={el.user_img}/>
                    <div className='Comment-container'>
                        <div className='Comment-container-usertime'>
                            <span className='Comment_UserInfo-name'> {el.user_nickname} </span>
                            <span className='Comment_UserInfo-date'> {betweenTime(el.comment_date)}</span>
                        </div>
                        <span className='Comment_UserInfo-content'> {el.comment_content} </span>
                    </div>
                </div>
              )  })
        }
         {/* 댓글작성 */}
        <div className='Comment_Writing'>
            <img className='Comment_View-UserImg' src={user.user_img}/>
            <input className='Comment_Writing-Textarea' type="text" placeholder="댓글을 입력해주세요." onKeyPress={onKeyPress} onChange={getContent} />
            <button className='Comment_Writing-Btn' onClick={onClick}> </button>
        </div>
        
    </div>
  )
}

export default Comment