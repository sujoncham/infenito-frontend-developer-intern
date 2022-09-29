import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componests/Footer/Footer';
import Header from './componests/Header/Header';
import Home from './componests/Pages/Home/Home';
// 2. UI/UX Link-   https://www.figma.com/file/46GH4iF125pb5xtf4qnvi3/Webpage-Design?node-id=0%3A1
// 4. Resources Link-   https://drive.google.com/file/d/1KB8o4Cnsi11IR4r7_EnWJJu-Q4DrAK5C/view?usp=sharing
// Angrybaaz Service Private Limited

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
