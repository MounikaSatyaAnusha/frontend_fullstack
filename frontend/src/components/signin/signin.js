// import { 
//     Card, 
//     CardBody, 
//     FormControl, 
//     FormHelperText, 
//     FormLabel, 
//     Input, 
//     Button, 
//     VStack, 
//     Heading,
//     Box ,
//     Text,
//     Link
//   } from "@chakra-ui/react";
//   import axios from 'axios';
//   import { api } from "../../api";
//   import { useState } from "react";
// import { useNavigate } from "react-router-dom";
  
//   export const SignIn = () => {
//     const nav=useNavigate()
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const Signin = async () => {
//       try {
//         const res = await axios.post(api + "/signin", { email, password });
        
//         if (res.data) {
//           sessionStorage.auth=JSON.stringify(res?.data?.values)
//           console.log(res?.data?.values);
//           alert("Login successful");
//           nav('/home')
//           // Optionally redirect to another page, e.g.:
//           // window.location.href = "/dashboard";
//         } else {
//           alert(res.data.error);
//           window.location.href = "/signup";
//         }
//       } catch (error) {
//         console.error("Error during sign-in:", error);
//         alert("An error occurred. Please try again later.");
//       }
//     };
  
//     return (
//         <Box 
//             height="100vh" 
//             display="flex" 
//             justifyContent="center" 
//             alignItems="center" 
//             bg="gray.50"
//         >
//             <Card 
//                 width="400px" 
//                 boxShadow="lg" 
//                 p={6} 
//                 borderRadius="md"
//             >
//                 <CardBody>
//                     <VStack spacing={4} align="stretch">
//                     <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.600">
//                      Login
//                     </Heading>
                  
//                         <FormControl id="email">
//                             <FormLabel>Email address</FormLabel>
//                             <Input 
//                                 type="email" 
//                                 focusBorderColor="teal" 
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)} 
//                             />
//                             <FormHelperText>We'll never share your email.</FormHelperText>
//                         </FormControl>
  
//                         <FormControl id="password">
//                             <FormLabel>Password</FormLabel>
//                             <Input 
//                                 type="password" 
//                                 focusBorderColor="teal.500" 
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                             />
//                             <FormHelperText>We'll never share your password.</FormHelperText>
//                         </FormControl>

                        
//                         <Link href="/updatepassword" color="teal" fontWeight="bold" textAlign={"center"}>forget password?</Link>
                      
//                         <Button 
//                             colorScheme="teal" 
//                             size="lg" 
//                             mt={4} 
//                             onClick={Signin}
//                             href="/home"
//                         >
//                             Sign In
//                         </Button>
//                         <Box textAlign="center" mt={4}>
//           <Text>Have to signup?</Text>
//           <Link href="/signup" color="teal" fontWeight="bold">Sign Up</Link>
//         </Box>
                
//         <Button 
//                             colorScheme="teal" 
//                             size="lg" 
//                             mt={4} 
//                             href="/adminsignin"
//                         >
//                             Admin Sign In
//                         </Button>
     
//                     </VStack>
//                 </CardBody>
//             </Card>
//         </Box>
//     );
//   };


import { 
  Card, 
  CardBody, 
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Button, 
  VStack, 
  Box, 
  Text
} from "@chakra-ui/react";
import axios from 'axios'
import { api } from "../../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const nav=useNavigate()

  const Signin=async()=>{
      await axios.post(api+"/signin",{email,password})
      .then((res)=>{
          if(res.data.message){
              sessionStorage.auth=JSON.stringify(res?.data?.values)
              console.log(res?.data?.values)
              alert(res.data.message)
              nav('/home')
          } else {
              alert(res.data.error)
              // window.location.href="/signup"
              nav('/signup')
          }
      })
      .catch((e)=>console.log(e))
  }

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
                      <FormControl id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input type="email" focusBorderColor="teal.500" onChange={(e)=>setEmail(e.target.value)} />
                          <FormHelperText>We'll never share your email.</FormHelperText>
                      </FormControl>

                      <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input type="password" focusBorderColor="teal.500" onChange={(e)=>setPassword(e.target.value)}/>
                          <FormHelperText>We'll never share your password.</FormHelperText>
                      </FormControl>

                      <Button colorScheme="teal" size="lg" mt={4} onClick={Signin}>Sign In</Button>
                      <Text>
                          Don't have an account ? <Link to={"/signup"}>
                      <Button colorScheme="purple">
                      sign up
                          </Button>
                          </Link>
                      </Text>
                  </VStack>
              </CardBody>
          </Card>
      </Box>
  );
};