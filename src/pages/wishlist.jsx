import React from 'react'
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const handleAddToCart = (productId) => {
    // Logic to add product to cart
    console.log(`Product with ID ${productId} added to cart.`);
  };
  
  const handleRemoveFromCart = (productId) => {
    // Logic to remove product from cart
    console.log(`Product with ID ${productId} removed from cart.`);
  };
  return (
    <>
     <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Your Favorite Products</h1>
        <Link to="/checkout">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
          {/* Product 1 */}
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/id/237/150/150"
              alt="Product image"
              className="w-32 h-32 object-cover"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-lg font-bold">Product Title</h2>
            <p className="mt-2 text-gray-600">Product Description</p>
            <div className="mt-4 flex items-center">
              <span className="mr-2 text-gray-600">Quantity:</span>
              <div className="flex items-center">
                <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>
                  -
                </button>
                <span className="mx-2 text-gray-600">1</span>
                <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>
                  +
                </button>
              </div>
              <span className="ml-auto font-bold">$00.00</span>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mr-2 rounded"
                onClick={() => handleAddToCart(1)}
              >
                Add to Cart
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => handleRemoveFromCart(1)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        {/* Product 2 (Similar structure as Product 1) */}
        {/* Add more products if needed */}
      </div>
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">$00.00</span>
      </div>
    </div> 
    </>
  )
}

export default Wishlist



