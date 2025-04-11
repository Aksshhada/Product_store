import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
  };

  return (
    <Box position="relative" minH="100vh">
      <Container
        maxW="container.sm"
        overflow="hidden"
        zIndex={1}
        position="relative"
      >
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center" mb={9} mt={150}>
            Create New Product
          </Heading>

          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded="lg"
            shadow="md"
            w={["300px", "350px", "500px"]}
            h={["300px", "350px", "300px"]}
          >
            <VStack spacing={8}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                mb={4}
              />

              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                mb={4}
              />

              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                mb={4}
              />

              <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Full-Screen Wave */}
      <Box position="absolute" bottom="0" left="0" width="100vw" zIndex={0}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0b192c"
            fill-opacity="1"
            d="M0,288L0,160L144,160L144,224L288,224L288,96L432,96L432,160L576,160L576,160L720,160L720,0L864,0L864,160L1008,160L1008,288L1152,288L1152,96L1296,96L1296,128L1440,128L1440,320L1296,320L1296,320L1152,320L1152,320L1008,320L1008,320L864,320L864,320L720,320L720,320L576,320L576,320L432,320L432,320L288,320L288,320L144,320L144,320L0,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default CreatePage;