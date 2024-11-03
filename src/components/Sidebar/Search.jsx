import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tooltip, useDisclosure, } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import { firestore } from '../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRef, useState } from "react";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuggestions(false);
    const searchQuery = searchRef.current.value.toLowerCase();
    const usersRef = collection(firestore, 'users');
    const q = query(usersRef, where('username', '>=', searchQuery), where('username', '<', searchQuery + '~'));
    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map(doc => doc.data());
    setUsers(usersData);
    setIsLoading(false);
  };

  const handleSuggestionClick = async (suggestion) => {
    setIsLoading(true);
    setShowSuggestions(false);
    const usersRef = collection(firestore, 'users');
    const q = query(usersRef, where('username', '==', suggestion));
    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map(doc => doc.data());
    setUsers(usersData);
    setIsLoading(false);
  };

  const handleOpen = () => {
    onOpen();
    setShowSuggestions(true);
  };

  return (
    <>
      <Tooltip hasArrow label={""} placement='' ml={1} openDelay={500} display={{ base: "block", md: "none" }} >
        <Flex alignItems={"center"} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} onClick={handleOpen} >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
        <ModalOverlay />
        <ModalContent bg={"linear-gradient(180deg, rgba(233,223,255,1) 32%, rgba(255,244,225,1) 69%)"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder='asaprogrammer' bg={"white"} ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button type='submit' bg={"black"} ml={"auto"} size={"sm"} my={4} isLoading={isLoading}> Search </Button>
              </Flex>
            </form>
            {showSuggestions && (
              <Box bg={"white"} border={"1px solid gray"} borderRadius={6} p={2} mt={2} mb={2} >
                <Box p={2} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} cursor={"pointer"} onClick={() => handleSuggestionClick("drmeenusoni123")}> #DrMeenuSoni123 </Box>
              </Box>
            )}
            {users.map(user => (
              <SuggestedUser key={user.username} user={user} />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;





