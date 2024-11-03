import React, { useState, useEffect } from 'react'; 
import { Flex, Text, Link, Box, Image } from '@chakra-ui/react'; 
import ProfileLink from './ProfileLink'; 
import Search from './Search'; 
import Chat from './Chat'; 
import Add from './Add'; 
import Home2 from './Home2'; 
import Home from './Home'; 
import SidebarItems from './SidebarItems'; 
import useLogout from '../../hooks/useLogout'; 

const NavigationBottomBar = () => { 
  const [activeTab, setActiveTab] = React.useState('home'); 
  const [isOpen, setIsOpen] = useState(false); 
  const { handleLogout, isLoggingOut } = useLogout(); 
  const [isLoggedOut, setIsLoggedOut] = useState(false); 
  const [scrollY, setScrollY] = useState(0); 

  const handleLogoutClick = () => { 
    handleLogout(); 
    setIsLoggedOut(true); 
  }; 

  useEffect(() => { 
    const handleScroll = () => { 
      setScrollY(window.scrollY); 
    }; 
    window.addEventListener("scroll", handleScroll); 
    return () => { 
      window.removeEventListener("scroll", handleScroll); 
    }; 
  }, []); 

  return ( 
    <div> 
      {/* TopBar */} 
      {scrollY < 100 ? ( 
        <Flex 
          bg="#fff" 
          py={2} 
          px={4} 
          justifyContent="space-around" 
          alignItems="center" 
          position="fixed" 
          top={0} 
          left={0} 
          right={0} 
          boxShadow={"5px 0px"} 
          borderTop={"0px solid #ddd"} 
        > 
          <Flex direction={"row"} gap={20} marginLeft={5}> 
            <Image 
              src="PSITHUB.png" 
              alt="PSITHUB Logo" 
              width={"150px"} 
              height={"50px"} 
              borderRadius="full" 
              marginLeft={"-30px"} 
            /> 
          </Flex> 
          <Flex 
            direction={"row"} 
            gap={20} 
            marginRight={5} 
            justifyContent={"flex-end"} 
          > 
          </Flex> 
          <Search /> 
        </Flex> 
      ) : null} 

      {/* BottomBar */} 
      <Flex 
        bg="#fff" 
        py={2} 
        px={4} 
        justifyContent="space-around" 
        alignItems="center" 
        position="fixed" 
        bottom={0} 
        left={0} 
        right={0} 
        zIndex={1000} 
      > 
      </Flex> 

      <Box 
        position={"fixed"} 
        height={"100vh"} 
        bottom={0} 
        left={0} 
        width={"100vw"} 
        background={"white"} 
        color={"#000"} 
        padding={8} 
        display={"flex"} 
        justifyContent={"space-around"} 
        alignItems={"center"} 
        zIndex={1001} 
        maxWidth={"100vw"} 
        minHeight={"60px"} 
        maxHeight={"60px"} 
        borderTop={"12px solid #DBC9FF"} 
        borderRadius={"40px"} 
      > 
        <Flex 
          direction={"row"} 
          justifyContent={"space-around"} 
          width={"100%"} 
        > 
          <Flex 
            direction={"column"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            marginRight={10} 
            marginBottom={3} 
            ml={-1} 
          > 
            <Home2 /> 
          </Flex> 

          <SidebarItems /> 
          <ProfileLink /> 
        </Flex> 
      </Box> 

      {isOpen && <Box 
        width="100vw" 
        height="100vh" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        fontSize={48} 
        bg="#fff" 
        position="fixed" 
        top={0} 
        left={0} 
        zIndex={1000} 
      > 
        Hello World 
        <button 
          onClick={() => setIsOpen(false)} 
          style={{ 
            position: 'absolute', 
            top: 10, 
            right: 10 
          }} 
        > 
          Close 
        </button> 
      </Box> 
    } 

  </div> 
  ); 
}; 

export default NavigationBottomBar;



















