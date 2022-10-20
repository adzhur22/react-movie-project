import StarRatings from "react-star-ratings/build/star-ratings";


export function Star({rating, numberOfStars}){



        return(
            <div>
                <StarRatings
                    rating={rating}
                    starDimension={'15px'}
                    numberOfStars={numberOfStars}
                    starEmptyColor={'gray'}
                    starRatedColor={'gold'}
                ></StarRatings>
            </div>

        );
}