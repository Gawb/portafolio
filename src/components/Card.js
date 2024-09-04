import { Heading, HStack, Image, Text, VStack, Link, Icon, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      backgroundColor='white' 
      borderRadius='0.5rem'
    >
      <Box>
        <Image borderRadius='0.5rem' boxSize='100%' src={imageSrc}/>
      </Box>
      <Box padding='2%'>
        <Heading color='black' as='h5'fontSize='sm'>{title}</Heading>
        <Text padding='2% 0' color='black' fontSize='sm'>{description}</Text>
        <Link as='b' color='black' fontSize='xs' href=''>
        See more <FontAwesomeIcon  icon={faArrowRight} size="1x"/>
        </Link>
      </Box>

    </VStack>
  );
};

export default Card;
