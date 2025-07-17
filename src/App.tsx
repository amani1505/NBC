import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Home/Footer'
import MainNavigation from './components/Navigation/MainNavigation'
import './App.css'
import Private from './Pages/Landing/PersonalBaking/Private'
import Privilages from './Pages/Landing/PersonalBaking/Privilages'
import SingleAccount from './Pages/Landing/PersonalBaking/SingleAccount'



// Lazy Loading PAges

const Home = lazy(() => import('./Pages/Landing/Home'));
const PersonalBanking = lazy(() => import('./Pages/Landing/PersonalBaking/PersonalBanking'));
const NotFound = lazy(() => import('./Pages/Status/NotFound'));
const Error = lazy(() => import('./Pages/Status/Error'));
const UnderMaintenance = lazy(() => import('./Pages/Status/UnderMaintenance'));
const Diaspora = lazy(() => import('./Pages/Landing/PersonalBaking/Diaspora'));
const Individual = lazy(() => import('./Pages/Landing/PersonalBaking/Individual'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{textAlign: 'center', marginTop: '2rem'}}>Loading...</div>}>
      <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="personal-banking" element={<PersonalBanking />}>
            <Route index element={<Individual />} />
            <Route path="diaspora" element={<Diaspora />} />
            <Route path="priveleged" element={<Privilages />} />
            <Route path="private" element={<Private />} />
            <Route path=":accountName" element={<SingleAccount />}    />
          </Route>
          <Route path="error" element={<Error />} />
          <Route path="under-maintenance" element={<UnderMaintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
