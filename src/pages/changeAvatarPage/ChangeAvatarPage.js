import img1 from '../../files/image/changeAvatar/1.jpg'
import img2 from '../../files/image/changeAvatar/2.jpg'
import img3 from '../../files/image/changeAvatar/3.jpg'
import img4 from '../../files/image/changeAvatar/4.jpg'
import css from './ChangeAvatarPage.module.css'

export function ChangeAvatarPage(){
        return(
    <div className={css.ChangeAvatarPage}>
        <h3>1. Open site TMDB</h3>
        <img src={img1} alt={'pic'}/>
        <h3>2. Click 'Edit profile'</h3>
        <img src={img2} alt={'pic'}/>
        <h3>3. Click 'Upload Your Own?'</h3>
        <img src={img3} alt={'pic'}/>
        <h3>4. Click 'Select files'</h3>
        <img src={img4} alt={'pic'}/>
    </div>

        );
}