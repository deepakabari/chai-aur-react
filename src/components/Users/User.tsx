import axios from "axios";
import { ChangeEvent, useState } from "react";
import "./style.css";

// Defining the type for the AppProps
type AppProps = {
    title: string;
};

// Defining the type for Users
type Users = {
    name: {
        first: string;
        last: string;
    };
    login: {
        uuid: string;
    };
    email: string;
};

// Defining the User component
const User = ({ title }: AppProps) => {
    // State variables for users, loading status and username
    const [users, setUsers] = useState<Users[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [username, setUsername] = useState("");

    // Function to handle click event
    const handleClick = async () => {
        try {
            // Setting loading status to true
            setIsLoading(true);
            // Clearing the users array
            setUsers([]);
            // Making API call to get users
            const { data } = await axios.get(
                "https://randomuser.me/api/?results=50"
            );
            // Setting the users state with the received data
            setUsers(data.results);
        } catch (error) {
            // Logging any error that occurs during the API call
            console.log(error);
        } finally {
            // Setting loading status to false after API call is complete
            setIsLoading(false);
        }
    };

    // Function to handle change event of the input field
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Updating the username state with the input field value
        setUsername(event.target.value);
    };

    // Rendering the User component
    return (
        <>
            <h1>{title}</h1>
            <input type="text" onChange={handleChange} />
            <div>{username}</div>
            <br />
            <hr />
            <button onClick={handleClick}>Get Users</button>
            {isLoading && (
                <div className="loader-container">
                    <img src="../../../loader.gif" alt="loading..."></img>
                </div>
            )}
            <ul className="list">
                {users.map(({ login, name, email }) => {
                    return (
                        <li key={login.uuid}>
                            <div>
                                Name: {name.first} {name.last}
                            </div>
                            <div>Email: {email}</div>
                            <hr />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

// Exporting the User component
export default User;
