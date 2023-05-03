import "./Nav.css";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="hunterNavText">
        <span>Hunter's Garden</span>
      </div>
      <div className="rightText">
        <span>Home</span>
        <span>About</span>
        <span>Hunter's growth</span>
        <span>Book</span>
        <span>Reviews</span>
        <span>Contact</span>
      </div>
      <div className="links">
        <span>
          <UilFacebook color="#3DBECC" />
        </span>
        <span>
          <UilInstagram color="#3DBECC" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
