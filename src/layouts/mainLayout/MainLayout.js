import {Outlet} from "react-router-dom";

import {Header} from "../../components/header/Header";
import css from './MainLayout.module.css'

export function MainLayout(){
        return(
    <div className={css.MainLayout}>
        MainLayout
        <Header/>
        <hr/>
        <Outlet/>
    </div>

        );
}