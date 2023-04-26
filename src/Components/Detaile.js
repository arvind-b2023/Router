import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loadingpage from "./Loadingpage";
import React from 'react';

import { useFormik } from 'formik';
import Swal from "sweetalert2";
export default function Detaile() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    let { userId } = useParams();
    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${userId}`);
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
            if (formik.values.password === formik.values.cpassword) {
                setEditMode(false)
                setUserData({
                    ...userData,
                    address: {
                        city: formik.values.city,
                        street: formik.values.street,
                        number: formik.values.HouseNo,
                        zipcode: formik.values.zipcode
                    },
                    email: formik.values.email,
                    username: formik.values.username,
                    password: formik.values.password,
                    name: {
                        firstname: formik.values.firstname,
                        lastname: formik.values.lastname
                    },
                    phone: formik.values.phone
                });
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User Profile Update Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password does not match!',
                    footer: '<a href="">Try again</a>'
                })
            }
        }
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: `${userData?.username}`,
            id: `${userData?.id}`,
            firstname: `${userData?.name?.firstname}`,
            lastname: `${userData?.name?.lastname}`,
            email: `${userData?.email}`,
            phone: parseInt(`${userData?.phone}`),
            HouseNo: `${userData?.address?.number}`,
            street: `${userData?.address?.street}`,
            city: `${userData?.address?.city}`,
            zipcode: parseInt(`${userData?.address?.zipcode}`),
            password: `${userData.password}`,
            cpassword: ""
        },
        // onSubmit: values => {}
    });

    return (<div className="float-end" style={{ width: "85%" }}>
        {loading ? <Loadingpage /> : <div className="m-5">
            {userData?.id ? editMode ? <>
                <div className="card-body w-50 ">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="email">ID</label></h6></div>
                            <div className="col-sm-9 ">
                                <b>{formik.values.id}</b>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label"
                                        for="firstname">First name</label>
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="firstname"
                                        name="firstname"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstname}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" for="lastname">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="lastname"
                                        name="lastname"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastname}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="Username">Username</label></h6></div>
                            <div className="col-sm-9 "><input
                                type="text"
                                className="form-control mx-1"
                                id="username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            /></div>
                        </div>

                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="email">email</label></h6></div>
                            <div className="col-sm-9 "><input
                                type="email"
                                className="form-control mx-1"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            /></div>
                        </div>
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="email">phone</label></h6></div>
                            <div className="col-sm-9 "><input
                                type="number"
                                className="form-control mx-1"
                                id="phone"
                                name="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            /></div>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-muted">Address</label>
                            <div className="row">
                                <div className="form-outline col-4">
                                    <label className="form-label" for="HouseNo">House No.</label>
                                    <input
                                        type="number"
                                        className="form-control mx-1"
                                        id="HouseNo"
                                        name="HouseNo"
                                        onChange={formik.handleChange}
                                        value={formik.values.HouseNo}
                                    />
                                </div>
                                <div className="form-outline col-4">
                                    <label className="form-label" for="street">street</label>
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="street"
                                        name="street"
                                        onChange={formik.handleChange}
                                        value={formik.values.street}
                                    />
                                </div>
                                <div className="form-outline col-4">
                                    <label className="form-label" for="city">City</label>
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="city"
                                        name="city"
                                        onChange={formik.handleChange}
                                        value={formik.values.city}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="form-outline col-4">
                                    <label className="form-label" for="zipcode">zipcode</label>
                                    <input
                                        type="number"
                                        className="form-control mx-1"
                                        id="zipcode"
                                        name="zipcode"
                                        onChange={formik.handleChange}
                                        value={formik.values.zipcode}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="password">Set Password</label></h6></div>
                                <div className="col-sm-9 ">
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="cpassword"> Re-Enter Password</label></h6></div>
                                <div className="col-sm-9 ">
                                    <input
                                        type="text"
                                        className="form-control mx-1"
                                        id="cpassword    "
                                        name="cpassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.cpassword}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary px-4  mx-2" onClick={() => navigate('/users')}>Back</button>
                        <button type="submit" className="btn btn-primary px-4 mx-2" onClick={() => editdata()}>{editMode ? "Save" : "Edit"}</button>
                    </form>
                </div>
            </>
                :
                <div className="card-body w-50 ">
                    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Username</h6></div>
                        <div className="col-sm-9 ">{userData.username}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">ID</h6></div>
                            <div className="col-sm-9"> {userData.id}</div>
                        </div>
                        <div className="col-sm-3"><h6 className="mb-0">Full Name</h6></div>
                        <div className="col-sm-9"> {userData.name.firstname} {userData.name.lastname}</div>
                    </div>
                    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                        <div className="col-sm-9 "> {userData.email}</div>
                    </div>
                    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Phone</h6></div>
                        <div className="col-sm-9 ">{userData.phone}</div>
                    </div>
                    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Address</h6></div>
                        <div className="col-sm-9  border"> {userData.address.number},<br />{userData.address.street},<br />{userData.address.city},<br />{userData.address.zipcode},</div>
                    </div>
                    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0"> <label htmlFor="password">Password</label></h6></div>
                        <div className="col-sm-9 ">
                            {userData.password}
                        </div>
                    </div>
                    <div className="row"><div className="col-sm-3"></div>
                        <div className="col-sm-9 text-secondary">
                            <button className="btn btn-primary px-4  mx-2" onClick={() => navigate(`/users`)}>Back</button>
                            <button type="submit" className="btn btn-primary px-4 mx-2" onClick={() => editdata()}>{editMode ? "Save" : "Edit"}</button>
                        </div>
                    </div>

                </div>
                : <p>not data found</p>}
        </div>}
    </div>)
}
{/* <div className="m-5">
<div className="card-body w-50 ">
    <div className="row mb-3">
        <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">ID</h6></div>
            <div className="col-sm-9"> {userData.id}</div>
        </div>
        <div className="col-sm-3"><h6 className="mb-0">Full Name</h6></div>
        <div className="col-sm-9"> {userData.name.firstname} {userData.name.lastname}</div></div>
    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
        <div className="col-sm-9 "> {userData.email}</div>
    </div>
    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Phone</h6></div>
        <div className="col-sm-9 ">{userData.phone}</div>
    </div>
    <div className="row mb-3"><div className="col-sm-3"><h6 className="mb-0">Address</h6></div>
        <div className="col-sm-9  border"> {userData.address.number},<br />{userData.address.street},<br />{userData.address.city},<br />{userData.address.zipcode},</div>
    </div>
    <div className="row"><div className="col-sm-3"></div>
        <div className="col-sm-9 text-secondary">
            <button className="btn btn-primary px-4  mx-2" onClick={() => navigate('/user')}>Back</button>
            <button className="btn btn-primary px-4 mx-2" >Edit</button>
            <button className="btn btn-primary px-4" >Delete</button>
        </div>
    </div>
</div></div> */}
