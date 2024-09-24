import RegisterCard from "../../Card/RegisterCard/RegisterCard";
import './Register.css'

export const Base_Url = `https://ecomm-server-zjbp.onrender.com`

const Register = () => {

    return ( 
        <div className="register__auth__container">
            <div className="register__auth">
                <RegisterCard />
            </div>
        </div>
     );
}
 
export default Register;