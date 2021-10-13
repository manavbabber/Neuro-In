import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia, CardContent, Typography } from '@material-ui/core';
import Rating from './Rating';
import { Link } from 'react-router-dom';


export const ProductCard = ({product}) => {
    return (
        <div class='mb-20'>
            <Card class='mt-5 h-96 w-60 flex flex-col'>
                <CardMedia
                    class='h-44 w-46'
                    component="img"
                    image={product.image}
                    alt="Image"
                />
                <Typography class='capitalize mt-5'>
                    {product.category}
                </Typography>   
                <CardContent>
                    <Typography>
                        {product.title.slice(0,67)}
                    </Typography>
                </CardContent>
                <Rating
                    value={product.rating.rate}
                    text={`${product.rating.count} reviews`}
                />
                <span class='mb-8'></span>
                <Link style={{border:'1px solid gray'}} to={`/details/${product.id}`}>Details</Link>
            </Card>
        </div>
    )
}
