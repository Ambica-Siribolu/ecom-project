import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoIosReturnLeft } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductDetail.css';
const ProductDetail = () => {

const {state}=useLocation();
const{title,thumbnail,price,rating,discountPercentage,description,availabilityStatus,brand,returnPolicy,reviews,dimensions,category,warrantyInformation}=state;
  
const fixedRating = rating.toFixed(1);
const ratingClass = parseFloat(fixedRating) > 3.0 ? 'good' : 'bad';

const addToCart = () => {
  const newCart = {title,thumbnail,price}
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = [...storedCart, newCart];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  toast.success('Item added to cart!');
};

return (
  
  <div className='border border-secondary rounded product-container text-center mt-2 m-auto' >
  <img  className='m-auto picture' src={thumbnail} alt="image" /><br/>
  <span className={`${ratingClass}`} id='star'>{fixedRating} <FaStar size={10} className='mb-2'/></span><br/>
  <h5 className='text-dark mt-2'> {title} </h5>
  <p className=' text-secondary text-justify'>{description}</p>
  
  <h4 className='d-inline'> &#8377;{Math.round(price)} </h4>
  <span className='text-success'><strong>{Math.round(discountPercentage)}% off</strong></span>
  <div className='text-center'>
  <button className='btn btn-info m-3'>Buy Now</button>
  <button className='btn btn-warning m-3' onClick={addToCart}>Add to Cart</button>
  </div>
  <hr />
  <div className='d-flex gap-5 justify-content-center text-primary'>
    <div><h6>{availabilityStatus}</h6></div>
    <div><h6>{returnPolicy}<IoIosReturnLeft /></h6></div>
  </div><hr/>
  <h5 >Product Details</h5>
  <div className='text-start ms-5'>
   <li>Brand: {brand} </li>
   <li>Category: {category}</li>
   <li>Width: {dimensions.width} cm</li>
   <li>Height: {dimensions.height} cm</li>
   <li>Depth: {dimensions.depth} cm</li>
    </div>
  <hr/>
  <div>
    <h5>Warranty Information</h5>
    <p>{warrantyInformation}</p>
  </div>
    <hr/>
    <h5 className='text-center'>Ratings and Reviews:</h5>
    {state.reviews.map((reviews, index) => (
    <div key={index} className='text-start'>
    <div className='text-start ms-4 text-secondary'>
    <span className='text-success ms-4'>rating: {reviews.rating} <FaStar size={10}/></span>
    <span className='text-dark'>&nbsp; {reviews.comment}</span>
    <p className='ms-4'>Reviewer: {reviews.reviewerName}</p><hr/>
    </div>
    </div>
    ))}
    </div>
   )
}

export default ProductDetail