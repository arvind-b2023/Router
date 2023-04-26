import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loadingpage from "./Loadingpage";
export default function PostDetaile() {

    const navigate = useNavigate()
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    let { postId } = useParams();
    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${postId}`);
            setUserData(response.data);
            setLoading(false);
        }
        loadPost();
    }, []);
    //for edit
    const [editMode, setEditMode] = useState(false)
    function editdata() {
        if (editMode === false) {
            setEditMode(true)
        }
        if (editMode === true) {
            setEditMode(false)
        }
    }
    return (
        <div className="float-end" style={{ width: "85%" }}>
            {loading ? <Loadingpage /> : <div className="m-5">
                {userData?.id ? editMode ? <button className="btn btn-primary px-4 mx-2" onClick={() => editdata()}>{editMode ? "Save" : "Edit"}</button> :
                    <div className="card-body w-50 ">
                         <img src={userData.image} height="auto" className="card-img-top w-50 m-5" alt="..." />
                        <div className="row mb-3">
                            <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">ID</h6></div>
                                <div className="col-sm-9"> {userData.id}</div>
                            </div>
                            <div className="col-sm-3"><h6 className="mb-0">Product Name</h6></div>
                            <div className="col-sm-9"> {userData.title}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3"><h6 className="mb-0">price</h6></div>
                            <div className="col-sm-9 "> $<b>{userData.price}</b></div>
                        </div>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">category</h6></div>
                            <div className="col-sm-9 ">{userData.category}</div>
                        </div>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">description</h6></div>
                            <div className="col-sm-9 ">{userData.description}</div>
                        </div>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">rating</h6></div>
                            <div className="col-sm-9 "><b>{userData.rating.rate}</b><small>/5</small></div>
                        </div>
                        <div className="row"><div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                                <button className="btn btn-primary px-4  mx-2" onClick={() => navigate('/post')}>Back</button>
                                {/* <button className="btn btn-primary px-4 mx-2" onClick={() => editdata()}>{editMode ? "Save" : "Edit"}</button> */}
                            </div>
                        </div>
                    </div>
                    : <p>not data found</p>}
            </div>}
        </div>
    )
}
