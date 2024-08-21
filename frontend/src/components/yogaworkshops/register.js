import {
    Box, Button, Card, CardBody, FormControl,
    FormHelperText, FormLabel, Heading, Input, VStack
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  
  export const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email,setEmail] =useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
  
    const register = async () => {
      try {
        const res = await axios.post("http://localhost:1000/register", { 
          name,
          email,
          age,
          gender,
          contact,
          address,
      
        });
  
        if (res.data.success) {
          alert("Registered successfully");
          // nav('/success');
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
                Register
              </Heading>
  
              <FormControl id="name" isRequired>
                <FormLabel> Name</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setName(e.target.value)} value={name} />
              </FormControl>
                
              <FormControl id="email" isRequired>
                <FormLabel>Gmail</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setEmail(e.target.value)} value={email} />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>

              <FormControl id="contact" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setContact(e.target.value)} value={contact} />
              </FormControl>

              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Input type="gender" focusBorderColor="teal.500" onChange={(e) => setGender(e.target.value)} value={gender} />
                <FormHelperText>We'll never share your password.</FormHelperText>
              </FormControl>
  

              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input type="number" focusBorderColor="teal.500" onChange={(e) => setAge(e.target.value)} value={age} />
              </FormControl>
  
              <FormControl id="address" isRequired>
                <FormLabel>Other Details</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setAddress(e.target.value)} value={address} />
              </FormControl>
  
              <Button colorScheme="teal" size="lg" mt={4} onClick={register}>REGISTER</Button>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    );
  };