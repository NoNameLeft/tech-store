import Footer from '../Footer/';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import registerImg from '../../images/welcome.png';

const Register = () => {
    return (
        <form action="#" method="POST">
            <div className="imgcontainer">
                <img src={registerImg} className="avatar" alt="welcome emoji" />
            </div>

            <div className="wrapper">
                <label htmlFor="uname">Username</label>
                <input className="username" type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw">Password</label>
                <input className="password" type="text" placeholder="Enter Password" name="psw" required />

                <label htmlFor="re-psw">Repeat password</label>
                <input className="re-password" type="text" placeholder="Repeat Password" name="re-psw" required />

                <label htmlFor="email">Email</label>
                <input className="email" type="text" placeholder="Enter Email" name="email" required />

                <button className="submitBtn" type="submit">Register</button>
                <button type="button" className="psw">Already registered?</button>
            </div>

            <Footer />
            <SocialMediaIcons />
        </form>
    )
}

export default Register;