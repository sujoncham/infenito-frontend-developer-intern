import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componests/Header/Header';
import Home from './componests/Pages/Home/Home';
// 2. UI/UX Link-   https://www.figma.com/file/46GH4iF125pb5xtf4qnvi3/Webpage-Design?node-id=0%3A1
// 4. Resources Link-   https://drive.google.com/file/d/1KB8o4Cnsi11IR4r7_EnWJJu-Q4DrAK5C/view?usp=sharing
// Angrybaaz Service Private Limited

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-xl font-bold'>Angrybaaz Service Private Limited</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
