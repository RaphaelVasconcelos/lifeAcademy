import { Box, Text, Button } from "@chakra-ui/react";

interface QuestionProps {
  mainText: string;
  positiveAnswer: string;
  negativeAnswer: string;
  colorScheme: string;
}

export default function Question({
  mainText,
  positiveAnswer,
  negativeAnswer,
  colorScheme,
}: QuestionProps) {
  return (
    <Box mb="8">
      <Text>{mainText}</Text>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme={colorScheme}
        mr="5"
        mt="2"
      >
        {positiveAnswer}
      </Button>
      <Button as="a" size="sm" fontSize="sm" colorScheme={colorScheme} mt="2">
        {negativeAnswer}
      </Button>
    </Box>
  );
}
