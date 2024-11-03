import {
	Box,
	Button,
	Flex,
	
	Text,
	
	Link,
	
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
  } from "@chakra-ui/react";
  
  import useSearchUser from "../../hooks/useSearchUser";
  import { useRef, useState } from "react";
  import SuggestedUser from "../SuggestedUsers/SuggestedUser";
  import { Link as RouterLink } from 'react-router-dom';
  import { SlPeople } from "react-icons/sl";
import React from "react";
  
  const SearchTop = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const searchRef = useRef(null);
	const { user, isLoading, getUserProfile, setUser } = useSearchUser();
	const [showUser, setShowUser] = useState(false);
	const [activeTab, setActiveTab] = React.useState('Search');
  
	const handleSearchUser = (e) => {
	  e.preventDefault();
	  getUserProfile(searchRef.current.value);
	};
  
	const handlePeopleClick = () => {
	  searchRef.current.value = "drmeenusoni123";
	  handleSearchUser();
	  setShowUser(true);
	};
  
	return (
	  <>
		<Tooltip
		  hasArrow
		  label={""}
		  placement="right"
		  ml={1}
		  openDelay={500}
		  display={{ base: "block", md: "none" }}
		>


		  <Flex
			alignItems={"center"}
			gap={4}
			borderRadius={6}
			p={2}
			w={{ base: 10, md: "full" }}
			justifyContent={{ base: "center", md: "flex-start" }}
			onClick={onOpen}
		  >	
		   <Link
		  
		  as={RouterLink}
		  onClick={() => setActiveTab('')}
		  ml={"-5px"}
		  
  
		  >
		  <Flex flexDirection="column" alignItems="center">
			<SlPeople size={"25px"}  color={"#000"} />

			
			<Text fontSize={10} mt={1} color={"#000"}>Cohorts</Text>
		  </Flex>
		  </Link>
	
   
          </Flex>
		</Tooltip>
  
		<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
		  <ModalOverlay />
		  <ModalContent
			bg={"linear-gradient(180deg, rgba(233,223,255,1) 32%, rgba(255,244,225,1) 69%);"}
			maxW={"400px"}
			w={"full"}
			h={"auto"}
			mx={"auto"}
			py={4}
		  >
			<ModalHeader>Search People</ModalHeader>
			<ModalCloseButton />
			<ModalBody pb={6}>
			  <form onSubmit={handleSearchUser}>
				<FormControl>
				  <FormLabel>Search by Name, Title, or Keyword</FormLabel>
				  <Input
					placeholder="Search"
					ref={searchRef}
					bg={"white"}
					borderColor={"gray.200"}
				  />
				</FormControl>
				<Flex w={"full"} justifyContent={"flex-end"}>
				  <Button
					type="submit"
					ml={"auto"}
					size={"sm"}
					my={4}
					isLoading={isLoading}
					bg={"#007bff"}
					color={"white"}
				  >
					Search
				  </Button>
				</Flex>
			  </form>
  
			  {showUser && (
				<SuggestedUser
				  user={user}
				  setUser={setUser}
				  bg={"white"}
				  borderColor={"gray.200"}
				/>
			  )}
  
			  <Box mt={4} bg={"white"} borderColor={"gray.200"} p={4}>
				<Box fontSize={"sm"} color={"gray.600"}>
				  Try searching for:
				</Box>
				<Flex flexWrap={"wrap"} justifyContent={"start"}>
				  <Button
					size={"xs"}
					bg={"gray.100"}
					color={"gray.600"}
					mr={2}
					mb={2}
					onClick={handlePeopleClick}
				  >
					People
				  </Button>
				  <Button
					size={"xs"}
					bg={"gray.100"}
					color={"gray.600"}
					mr={2}
					mb={2}
				  >
					Jobs
				  </Button>
				  <Button
					size={"xs"}
					bg={"gray.100"}
					color={"gray.600"}
					mr={2}
					mb={2}
				  >
					Content
				  </Button>
				  <Button
					size={"xs"}
					bg={"gray.100"}
					color={"gray.600"}
					mr={2}
					mb={2}
				  >
					Groups
				  </Button>
				</Flex>
			  </Box>
			</ModalBody>
		  </ModalContent>
		</Modal>
	  </>
	);
  };
  
  export default SearchTop;
  
  
  
  
  
  