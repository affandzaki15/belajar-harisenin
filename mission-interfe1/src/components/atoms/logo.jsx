import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/LogoBelajar.png"; 

function Logo() {
  return (
    <Link to="/">
      <img src={LogoImage} alt="logo" className="h-10 w-auto" />
    </Link>
  );
}
export default Logo;
