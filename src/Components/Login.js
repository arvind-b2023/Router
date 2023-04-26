import { useState } from "react";
import { useNavigate } from "react-router-dom";
// login page
export default function Login() {
    // for login time create token
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = () => {
        if (user === 'admin' && password == "admin123") {
            localStorage.setItem("token", "ppppp");
            navigate('/')
        }else{
            alert("Enter correct user id or password")
        }
    }
    return (
        !localStorage.getItem("token") && <div className="wrapper">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" />
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-success mx-2" onClick={() => login()} >Login</button>
            </form>
        </div>
    )
}