import { Drawer, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { secondaryMenuItems, type MenuItem as MenuItemType } from "@/data/menuItems";

type Props = {
  open: boolean;
  onClose: () => void;
};

function MenuItem({
  to,
  label,
  icon,
  onClick,
}: MenuItemType & { onClick: () => void }) {
  return (
    <NavLink to={to} onClick={onClick} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          px="3"
          py="2"
          borderRadius="md"
          fontSize="sm"
          color={isActive ? "bg" : "fg.muted"}
          bg={isActive ? "fg" : "transparent"}
          _hover={{ bg: isActive ? "fg" : "bg.subtle", color: isActive ? "bg" : "fg" }}
          display="flex"
          alignItems="center"
          gap="2"
        >
          <Box as="span">{icon}</Box>
          <Box as="span">{label}</Box>
        </Box>
      )}
    </NavLink>
  );
}

export function MenuDrawer({ open, onClose }: Props) {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={({ open }) => {
        if (!open) onClose();
      }}
      placement="start"
      size="xs"
    >
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header borderBottomWidth="1px">
            <Drawer.Title>Otros</Drawer.Title>
            <Drawer.CloseTrigger />
          </Drawer.Header>

          <Drawer.Body p="2">
            <Box display="grid" gap="1">
              {secondaryMenuItems.map((item) => (
                <MenuItem key={item.to} {...item} onClick={onClose} />
              ))}
            </Box>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

