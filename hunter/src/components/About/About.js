import "./About.css";
import { Divider, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <div className="aboutPage">
      <h2 className="aboutMeH1">About Me</h2>
      <Stack direction="row" h="600px" p={110}>
        <div className="leftContainer">
          <Text className="aboutPageTextLeft">
            Discover the Perfect Home Away From Home for Your Furry Friend at
            Hunter's Garden!
          </Text>
        </div>
        <Divider orientation="vertical" padding={40} />
        <div className="aboutPageTextRight">
          <Text>
            Welcome to Hunter's Garden, the ultimate haven for your beloved
            pets!
          </Text>
          <Text>
            {" "}
            I'm Hunter, a friendly 9-year-old Labrador Retriever, and I'm
            excited to share my story with you. Ever since my mom brought me
            home as a tiny pup, I've loved spending quality time with her. As I
            grew up, she began caring for other puppies and dogs, and I quickly
            discovered that I love making new friends! We have endless fun here,
            chasing each other and playing together. Plus, I help my mom look
            after our canine visitors too, ensuring they feel right at home.
          </Text>
          <Text>
            If you're searching for a reliable and loving pet sitter, look no
            further than Hunter's Garden! Here, your furry friend will enjoy a
            warm, caring environment where they can socialize, play, and make
            lasting memories. Trust us to provide the best home away from home
            experience for your pet!{" "}
          </Text>
          <Text>
            Choose Hunter's Garden, and let your four-legged companion thrive in
            a happy and nurturing setting. We can't wait to meet you and your
            furry family member!
          </Text>
        </div>
      </Stack>
    </div>
  );
};

export default About;
