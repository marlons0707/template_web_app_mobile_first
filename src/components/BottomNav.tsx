import { NavLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
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
                px="4"
                py="2"
                borderRadius="md"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                color="white"
                opacity={isActive ? 1 : 0.6}
                transition="all 180ms ease"
                _hover={{ opacity: 1, bg: "rgba(255, 255, 255, 0.1)" }}
              >
                <Box
                  fontSize="2xl"
                  lineHeight="1"
                  transition="transform 180ms ease"
                  transform={isActive ? "scale(1.2)" : "scale(1)"}
                  as={it.icon}
                />

                <Text
                  mt="0.5"
                  fontWeight={isActive ? "semibold" : "medium"}
                  transition="font-size 180ms ease"
                  style={{ fontSize: isActive ? "14.5px" : "11.5px" }}
                >
                  {it.label}
                </Text>
              </Box>
            )}
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
}
