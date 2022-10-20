
import StarRatings from "react-star-ratings/build/star-ratings";
import {useState} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import {useDispatch} from "react-redux";

export function Star2(){
const dispatch = useDispatch();
let [rating,setRating] = useState();


        return(
            <div>
                <StarRatings
                    rating={rating}
                    starDimension={'15px'}
                    numberOfStars={10}
                    starEmptyColor={'gray'}
                    starRatedColor={'gold'}
                    changeRating={(newRating) => {
                        setRating(newRating)
                        dispatch(movieActions.addVoteAverageParams(newRating));
                    }}
                    name='rating'
                    starSpacing={'2px'}
                ></StarRatings>
            </div>

        );
}