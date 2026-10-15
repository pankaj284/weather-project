
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./WeatherInfo.css"

export default function WeatherInfo({ info }) {

    let weather_img = {
        default: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Thunderstorm: "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Drizzle: "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Rain: "https://images.unsplash.com/photo-1558409057-bbe679023136?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Snow: "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Clouds: "https://images.unsplash.com/photo-1781111271240-aa8918d0ca7c?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Clear: "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Rain: "https://images.unsplash.com/photo-1558409057-bbe679023136?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Haze: "https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Mist: "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Smoke: "https://images.unsplash.com/photo-1602070118389-05c28ddc1bc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Dust: "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Fog: "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Sand: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?q=80&w=1307&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Ash: "https://images.unsplash.com/photo-1768501686964-55638b9fae8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Squall: "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        Tornado: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }

    return (
        <div>

            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={weather_img[info.main]}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                                <h4 style={{ margin: "0.5rem" }}>{info.city}</h4>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                                <p>temprature: {info.temp}&deg;C</p>
                                <p>Maximum temprature: {info.tempMax}&deg;C</p>
                                <p>Minimum temprature: {info.tempMin}&deg;C</p>
                                <p>Humidity: {info.humidity}&deg;C</p>
                                <p>Weather can be described as {info.description} and feels like {info.feelsLike}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </div>
    )
}