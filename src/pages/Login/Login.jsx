import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const Login = () => {

    const { logIn } = useContext(AuthContext)
    //  to get tthe location
    const location = useLocation()
    //  console.log('login',location);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email,password);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);
        // login
        logIn(email, password)
            .then(res => {
                console.log(res.user)

                // Navigate the location after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })



    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto" >
                <h2 className="text-center text-3xl my-10">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not Have an Acoount? <span className="btn-link"><Link to={'/register'}>Resister</Link></span></p>
            </div>
        </div>
    );
};

export default Login;