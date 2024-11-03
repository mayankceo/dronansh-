import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileLink = () => {
	const authUser = useAuthStore((state) => state.user);

	return (
		<Tooltip
			hasArrow
			label={""}
			placement='right'
			ml={0}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={`/${authUser?.username}`}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				ml={"110px"}
				mb={"4.5px"}
				
			
				
				
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
			<Avatar width={'40px'} height={'40px'} src={authUser?.profilePicURL} />

				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Link>
		</Tooltip>
	);
};

export default ProfileLink;
