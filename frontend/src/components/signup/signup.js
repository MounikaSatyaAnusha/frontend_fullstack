import {
    Box, Button, Card, CardBody, FormControl,
    FormHelperText, FormLabel, Heading, Input, Text, VStack
  } from "@chakra-ui/react";
  import { api } from "../../api";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import axios from "axios";
  
  export const SignUp = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state
    const [phone, setPhone] = useState('');
  
    const Signup = async () => {
      if (password !== confirmPassword) { // Check if passwords match
        alert("Passwords do not match.");
        return;
      }
  
      try {
        const res = await axios.post(api + "/signup", { email, name, password, phone });
  
        if (res.data.success) {
          alert("sign up successfully");
          nav('/signin');
        } else {
          alert(res.data.error);
          if (res.data.error === "Email already exists. Please sign in.") {
            nav('/signin');
          }
        }
      } catch (e) {
        console.error(e);
        alert("An error occurred during signup.");
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
              {/* Heading */}
              <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.600">
               Sign Up 
              </Heading>
  
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" focusBorderColor="teal.500" onChange={(e) => setName(e.target.value)} value={name} />
              </FormControl>
  
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" focusBorderColor="teal.500" onChange={(e) => setEmail(e.target.value)} value={email} />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
  
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" focusBorderColor="teal.500" onChange={(e) => setPassword(e.target.value)} value={password} />
                <FormHelperText>We'll never share your password.</FormHelperText>
              </FormControl>
  
              <FormControl id="confirmPassword" isRequired> {/* New field */}
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" focusBorderColor="teal.500" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
              </FormControl>
  
              <FormControl id="phone" isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input type="number" focusBorderColor="teal.500" onChange={(e) => setPhone(e.target.value)} value={phone} />
              </FormControl>
  
              <Button colorScheme="teal" size="lg" mt={4} onClick={Signup}>Sign Up</Button>
  
              <Text textAlign="center">
                Already have an account? <Link to="/signin">
                  <Button colorScheme="green">Sign In</Button>
                </Link>
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    );
  };