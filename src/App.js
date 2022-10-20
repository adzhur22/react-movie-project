import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/mainLayout/MainLayout";
import {Movies} from "./components/movies/Movies";
import {Movie, MovieFullInformation} from "./components/movieFullInformation/movieFullInformation";

function App() {
  return (

<Routes>
  <Route path={'/'} element={<MainLayout/>}>
  <Route index element={<Navigate to={'movies'}/>}/>
  <Route path={'movies'} element={<Movies/>}/>
  <Route path={'movies/:id'} element={<MovieFullInformation/>}/>



  </Route>
</Routes>);
}

export default App;
