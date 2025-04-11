import ProductCard from "@/Comp/ProductCard";
import { useProductStore } from "@/store/product";
import {
  Container,
  SimpleGrid,
  Text,
  VStack,
  Box,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Motion components
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionIconButton = motion(IconButton);

// Footer Component with Animations
const Footer = () => {
  return (
    <MotionBox
      bg="gray.900"
      color="white"
      py={10}
      textAlign="center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container maxW="container.md">
        <MotionText
          fontSize="2xl"
          fontWeight="bold"
          whileHover={{ scale: 1.1, color: "cyan.400" }}
        >
          Contact Us
        </MotionText>
        <Text>Email: support@example.com</Text>
        <Text>Phone: +123 456 7890</Text>
        <Text>Address: 123 Main Street, City, Country</Text>

        {/* Social Icons */}
        <HStack spacing={4} justify="center" mt={4}>
          <MotionIconButton
            icon={<FaFacebookF />}
            variant="ghost"
            colorScheme="blue"
            whileHover={{ scale: 1.2, color: "blue.400" }}
            aria-label="Facebook"
          />
          <MotionIconButton
            icon={<FaTwitter />}
            variant="ghost"
            colorScheme="blue"
            whileHover={{ scale: 1.2, color: "blue.300" }}
            aria-label="Twitter"
          />
          <MotionIconButton
            icon={<FaInstagram />}
            variant="ghost"
            colorScheme="pink"
            whileHover={{ scale: 1.2, color: "pink.400" }}
            aria-label="Instagram"
          />
          <MotionIconButton
            icon={<FaLinkedin />}
            variant="ghost"
            colorScheme="blue"
            whileHover={{ scale: 1.2, color: "blue.500" }}
            aria-label="LinkedIn"
          />
        </HStack>

        <MotionText fontSize="sm" mt={4} whileHover={{ color: "gray.400" }}>
          &copy; 2025 YourCompany. All rights reserved.
        </MotionText>
      </Container>
    </MotionBox>
  );
};

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box position="relative" minH="100vh">
      {/* Top Wave */}
      <Box position="absolute" top="0" left="0" w="100%" zIndex="0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0b192c"
            fillOpacity="1"
            d="M0,288L24,266.7C48,245,96,203,144,192C192,181,240,203,288,192C336,181,384,139,
            432,128C480,117,528,139,576,149.3C624,160,672,160,720,133.3C768,107,816,53,864,53.3C912,
            53,960,107,1008,154.7C1056,203,1104,245,1152,234.7C1200,224,1248,160,1296,133.3C1344,107,
            1392,117,1416,122.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,
            0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,
            0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </Box>

      {/* Main Content */}
      <Container maxW={"container.xl"} py={50} position="relative" zIndex="1">
        <VStack spacing={9}>
          <MotionText
            fontSize={"60"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            textAlign={"center"}
            mt={90}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Current Products
          </MotionText>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>

          {products.length === 0 && (
            <MotionText
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"gray.500"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              No Products Found!{" "}
              <Link to={"/create"}>
                <Text
                  as={"span"}
                  color={"blue.300"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Click here to create a product.
                </Text>
              </Link>
            </MotionText>
          )}
        </VStack>
      </Container>

      {/* Bottom Wave */}
      <Box position="relative" bottom="0" left="0" w="100%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0b192c"
            fillOpacity="1"
            d="M0,288L24,266.7C48,245,96,203,144,192C192,181,240,203,288,192C336,181,384,
            139,432,128C480,117,528,139,576,149.3C624,160,672,160,720,133.3C768,107,816,53,
            864,53.3C912,53,960,107,1008,154.7C1056,203,1104,245,1152,234.7C1200,224,1248,160,
            1296,133.3C1344,107,1392,117,1416,122.7L1440,128L1440,320L1416,320C1392,320,1344,320,
            1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,
            320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,
            336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </Box>

      {/* Animated Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;