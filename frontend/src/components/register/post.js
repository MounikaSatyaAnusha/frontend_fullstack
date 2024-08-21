import {
    Box, Button, Card, CardBody, FormControl,
    FormHelperText, FormLabel, Heading, Input, VStack
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  
  export const Post = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [information, setInformation] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [instructor, setInstructor] = useState('');
    const [days, setDays] = useState('');
  
    const post = async () => {
      try {
        const res = await axios.post("http://localhost:5000/post", { 
          name,
          information,
          location,
          price,
          instructor,
         days,
        });
  
        if (res.data.success) {
          alert("Posted successfully");
          nav('/success');
        } 
      } catch (error) {
        console.error("Error occurred during post:", error);
        alert("An error occurred during post");
      }
    };
  
    return (
      <Box
        height="110vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
      >
        <Card
          width="400px"
          boxShadow="lg"
          p={6}
          borderRadius="md"
        >
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.600">
                Posting Retreats
              </Heading>
  
              <FormControl id="name" isRequired>
                <FormLabel>Retreats Name</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setName(e.target.value)} value={name} />
              </FormControl>
  
              <FormControl id="information" isRequired>
                <FormLabel>Information</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setInformation(e.target.value)} value={information} />
              </FormControl>
  
              <FormControl id="location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setLocation(e.target.value)} value={location} />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
  
              <FormControl id="price" isRequired>
                <FormLabel>Date</FormLabel>
                <Input type="date" focusBorderColor="teal.500" onChange={(e) => setPrice(e.target.value)} value={price} />
                <FormHelperText>We'll never share your password.</FormHelperText>
              </FormControl>
  
              <FormControl id="instructor" isRequired>
                <FormLabel>Instructors</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setInstructor(e.target.value)} value={instructor} />
              </FormControl>
  
              <FormControl id="days" isRequired>
                <FormLabel>How many days</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setDays(e.target.value)} value={days} />
              </FormControl>
  
              <Button colorScheme="teal" size="lg" mt={4} onClick={post}>POST</Button>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    );
  };