import { NavLink } from "react-router-dom";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { primaryMenuItems } from "@/data/menuItems";
import { MenuDrawer } from "./MenuDrawer";

export function BottomNav() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        left="0"
        right="0"
        bottom="0"
        zIndex="20"
        borderTopWidth="1px"
        bg="bg/90"
        backdropFilter="blur(10px)"
        pb="env(safe-area-inset-bottom)"
      >
        <Flex h="16" px="2" align="center" justify="space-around">
          {/* Enlaces principales */}
          {primaryMenuItems.map((it) => (
            <NavLink key={it.to} to={it.to} end={it.end} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Box
                  position="relative"
                  px="3"
                  py="2"
                  borderRadius="md"
                  minW="20"
                  textAlign="center"
                  color={isActive ? "fg" : "fg.muted"}
                  transition="all 180ms ease"
                  transform={isActive ? "translateY(-2px)" : "translateY(0)"}
                  _hover={{ bg: "bg.subtle" }}
                >
                  {/* Indicador activo */}
                  <Box
                    position="absolute"
                    top="0.5"
                    left="50%"
                    transform="translateX(-50%)"
                    h="1"
                    w={isActive ? "10" : "2"}
                    borderRadius="full"
                    bg={isActive ? "fg" : "transparent"}
                    opacity={isActive ? 1 : 0}
                    transition="all 180ms ease"
                  />

                  <Box
                    fontSize="lg"
                    lineHeight="1"
                    transition="transform 180ms ease"
                    transform={isActive ? "scale(1.05)" : "scale(1)"}
                  >
                    {it.icon}
                  </Box>

                  <Text fontSize="xs" mt="1" fontWeight={isActive ? "semibold" : "medium"}>
                    {it.label}
                  </Text>
                </Box>
              )}
            </NavLink>
          ))}

          {/* Botón Otros (abre drawer) */}
          <Box
            as="button"
            onClick={onOpen}
            position="relative"
            px="3"
            py="2"
            borderRadius="md"
            minW="20"
            textAlign="center"
            color="fg.muted"
            transition="all 180ms ease"
            _hover={{ bg: "bg.subtle" }}
          >
            <Box fontSize="lg" lineHeight="1">
              ⚙️
            </Box>
            <Text fontSize="xs" mt="1" fontWeight="medium">
              Ajustes
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Drawer para opciones secundarias */}
      <MenuDrawer open={open} onClose={onClose} />
    </>
  );
}
