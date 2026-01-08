import { Tabs, Card, Text, HStack, VStack, Box } from "@chakra-ui/react";
import { Page } from "@/components/Page";
import { useState, useEffect } from "react";

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
  const targetOffset = circumference - (percentage / 100) * circumference;
  
  // Estado para controlar la animación
  const [animatedOffset, setAnimatedOffset] = useState(circumference); // Empieza en 0% (círculo vacío)

  // Efecto para animar el círculo cada vez que se monta el componente
  useEffect(() => {
    // Pequeño delay para asegurar que la animación se vea
    const timer = setTimeout(() => {
      setAnimatedOffset(targetOffset);
    }, 50);

    return () => clearTimeout(timer);
  }, [targetOffset]);

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
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={animatedOffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-out",
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

// Componente para animar números
interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Usar easing function para suavizar la animación (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * value);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Asegurar el valor final exacto
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <>{displayValue.toLocaleString()}</>;
};

export function Progress() {
  const currentLevel = "PLATA";
  const currentPoints = 11300; // Valor numérico
  const goalPointsForNextLevel = 17000; // Total de puntos necesarios para el siguiente nivel
  const pointsToNextLevel = goalPointsForNextLevel - currentPoints;
  const nextLevel = "Oro";
  
  // Estado para rastrear cuándo se activa el tab para forzar re-animación
  const [animationKey, setAnimationKey] = useState(0);
  
  // Calcular el porcentaje de progreso
  const progressPercentage = (currentPoints / goalPointsForNextLevel) * 100;
  
  // Obtener colores del nivel actual
  const levelConfig = levelColors[currentLevel as keyof typeof levelColors] || levelColors.BRONCE;

  return (
    <Page>
      {/* Tabs para seleccionar el periodo */}
      <Tabs.Root
        mt={2}
        size="sm"
        variant="line"
        defaultValue="week_progress"
        onValueChange={() => setAnimationKey(prev => prev + 1)}
      >
        <Tabs.List>
          <Tabs.Trigger value="week_progress">
            Semana 3/4
          </Tabs.Trigger>
          <Tabs.Trigger value="cicle_progress">
            Ciclo 2/3
          </Tabs.Trigger>
          <Tabs.Trigger value="season_progress">
            Temporada 1/4
          </Tabs.Trigger>
        </Tabs.List>

        {/* Tab de progreso por semana */}
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
          <VStack gap={5} width="100%" align="stretch">
            {/* Card tipo tarjeta de crédito, puntos actuales */}
            <Card.Root 
              variant="elevated" 
              size="md"
              width="97%"
              ml={1}
              style={{
                background: levelConfig.gradient,
                color: levelConfig.textColor,
              }}
            >
              <Card.Body py={3} px={5}>
                <VStack gap={4} align="stretch">
                  <HStack gap={4} justify="space-between">
                    <VStack gap={0} align="stretch">
                      <Text 
                        fontSize="xs" 
                        color={levelConfig.textMuted}
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        8704
                      </Text>
                      <Text 
                        textAlign="left"
                        fontSize="xl" 
                        fontWeight="bold" 
                        fontStyle="italic"
                        color={levelConfig.textColor}
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        Wilmer Contreras
                      </Text>
                      <Text 
                        mt={6}
                        fontSize="xs" 
                        color={levelConfig.textMuted}
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        Nivel actual
                      </Text>
                      <Text 
                        fontSize="2xl" 
                        fontWeight="bold" 
                        color={levelConfig.textColor}
                        style={{ textShadow: levelConfig.textShadow }}
                      >
                        {currentLevel}
                      </Text>
                    </VStack>

                    <CircularProgress
                      key={`week_progress_${animationKey}`}
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
                          <AnimatedNumber key={`points_${animationKey}`} value={currentPoints} duration={1000} />
                        </Text>
                      </VStack>
                    </CircularProgress>
                  </HStack>

                  <Text
                    fontSize="sm" 
                    textAlign="center"
                    color={levelConfig.textSecondary}
                  >
                    ¡Te faltan <Text as="span" fontWeight="bold" color={levelConfig.textColor}>{pointsToNextLevel.toLocaleString()}</Text> puntos para <Text as="span" fontWeight="bold" color={levelConfig.textColor}>{nextLevel}</Text>!
                  </Text>
                </VStack>

              </Card.Body>
            </Card.Root>

            {/* Hoy llevas */}
            <Card.Root variant="elevated" size="md" width="97%" ml={1}>
              <Card.Body py={5} px={5}>
                <VStack gap={2} align="stretch">
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    🚀 Hoy llevas
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                    +120 pts
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Último logro */}
            <Card.Root variant="elevated" size="md" width="97%" ml={1}>
              <Card.Body py={5} px={5}>
                <VStack gap={2} align="stretch">
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    🎖️ Último logro
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" color="green.500">
                    +300 pts por asistencia perfecta
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Frase motivacional */}
            <Card.Root variant="subtle" size="md" width="97%" ml={1}>
              <Card.Body py={5} px={5}>
                <VStack gap={2} align="stretch">
                  <Text fontSize="md" fontStyle="italic" color="gray.700" lineHeight="tall">
                    "La única forma de hacer un gran trabajo es amar lo que haces."
                  </Text>
                  <Text fontSize="sm" color="gray.500" textAlign="right">
                    — Steve Jobs
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

          </VStack>
        </Tabs.Content>

        {/* Tab de progreso por ciclo */} 
        <Tabs.Content value="cicle_progress">Progreso por ciclo (4 semanas)</Tabs.Content>

        {/* Tab de progreso por temporada */}
        <Tabs.Content value="season_progress">Progreso por temporada (12 semanas)</Tabs.Content>

      </Tabs.Root>
    </Page>
  );
}
