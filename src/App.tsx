import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Home/Footer'
import MainNavigation from './components/Navigation/MainNavigation'
import './App.css'

const Home = lazy(() => import('./Pages/Landing/Home'));
const PersonalBanking = lazy(() => import('./Pages/Landing/PersonalBaking.tsx/PersonalBanking'));
const NotFound = lazy(() => import('./Pages/Status/NotFound'));
const Error = lazy(() => import('./Pages/Status/Error'));
const UnderMaintenance = lazy(() => import('./Pages/Status/UnderMaintenance'));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Suspense fallback={<div style={{textAlign: 'center', marginTop: '2rem'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="personal-accounts" element ={<PersonalBanking />} />
          <Route path="error" element={<Error />} />
          <Route path="under-maintenance" element={<UnderMaintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
