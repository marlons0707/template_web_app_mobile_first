import { NavLink } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { menuItems } from "@/data/menuItems";

export function BottomNav() {
  return (
    <Box
      display="block"
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      zIndex="20"
      borderTopWidth="1px"
      borderTopColor="rgba(255, 255, 255, 0.1)"
      bg="#A22A2E"
      backdropFilter="blur(10px)"
      pb="env(safe-area-inset-bottom)"
    >
      <Flex h="16" px="2" align="center" justify="space-around">
        {menuItems.map((it) => (
          <NavLink key={it.to} to={it.to} end={it.end} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                position="relative"
                p="4"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                opacity={isActive ? 1 : 0.6}
                transition="all 180ms ease"
                transform={isActive ? "translateY(-2px)" : "translateY(0)"}
                _hover={{ opacity: 1, bg: "rgba(255, 255, 255, 0.1)" }}
              >
                {/* Indicador activo */}
                <Box
                  position="absolute"
                  top="1"
                  left="50%"
                  transform="translateX(-50%)"
                  h="1"
                  w={isActive ? "10" : "2"}
                  borderRadius="full"
                  bg="white"
                  opacity={isActive ? 1 : 0}
                  transition="all 180ms ease"
                />

                <Box
                  fontSize="3xl"
                  lineHeight="1"
                  transition="transform 180ms ease"
                  transform={isActive ? "scale(1.1)" : "scale(1)"}
                  as={it.icon}
                />
              </Box>
            )}
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
}
