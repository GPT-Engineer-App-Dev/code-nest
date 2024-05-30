import { useState } from "react";
import { Container, Heading, VStack, Box, Button, Text, FormControl, FormLabel, Input, Alert, AlertIcon } from "@chakra-ui/react";

const courses = [
  { id: 1, name: "Introduction to JavaScript", description: "Learn the basics of JavaScript, the most popular programming language in web development." },
  { id: 2, name: "Advanced React", description: "Dive deeper into React and learn advanced concepts and patterns for building scalable applications." },
  { id: 3, name: "Python for Data Science", description: "Master Python and its libraries to analyze data and build machine learning models." },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setEnrollmentSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the enrollment data to a server
    console.log(`Enrolled in course: ${selectedCourse.name}, Name: ${name}, Email: ${email}`);
    setEnrollmentSuccess(true);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6}>Available Courses</Heading>
      <VStack spacing={6}>
        {courses.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{course.name}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll(course)}>Enroll</Button>
          </Box>
        ))}
      </VStack>

      {selectedCourse && (
        <Box mt={10} p={5} shadow="md" borderWidth="1px" width="100%">
          <Heading as="h2" size="lg" mb={4}>Enroll in {selectedCourse.name}</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal">Submit</Button>
          </form>
          {enrollmentSuccess && (
            <Alert status="success" mt={4}>
              <AlertIcon />
              Enrollment successful! You have been enrolled in {selectedCourse.name}.
            </Alert>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Courses;