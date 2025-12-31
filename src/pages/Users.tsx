import { Button, Text } from "@chakra-ui/react";
import { Page } from "@/components/Page";

export function Users() {
  return (
    <Page
      title="Usuarios"
      subtitle="Base para tabla, búsqueda y detalle."
      breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "Usuarios" }]}
      actions={<Button size="sm">Nuevo usuario</Button>}
    >
      <Text color="fg.muted">Placeholder.</Text>
    </Page>
  );
}
