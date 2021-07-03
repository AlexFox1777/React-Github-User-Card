import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(theme => ({
    card: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
}));

export default function UserCard(props) {
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <Typography variant={"h6"}>Hi I am a user</Typography>
            <Typography variant={"h4"}>{props.user.name}</Typography>
        </Card>
    );
}