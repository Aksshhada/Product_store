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
  useDisclosure,
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });


  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
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
            <MdEdit onClick onOpen
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

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal> */}





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






















// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
// import {
// 	Box,
// 	Button,
// 	Heading,
// 	HStack,
// 	IconButton,
// 	Image,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalFooter,
// 	ModalHeader,
// 	ModalOverlay,
// 	Text,
// 	useColorModeValue,
// 	useDisclosure,
// 	useToast,
// 	VStack,
// } from "@chakra-ui/react";
// import { useProductStore } from "../store/product";
// import { useState } from "react";

// const ProductCard = ({ product }) => {
// 	const [updatedProduct, setUpdatedProduct] = useState(product);

// 	const textColor = useColorModeValue("gray.600", "gray.200");
// 	const bg = useColorModeValue("white", "gray.800");

// 	const { deleteProduct, updateProduct } = useProductStore();
// 	const toast = useToast();
// 	const { isOpen, onOpen, onClose } = useDisclosure();

// 	const handleDeleteProduct = async (pid) => {
// 		const { success, message } = await deleteProduct(pid);
// 		if (!success) {
// 			toast({
// 				title: "Error",
// 				description: message,
// 				status: "error",
// 				duration: 3000,
// 				isClosable: true,
// 			});
// 		} else {
// 			toast({
// 				title: "Success",
// 				description: message,
// 				status: "success",
// 				duration: 3000,
// 				isClosable: true,
// 			});
// 		}
// 	};

// 	const handleUpdateProduct = async (pid, updatedProduct) => {
// 		const { success, message } = await updateProduct(pid, updatedProduct);
// 		onClose();
// 		if (!success) {
// 			toast({
// 				title: "Error",
// 				description: message,
// 				status: "error",
// 				duration: 3000,
// 				isClosable: true,
// 			});
// 		} else {
// 			toast({
// 				title: "Success",
// 				description: "Product updated successfully",
// 				status: "success",
// 				duration: 3000,
// 				isClosable: true,
// 			});
// 		}
// 	};

// 	return (
// 		<Box
// 			shadow='lg'
// 			rounded='lg'
// 			overflow='hidden'
// 			transition='all 0.3s'
// 			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
// 			bg={bg}
// 		>
// 			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

// 			<Box p={4}>
// 				<Heading as='h3' size='md' mb={2}>
// 					{product.name}
// 				</Heading>

// 				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
// 					${product.price}
// 				</Text>

// 				<HStack spacing={2}>
// 					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
// 					<IconButton
// 						icon={<DeleteIcon />}
// 						onClick={() => handleDeleteProduct(product._id)}
// 						colorScheme='red'
// 					/>
// 				</HStack>
// 			</Box>

// 			<Modal isOpen={isOpen} onClose={onClose}>
// 				<ModalOverlay />

// 				<ModalContent>
// 					<ModalHeader>Update Product</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody>
// 						<VStack spacing={4}>
// 							<Input
// 								placeholder='Product Name'
// 								name='name'
// 								value={updatedProduct.name}
// 								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
// 							/>
// 							<Input
// 								placeholder='Price'
// 								name='price'
// 								type='number'
// 								value={updatedProduct.price}
// 								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
// 							/>
// 							<Input
// 								placeholder='Image URL'
// 								name='image'
// 								value={updatedProduct.image}
// 								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
// 							/>
// 						</VStack>
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button
// 							colorScheme='blue'
// 							mr={3}
// 							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
// 						>
// 							Update
// 						</Button>
// 						<Button variant='ghost' onClick={onClose}>
// 							Cancel
// 						</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 		</Box>
// 	);
// };
// export default ProductCard;