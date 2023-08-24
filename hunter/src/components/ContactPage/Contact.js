import { Divider, Stack, Text } from "@chakra-ui/react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");

  const handleEmailValidation = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length === 0) {
      e.target.setCustomValidity("Please fill in this field");
    } else if (!inputValue.includes("@") || !inputValue.includes(".")) {
      e.target.setCustomValidity("Please provide a valid email address");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here,  can handle the form submission logic.
  };

  const handleInputName = (e) => {
    setYourName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setYourEmail(e.target.value);
  };

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
            <Text className="aboutPageTextLeft">Narre Warren, VIC 3805</Text>
          </div>
          <Divider orientation="vertical" padding={40} />

          <form className="forms" onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-basic1"
              label="Name"
              variant="outlined"
              value={yourName}
              onChange={handleInputName}
            />
            <TextField
              required
              id="outlined-basic2"
              label="Enter email"
              variant="outlined"
              value={yourEmail}
              onChange={handleInputEmail}
              onInvalid={handleEmailValidation}
            />
            <TextField
              id="outlined-basic3"
              label="Message"
              multiline
              rows={6}
              variant="outlined"
            />
            <Button
              variant="contained"
              size="large"
              style={{ marginLeft: "280px" }}
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Stack>
      </div>
    </>
  );
};

export default Contact;
