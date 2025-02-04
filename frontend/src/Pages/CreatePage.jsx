import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
// import { useToast } from '@chakra-ui/react'
// import { Toaster, toaster } from "@/components/ui/toaster";
// import { useToast } from '@chakra-ui/react';
// import { useColorModeValue } from "@chakra-ui/react";

// import { toaster } from "@/components/ui/toaster"


import React, { useState } from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // const toast = useToast()

  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)

    // if (!success) {
    //   toaster.create({
    //     title: "Error",
    //     description: message,
    //     type: "error",
    //   });
    // } else {
    //   toaster.create({
    //     title: "Success",
    //     description: message,
    //     type: "success",
    //   });

    //   // Reset form after successful product creation
    //   setNewProduct({ name: "", price: "", image: "" });
    // }

  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={9}>
          Create New Product
        </Heading>

        <Box bg={useColorModeValue("white", "gray.800")} 
        p={6} rounded={"lg"} shadow={"md"}
        w={["300px", "350px", "500px"]} // Adjusts size based on screen width
        h={["300px", "350px", "300px"]} >
          <VStack spacing={8}>
            <Input 
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            mb={4}
            />

            <Input
            placeholder='Price'
            name='price'
            type='number'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            mb={4}
            />

            <Input 
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            mb={4}
            />

            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage