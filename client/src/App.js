import './App.css';
import './articles.css';
import Post from './post';
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import IndexPage from './Pages/indexpages';
import LoginPage from './Pages/loginpage';
import RegisterPage from './Pages/registerpage';
import ArticlePage from './Pages/articlepage';
 

//This is JSX by the way, which is React's native language I believe? Looks like HTML, is more similar to JS, does both

function App() {



  return (

   <Routes>
    <Route path = "/" element={<Layout/>}>

      <Route index element = {<IndexPage/>}/>
      <Route path = {'/login'} element={<LoginPage />}/>
      <Route path = {'/register'} element = {<RegisterPage/>}/>
      <Route path = {'/article'} element = {<ArticlePage/>}/>
    </Route>




   </Routes>


       

  );
}

export default App;
