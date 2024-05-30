import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate online learning platform for coding. Start your journey to become a coding master with our interactive courses and tutorials.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/learning-platform.png" alt="Learning Platform" />
        </Box>
        <Button as={Link} to="/courses" colorScheme="teal" size="lg" mt={6}>Explore Courses</Button>
      </VStack>
    </Container>
  );
};

export default Index;