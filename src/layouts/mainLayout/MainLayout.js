import {Outlet} from "react-router-dom";

import {Header} from "../../components/header/Header";
import dark from './MainLayout.module.css'
import white from './MainLayoutLight.module.css'
import {Menu} from "../../components/menu/Menu";

import {useTheme} from "../../hooks/useTheme";

export function MainLayout(){

let {css} = useTheme(white,dark);


        return(
    // <div className={css.MainLayout}>
    <div className={css.MainLayout}>
        <Header/>

        <div className={css.body} >
            <div className={css.menu}>
                <Menu/>
            </div>
            <Outlet/>
        </div>

    </div>

        );
}
