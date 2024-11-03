import React, { useState } from 'react'; 

import {Link, Tooltip, Flex} from "@chakra-ui/react";
import { IoAdd as PlusIcon } from 'react-icons/io5'; 
import { Link as RouterLink } from "react-router-dom";


const Add = () => {
  const [activeTab, setActiveTab] = React.useState('add'); 
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
          onClick={() => {setActiveTab('Add'); setIsOpen(true)}} 
          position="absolute" 
          bottom={"25px"} 
          left={"50%"} 
          transform={"translateX(-50%)"} 
        > 
          <Flex 
            flexDirection="column" 
            alignItems="center" 
            bg="#8E3BE0" 
            borderRadius={100} 
            p={2} 
            h={"60px"} 
            w={"60px"} 
            justifyContent="center" 
          > 
            <PlusIcon boxSize={40} color="#000" /> 
          </Flex> 
        </Link> 
		</Tooltip>
	);
};

export default Add;



