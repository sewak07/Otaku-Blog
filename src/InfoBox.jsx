import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <h2>Info Box</h2>

            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            City: {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temperature}&deg;C <br/><br/>
                            Min Temperature: {info.tempMin}&deg;C<br/><br/>
                            Max Temperature: {info.tempMax}&deg;C<br/><br/>
                            Humidity: {info.humidity}<br/><br/>
                            Condition: {info.weather}
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}