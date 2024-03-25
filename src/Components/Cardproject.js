import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cardproject({img,title,description,link}) {
    return (
        <div className='p-4'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                    <Button variant="outlined" color="error" className='bg-black' size="small"><a href={link} target="_blank" rel="noopener noreferrer">Visit</a></Button>
                {/* <Button size="small">Learn More</Button> */}
                    
            </CardActions>
        </Card>
        </div>
    );
}