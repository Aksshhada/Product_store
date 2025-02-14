// import { useColorModeValue } from "@/components/ui/color-mode";
// import { useProductStore } from "@/store/product";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Input,
//   VStack,
// } from "@chakra-ui/react";
// // import { useToast } from '@chakra-ui/react'
// // import { Toaster, toaster } from "@/components/ui/toaster";
// // import { useToast } from '@chakra-ui/react';
// // import { useColorModeValue } from "@chakra-ui/react";

// // import { toaster } from "@/components/ui/toaster"

// import React, { useState } from "react";

// const CreatePage = () => {
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     image: "",
//   });

//   // const toast = useToast()

//   const { createProduct } = useProductStore();

//   const handleAddProduct = async () => {
//     const { success, message } = await createProduct(newProduct);

//     // if (!success) {
//     //   toaster.create({
//     //     title: "Error",
//     //     description: message,
//     //     type: "error",
//     //   });
//     // } else {
//     //   toaster.create({
//     //     title: "Success",
//     //     description: message,
//     //     type: "success",
//     //   });

//     //   // Reset form after successful product creation
//     //   setNewProduct({ name: "", price: "", image: "" });
//     // }

//   };

//   return (
//     <Container maxW={"container.sm"} overflow="hidden">
//       <VStack spacing={8}>
//         <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={90}>
//           Create New Product
//         </Heading>

//         <Box
//           bg={useColorModeValue("white", "gray.800")}
//           p={6}
//           rounded={"lg"}
//           shadow={"md"}
//           w={["300px", "350px", "500px"]}
//           h={["300px", "350px", "300px"]}
//         >
//           <VStack spacing={8}>
//             <Input
//               placeholder="Product Name"
//               name="name"
//               value={newProduct.name}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, name: e.target.value })
//               }
//               mb={4}
//             />

//             <Input
//               placeholder="Price"
//               name="price"
//               type="number"
//               value={newProduct.price}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, price: e.target.value })
//               }
//               mb={4}
//             />

//             <Input
//               placeholder="Image URL"
//               name="image"
//               value={newProduct.image}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, image: e.target.value })
//               }
//               mb={4}
//             />

//             <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
//               Add Product
//             </Button>
//           </VStack>
//         </Box>
//       </VStack>
//       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L15,21.3C30,43,60,85,90,106.7C120,128,150,128,180,112C210,96,240,64,270,42.7C300,21,330,11,360,26.7C390,43,420,85,450,101.3C480,117,510,107,540,122.7C570,139,600,181,630,181.3C660,181,690,139,720,122.7C750,107,780,117,810,138.7C840,160,870,192,900,197.3C930,203,960,181,990,197.3C1020,213,1050,267,1080,282.7C1110,299,1140,277,1170,266.7C1200,256,1230,256,1260,250.7C1290,245,1320,235,1350,197.3C1380,160,1410,96,1425,64L1440,32L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg> */}
//     </Container>

// <Box position="absolute" bottom="0" left="0" width="100vw" zIndex={0}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           width="100%"
//           height="auto"
//         >
//           <path
//             fill="#0099ff"
//             fillOpacity="1"
//             d="M0,0L15,21.3C30,43,60,85,90,106.7C120,128,150,128,180,112C210,96,240,64,270,42.7C300,21,330,11,360,26.7C390,43,420,85,450,101.3C480,117,510,107,540,122.7C570,139,600,181,630,181.3C660,181,690,139,720,122.7C750,107,780,117,810,138.7C840,160,870,192,900,197.3C930,203,960,181,990,197.3C1020,213,1050,267,1080,282.7C1110,299,1140,277,1170,266.7C1200,256,1230,256,1260,250.7C1290,245,1320,235,1350,197.3C1380,160,1410,96,1425,64L1440,32L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
//           ></path>
//         </svg>
//       </Box>

//   );
// };

// export default CreatePage;












//working code

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