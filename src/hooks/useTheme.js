import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../redux/slices";


export function useTheme(white,dark){

    let {theme} = useSelector(store=> store.themeModeReducer);
    let dispatch = useDispatch();

    let css;

    const swich = () => {
        dispatch(themeActions.changeTheme())
    }

    if(theme === 'white'){
        css = white;
    }else {
        css = dark;
    }


return {css,swich}
}
