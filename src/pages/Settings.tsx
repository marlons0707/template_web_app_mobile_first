import { Box, HStack, Text, Switch } from "@chakra-ui/react";
import { Page } from "@/components/Page";
import { useTheme } from "next-themes";

export function Settings() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = resolvedTheme ?? theme;
  const isDark = current === "dark";

  const toggleTheme = (e: any) => {
    setTheme(e.checked ? "dark" : "light");
  };

  return (
    <Page
      title="Ajustes"
      subtitle="Configura tu experiencia en la aplicación."
    >
      <Box mt={4}>
        <HStack justify="space-between" py={3} px={4} borderRadius="md" bg="bg.muted">
          <Box>
            <Text fontWeight="semibold" fontSize="md">
              Tema oscuro
            </Text>
            <Text fontSize="sm" color="fg.muted">
              Activa el modo oscuro de la aplicación
            </Text>
          </Box>
          <Switch.Root checked={isDark} onCheckedChange={toggleTheme} colorPalette="blue">
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </HStack>
      </Box>
    </Page>
  );
}
