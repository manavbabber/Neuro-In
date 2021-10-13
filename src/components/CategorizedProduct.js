import React, { useEffect } from 'react'
import {ProductCard} from './ProductCard';
import { Grid, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listCategoryProducts } from '../store/actions/prodAction';
import Aux from '../hoc/Aux.js';
import Sidebar from './Sidebar.js';

export const CategorizedProduct = ({match}) => {
    const dispatch = useDispatch();
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const { products } = productCategoryList;
    useEffect(() => {
        dispatch(listCategoryProducts(`${match.params.name}`))
    }, [dispatch,match])

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
    )
}
