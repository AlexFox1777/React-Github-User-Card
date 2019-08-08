import React from 'react'
import UserCard from "./UserCard";
import Followers from "./Followers";


export default class User extends React.Component{

    constructor(){
        super();
        this.state={
            user: {},
            followers: []
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
            // fetch(`${item}/url`)
            //     .then(response => response.json())
            //     .then(follower => this.setState({follower: [...this.state.follower ,follower]}))
            //     .catch(error => console.log(error));
        })
    };

    render() {
        console.log(this.state.user);
        console.log(this.state.followers);
        return (
            <div>
                <UserCard user={this.state.user}/>
                <Followers followers={this.state.followers}/>
            </div>
        )
    }


}