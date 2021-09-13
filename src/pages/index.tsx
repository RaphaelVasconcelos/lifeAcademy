import Link from "next/link";
import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heróis dos investimentos</title>
        <meta name="description" content="Heróis dos investimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading as="h1" mb={2}>
            Bem-vindo(a) ao Heróis dos investimentos!
          </Heading>
          <Heading as="h2" size="md" mb={6}>
            Esteja preparado para todas as batalhas e proteger seu dinheiro.
          </Heading>
          <Box>
            <Text>Você gasta mais do que ganha?</Text>
            <Link href="dividas">
              <a href="dividas">{"->"} Sim</a>
            </Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}