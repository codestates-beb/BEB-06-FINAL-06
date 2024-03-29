import './App.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import GamePage from './pages/GamePage';
import SignupPage from './pages/SignupPage';
// import ItemMarket from './pages/ItemMarket';
// import NFTMarket from './pages/NFTMarket';
import Community from './pages/Community';
import Market from './pages/Market';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';

import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';

function App() {


    return (
        <div className="App">
        <RecoilRoot>
            <BrowserRouter>
            {/* <UserContext.Provider value={{user, setUser, isLogin, setIsLogin, posts, setPosts}}> */}
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/MyPage' element={<MyPage />}/>
                    <Route path='/GamePage' element={<GamePage />}/>
                    <Route path='/SignupPage' element={<SignupPage />}/>
                    <Route path='/market' element={<Market />}/>
                    {/* <Route path='/nftmarket' element={<NFTMarket/>}/>
                    <Route path='/itemmarket' element={<ItemMarket/>}/> */}
                    <Route path='/community' element={<Community/>}/>
                </Routes>
                {/* </UserContext.Provider> */}
            </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
