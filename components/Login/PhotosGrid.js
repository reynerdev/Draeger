import React from 'react';
import styled from 'styled-components';

const PhotosGrid = () => {
  return (
    <PhotosGridWrapper>
      <DesktopWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_1.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_2.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_3.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_4.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_5.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_6.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_7.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_8.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_9.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_10.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_11.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_12.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_13.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_14.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_15.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_16.JPG"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_17.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_18.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_19.webp"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
        <PhotoWrapper>
          <Img
            src="/loginPhotos/draeger_login_20.jpg"
            alt="draegerPhoto"
            className="grid-image"
          />
        </PhotoWrapper>
      </DesktopWrapper>
    </PhotosGridWrapper>
  );
};

export default PhotosGrid;

const PhotosGridWrapper = styled.div`
  position: sticky;
  overflow: hidden;
  height: 100%;
  top: 0px;
  background-color: pink;
`;

const DesktopWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 10.3vw);
  ${
    '' /* grid-template-rows: repeat(5, 1fr);
  position: absolute; */
  }
  right: 0px;
`;

const PhotoWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: bottom;
  height: 100%;
  object-fit: cover;
`;
