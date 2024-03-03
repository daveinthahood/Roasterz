import  { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ProtectedApp } from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Store/index.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Accesso/LoginPage.jsx'
import RegisterPage from './Pages/Accesso/RegisterPage.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import ProfilePage from './Pages/AccountPage/ProfilePage.jsx'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Routes>
            <Route path='/signin' element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
               
                <Route path='/' element={<ProtectedApp />}>

                    <Route path='/' element={<LoginPage />} />
                    <Route path='/homepage' element={<HomePage />}/>
                    <Route path='/profile' element={<ProfilePage />}/>
                    <Route path='*' element={<NotFoundPage />}/>

                </Route>
            </Routes>
            
        </BrowserRouter>
        </PersistGate>
        </Provider>
    </StrictMode>
    
)
