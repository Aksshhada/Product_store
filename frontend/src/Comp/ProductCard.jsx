import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// import { useColorModeValue } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
  };
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={"2"}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={8}>
          <IconButton icon={<MdEdit />} />
          <IconButton
            icon={<MdDelete boxSize={6} />}
            // fontSize="20px"
            // color="black" 
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme={"red"}
            aria-label="Delete Product"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
