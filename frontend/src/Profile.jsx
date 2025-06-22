import { useNavigate } from "react-router-dom";
import arrow from './Images/kartimg/arrow.png';
import "./App.css"
 
function Profile(){
const navigate = useNavigate();
const name = localStorage.getItem("Username")

    return(
      
      <>
      <button onClick={()=>navigate("/")} className="hom"><img className="arr " src={arrow} alt="" /></button>
        <div className="Profile">
        <div className="prof">
        <section>{`Welcome: ${name}`}</section>
        <button
              className="logout-btn lgn"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("Username");
                navigate("/");
                window.location.reload();     
                
              }}
              >
              Logout
            </button>
                </div>
        </div>
                  </>
    );
}
export default Profile;