import {
    Box, Flex, Button, Image, Link, Heading, UnorderedList, ListItem,
  } from '@chakra-ui/react';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import '@fortawesome/fontawesome-free/css/all.min.css'; // For icons
  import './landing.css';
 
  
  export const YogaRetreats = () => {
    return (
      <Box>
        {/* Header */}
        <Box as="header" bg="white" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Image
              src="https://i.ibb.co/p48GmW7/IMG-20240814-052612.jpg"
              alt="Logo"
              boxSize="80px"
            />
            <UnorderedList display="flex" listStyleType="none" m={0}>
              <ListItem mx={4}>
                <Heading size="md" fontWeight="bold" color="teal.500">
                  {/* Yoga Retreats Booking Portal */}
                </Heading>
              </ListItem>
              <ListItem mx={4}>
                <Link href="/home" color="teal.600" fontWeight="800">
                  Home
                </Link>
              </ListItem>
              <ListItem mx={4}>
                <Link href="/workshops">Yoga Workshops</Link>
              </ListItem>
              <ListItem mx={4}>
                <Link href="/meditationworkshops">Meditation Workshops</Link>
              </ListItem>
              <ListItem mx={4}>
                <Link href="/aboutus">About Us</Link>
              </ListItem>
              <ListItem mx={4}>
                <Button colorScheme="teal" size="sm">
                  <Link href="/signin">SIGN IN</Link>
                </Button>
              </ListItem>
              <ListItem mx={4}>
                <Button colorScheme="teal" size="sm">
                  <Link href="/signup">SIGN UP</Link>
                </Button>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Box>
  
        {/* Carousel Section */}
        <Box as="section" id="home" py={10}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            navigation
            loop
          >
            <SwiperSlide>
              <Box position="relative">
                <video
                  muted
                  loop
                  autoPlay
                  width="100%"
                  height="auto"
                  src="https://statics.tpn.to/hero/video/byr_1440.mp4"
                  style={{ objectFit: 'cover' }} // Ensures the video covers the container
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  color="white"
                  width="100%"
                  maxWidth="600px" // Adjust as needed
                  px={4} // Padding for responsiveness
                  bg="rgba(0, 0, 0, 0.5)" // Optional: background color for better text visibility
                  py={4}
                >
                  <Heading size="lg" mb={4}>
                    Enrich your life with an unforgettable yoga retreat
                  </Heading>
                  <Box>Book yoga retreats, holidays, and courses</Box>
                </Box>
              </Box>
            </SwiperSlide>
            {/* Add more SwiperSlide components if needed */}
          </Swiper>
        </Box>
      </Box>
    );
  };
  
  export default YogaRetreats;