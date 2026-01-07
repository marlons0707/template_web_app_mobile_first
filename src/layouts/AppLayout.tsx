import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";

export function AppLayout() {
  return (
    <Flex minH="100vh" direction="column" bg="bg.subtle">
      <Header />

      <Flex flex="1" w="full">
        {/* Sidebar fijo (desktop) */}
        <Box
          display={{ base: "none", md: "block" }}
          w="64"
          borderRightWidth="1px"
          bg="bg"
        >
          <Sidebar />
        </Box>

        {/* Contenido */}
        <Box
          flex="1"
          p={{ base: 4, md: 6 }}
          pb={{ base: 20, md: 6 }}  // 👈 espacio para BottomNav
          display="flex"
          flexDirection="column"
        >
          <Box
            bg="bg"
            borderWidth="1px"
            borderRadius="xl"
            p={{ base: 4, md: 6 }}
            boxShadow="sm"
            flex="1"
            display="flex"
            flexDirection="column"
            overflow="auto"
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>

      {/* Bottom navigation (solo mobile) */}
      <BottomNav />
    </Flex>
  );
}
