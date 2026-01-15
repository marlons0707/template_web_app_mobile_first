import { Box, Flex, Image } from "@chakra-ui/react";
import insigniaOro from "@/assets/ICONO ELEVATE ORO.png";

export function Insignia() {
  return (
    <Box
      minH="calc(100vh - 56px - 64px)" // Full height minus header and bottom nav
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        maxW="500px"
      >
        <Image
          src={insigniaOro}
          alt="Insignia Oro"
          w="100%"
          maxW="400px"
          objectFit="contain"
          filter="drop-shadow(0 10px 30px rgba(0,0,0,0.3))"
        />
      </Flex>
    </Box>
  );
}
