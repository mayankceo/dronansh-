import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
	const { userProfile } = useUserProfileStore();
	const authUser = useAuthStore((state) => state.user);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);
	const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
	const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;

	return (
		<Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
			<AvatarGroup size={{ base: "2xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
				<Avatar src={userProfile.profilePicURL} alt='As a programmer logo' />
			</AvatarGroup>

			<VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justifyContent={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
					w={"full"}
				>
					<Text fontWeight={800} fontSize={{ base: "2xl", md: "lg" }}>{userProfile.username}</Text>
					{visitingOwnProfileAndAuth && (
						<Flex gap={5} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"#ff0000"}
								color={"black"}
								_hover={""}
								
								size={{ base: "xs", md: "sm" }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}
					{visitingAnotherProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"linear-gradient(180deg, rgba(233,223,255,1) 32%, rgba(255,244,225,1) 69%);"}
								color={"white"}
								_hover={{ bg: "blue.600" }}
								size={{ base: "xs", md: "sm" }}
								onClick={handleFollowUser}
								isLoading={isUpdating}
								
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
						</Flex>
					)}
				</Flex>

				<Flex alignItems={"center"} gap={{ base: 5, sm: 4 }}>
					<Text fontWeight={500} fontSize={{ base: "lg", md: "sm" }}>
						<Text as='span' fontWeight={900} mr={1}>
							{userProfile.posts.length}
						</Text>
						Posts
					</Text>
					<Text fontWeight={500} fontSize={{ base: "lg", md: "sm" }}>
						<Text as='span' fontWeight={900} mr={1}>
							{userProfile.followers.length}
						</Text>
						Followers
					</Text>
					<Text fontWeight={500} fontSize={{ base: "lg", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{userProfile.following.length}
						</Text>
						Following
					</Text>
				</Flex>
				<Flex justifyContent={"center"} gap={4}>
					<Text justifyContent={"center"} fontSize={"xl"} fontWeight={"bold"}>
						{userProfile.fullName}
					</Text>
				</Flex>
				<Text fontSize={"xl"}>{userProfile.bio}</Text>
			</VStack>
			{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
		</Flex>
	);
};

export default ProfileHeader;
