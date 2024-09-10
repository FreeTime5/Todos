import { DeleteIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Text,
  UnorderedList,
  ListItem,
  Spacer,
  Grid,
  GridItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { title } from "framer-motion/client";
import { useCallback, useMemo } from "react";

function TodoList({ todos }) {
  const deleteTodo = useCallback((id) => {}, []);

  const todosComponents = useMemo(() => {
    return todos.map((t) => {
      return (
        <Grid templateColumns="90% 10%">
          <GridItem>
            <Checkbox>
              <Text fontSize="2xl">{t.title}</Text>
            </Checkbox>
            <Text fontSize="sm">{t.description}</Text>{" "}
          </GridItem>
          <GridItem>
            <Button
              id={t.id}
              margin="2px 2px 2px 2px"
              float="right"
              h="30px"
              minW="30px"
            >
              <DeleteIcon></DeleteIcon>
            </Button>
          </GridItem>
        </Grid>
      );
    });
  }, [todos]);

  return (
    <Box
      border="solid 2px"
      borderRadius="15px"
      backgroundColor="#ff1"
      margin="10px"
    >
      {todosComponents}
    </Box>
  );
}

export default TodoList;
