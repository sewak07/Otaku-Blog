import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItContent({ name, description, handleClick, Image }) {

    return (
        <Card sx={{
            width: 375,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            paddingBottom:"30px"
        }}>
            <CardMedia
                sx={{
                    height: 210,
                }}
                image={Image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
                <Button onClick={handleClick} size="small">View Content</Button>
            </CardActions>
        </Card>
    );
};