import {Flex,Text, Box, Link, Tooltip } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { React, useState } from 'react'; 

import { GoHome } from "react-icons/go";


const Home = () => {
	const [activeTab, setActiveTab] = React.useState('Home');
	return (
		<Tooltip
			hasArrow
			label={"Home"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link 
          to="/" 
          as={RouterLink} 
          onClick={() => setActiveTab('home')} 
          ml={"-40px"} 
		  marginBottom={"0px"} 
		  
		  
        > 
          <Flex flexDirection="column" alignItems="center" width={"100%"}> 
            <GoHome boxSize={"200px"} color={activeTab === 'Home' ? "#000" : "#000"}/> 
            <Text fontSize={10} mt={1} color={activeTab === 'home' ? "#ff0000" : "#000"}>Home</Text> 
          </Flex> 
        </Link> 
		</Tooltip>
	);
};

export default Home;


