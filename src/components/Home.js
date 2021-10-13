import React, { useEffect } from 'react'
import {ProductCard} from './ProductCard';
import { Grid, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../store/actions/prodAction';
import Aux from '../hoc/Aux.js';
import Sidebar from './Sidebar.js';

export const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    return (
            <Aux>
                <Sidebar />
                <p class='text-5xl font-bold mt-20 mb-8'>Products</p>
                <Container class='ml-14'>
                    <Grid container>
                        {(products.map(product => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard product={product} />
                            </Grid>
                        )))}
                    </Grid>
                </Container>
            </Aux>
        // }}
        
    )
}
