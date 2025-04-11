import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleInputChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = () => {
    updateProduct(product._id, editedProduct);
    setIsDialogOpen(false);
  };

  const handleDeleteProduct = async (pid) => {
    await deleteProduct(pid);
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
      m={5}
      mt={50}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={4}>
          <Button
            leftIcon={<MdEdit />}
            colorScheme="blue"
            onClick={() => setIsDialogOpen(true)}
          >
            <MdEdit />
          </Button>
          <Button
            leftIcon={<MdDelete />}
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <MdDelete />
          </Button>
        </HStack>
      </Box>

      {isDialogOpen && (
        <DialogRoot open={isDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Product</DialogTitle>
              <DialogCloseTrigger onClick={() => setIsDialogOpen(false)} />
            </DialogHeader>

            <DialogBody>
              <VStack spacing={4}>
                <Input
                  name="name"
                  placeholder="Product Name"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                />
                <Input
                  name="price"
                  type="number"
                  placeholder="Product Price"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                />
                <Input
                  name="image"
                  placeholder="Image URL"
                  value={editedProduct.image}
                  onChange={handleInputChange}
                />
              </VStack>
            </DialogBody>

            <DialogFooter>
              <Button colorScheme="blue" onClick={handleUpdateProduct}>
                Update
              </Button>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      )}
    </Box>
  );
};

export default ProductCard;