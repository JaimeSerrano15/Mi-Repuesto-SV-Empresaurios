import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material'

export const Product = ({ product }) => {

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                p: 2,
                maxHeight: '490px',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',           
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "all .2s ease-in-out"
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    minHeight: '80px'
                }}
            >
                {product.name}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'justify',
                    minHeight: '64px'
                }}
            >
                {product.description}
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    py: 2
                }}
            >
                ${Number(product.price)}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img src={product.img} alt={product.name} width="200px" height="150px" />
            </Box>
        </Box>
    )
}