import './App.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import GamePage from './pages/GamePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/MyPage' element={<MyPage />}/>
                    <Route path='/GamePage' element={<GamePage />}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
