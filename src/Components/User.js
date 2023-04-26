import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loadingpage from "./Loadingpage";
export default function User() {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("")
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const loadPost = async () => {
        // Till the data is fetch using API   
        // the Loading page will show.
        setLoading(true);
        // Await make wait until that 
        // promise settles and return its result
        const response = await axios.get(process.env.REACT_APP_BASE_URL);
        // After fetching data stored it in posts state.
        setUserData(response.data);
        // console.log(response);
        // Closed the loading page 
        setLoading(false);
    }
    useEffect(() => {
        // Call the function
        loadPost();
    }, []);
    function moredetaile(id) {
        navigate(`/users/${id}`)
    }
    function deletedata(id) {
        setUserData(userData.filter(val => val.id !== id))
    }

    return (<div className="float-end   " style={{ width: "85%" }}>
        {loading ? <Loadingpage /> : <>
            <div className="shadow mb-1 bg-dark  border border-dark  pt-3 py-2 ">
                <h4 className="text-white   text-capitalize px-3">User List </h4>
            </div>

            <div className="search d-flex m-4">
                <input type="text" className="form-control w-25 mx-1" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search...." />
                <button className="btn btn-primary">Search</button>
                <button className="btn btn-primary px-4 mx-2" onClick={() => navigate("/users/adduser")}>Add User</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>E-Mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(searchText.length > 1 ? userData.filter(val => val.username.toLowerCase().match(searchText) || val.name.firstname.toLowerCase().match(searchText) || val.name.lastname.toLowerCase().match(searchText)) : userData).map(val => <tr key={val.id}><th>{val.id}</th> <td>{val.username}</td><td>{val.name.firstname}</td><td>{val.name.lastname}</td><td>{val.email}</td>
                        <td><button className="me-2 btn btn-outline-success" onClick={() => moredetaile(val.id)}>Details</button><button className="btn  btn-outline-danger" onClick={() => deletedata(val.id)}>Delete</button></td></tr>)}

                </tbody>
            </table>
        </>}
    </div>
    )
}
