import React from 'react'
import UserCard from "./UserCard";
import Followers from "./Followers";
import Grid from "@material-ui/core/Grid";


export default class User extends React.Component{

    constructor(){
        super();
        this.state={
            user: {},
            followers: [],
            follower: []
        }
    }

    componentDidMount() {
            this.fetchUser();
            this.fetchFollowers();

    }

    fetchUser = () =>{
        fetch(`https://api.github.com/users/AlexFox1777`)
            .then(response => response.json())
            .then(userData => this.setState({user: userData}))
            .catch(error => console.log(error));
    };
    fetchFollowers = () => {
        fetch(`https://api.github.com/users/AlexFox1777/followers`)
            .then(response => response.json())
            .then(userFollowers => this.setState({followers: userFollowers}))
            .then(this.fetchFollower)
            .catch(error => console.log(error));

    };

    fetchFollower = () =>{
        this.state.followers.map(item => {
            console.log("I am in loop");
            fetch(`${item.url}`)
                .then(response => response.json())
                .then(follower => this.setState({follower: [...this.state.follower ,follower]}))
                .catch(error => console.log(error));
        })
    };

    render() {
        console.log(this.state.user);
        console.log(this.state.followers);
        console.log(this.state.follower);
        return (
            <Grid container spacing={2} justify={"center"}>
                <Grid item xs={12}><UserCard user={this.state.user}/></Grid>
                {this.state.follower.map(item =>
                    <Grid item xs={4}> <Followers followers={item}/></Grid>
                )}
            </Grid>
        )
    }


}