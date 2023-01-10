import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import FormsPage from './pages/FormsPage'
import AnswersPage from './pages/AnswersPage'


function App() {
  return (    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FormsPage/>} />
        <Route path='/AnswersPage' element={<AnswersPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
