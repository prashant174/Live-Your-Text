
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import EditorPage from './Pages/EditorPage';
import {Helmet} from "react-helmet";
function App() {
  return (
    <>
     <Helmet>
        <title>Live Your Text</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div>
      <Toaster position='top-right' toastOptions={{
        success:{
          theme:{
            primary:'#4aed88'
          }
        }
      }}></Toaster>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
