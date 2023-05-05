import "./Nav.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="leftText">
        <span>Hunter's Garden</span>
      </div>
      <div className="middleText">
        <span>Home</span>
        <span>About</span>
        <span>Hunter's growth</span>
        <span>Reviews</span>
        <span>Contact</span>
      </div>
      <div className="links">
        <span>
          <UilFacebookF color="white" />
        </span>
        <span>
          <UilInstagram color="white" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
