import './App.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import GamePage from './pages/GamePage';
import SignupPage from './pages/SignupPage';
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
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
