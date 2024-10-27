import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { GlobalContextProvider } from './contexts'
import Signup from './pages/signup-page/Signup'
import Navbar from './pages/nav-bar/Navbar'
import LoginPage from './pages/login-page/LoginPage'
import HomePage from './pages/homepage/HomePage'
import ReviewTable from './pages/reviewtable/ReviewTable'
import AddReview from './pages/add-review/AddReview'
function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<HomePage />}></Route>
            <Route path='signup' element={<Signup />}></Route>
            <Route path='loginpage'  element={<LoginPage />}></Route>
            <Route path='reviewtable' element={<ReviewTable />}></Route>
            <Route path='addreview' element={<AddReview />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
