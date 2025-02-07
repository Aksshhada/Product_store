//correct code without top wave

// import ProductCard from "@/Comp/ProductCard";
// import { useProductStore } from "@/store/product";
// import { Container, SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   const { fetchProducts, products } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   return (
//     <Box position="relative" minH="100vh">
//       <Container maxW={"container.xl"} py={50}>
//         <VStack spacing={9}>
//           <Text
//             fontSize={"60"}
//             fontWeight={"bold"}
//             bgGradient={"linear(to-r, cyan.400, blue.500)"}
//             textAlign={"center"}
//             mt={90}
//           >
//             Current Products
//           </Text>

//           <SimpleGrid
//             columns={{
//               base: 1,
//               md: 2,
//               lg: 3,
//             }}
//             spacing={10}
//             w={"full"}
//           >
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </SimpleGrid>

//           {products.length === 0 && (
//             <Text
//               fontSize={"xl"}
//               textAlign={"center"}
//               fontWeight={"bold"}
//               color={"gray.500"}
//             >
//               No Products Found!{"  "}
//               <Link to={"/create"}>
//                 <Text
//                   as={"span"}
//                   color={"blue.300"}
//                   _hover={{ textDecoration: "underline" }}
//                 >
//                   Click here to create a product.
//                 </Text>
//               </Link>
//             </Text>
//           )}
//         </VStack>
//       </Container>

//       <Box position="absolute" bottom="0" left="0" w="100%" overflow="hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           style={{ width: "100%", height: "auto" }}
//         >
//           <path
//             fill="#0099ff"
//             fillOpacity="1"
//             d="M0,64L0,192L96,192L96,288L192,288L192,224L288,224L288,256L384,256L384,288L480,288L480,
//             256L576,256L576,288L672,288L672,224L768,224L768,64L864,64L864,160L960,160L960,0L1056,0L1056,
//             96L1152,96L1152,0L1248,0L1248,32L1344,32L1344,128L1440,128L1440,320L1344,320L1344,320L1248,
//             320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,
//             320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,
//             320L96,320L96,320L0,320L0,320Z"
//           ></path>
//         </svg>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

















//correct code with top and bottom waves

import ProductCard from "@/Comp/ProductCard";
import { useProductStore } from "@/store/product";
import { Container, SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box position="relative" minH="100vh">                                        //#0099ff
      {/* Top Wave */}
      <Box position="absolute" top="0" left="0" w="100%" zIndex="0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0b192c" fill-opacity="1" d="M0,288L24,266.7C48,245,96,203,144,192C192,181,240,203,288,192C336,181,384,139,432,128C480,117,528,139,576,149.3C624,160,672,160,720,133.3C768,107,816,53,864,53.3C912,53,960,107,1008,154.7C1056,203,1104,245,1152,234.7C1200,224,1248,160,1296,133.3C1344,107,1392,117,1416,122.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      </Box>

      {/* Main Content */}
      <Container maxW={"container.xl"} py={50} position="relative" zIndex="1">
        <VStack spacing={9}>
          <Text
            fontSize={"60"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            textAlign={"center"}
            mt={90}
          >
            Current Products
          </Text>

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
            <Text
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"gray.500"}
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
            </Text>
          )}
        </VStack>
      </Container>

      {/* Bottom Wave */}
      <Box position="absolute" bottom="0" left="0" w="100%">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "auto" }}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L0,192L96,192L96,288L192,288L192,224L288,224L288,256L384,256L384,288L480,288L480,
            256L576,256L576,288L672,288L672,224L768,224L768,64L864,64L864,160L960,160L960,0L1056,0L1056,
            96L1152,96L1152,0L1248,0L1248,32L1344,32L1344,128L1440,128L1440,320L1344,320L1344,320L1248,
            320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,
            320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,
            320L96,320L96,320L0,320L0,320Z"
          ></path>
        </svg> */}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0b192c" fill-opacity="1" d="M0,288L24,266.7C48,245,96,203,144,192C192,181,240,203,288,192C336,181,384,139,432,128C480,117,528,139,576,149.3C624,160,672,160,720,133.3C768,107,816,53,864,53.3C912,53,960,107,1008,154.7C1056,203,1104,245,1152,234.7C1200,224,1248,160,1296,133.3C1344,107,1392,117,1416,122.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>      </Box>
    </Box>
  );
};

export default HomePage;