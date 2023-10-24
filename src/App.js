/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Login from './pages/LoginPage'
import Signup from './pages/Signup'
function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Signup />} />
                    <Route
                        path='/home'
                        element={
                            <>
                                <FeedbackForm  />
                                <FeedbackStats  />
                                <FeedbackList/>
                            </>
                        }
                    ></Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider> 
    )
}

export default App