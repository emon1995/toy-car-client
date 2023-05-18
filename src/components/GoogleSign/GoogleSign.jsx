import { useContext } from "react";
import googleImg from "../../assets/google.png";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleSign = ({ from }) => {
  const { google } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div
      onClick={handleGoogle}
      className="flex items-center justify-start gap-8 border rounded-full p-4 mt-8 cursor-pointer bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white"
    >
      <img className="w-8 h-8" src={googleImg} alt="google" />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleSign;
