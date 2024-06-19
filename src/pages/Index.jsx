import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Anton Osika's Landing Page</Heading>
        <Text fontSize="lg" textAlign="center">Discover the amazing world of web development and design with Anton Osika.</Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>Get Started</Button>
      </VStack>
      <Box mt={10}>
        <Image src="/path-to-your-image.jpg" alt="Landing Page Image" boxSize="300px" objectFit="cover" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Text fontSize="md" textAlign="center">Scroll down to learn more</Text>
        <Box as="span" mt={2} fontSize="2xl" role="img" aria-label="down-arrow">⬇️</Box>
      </Flex>
    </Container>
  );
};

export default Index;