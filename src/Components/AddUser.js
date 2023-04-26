import axios from "axios";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function AddUser() {
    const navigate = useNavigate()
    let initialTasks = {}

    function handeladd(addUser) {
        const Postdata = async () => {
            console.log(process.env);
            const response = await axios.post(process.env.REACT_APP_BASE_URL, {
                data: addUser
    
            });
        }
    }

    return (
        <div className="float-end   " style={{ width: "85%" }}>
            <form action="#" className="w-50 ms-5 mt-5" onSubmit={(e) => {
                e.preventDefault();
                if (e.target.password.value === e.target.cpassword.value) {
                    handeladd({
                        "username": e.target.uname.value,
                        "phone": e.target.phone.value,
                        "name": { "firstname": e.target.firstname.value, "lastname": e.target.lastname.value },
                        "email": e.target.email.value,
                        "address": { "number": e.target.Houseno.value, "street": e.target.street.value, "city": e.target.City.value, "zipcode": e.target.zipcode.value },
                        "password": e.target.password.value,
                    });
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Add User Successfully ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/users")
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password does not match!'
                    })
                }

            }}>
                <label className="form-label fs-4 mb-5" >User Information</label>
                <div className="row mb-4">
                    <div className="form-outline mb-4">
                        <label className="form-label" for="uname">User name</label>
                        <input required type="text" name="uname" id="uname" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label"
                                for="firstname">First name</label>
                            <input required type="text" name="firstname" id="firstname" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="lastname">Last name</label>
                            <input required type="text" name="lastname" id="lastname" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="email">Email</label>
                    <input required type="email" id="email" name="email" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="phone">Phone</label>
                    <input required type="number" name="phone" id="phone" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label text-muted">Address</label>
                    <div className="row">
                        <div className="form-outline col-4">
                            <label className="form-label" for="HouseNo">House No.</label>
                            <input required type="text" id="Houseno" className="form-control" name="Houseno" />
                        </div>
                        <div className="form-outline col-4">
                            <label className="form-label" for="street">street</label>
                            <input required type="text" id="street" className="form-control" name="street" />
                        </div>
                        <div className="form-outline col-4">
                            <label className="form-label" for="City">City</label>
                            <input required type="text" id="City" className="form-control" name="City" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-outline col-4">
                            <label className="form-label" for="zipcode">zipcode</label>
                            <input required type="number" id="zipcode" className="form-control" name="zipcode" />
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="password">Enter Password</label>
                    <input required type="password" name="password" id="password" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="cpassword">Re-Enter Password</label>
                    <input required type="text" name="cpassword" id="cpassword" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
            </form>
        </div>)
}