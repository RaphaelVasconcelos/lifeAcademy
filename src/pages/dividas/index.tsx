import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Head from "next/head";

export default function ControleDivida() {
  return (
    <>
      <Head>
        <title>Controle sua dívida</title>
        <meta name="description" content="Controle sua divída" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Heading as="h1" mb={2}>
              Bem-vindo(a) ao Controle de Dívidas
            </Heading>
            <Heading as="h2" size="md" mb={6}>
              Antes de enfrentar novos desafios é bom você se recuperar antes.
            </Heading>
            <Text>
              Liste suas divídas abaixo. Sabendo os desafios que tem, é mais
              facil encontrar uma solução para eles.
            </Text>
            <Flex mt={6} mb={8} justify="space-between" align="center">
              <Heading size="md" fontWeight="normal">
                Dívidas
              </Heading>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Nova dívida
              </Button>
            </Flex>

            <Table colorschema="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" width="8">
                    <Checkbox colorScheme="orange" />
                  </Th>
                  <Th>Dívida</Th>
                  <Th>Valor da dívida</Th>
                  <Th>Tipo da dívida</Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="orange" />
                  </Td>
                  <Td>
                    <Text>Financiamento do carro</Text>
                  </Td>
                  <Td>
                    <Text>R$ 650,00</Text>
                  </Td>
                  <Td>
                    <Text>Financiamento</Text>
                  </Td>
                  <Td>
                    <Text>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="yellow"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar dívida
                      </Button>
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
