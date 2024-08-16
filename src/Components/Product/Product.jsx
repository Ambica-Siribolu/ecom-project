import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';
const Product = () => {

  const API = 'https://dummyjson.com';

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchedProducts, setSearchedProducts] = useState([])

  const navigate = useNavigate()

  const searchHandler = (event) => {

    setSearchedProducts(products.filter((item) => (item.title).toLowerCase().includes((event.target.value).toLowerCase())))
  }


useEffect(() => {

    const token = JSON.parse(localStorage.getItem('token'))

    const getProducts = async () => {
      try{
        setLoading(true)

        const productsData = await axios.get(`${API}/products`, 
          {
             headers: { authorization : `Bearer ${token?.token}` } 
          });
          console.log(productsData.data.products);
          
          if(productsData.data.products){
            setLoading(false)
            setProducts(productsData.data.products);
          }

      }catch(err){
        console.log(err)
        setLoading(false)
      }
    }

    getProducts();


  },[]);
 
 

  const allProducts = searchedProducts.length ? searchedProducts : products;

  const productsItems = allProducts.map((product, index)  => {
    const fixedRating = product.rating.toFixed(1);
    const ratingClass = parseFloat(fixedRating) > 3.0 ? 'good' : 'bad';
    return(
      <div key={index} className='border border-secondary rounded text-center m-3 container' >
        <img  className='m-auto image mb-2' src={product.thumbnail} alt="image" /><br/>
        <span className={`${ratingClass}`}>{fixedRating} <FaStar size={10} className='mb-1'/></span>
        <h5 className='text-dark'> {product.title}</h5>
        <p className='description text-secondary'>{product.description}</p>
        <h5> &#8377;{Math.round(product.price)}</h5>
        <h6 className='text-success'>{Math.round(product.discountPercentage)}% off</h6>
        <Link className='btn m-1 button1 mb-2' to={{pathname:`/productInfo/${product.id}`} } state={product}>View</Link>
      </div>
    )
  })

return (
    <div>
      <div className='w-50 m-auto' >
        <label> Search here for Product:</label>
        <input onChange={searchHandler} type="text" placeholder='Search your product....' className='form-control mt-2' />
      </div>
      <div style={styles} >
        {loading && <Spinner  variant='dark' /> }
      </div>
        <div className='d-flex flex-wrap justify-content-center mt-4' >
          {productsItems}
        </div>
    </div>
  )
}
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-55%, -55%)',
}

export default Product