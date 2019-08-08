import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(theme => ({
    card: {
        textAlign: 'center',
    },
}));

export default function Followers(props){
    const classes = useStyle();
    return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={props.followers.avatar_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            {props.followers.name}
                        </Typography>
                        <Typography gutterBottom variant="body2"  color="textSecondary" >
                            {props.followers.login}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}