import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Followers(props){

    return(
        <div>
            {props.followers.map(item =>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={item.avatar_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.login}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Follower
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            )}
        </div>
    );
}