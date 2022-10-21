import {Outlet} from "react-router-dom";

import {Header} from "../../components/header";
import dark from './MainLayout.module.css'
import white from './MainLayoutLight.module.css'
import {Menu} from "../../components/menu";
import {useTheme} from "../../hooks";


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
