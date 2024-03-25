import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from './components/layouts/Login/Login';
import { Steps } from './components/layouts/Steps/Steps';
import { Step1 } from './components/malecules/Step1/Step1';
import { Step2 } from './components/malecules/Step2/Step2';
import { Step3 } from './components/malecules/Step3/Step3';
import { Home } from "./components/malecules/Home/Home";
import { Faq } from "./components/malecules/Faq/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/page' element={<Steps />}>
          <Route path='' element={<Navigate to='/page/step1' />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="home" element={<Home />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;
