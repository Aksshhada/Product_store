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