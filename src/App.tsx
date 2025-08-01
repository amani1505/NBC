import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer";
import MainNavigation from "./components/Navigation/MainNavigation";
import "./App.css";
import BusinessBanking from "./Pages/Landing/BusinessBanking/BusinessBanking";


// Lazy Loading PAges

const Home = lazy(() => import("./Pages/Landing/Home"));
const PersonalBanking = lazy(
  () => import("./Pages/Landing/PersonalBaking/PersonalBanking")
);
const NotFound = lazy(() => import("./Pages/Status/NotFound"));
const Error = lazy(() => import("./Pages/Status/Error"));
const UnderMaintenance = lazy(() => import("./Pages/Status/UnderMaintenance"));
const Diaspora = lazy(() => import("./Pages/Landing/PersonalBaking/Diaspora"));
const Individual = lazy(
  () => import("./Pages/Landing/PersonalBaking/Individual")
);
const Private = lazy(() => import("./Pages/Landing/PersonalBaking/Private"));
const Privilages = lazy(
  () => import("./Pages/Landing/PersonalBaking/Privilages")
);
const SingleAccount = lazy(() => import("./Pages/Landing/SingleAccount"));
const SingleInsurance = lazy(() => import("./Pages/Landing/SingleInsurance"));
const SingleLoan = lazy(() => import("./Pages/Landing/SingleLoan"));
const WaytoBank = lazy(() => import("./Pages/Landing/WaytoBank"));
const CompareAccount = lazy(() => import("./Pages/Landing/CompareAccount"));

// ABOUT PAGES
const About = lazy(() => import("./Pages/Landing/About/About"));
const ContactUs = lazy(()=>import('./Pages/Landing/ContactUs'))
const Overview = lazy(() => import("./Pages/Landing/About/Overview"));
const Careers = lazy(() => import("./Pages/Landing/About/Careers"));
const Governance = lazy(() => import("./Pages/Landing/About/Governance"));
const InvestorRelations = lazy(
  () => import("./Pages/Landing/About/InvestorRelations")
);
const News = lazy(() => import("./Pages/Landing/About/News"));
const Sustainability = lazy(
  () => import("./Pages/Landing/About/Sustainability")
);
const Tenders = lazy(() => import("./Pages/Landing/About/Tenders"));

// Bussiness Banking Pages
const SMEs = lazy(() => import("./Pages/Landing/BusinessBanking/SMEs"));
const MicroEnterprise = lazy(
  () => import("./Pages/Landing/BusinessBanking/MicroEnterprise")
);
const Commercial = lazy(
  () => import("./Pages/Landing/BusinessBanking/Commercial")
);

const WhistleBlowing = lazy(() => import("./Pages/Landing/WhistleBlowing"));
const WebTerms = lazy(() => import("./Pages/Landing/WebTerms"));
const TermsCondition = lazy(() => import("./Pages/Landing/TermsCondition"));
const DataPrivacy = lazy(() => import("./Pages/Landing/DataPrivacy"));

const SingleNews = lazy(() => import("./Pages/Landing/SingleNews"));

// Security Pages
const SecurityCenter = lazy(() => import("./Pages/Landing/SecurityCenter"));
const FraudaAlert = lazy(() => import("./Pages/Landing/FraudAlert"));

// Currency Convetor

const CurrencyConvetor = lazy(()=> import('./Pages/Landing/CurrencyConvetor'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            Loading...
          </div>
        }
      >
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="personal-banking" element={<PersonalBanking />}>
            <Route index element={<Individual />} />
            <Route path="diaspora" element={<Diaspora />} />
            <Route path="priveleged" element={<Privilages />} />
            <Route path="private" element={<Private />} />
          </Route>
          <Route path="accounts/:accountName" element={<SingleAccount />} />
          <Route path="loans/:loanName" element={<SingleLoan />} />
          <Route
            path="insurances/:insuranceName"
            element={<SingleInsurance />}
          />
          <Route path="way-to-bank/:wayToBankName" element={<WaytoBank />} />

          <Route
            path="compare-account/:compareAccountName"
            element={<CompareAccount />}
          />
          <Route path="about" element={<About />}>
            <Route index element={<Overview />} />
            <Route path="careers" element={<Careers />} />
            <Route path="governance" element={<Governance />} />
            <Route path="investor-relations" element={<InvestorRelations />} />
            <Route path="news" element={<News />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="tenders" element={<Tenders />} />
          </Route>
          <Route path="contact-us" element={<ContactUs/>} />

          {/* Bussiness Banking Pages */}

          <Route path="business-banking" element={<BusinessBanking />}>
            <Route index element={<MicroEnterprise />} />
            <Route path="smes" element={<SMEs />} />

            <Route path="commercial" element={<Commercial />} />
          </Route>

          <Route path="whistle-blowing" element={<WhistleBlowing />} />
          <Route path="website-terms" element={<WebTerms />} />
          <Route path="terms-condition" element={<TermsCondition />} />
          <Route path="data-privacy" element={<DataPrivacy />} />

          <Route path="news/:newsName" element={<SingleNews />} />

          {/* security pages */}
          <Route path="security-center" element={<SecurityCenter />} />
          <Route path="fraud-alert" element={<FraudaAlert />} />


          {/* Currency Convetor */}

          <Route path="currency-convetor" element={<CurrencyConvetor />} />

          {/* Status Pages */}
          <Route path="error" element={<Error />} />
          <Route path="under-maintenance" element={<UnderMaintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
