import React, {useContext, useEffect, useState} from 'react'
import simbol from '../../icon/simbol.png'
// import Header from '../components/Header'
import './ItemMarket.css'
import Itemlist from '../ERC1155-item/ItemList'
import Box from '../../icon/Box.png'
import axios from 'axios'
// import {UserContext} from '../User/UserContext'
import {useRecoilState} from "recoil";
import {userState} from '../../recoil/user/atom';
import {Login} from '../../recoil/user/atom';

const ItemMarket = () => {
    const [user, setUser] = useRecoilState(userState) // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    const [items, setItems] = useState([])
    const ITEMPRICE = 10; // 아이템 가격

    // Item 초기화
    useEffect(() => {
        axios
            .get("http://localhost:8000/item/findall", {withCredentials: true})
            .then((response) => {
                setItems(response.data)
                // console.log(response.data)
            })
            .catch((Error) => {
                console.log(Error)
            })
        }, [])

    // 아이템 구매
    const Transaction = () => {
        if (user.user_token1amount < ITEMPRICE) {
            alert("토큰이 부족합니다. 토큰 개수를 확인하세요.")
        } else {
            axios
                .get("http://localhost:8000/item/buy", {withCredentials: true})
                .then(function (response) {
                    //  console.log(response.data)
                    setUser({
                        ...user,
                        user_token1amount: user.user_token1amount - ITEMPRICE
                    })
                    alert("아이템이 구매 되었습니다. 마이페이지에서 확인하세요.")

                    window
                        .location
                        .reload();

                })
                .catch((Error) => {
                    console.log(Error)
                })
            }
    }

    return (
        <div className='ItemMarket'>
            {/* <Header/> */}

                <div className='item_Content'>
                    <div className='randomImg'>
                        <div className='randomImgBox'>
                            <img src={Box} alt='Box'></img>
                        </div>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemInfo2'>
                        <div className='ItemMarket_Top-detailed-title-container'>
                            <div className='NFTMarket_Top-detailed-title'>
                                Name
                            </div>
                            <div className='NFTMarket_Top-detailed-title-content'>
                                Jetris ITEM
                            </div>
                        </div>

                        <div className='ItemMarket_Top-detailed-title-container'>
                            <div className='NFTMarket_Top-detailed-title'>
                                Description
                            </div>
                            <div className='NFTMarket_Top-detailed-title-content2'>
                                Token을 사용하여 랜덤으로 ITEM을 뽑으세요!<br></br>
                                뽑은 ITEM을 장착하여 게임시 추가 점수를 받을 수 있습니다.<br></br>
                                랜덤으로 뽑힌 ITEM 상세 설명은 마이 페이지에서 확인할 수 있습니다.
                            </div>
                        </div>
                        {/* 확률 */}
                        <div className='ItemMarket_Top-detailed-title-container'>
                            <div className='NFTMarket_Top-detailed-title'>
                                Probability
                            </div>
                            <div className='NFTMarket_Top-detailed-title-content2'>
                                <span className='Legend'>Legend
                                </span>
                                : 52.63%
                                <span className='Figure'>(20/38)</span>
                                <br></br>
                                <span className='Unique'>Unique
                                </span>
                                : 31.58%
                                <span className='Figure'>(12/38)</span>
                                <br></br>
                                <span className='Rare'>Rare
                                </span>
                                : 10.53%
                                <span className='Figure'>(4/38)</span>
                                <br></br>
                                <span className='Nomal'>Nomal
                                </span>
                                : 5.26%
                                <span className='Figure'>(2/38)</span>
                            </div>
                        </div>
                        {/* 가격 */}
                        <div className='ItemMarket_Top-detailed-title-container'>
                            <div className='NFTMarket_Top-detailed-title'>
                                Price
                            </div>
                            <div className='price'>
                                <img src={simbol} alt='simbol'/>
                                <span>
                                    100 JTT
                                </span>
                            </div>
                        </div>
                        {/*
                <div className='token1Count'>
                    <div>ERC-20 Token1 Count : {user.user_token1amount}개</div>
                </div>
                <div className='marketDescription'>
                    <div className='description'>
                        <span>Token을 사용하여 랜덤으로 아이템을 뽑으세요!</span><br/><br/>
                        <span>위에 있는 노란 버튼을 통해 랜덤 뽑기가 가능합니다.</span><br/><br/>
                        <span>뽑은 아이템을 프로필에 장착하여 기본 점수를 높일 수 있습니다.</span><br/><br/>
                        <span>랜덤으로 뽑힌 아이템과 상세 설명은 마이 페이지에서 확인할 수 있습니다.</span><br/>
                    </div>
                </div> */
                        }
                        <div className='ItemMarket_Top-detailed-btn'>
                            <button className='btn-Shape btn-Size-long2' onClick={Transaction}>
                                Transaction Button
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='imgCollect'>
                    <div className='NFTs'>
                        <Itemlist item={items} loadpage='Market'/>
                    </div>
                </div>
           
        </div>
    )

}

export default ItemMarket;