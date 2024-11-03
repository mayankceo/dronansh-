import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";

const Notifications = () => {
	return (
		
			<Flex
				alignItems={"center"}
				gap={4}
				
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<IoMdNotifications size={"100px"} color="#ff3d3d"/>
				<Box display={{ base: "none", md: "block" }}>Notifications</Box>
			</Flex>
		
	);
};

export default Notifications;
