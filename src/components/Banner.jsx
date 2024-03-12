import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Caraosel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <div className="item" data-value="1">
      <img
        src="https://img.freepik.com/premium-vector/bike-sale-promotion-social-media-facebook-cover-banner-template_252779-448.jpg?w=996"
        alt=""
        className="img-fluid"
        style={{ width: "100%" ,position: "relative"}}
      />
       <div className="overlay-text">
        <h2 className="text-black fs-5 ">First Image Title</h2>
        <p>This is a description for the first image.</p>
      </div>
    </div>,
    <div className="item" data-value="1">
      <img
        src="https://img.freepik.com/premium-vector/city-bike-rental-promotion-social-media-cover-banner-template_252779-435.jpg?w=996"
        alt=""
        className="img-fluid"
        style={{ width: "100%" , position: "relative"}}
      />
       <div className="overlay-text">
        <h2 className="text-black fs-5 ">First Image Title</h2>
        <p>This is a description for the first image.</p>
      </div>
    </div>,
    <div className="item" data-value="1">
      <img
        src="https://img.freepik.com/free-vector/social-media-post-template-racing-tournament_23-2150229918.jpg?t=st=1710178800~exp=1710182400~hmac=c3b30b520bdf238ed06273b692ba006840637ef537f6c679ac6f23b55952ed75&w=826"
        alt=""
        className="img-fluid"
        style={{ width: "100%" , position: "relative"}}
      />
       <div className="overlay-text">
        <h2 className="text-black fs-1 ">First Image Title</h2>
        <p>This is a description for the first image.</p>
      </div>
    </div>,
  ];
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </>
  );
};

export default Caraosel;


