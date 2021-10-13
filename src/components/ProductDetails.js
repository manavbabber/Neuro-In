import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { Grid, Typography, Card, Container } from '@material-ui/core';
import { listProductsDetails } from '../store/actions/prodAction';

const Product = ({history,match}) => {
    let prod=null;
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;
    useEffect(()=>{
        // console.log(match.params.id);
        dispatch(listProductsDetails(match.params.id));
    },[dispatch,match]);
    // const addToCartHandler = () => {
    //     // history.push(`/cart/${match.params.id}`)
    // }
    const addingToCart = (price) => {
        localStorage.setItem("price",price);
    }
    if(product){
        prod = (
            <>
                <Grid style={{marginTop:'120px'}} container>
                    <Grid item md={6}>
                        <img class='flex justify-center' style={{height:'400px'}} src={product.image} alt="Loading" />
                    </Grid>
                    <Grid style={{marginTop:'40px'}} item md={6}> 
                            <h3 style={{fontSize:'30px'}}>{product.title}</h3>
                            <strong>Price: ${product.price}</strong>                        
                            <Typography class='capitalize'>{product.description}</Typography>
                        <Card style={{marginTop:'40px'}}>
                            <Typography style={{fontSize:'20px', fontWeight:'800'}}>Price: ${product.price}</Typography>
                             <Typography style={{fontSize:'15px',marginBottom:'20px', fontWeight:'800'}}>In Stock</Typography>
                            <button onClick={()=>addingToCart(product.price)}>
                                <Link to='/cart' style={{ fontWeight:'800', color:'green', border:'1px solid green', padding:'5px'}}>Add to Cart</Link>
                            </button>
                        </Card> 
                    </Grid>
                </Grid>
            </>
        ) 
    }
    return(
        <Container>
            <h1 class='text-5xl mb-32 mt-7 text-bold'>Product Details</h1>
            {prod}
        </Container>
    );
}

export default Product;