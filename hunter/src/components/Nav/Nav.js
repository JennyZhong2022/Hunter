import "./Nav.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

const Nav = () => {
  const goFacebook = () => {
    window.open("https://www.facebook.com");
  };

  const goInstagram = () => {
    window.open("https://www.instagram.com");
  };

  const handleSpanClick = (event) => {
    const newY = Number(event.currentTarget.getAttribute("data-scrollTo"));
    window.scrollTo({
      top: newY,
      behavior: "smooth",
    });
  };

  return (
    <div className="navContainer">
      <div className="leftText">
        <span data-scrollTo="0" onClick={handleSpanClick}>
          Hunter's Garden
        </span>
      </div>
      <div className="middleText">
        <span data-scrollTo="0" onClick={handleSpanClick}>
          Home
        </span>
        <span data-scrollTo="800" onClick={handleSpanClick}>
          About
        </span>
        <span data-scrollTo="1700" onClick={handleSpanClick}>
          Hunter's growth
        </span>
        <span data-scrollTo="2700" onClick={handleSpanClick}>
          Reviews
        </span>
        <span data-scrollTo="4200" onClick={handleSpanClick}>
          Contact
        </span>
      </div>
      <div className="links">
        <span onClick={goFacebook}>
          <UilFacebookF color="white" />
        </span>
        <span onClick={goInstagram}>
          <UilInstagram color="white" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
