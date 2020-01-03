import React, { useState } from "react";
import {
  ImageCont,
  IconLeft,
  IconRight,
  ImagesIcons,
  SingleImageIcon,
  ImageWrapper
} from "./Pictures.styled";

const Pictures = ({ images }) => {
  const [currPic, setCurPic] = useState(0);

  const handleClickLeft = e => {
    currPic === 0 ? setCurPic(images.length - 1) : setCurPic(currPic - 1);
  };
  const handleClickRight = e => {
    currPic === images.length - 1 ? setCurPic(0) : setCurPic(currPic + 1);
  };
  //   const isSelected = index => {
  //     return index === currPic ? true : false;
  //   };
  const getIcons = () => {
    return images.map((image, index) => (
      <SingleImageIcon
        isSelected={index === currPic ? true : false}
        src={image}
        alt="a"
        key={index}
        onClick={() => setCurPic(index)}
      />
    ));
  };
  return (
    <ImageWrapper>
      <ImageCont>
        <img style={{ height: "675px" }} src={images[currPic]} alt="" />
        <IconLeft className="material-icons" onClick={handleClickLeft}>
          chevron_left
        </IconLeft>
        <IconRight className="material-icons " onClick={handleClickRight}>
          chevron_right
        </IconRight>
      </ImageCont>
      <ImagesIcons>{getIcons()}</ImagesIcons>
    </ImageWrapper>
  );
};

export default Pictures;
