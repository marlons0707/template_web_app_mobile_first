import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  Card,
} from "@chakra-ui/react";
import { Page } from "@/components/Page";
import { useState, useEffect } from "react";

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
    { key: "PLATA", minPoints: 10000, icon: silverIcon, accent: "gray.400", subtitle: "Tu nivel actual" },
    { key: "ORO", minPoints: 17000, icon: goldIcon, accent: "gray.400", subtitle: "Siguiente objetivo" },
    { key: "PLATINO", minPoints: 25000, icon: platinumIcon, accent: "gray.400", subtitle: "La cima del éxito" },
  ];

  const currentIndex = levels.findIndex((l) => l.key === currentLevel);

  // Invertir el array para mostrar de abajo hacia arriba (BRONCE abajo, PLATINO arriba)
  const reversedLevels = [...levels].reverse();

  // Estado para la animación: índice del nivel que se está animando
  const [animatingIndex, setAnimatingIndex] = useState(-1);

  // Efecto para animar desde BRONCE hasta el nivel actual
  useEffect(() => {
    // Empezar desde BRONCE (índice 0 en el array original)
    let currentAnimIndex = 0;
    
    const animate = () => {
      if (currentAnimIndex <= currentIndex) {
        setAnimatingIndex(currentAnimIndex);
        currentAnimIndex++;
        
        // Esperar antes de animar el siguiente nivel
        setTimeout(animate, 600); // 600ms entre cada nivel
      } else {
        // Al finalizar, mantener el nivel actual resaltado
        setAnimatingIndex(-1);
      }
    };

    // Pequeño delay inicial
    const timer = setTimeout(animate, 300);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Page
      title=""
      subtitle=""
    >
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: translateX(-50%) scale(1);
            }
            50% {
              transform: translateX(-50%) scale(1.3);
            }
          }
        `}
      </style>
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
                const isAnimating = animatingIndex === originalIdx;
                
                // Tamaño del ícono: más grande si es el actual
                const baseSize = isCurrent ? "100px" : "76px";
                
                return (
                  <Flex key={lvl.key} py={7} position="relative" align="center">
                    {/* Columna izquierda: ícono sobre la línea */}
                    <Box width="64px" position="relative" display="flex" alignItems="center" justifyContent="center">
                      {/* Fondo blanco detrás del ícono para darle contraste */}
                      <Box
                        position="absolute"
                        left="32px"
                        transform="translateX(-50%)"
                        bg="white"
                        borderRadius="full"
                        boxSize={`${isCurrent ? 104 : 80}px`}
                        zIndex={1}
                      />
                      <Image
                        src={lvl.icon}
                        alt={lvl.key}
                        boxSize={baseSize}
                        objectFit="contain"
                        position="absolute"
                        left="32px"
                        transform="translateX(-50%)"
                        zIndex={2}
                        style={{
                          animation: isAnimating 
                            ? "pulse 0.6s ease-in-out" 
                            : isCurrent 
                            ? "none" 
                            : "none",
                          transform: `translateX(-50%) scale(${isCurrent ? 1.15 : 1})`,
                          transition: "transform 0.3s ease-out",
                        }}
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
                      <Text fontSize="xs" color="gray.500" mt={0.3}>
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
