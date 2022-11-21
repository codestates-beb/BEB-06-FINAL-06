import React from 'react'
import './NFTItemList.css'
import NFTItem from './NFTItem'
import dummydata from '../ERC1155-item/dummy';
import Pagination from "react-js-pagination";
import {useState} from "react";

const NFTItemlist = () => {
    const itemCount = 3;
    let totalItemCount = dummydata.length // 전체 아이템 갯수
    const [page, setPage] = useState(1); // 현제 페이지를 기억해줌
    const offset = (page - 1) * itemCount; // 10 -1 * 10

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="nftitemList">
            <div className='nftitemListItem'>
                {
                    dummydata 
                        // .slice(offset, offset + itemCount)  // 페이지로 구현시 주석 해제
                        .map((punk) => (
                            <div key={punk.id}>
                                {/* <Item nftdata={dummydata}/> */}
                                <NFTItem 
                                    id={punk.id} 
                                    name={punk.name} 
                                    image={punk.image} 
                                    price={punk.price}
                                    />
                            </div>
                        ))
                }
            </div>
            
            {/* 페이지네이션  */}
            {/* <div className="page">
                <Pagination className="Pagination" activePage={page}
                    // 현재 페이지
                    itemsCountPerPage={itemCount}
                    // 한 페이지랑 보여줄 아이템 갯수 (10)
                    totalItemsCount={totalItemCount}
                    // 총 아이템 갯수 // totalItemCount
                    pageRangeDisplayed={10}
                    // paginator의 페이지 범위
                    prevPageText={" ‹ "}
                    // "이전"을 나타낼 텍스트
                    nextPageText={" › "}
                    // "다음"을 나타낼 텍스트
                    onChange={handlePageChange}
                    // 페이지 변경을 핸들링하는 함수
                />
            </div> */}
        </div>
    )
}

export default NFTItemlist