import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import productData from "./../Data/ProductData";
import ProductCard from "./ProductCard";
const ProductCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const items = productData.map((product) => (
    <div key={product.id} className="px-2 pb-10 ">
      <ProductCard
        title={product.title}
        description={product.description}
        image={product.image}
        price={product.price}
      />
    </div>
  ));

  return (
    <>
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold pt-12 pb-4 inline-block text-red-700 border-b-2 border-red-500 mb-4">
        New Arrival Products
      </h1>


   
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        controlsStrategy="alternate"
        infinite
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        items={items}
       
      />
       </div>
    </>
  );
};

export default ProductCarousel;
