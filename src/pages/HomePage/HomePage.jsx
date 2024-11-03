import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <Container maxW={"container.lg"} mb={20}> 
        <Flex gap={20}>
          <Box flex={2} py={10}>
            <FeedPosts />
          </Box>
          <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
      <Sidebar /> 
    </>
  );
};

export default HomePage;

