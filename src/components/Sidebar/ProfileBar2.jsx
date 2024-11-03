import React, { useState, useEffect } from 'react'; 
import { Flex, Box, Image } from '@chakra-ui/react'; 
import ProfileLink from './ProfileLink'; 
import Search from './Search'; 
import Home2 from './Home2'; 
import SidebarItems from './SidebarItems'; 
import useLogout from '../../hooks/useLogout'; 

const NavigationBottomBar = () => { 
  const [scrollY, setScrollY] = useState(0); 

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

          <SidebarItems/> 
          <ProfileLink /> 
        </Flex> 
      </Box> 
    </div> 
  ); 
}; 

export default NavigationBottomBar;









