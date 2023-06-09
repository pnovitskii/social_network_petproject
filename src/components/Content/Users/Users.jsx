import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import User from './User';

class Users extends React.Component {
    setCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=100').then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
        return (
            <div className={s.users_wrapper}>
                {/* <button onClick={this.getUsers}>get users</button> */}
                <div>
                    {pages.map(p=>
                    <span 
                        className={this.props.currentPage === p ? s.selectedPageButton : s.pageButton}
                        onClick={()=>this.setCurrentPage(p)}>
                            {p}
                    </span>)}
                </div>
                {this.props.users.map(user => <User data={user} unfollow={this.props.unfollow} follow={this.props.follow}/>)}
            </div>
        )
    }
    
}

export default Users;