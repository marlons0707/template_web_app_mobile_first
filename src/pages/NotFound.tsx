import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Box>
      <Heading size="md">404</Heading>
      <Text mt="2" color="fg.muted">
        Ruta no encontrada.
      </Text>
      <Link as={RouterLink} to="/" mt="3" display="inline-block">
        Volver al inicio
      </Link>
    </Box>
  );
}
