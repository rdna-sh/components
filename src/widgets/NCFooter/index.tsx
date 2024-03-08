import React from "react";
import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { NCFooterProps } from "./types";

export const NCFooter: React.FC<NCFooterProps> = ({ containerFooterProps, logoLeft, logoRight }) => {
    return (
        <Box bg="white" padding={4} as="footer" {...containerFooterProps}>
            <Container
                as={Stack}
                maxW="100%"
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Image boxSize="72px" objectFit="contain" src={logoLeft} alt="Imagem GDF" />

                <Text fontSize="sm" color="gray.600" textAlign="center">
                    Companhia Urbanizadora da Nova Capital do Brasil - Governo do Distrito Federal NOVACAP
                    <br />
                    Setor de Áreas Públicas - Lote B - CEP: 71.215-000 Telefone: 3403-2300
                </Text>

                <Image maxWidth="100%" width="210px" objectFit="contain" src={logoRight} alt="Imagem Novacap" />
            </Container>
        </Box>
    );
};
