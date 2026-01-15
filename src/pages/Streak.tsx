import { Box, Flex, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { LuFlame } from "react-icons/lu";

export function Streak() {
  const currentStreak = 4;
  const longestStreak = 12;

  return (
    <Box p={{ base: 4, md: 6 }} minH="calc(100vh - 56px - 64px)">
      <VStack gap="6" maxW="600px" mx="auto">
        {/* Header */}
        <Heading size="2xl" color="#A22A2E" textAlign="center">
          Tu Racha
        </Heading>

        {/* Current Streak - Big Display */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          bg="linear-gradient(135deg, #FF6B6B 0%, #A22A2E 100%)"
          borderRadius="2xl"
          p="8"
          w="100%"
          boxShadow="0 10px 30px rgba(162, 42, 46, 0.3)"
          position="relative"
          overflow="hidden"
        >
          {/* Animated flame icon */}
          <Box
            position="relative"
            mb="4"
            animation="pulse 2s ease-in-out infinite"
            css={{
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' },
              },
            }}
          >
            <LuFlame size="80" color="white" />
          </Box>

          {/* Streak number */}
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color="white"
            lineHeight="1"
            textShadow="0 4px 10px rgba(0,0,0,0.3)"
          >
            {currentStreak}
          </Text>

          <Text
            fontSize="xl"
            color="white"
            fontWeight="medium"
            mt="2"
            opacity="0.95"
          >
            Días de Racha
          </Text>
        </Flex>

        {/* Stats */}
        <HStack
          w="100%"
          gap="4"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
        >
          {/* Longest Streak */}
          <Box
            flex="1"
            minW={{ base: "100%", sm: "auto" }}
            bg="white"
            borderRadius="xl"
            p="4"
            border="2px solid"
            borderColor="gray.200"
            textAlign="center"
          >
            <Text fontSize="3xl" fontWeight="bold" color="#A22A2E">
              {longestStreak}
            </Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Racha Más Larga
            </Text>
          </Box>

          {/* Current Month */}
          <Box
            flex="1"
            minW={{ base: "100%", sm: "auto" }}
            bg="white"
            borderRadius="xl"
            p="4"
            border="2px solid"
            borderColor="gray.200"
            textAlign="center"
          >
            <Text fontSize="3xl" fontWeight="bold" color="#A22A2E">
              4
            </Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Este Mes
            </Text>
          </Box>
        </HStack>

        {/* Motivational message */}
        <Box
          w="100%"
          bg="gray.50"
          borderRadius="xl"
          p="6"
          textAlign="center"
          border="1px solid"
          borderColor="gray.200"
        >
          <Text fontSize="lg" color="gray.700" fontWeight="medium">
            ¡Sigue así! 🎯
          </Text>
          <Text fontSize="sm" color="gray.600" mt="2">
            Estás construyendo un gran hábito. ¡Vuelve mañana para continuar tu racha!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
