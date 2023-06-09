import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from '../../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.dataUsers,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        follow: ( user_id ) => { dispatch( followAC( user_id ) ) },
        unfollow: (user_id) => { dispatch( unfollowAC( user_id ) ) },
        setUsers: ( users ) => { dispatch( setUsersAC( users ) ) },
        setCurrentPage: (currentPage) => { dispatch( setCurrentPageAC( currentPage ))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;