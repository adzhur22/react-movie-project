import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/mainLayout";
import {Movies} from "./pages/moviesPage";
import {MovieFullInformation} from "./components/movieFullInformation";
import {LoginPage} from "./pages/login";
import {AccountPage} from "./pages/account";
import {ChangeAvatarPage} from "./pages/changeAvatarPage";



function App() {



  return (

<Routes>
  <Route path={'/'} element={<MainLayout/>}>
  <Route index element={<Navigate to={'movies'}/>}/>
  <Route path={'movies'} element={<Movies/>}/>
  <Route path={'movies/:id'} element={<MovieFullInformation/>}/>
  <Route path={'login'} element={<LoginPage/>}/>
  <Route path={'account'} element={<AccountPage/>}/>
  <Route path={'account/:id'} element={<MovieFullInformation/>}/>
  <Route path={'change-avatar'} element={<ChangeAvatarPage/>}/>



  </Route>
</Routes>);
}

export default App;
