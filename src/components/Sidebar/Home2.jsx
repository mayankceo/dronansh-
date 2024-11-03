import {Flex,Text, Box, Link, Tooltip } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react'; 

import { GoHome } from "react-icons/go";


const Home2 = () => {
	const [activeTab, setActiveTab] = React.useState('home');
	return (
		<Tooltip
			hasArrow
			label={""}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link 
          to="/" 
          as={RouterLink} 
          onClick={() => setActiveTab('home')} 
          ml={"1"} 
		  marginBottom={"-12px"} 
		  
        > 
          <Flex flexDirection="column" alignItems="center" width={"100%"}> 
            <GoHome size={"25px"} color={activeTab === 'home' ? "#000" : "#000"}/> 
            <Text fontSize={10} mt={1} color={activeTab === 'home' ? "#000" : "#000"}>Home</Text> 
          </Flex> 
        </Link> 
		</Tooltip>
	);
};

export default Home2;


