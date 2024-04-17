import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './contexts/UserContext';
//import styles
import './App.css';
//import pages
import Home from './pages/Home';
import StudyGroups from './pages/StudyGroups';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/profile';
import Footer from './components/Footer/Footer';
import ForgetPassword from './pages/ForgetPassword';
import GroupInfo from './pages/GroupInfo';
import VideoCall from './pages/VideoCall/VideoCall';

// import Mentor from './pages/Mentor';
// import Profile from './pages/Profile';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Projects from './pages/Projects';
// import GroupInfo from './pages/GroupInfo';
// import ForgetPassword from './pages/ForgetPassword';
// import Contact from './pages/Contact';

export const baseUrl = 'http://localhost:4000/api'

function App() {

  const [user, setUser] = useState()

  const saveUser = (user, setUser) => {
    localStorage.setItem('user', JSON.stringify(user['data']))
    setUser(JSON.parse(localStorage.getItem('user')))
  }

  const clearUser = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => { setUser(JSON.parse(localStorage.getItem('user'))) }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, saveUser, clearUser }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/studygroups' element={<StudyGroups />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reset' element={<ForgetPassword />} />
          <Route path='/groupinfo' element={<GroupInfo />} />
          <Route path='/videocall' element={<VideoCall />} />

          {/* 
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mentor' element={<Mentor />} />
          <Route path='/groupinfo' element={<GroupInfo />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;