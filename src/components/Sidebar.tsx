import { NavLink } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";
import { primaryMenuItems, secondaryMenuItems, type MenuItem } from "@/data/menuItems";

function NavItem({ to, label, icon, end }: MenuItem) {
  return (
    <Box
      as={NavLink}
      to={to}
      end={end}
      style={{ textDecoration: "none" }}
      px="3"
      py="2"
      borderRadius="md"
      fontSize="sm"
      color="fg.muted"
      display="flex"
      alignItems="center"
      gap="2"
      _hover={{ bg: "bg.subtle", color: "fg" }}
      _activeLink={{ bg: "fg", color: "bg" }}
    >
      <Box as="span">{icon}</Box>
      <Box as="span">{label}</Box>
    </Box>
  );
}

export function Sidebar() {
  return (
    <Box p="3">
      {/* Primario */}
      <Text px="3" py="2" fontSize="xs" fontWeight="semibold" color="fg.muted">
        Menú
      </Text>

      <VStack align="stretch" gap="1">
        {primaryMenuItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </VStack>

      <Box mt="4" borderTopWidth="1px" />

      {/* Secundario */}
      <Text
        px="3"
        py="2"
        mt="3"
        fontSize="xs"
        fontWeight="semibold"
        color="fg.muted"
      >
        Otros
      </Text>

      <VStack align="stretch" gap="1">
        {secondaryMenuItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </VStack>
    </Box>
  );
}

