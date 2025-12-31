import { Box, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { Page } from "@/components/Page";
import { usePosts } from "@/hooks/usePosts";

export function Posts() {
  const { data, isLoading, error } = usePosts();
  
  const content = (() => {
    if (isLoading) {
      return (
        <Stack align="center" mt={10}>
          <Spinner size="xl" />
          <Text>Cargando posts...</Text>
        </Stack>
      );
    }

    if (error) {
      return (
        <Box mt={10} textAlign="center">
          <Text color="red.400">Error al obtener los posts</Text>
        </Box>
      );
    }

    return (
      <Box>
        <Stack gap={4}>
          {data?.map((post) => (
            <Box key={post.id} p={4} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{post.title}</Text>
              <Text fontSize="sm" color="gray.500">
                {post.body}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  })();

  return (
    <Page
      title="Posts JSON Placeholder"
      subtitle="Muestra posts del API de JSON Placeholder para probar datos."
      breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "Posts" }]}
    >
      {content}
    </Page>
  );
}
