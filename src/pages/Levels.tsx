import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  Card,
} from "@chakra-ui/react";
import { Page } from "@/components/Page";

// ✅ PNGs desde /src/assets (con los nombres EXACTOS que muestras)
import bronzeIcon from "@/assets/ICONO ELEVATE BRONCE.png";
import silverIcon from "@/assets/ICONO ELEVATE PLATA.png";
import goldIcon from "@/assets/ICONO ELEVATE ORO.png";
import platinumIcon from "@/assets/ICONO ELEVATE PLATINO.png";

type LevelKey = "BRONCE" | "PLATA" | "ORO" | "PLATINO";

type Level = {
  key: LevelKey;
  minPoints: number;
  icon: string;
  accent: string; // Chakra color token
  subtitle: string; // Subtexto descriptivo
};

export function Levels() {
  const currentLevel: LevelKey = "PLATA";
  
  // Orden de abajo hacia arriba (ascenso)
  const levels: Level[] = [
    { key: "BRONCE", minPoints: 0, icon: bronzeIcon, accent: "gray.400", subtitle: "El inicio de tu viaje" },
    { key: "PLATA", minPoints: 10000, icon: silverIcon, accent: "gray.400", subtitle: "¡Tú estás aquí!" },
    { key: "ORO", minPoints: 17000, icon: goldIcon, accent: "gray.400", subtitle: "Siguiente objetivo" },
    { key: "PLATINO", minPoints: 25000, icon: platinumIcon, accent: "gray.400", subtitle: "La cima del éxito" },
  ];

  const currentIndex = levels.findIndex((l) => l.key === currentLevel);

  // Invertir el array para mostrar de abajo hacia arriba (BRONCE abajo, PLATINO arriba)
  const reversedLevels = [...levels].reverse();

  return (
    <Page
      title="Niveles"
    >
      <VStack gap={1} align="stretch" py={2} px={1} pb={1}>
        {/* Ascenso / Timeline */}
        <Card.Root variant="outline" size="md" width="100%">
          <Card.Body py={4} px={6}>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Tu ascenso en ELEVATE
            </Text>
            <Text fontSize="sm" color="gray.600" mb={2}>
              Cada nivel refleja la fuerza de tu impulso. ¡Continúa ascendiendo!
            </Text>

            <VStack 
              align="stretch" 
              gap={0} 
              position="relative"
            >
              {/* Línea vertical del timeline - más visible y centrada */}
              <Box
                position="absolute"
                left="32px"
                top="30px"
                bottom="30px"
                width="3px"
                bg="gray.400"
                borderRadius="full"
                zIndex={0}
              />

              {reversedLevels.map((lvl, reversedIdx) => {
                // Calcular el índice original para las comparaciones
                const originalIdx = levels.length - 1 - reversedIdx;
                const isCurrent = originalIdx === currentIndex;
                
                // Tamaño del ícono: más grande si es el actual
                const baseSize = isCurrent ? "100px" : "76px";
                
                return (
                  <Flex key={lvl.key} py={7} position="relative" align="center">
                    {/* Columna izquierda: ícono sobre la línea */}
                    <Box width="64px" position="relative" display="flex" alignItems="center" justifyContent="center">
                      {/* Fondo blanco detrás del ícono para darle contraste */}
                      <Image
                        src={lvl.icon}
                        alt={lvl.key}
                        boxSize={baseSize}
                        objectFit="contain"
                        position="absolute"
                        left="32px"
                        transform="translateX(-50%)"
                        zIndex={2}
                      />
                    </Box>

                     {/* Contenido: nombre del nivel y subtexto */}
                     <Box flex="1" pl={5}>
                       <Text fontWeight="semibold" fontSize="md">
                         {lvl.key}
                       </Text>
                       <Text fontSize="sm" color="gray.600" mt={0.3}>
                         Desde {lvl.minPoints.toLocaleString()} pts
                       </Text>
                       <Text 
                         fontSize="xs" 
                         color={isCurrent ? "blue.600" : "gray.500"} 
                         fontWeight={isCurrent ? "bold" : "normal"}
                         mt={0.3}
                       >
                         {lvl.subtitle}
                       </Text>
                     </Box>
                  </Flex>
                );
              })}
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Page>
  );
}
