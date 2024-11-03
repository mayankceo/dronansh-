import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import Add from "../../components/Sidebar/Add";

import NavigationBottomBar from "../../components/Sidebar/Sidebar";

const PlusPage = () => {
  return (
    <>
       <Add/>
      <NavigationBottomBar /> 
    </>
  );
};

export default PlusPage;