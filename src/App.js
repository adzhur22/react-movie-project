import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/mainLayout/MainLayout";
import {Movies} from "./components/movies/Movies";
import {MovieFullInformation} from "./components/movieFullInformation/movieFullInformation";
import {LoginPage} from "./pages/login/LoginPage";
import {AccountPage} from "./pages/account/Account/AccountPage";
import {ChangeAvatarPage} from "./pages/changeAvatarPage/ChangeAvatarPage";

function App() {



  return (

<Routes>
  <Route path={'/'} element={<MainLayout/>}>
  <Route index element={<Navigate to={'movies'}/>}/>
  <Route path={'movies'} element={<Movies/>}/>
  <Route path={'movies/:id'} element={<MovieFullInformation/>}/>
  <Route path={'login'} element={<LoginPage/>}/>
  <Route path={'account'} element={<AccountPage/>}/>
  <Route path={'change-avatar'} element={<ChangeAvatarPage/>}/>



  </Route>
</Routes>);
}

export default App;
