import { Divider, Stack, Text } from "@chakra-ui/react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <h2 className="bigH">Contact Me</h2>
        <Stack direction="row" h="600px" p={110}>
          <div className="leftContainer">
            <PhoneEnabledIcon fontSize="large" />
            <Text className="aboutPageTextLeft">0433080225</Text>
            <AlternateEmailIcon fontSize="large" />
            <Text className="aboutPageTextLeft">liuyeemail@gmail.com</Text>
            <HomeIcon fontSize="large" />
            <Text className="aboutPageTextLeft">Hunter's address</Text>
          </div>
          <Divider orientation="vertical" padding={40} />
          <div className="forms"></div>
        </Stack>
      </div>
    </>
  );
};

export default Contact;
