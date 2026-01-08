import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";
import { LuTrendingUp } from "react-icons/lu";

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
      <Flex h="14" align="center" px={{ base: 4, md: 6 }} gap="3">
        {/* Brand */}
        <HStack gap="3">
          <Box
            w="8"
            h="8"
            display="grid"
            placeItems="center"
            fontSize="3xl"
            color="white"
          >
            <LuTrendingUp />
          </Box>

          <Box lineHeight="1.3">
            <Link asChild fontWeight="semibold" color="white" fontSize="2xl">
              <RouterLink to="/">ELEVATE</RouterLink>
            </Link>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

