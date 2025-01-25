import { Container, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading></Heading>
      </VStack>
    </Container>
  )
}

export default CreatePage
