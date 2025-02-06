import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";


const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"11400px"} px={12}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L0,192L96,192L96,288L192,288L192,224L288,224L288,256L384,256L384,288L480,288L480,256L576,256L576,288L672,288L672,224L768,224L768,64L864,64L864,160L960,160L960,0L1056,0L1056,96L1152,96L1152,0L1248,0L1248,32L1344,32L1344,128L1440,128L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"></path></svg>
      <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        color={"blue.300"}
        fontSize='2xl'
        fontWeight='extrabold'>Product Store 🛒
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <IoMdSunny />}
          </Button>
          <Link to={"/"}>
            <Button>
            <IoHomeSharp />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;














// import { Button, Container, Flex, HStack, Text, Box } from "@chakra-ui/react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegPlusSquare } from "react-icons/fa";
// import { useColorMode } from "@/components/ui/color-mode";
// import { IoMoon } from "react-icons/io5";
// import { IoMdSunny } from "react-icons/io";
// import { IoHomeSharp } from "react-icons/io5";

// const Navbar = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box position="relative" w="100%" h="150px" overflow="hidden">
//       {/* SVG Background */}
//       <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="-1">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#0099ff"
//             fillOpacity="1"
//             d="M0,64L0,192L96,192L96,288L192,288L192,224L288,224L288,256L384,256L384,288L480,288L480,256L576,256L576,288L672,288L672,224L768,224L768,64L864,64L864,160L960,160L960,0L1056,0L1056,96L1152,96L1152,0L1248,0L1248,32L1344,32L1344,128L1440,128L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"
//           ></path>
//         </svg>
//       </Box>

//       {/* Navbar */}
//       <Container maxW="1140px" px={12} position="absolute" top="10px" left="50%" transform="translateX(-50%)">
//         <Flex
//           h={20}
//           alignItems="center"
//           justifyContent="space-between"
//           flexDir={{ base: "column", sm: "row" }}
//           bg="transparent"
//           px={4}
//         >
//           <Text
//             bgGradient="linear(to-l, #7928CA, #FF0080)"
//             bgClip="text"
//             fontSize="2xl"
//             fontWeight="extrabold"
//           >
//             Product Store 🛒
//           </Text>

//           <HStack spacing={2} alignItems="center">
//             <Link to="/create">
//               <Button>
//                 <FaRegPlusSquare />
//               </Button>
//             </Link>
//             <Button onClick={toggleColorMode}>
//               {colorMode === "light" ? <IoMoon /> : <IoMdSunny />}
//             </Button>
//             <Link to="/">
//               <Button>
//                 <IoHomeSharp />
//               </Button>
//             </Link>
//           </HStack>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export default Navbar;
