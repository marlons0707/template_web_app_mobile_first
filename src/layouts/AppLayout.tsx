import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export function AppLayout() {
  return (
    <Flex minH="100vh" direction="column" bg="bg.subtle">
      <Header />

      <Flex flex="1" w="full">
        {/* Contenido */}
        <Box
          flex="1"
          p={{ base: 2, md: 6 }}
          pb={{ base: 20, md: 20 }}  // espacio para BottomNav
          display="flex"
          flexDirection="column"
        >
          <Box
            borderWidth="0px"
            pt={{ base: 0, md: 3 }}
            px={{ base: 3, md: 6 }}
            pb={{ base: 3, md: 6 }}
            flex="1"
            display="flex"
            flexDirection="column"
            overflow="auto"
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>

      {/* Bottom navigation (mobile + desktop) */}
      <BottomNav />
    </Flex>
  );
}
