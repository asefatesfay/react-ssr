import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Helmet from "react-helmet";

function loadData() {
    return axios
        .get("http://react-ssr-api.herokuapp.com/users")
        .then(response => {
            return {
                users: response.data
            };
        });
}

 function Users(props) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
       loadData().then(data => {
            setUsers(data.users);
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Users page</title>
                <meta name="description" content="Users page description" />
            </Helmet>
            <h1>Users component</h1>
            <Link to="/">Back to home page</Link>
            <h2>List of users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;