import { Tabs, Card, Text, HStack, VStack, Box } from "@chakra-ui/react";
import { Page } from "@/components/Page";

// Definición de colores por nivel
const levelColors = {
  BRONCE: {
    gradient: "linear-gradient(135deg, #CD7F32 0%, #B87333 50%, #8B4513 100%)",
    progressColor: "#CD7F32",
    textColor: "white",
    textSecondary: "whiteAlpha.900",
    textMuted: "whiteAlpha.800",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  PLATA: {
    gradient: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 25%, #A9A9A9 50%, #D3D3D3 75%, #B0B0B0 100%)",
    progressColor: "#808080",
    textColor: "#1a202c",
    textSecondary: "#2d3748",
    textMuted: "#4a5568",
    textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
  },
  ORO: {
    gradient: "linear-gradient(135deg, #FFD700 0%, #FFED4E 25%, #FFA500 50%, #FFD700 75%, #DAA520 100%)",
    progressColor: "#FF8C00",
    textColor: "#1a202c",
    textSecondary: "#2d3748",
    textMuted: "#4a5568",
    textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
  },
  PLATINO: {
    gradient: "linear-gradient(135deg, #E5E4E2 0%, #F5F5F5 25%, #BCC6CC 50%, #D8D8D8 75%, #A8B5BF 100%)",
    progressColor: "#A8B5BF",
    textColor: "#1a202c",
    textSecondary: "#2d3748",
    textMuted: "#4a5568",
    textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
  },
};

// Componente de progreso circular personalizado
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  progressColor?: string;
  trackColor?: string;
  children?: React.ReactNode;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 150,
  strokeWidth = 8,
  progressColor = "#4299e1",
  trackColor = "rgba(255, 255, 255, 0.3)",
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Box position="relative" width={`${size}px`} height={`${size}px`}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Track (fondo) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress (progreso) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {children}
      </Box>
    </Box>
  );
};

export function Progreso() {
  const currentLevel = "PLATA";
  const currentPoints = 2986; // Valor numérico
  const totalPointsForLevel = 4000; // Total de puntos necesarios para el nivel
  const pointsToNextLevel = totalPointsForLevel - currentPoints;
  const nextLevel = "Oro";
  
  // Calcular el porcentaje de progreso
  const progressPercentage = (currentPoints / totalPointsForLevel) * 100;
  
  // Obtener colores del nivel actual
  const levelConfig = levelColors[currentLevel as keyof typeof levelColors] || levelColors.BRONCE;

  return (
    <Page
      title=""
      subtitle=""
    >
      {/* Selector de periodo */}
      <Tabs.Root
        defaultValue="week_progress"
      >
        <Tabs.List>
          <Tabs.Trigger value="week_progress">
            Semana
          </Tabs.Trigger>
          <Tabs.Trigger value="cicle_progress">
            Ciclo
          </Tabs.Trigger>
          <Tabs.Trigger value="season_progress">
            Temporada
          </Tabs.Trigger>
        </Tabs.List>

        {/* Progreso por semana */}
        <Tabs.Content
          value="week_progress"
          _open={{
            animationName: "fade-in, scale-in",
            animationDuration: "300ms",
          }}
          _closed={{
            animationName: "fade-out, scale-out",
            animationDuration: "120ms",
          }}
        >
          <VStack gap={6}>
            {/* Progreso actual */}
            <Card.Root 
              variant="elevated" 
              size="md"
              style={{
                background: levelConfig.gradient,
                color: levelConfig.textColor,
              }}
            >
              <Card.Body py={3}>
                <HStack gap={4} justify="space-between">
                  <VStack gap={2} align="stretch">
                    <Text 
                      fontSize="sm" 
                      color={levelConfig.textMuted}
                      style={{ textShadow: levelConfig.textShadow }}
                    >
                      Nivel actual:
                    </Text>
                    <Text 
                      fontSize="xl" 
                      fontWeight="bold" 
                      color={levelConfig.textColor}
                      style={{ textShadow: levelConfig.textShadow }}
                    >
                      {currentLevel}
                    </Text>
                  </VStack>

                  <CircularProgress
                    percentage={progressPercentage}
                    size={150}
                    strokeWidth={8}
                    progressColor={levelConfig.progressColor}
                    trackColor={levelConfig.textColor === "white" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.15)"}
                  >
                    <VStack gap={0}>
                      <Text 
                        fontSize="xs" 
                        color={levelConfig.textMuted}
                        fontWeight="medium"
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        Puntos
                      </Text>
                      <Text 
                        fontSize="2xl" 
                        fontWeight="bold" 
                        color={levelConfig.textColor}
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        {currentPoints.toLocaleString()}
                      </Text>
                    </VStack>
                  </CircularProgress>
                </HStack>

                <VStack gap={1} mt={2}>
                  <Text 
                    fontSize="md" 
                    color={levelConfig.textSecondary}
                    style={{ textShadow: levelConfig.textShadow }}
                  >
                    ¡Te faltan <Text as="span" fontWeight="bold" color={levelConfig.textColor}>{pointsToNextLevel.toLocaleString()}</Text> puntos para <Text as="span" fontWeight="bold" color={levelConfig.textColor}>{nextLevel}</Text>!
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Progreso por niveles */}
            <Card.Root variant="elevated">
              <Card.Body>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Tabs.Content>

        <Tabs.Content value="cicle_progress">Progreso por ciclo (4 semanas)</Tabs.Content>
        <Tabs.Content value="season_progress">Progreso por temporada (12 semanas)</Tabs.Content>

      </Tabs.Root>
    </Page>
  );
}
