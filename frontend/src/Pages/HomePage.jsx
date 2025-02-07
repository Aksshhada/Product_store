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
    <Box position="relative" minH="100vh">
      <Container maxW={"container.xl"} py={50}>
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
              No Products Found!{"  "}
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

      <Box position="absolute" bottom="0" left="0" w="100%" overflow="hidden">
        <svg
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
        </svg>
      </Box>
    </Box>
  );
};

export default HomePage;