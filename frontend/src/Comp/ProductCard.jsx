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
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();

  // State for editable fields
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  // State to manage dialog open/close
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = () => {
    updateProduct(product._id, editedProduct);
    setIsDialogOpen(false); // Close the dialog after updating
  };

  const handleDeleteProduct = async (pid) => {
    await deleteProduct(pid);
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
          {/* Open Dialog */}
          {/* <IconButton icon={<MdEdit />} onClick={() => setIsDialogOpen(true)} /> */}
          <Button>
            <MdEdit onClick={() => setIsDialogOpen(true)}
            color="blue" />
          </Button>
          {/* <IconButton
            icon={<MdDelete />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme={"red"}
            aria-label="Delete Product"
          /> */}
          <Button>
            <MdDelete onClick={() => handleDeleteProduct(product._id)} 
              color="red"/>
          </Button>
        </HStack>
      </Box>

      {/* Edit Product Dialog */}
      {isDialogOpen && (
        <DialogRoot>
          <DialogTrigger />
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