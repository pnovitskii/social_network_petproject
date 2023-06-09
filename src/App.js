// import logo from './logo.svg';
import './App.css';
import Header from './components/Content/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Settings from './components/Content/Settings/Settings';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Content/Users/UsersContainer';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='app-body'>
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route
                path='/profile'
                element={<Profile store={props.store} />}/>
              <Route
                path='/dialogs/*'
                element={<Dialogs store={props.store}/>} />
              <Route
                path='/users'
                element={<UsersContainer store={props.store}/>} />
              <Route
                path='/news'
                element={<News />} />
              <Route
                path='/music'
                element={<Music />} />
              <Route
                path='/settings'
                element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='space'></div>
        <div className='footer-text'>© 2022 Pavel Novitskiy</div>
      </div>
    </BrowserRouter>
  );
}



export default App;
