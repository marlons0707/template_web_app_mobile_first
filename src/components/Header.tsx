import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaMedal } from "react-icons/fa";
import { useTheme } from "next-themes";

export function Header() {
  // Theme toggle (next-themes)
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = resolvedTheme ?? theme;

  const toggleTheme = () => {
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="10"
      borderBottomWidth="1px"
      bg="bg/80"
      backdropFilter="blur(8px)"
    >
      <Flex h="14" align="center" px={{ base: 4, md: 6 }} gap="3">
        {/* Brand */}
        <HStack gap="3">
          <Box
            w="8"
            h="8"
            borderRadius="lg"
            bg="fg"
            color="bg"
            display="grid"
            placeItems="center"
            fontWeight="bold"
          >
            <FaMedal />
          </Box>

          <Box lineHeight="1.3">
            <Link asChild fontWeight="semibold">
              <RouterLink to="/">ELEVATE</RouterLink>
            </Link>
            <Text fontSize="xs" color="fg.muted" fontStyle="italic">
              Elévate con la fuerza de tu impulso
            </Text>
          </Box>
        </HStack>

        <Spacer />

        {/* Theme toggle (mobile + desktop) */}
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="lg"
          aria-label="Cambiar tema"
        >
          {current === "dark" ? "☀️" : "🌙"}
        </Button>
      </Flex>
    </Box>
  );
}

