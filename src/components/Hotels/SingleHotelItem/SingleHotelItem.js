import React, { useState, useEffect, useContext } from "react";
import { HotelContext } from "../../../contexts/HotelContextProvider";
import {
  Button,
  Description,
  Image,
  Card,
  CardImage,
  CommentSection,
  FavIcon
} from "./SingleHotel.styled";

import { useSelector, useDispatch } from "react-redux";
import Title from "../Title/Title";
import Comment from "../Comments/Comment";

import { addToFav, removeFromFav } from "../../../store/actions/fav";
import { withRouter } from "react-router-dom";
import ReviewsSection from "../ReviewsSection/ReviewsSection";

const SingleHotelItem = props => {
  const { getAverageReview } = useContext(HotelContext);
  const [totAverage, setTotAverage] = useState(0);
  const [allAverages, setAllAverages] = useState({});
  const [showReviews, setShowReviews] = useState(false);

  const hotel = props.hotel;
  const { totalAverage, objAvg } = getAverageReview(hotel);
  useEffect(() => {
    // console.log(totalAverage, objAvg);
    setTotAverage(totAverage + totalAverage);
    setAllAverages(allAverages, objAvg);
  }, []);
  // console.log(hotel);

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    state => state.auth && state.auth.isAuthenticated
  );

  const favorites = useSelector(
    state => state.auth.favs && state.auth.favs.favs
  );

  //if !isAuthorized redirect to login page
  const redirToLogin = () => {
    let path = "/login";
    props.history.push(path);
  };
  // Full red heart button
  const favoritedHeart = (
    <FavIcon
      className="material-icons small red-text"
      onClick={() =>
        isAuthenticated ? dispatch(removeFromFav(hotel.id)) : redirToLogin()
      }
    >
      favorite
    </FavIcon>
  );
  // empty heart button
  const notFavoritedHeart = (
    <FavIcon
      className="material-icons small"
      onClick={() =>
        isAuthenticated ? dispatch(addToFav(hotel.id)) : redirToLogin()
      }
    >
      favorite_border
    </FavIcon>
  );
  // if (!favorites) then its new user and doesnt exist in localstorage and displays empty heart
  const favoriteIcon = favorites
    ? //if (favorites) then user exists in storage and then check if hotel is favorited
      isAuthenticated & favorites.includes(hotel.id)
      ? favoritedHeart
      : notFavoritedHeart
    : notFavoritedHeart;

  const {
    type,
    name,
    stars,
    address,
    distFromCenter,
    place,
    comments,
    mapsLink
  } = hotel;
  return (
    <Card>
      <CardImage>
        <Image src={hotel.img[0]} alt="" />
        {favoriteIcon}
      </CardImage>
      <div className="card-stacked">
        <div className="row">
          <div className="card-content col s8">
            <Title
              info={{
                type,
                name,
                stars,
                address,
                distFromCenter,
                place,
                mapsLink
              }}
            />
            <Description>{hotel.shortDescription}</Description>
          </div>
          <ReviewsSection
            totAverage={totAverage}
            reviews={hotel.reviews.count}
            allAverages={objAvg}
            count={hotel.reviews.count}
            name={name}
          />
        </div>
        <CommentSection>
          <section>
            <Button onClick={() => setShowReviews(!showReviews)}>
              <nobr>Prikazi komentare</nobr>
            </Button>
          </section>

          <section>
            {showReviews === true
              ? comments.map(comment => (
                  <Comment key={comment.id} comment={comment} />
                ))
              : null}
          </section>
        </CommentSection>
      </div>
    </Card>
  );
};

export default withRouter(SingleHotelItem);
