import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<VStack spacing={4}>
					<Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

					{isLogin ? <Login /> : <Signup />}

					{/* ---------------- OR -------------- */}
					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"black"} />
						<Text mx={1}  fontSize={"20px"} color={"red"} fontWeight={500}>
							PSITHUB
						</Text>
						<Box flex={2} h={"1px"} bg={"black"} />
					</Flex>

					<GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
				</VStack>
			</Box>

			
		</>
	);
};

export default AuthForm;
