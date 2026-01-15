import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { LuFlame } from "react-icons/lu";
import logoIcon from "@/assets/LOGO BLANCO fondo transparente.png";

export function Header() {
  return (
    <Box
      position="sticky"
      top="0"
      zIndex="10"
      borderBottomWidth="1px"
      bg="bg/80"
      backdropFilter="blur(8px)"
      style={{
        background: "#A22A2E",
      }}
    >
      <Flex h="14" align="center" px={{ base: 4, md: 6 }} gap="3" justify="space-between">
        {/* Brand */}
        <HStack gap="3">
          <Image
            src={logoIcon}
            alt="logo"
            fit="contain"
            boxSize="50px"
          />
          
          <Box lineHeight="1.3">
            <Link asChild fontWeight="semibold" color="white" fontSize="2xl">
              <RouterLink to="/">ELEVATE</RouterLink>
            </Link>
          </Box>
        </HStack>

        {/* Right section: Racha & Nivel */}
        <HStack gap="3">
          {/* Racha con icono de llama y contador */}
          <Link asChild>
            <RouterLink to="/streak">
              <Box
                bg="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(4px)"
                borderRadius="lg"
                px="2.5"
                py="1"
                h="9"
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
                display="flex"
                alignItems="center"
              >
                <HStack gap="1">
                  <Text color="white" fontWeight="bold" fontSize="md">
                    4
                  </Text>
                  <LuFlame size="20" color="white" />
                </HStack>
              </Box>
            </RouterLink>
          </Link>

          {/* Nivel/Categoría - Insignia Oro */}
          <Link asChild>
            <RouterLink to="/insignia">
              <Box
                px="2.5"
                py="1"
                h="9"
                minW="9"
                borderRadius="lg"
                background="linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #DAA520 100%)"
                border="1px solid #FFFFFF"
                boxShadow="0 2px 8px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.5)"
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ transform: "scale(1.05)", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="#5C4A1A"
                  textShadow="0 1px 1px rgba(255,255,255,0.3)"
                  whiteSpace="nowrap"
                >
                  ORO
                </Text>
              </Box>
            </RouterLink>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

