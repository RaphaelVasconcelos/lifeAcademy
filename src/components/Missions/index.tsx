import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";

import { GiPayMoney, GiReceiveMoney, GiDivergence } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";
import { MdWarning } from "react-icons/md";

export default function Missions() {
  return (
    <Box>
      <Text mb={4}>Suas primeiras missões são:</Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={GiPayMoney} color="orange.500" w={8} h={8} />
          Se livre das divídas
        </ListItem>
        <ListItem>
          <ListIcon as={FaPiggyBank} color="orange.500" w={8} h={8} />
          Faça sua reserva de emergência
        </ListItem>
        <ListItem>
          <ListIcon as={GiReceiveMoney} color="orange.500" w={8} h={8} />
          Ganhe mais
        </ListItem>
        <ListItem>
          <ListIcon as={MdWarning} color="orange.500" w={8} h={8} />
          Avalie o seu perfil de risco e veja os ativos que atendam esse perfil
        </ListItem>
        <ListItem>
          <ListIcon as={GiDivergence} color="orange.500" w={8} h={8} />
          Diversifique
        </ListItem>
      </List>
    </Box>
  );
}
