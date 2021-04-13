import Footer from '../Footer/';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import loginImg from '../../images/welcome-back.png';

const Login = () => {
    return (
        <form action="#" method="POST">
            <div className="imgcontainer">
                <img src={loginImg} className="avatar" alt="welcome-back emoji" />
            </div>

            <div className="wrapper">
                <label htmlFor="uname">Username</label>
                <input className="username" type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw">Password</label>
                <input className="password" type="text" placeholder="Enter Password" name="psw" required />

                <button className="submitBtn" type="submit">Login</button>
                <label className="remembermelbl">
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                <button type="button" className="psw">Forgot password?</button>
            </div>

            <Footer />
            <SocialMediaIcons />
        </form>
    );
};

export default Login;