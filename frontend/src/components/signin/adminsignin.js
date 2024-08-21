import { 
    Card, 
    CardBody, 
    FormControl, 
    FormHelperText, 
    FormLabel, 
    Input, 
    Button, 
    VStack, 
    Heading,
    Box 
  } from "@chakra-ui/react";
  import axios from 'axios';
  import { api } from "../../api";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
  export const AdminSignIn = () => {
    const nav=useNavigate()
    const [passkey, setPasskey] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const correctPasskey = "12345"; // Example passkey, replace with the actual value
  
    const adminsignin = async () => {
      if (passkey !== correctPasskey) {
        alert("Incorrect passkey. Please enter the correct passkey.");
        return; // Stop the process if the passkey is incorrect
      }
      try {
        const res = await axios.post(api + "/adminsignin", { passkey,email, password });
        
        if (res.data) {
          sessionStorage.auth=JSON.stringify(res?.data?.values)
          console.log(res?.data?.values);
          alert("Login successful");
          nav('/students')
          // Optionally redirect to another page, e.g.:
          // window.location.href = "/dashboard";
        } else {
          alert(res.data.error);
          window.location.href = "/signup";
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        alert("An error occurred. Please try again later.");
      }
    };
  
    return (
        <Box 
            height="100vh" 
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
                     Login
                    </Heading>
                    <FormControl id="passkey" isRequired>
                <FormLabel>Passkey</FormLabel>
                <Input
                  type="text"
                  focusBorderColor="teal.500"
                  placeholder="For Passkey Dial: 931212032"
                  onChange={(e) => setPasskey(e.target.value)}
                  value={passkey}
                />
              </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input 
                                type="email" 
                                focusBorderColor="teal.500" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
  
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                focusBorderColor="teal.500" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <FormHelperText>We'll never share your password.</FormHelperText>
                        </FormControl>

                        
                      
                        <Button 
                            colorScheme="teal" 
                            size="lg" 
                            mt={4} 
                            onClick={adminsignin}
                        >
                            Sign In
                        </Button>
                 
                
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
  };