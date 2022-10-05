import {
    Box,
    Typography
} from '@mui/material'

export const EmptyScreen = (props) => {
    const { element = "Favoritos", action } = props
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                py: 12,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img 
                    src="https://media.istockphoto.com/vectors/scared-dinosaur-vector-illustration-vector-id841087850?k=20&m=841087850&s=170667a&w=0&h=a9bafBCCr4eBE3F1ud-GegmK2RV4fE_S943jA-FV880=" 
                    alt="No info" 
                    width="300px"
                    height="300px"
                    style={{ 
                        opacity: 0.5 
                    }}
                    />
                <Typography 
                    variant="subtitle1"
                    sx={{
                        my: 2
                    }}
                >
                    Oh! Parece que aun no tienes {element} registrados, dale un vistazo a: 
                </Typography>
                {action}
            </Box>
        </Box>
    )
}
