// 글쓰기 컴포넌트

import React,{useContext, useState, useEffect, useRef} from 'react'
import './PostWriting.css'
import axios from 'axios';
import {useWeb3React} from '@web3-react/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { UserContext } from '../../User/UserContext';
import {useNavigate} from 'react-router-dom';
const PostWriting = () => {
    const {account, library, active, activate, deactivate} = useWeb3React();
    const {user, setUser, isLogin, setIsLogin, posts, setPosts} = useContext(UserContext);
     //게시글 값 상태 저장
    const [content, setContent] = useState('')  //내용
    const [imgBoxTog, setImgBoxTog] = useState(false) // 이미지 있는지 확인
    const [postImage, setPostImage] =useState('') //게시글 이미지

    const navigator = useNavigate();  
    let dataURL ='';
    // 랜더링 시 유저 상태 유지하기 위해 서버와 통신
    useEffect(() => {
        axios.get("http://localhost:8000/user/success",
            {withCredentials : true})
            .then(function (response) {
                console.log("MainPage success")
                // console.log(response.data[0])
                setIsLogin(true)    // 로그인 상태 유지
                // 유저정보를 갱신함
                setUser({
                    id: response.data[0].id,
                    user_address: response.data[0].user_address,
                    user_nickname: response.data[0].user_nickname,
                    user_token1amount: response.data[0].user_token1amount,
                    user_token2amount: response.data[0].user_token2amount,
                    user_score: response.data[0].user_score,
                    user_img: response.data[0].user_img,
                })
            })
            .catch((Error) => {
                console.log(Error)
            })
        },[])
    
    // 이미지 업로드 ---------------------------
    const selectFile = useRef("")
    const onLoadFile = (e) => {
    let input = e.target;
    let reader = new FileReader();
    reader.onload = function(){
        dataURL = reader.result;
        let upLoadIMG = document.getElementById('upload-img')
        upLoadIMG.src = dataURL;
        setImgBoxTog(true);
        setPostImage(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
    // console.log(reader)
  }

  // 이미지 삭제
  const deleteImg = () => {
    setImgBoxTog(false);
    setPostImage('');
  }

    // textarea 크기 자동 조절
    const autoResizeTextarea = () => {
        let textarea = document.querySelector('.PostWriting_Top-Textarea');

        if (textarea) {
        textarea.style.height = 'auto';
        let height = textarea.scrollHeight; // 높이
        textarea.style.height = `${height + 3}px`;
        }
    };
    // textarea 값 가져오기
    const getContent =(e) =>{
        const content = e.target.value
        setContent(content);
      }

  // 게시글 작성 
    const Writing = () => {
        if( user.user_address === "" ){
            alert("다시 로그인해 주세요")
            navigator('/')
        }else{
        axios.post("http://localhost:8000/post/postsave", {
            // 지갑주소, 닉네임, 프로필이미지, 
            // 게시글내용, 게시글추가된이미지, 게시글 작성 시간, 게시글 카테고리
            user_address : user.user_address,
            user_nickname : user.user_nickname,
            user_img : user.user_img,
            post_content : content,
            post_image : postImage,
            // post_date : "2022-11-20",
            post_categorie : "jetris",
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
}

    // 테스트 후 삭제
    const test = () => {
        console.log(user)
        console.log('isLogin :' + isLogin)
        console.log('account : ' + account)
        console.log('content :'+ content)
        console.log('postImage : '+ postImage)
    }

  return (
    <div className='PostWriting'>
        {/* 상단 유저정보, 게시글 입력 */}
        <div className='PostWriting_Top'>
            <div className='PostWriting_Top-InputData'>
                <img className='PostWriting_Top-UserImg' src={user.user_img}/> 
                <textarea className='PostWriting_Top-Textarea' id="text-area" placeholder="게시글을 입력해주세요."onKeyDown={autoResizeTextarea} onKeyUp={autoResizeTextarea} onChange={getContent} />
            </div>
            <div className={`shareImgBox ${imgBoxTog ? "": "displaynone" }`}> 
                <img id="upload-img" alt="face"></img>
                <div>
                <button className="deleteButton" onClick={deleteImg}>❌</button>
                </div>
              </div>
        </div>
        {/* 하단 이미지첨부, 게시글 등록 버튼 */}
        <div className='PostWriting_Bottom'>
            <div className='PostWriting_Bottom-ImgAdd' onClick={()=> {selectFile.current.click()}}> 
            <input type='file' id='fileInput' accept='image/jpg, image/png, image/jpeg,'  style={{display:"none"}} ref={selectFile} onChange={onLoadFile}></input>  
                <AddAPhotoIcon color='secondary'/>
                <span className='PostWriting_Bottom-span'>사진</span>
            </div>
            <button className='btn-Shape btn-Size-verysmall' onClick={Writing} >게시</button> 
            {/* 테스트 후 삭제 */}
            {/* <button className='btn-Shape btn-Size-verysmall' onClick={test} >테스트</button>  */}
        </div>
    </div>
  )
}

export default PostWriting