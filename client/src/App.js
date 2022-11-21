import './App.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import GamePage from './pages/GamePage';
import SignupPage from './pages/SignupPage';
import ItemMarket from './pages/ItemMarket';
import NFTMarket from './pages/NFTMarket';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/MyPage' element={<MyPage />}/>
                    <Route path='/GamePage' element={<GamePage />}/>
                    <Route path='/SignupPage' element={<SignupPage />}/>
                    <Route path='/nftmarket' element={<NFTMarket/>}/>
                    <Route path='/itemmarket' element={<ItemMarket/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
