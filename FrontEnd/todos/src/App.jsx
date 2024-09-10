import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Calendar from "./Menu/Calendar/Calendar";
import TodoList from "./Menu/TodoList/TodoList";
import TodoControl from "./Menu/TodoControl/TodoControl";

function App() {
  const todoss = [
    {
      id: "af3ea0b6-e83b-4a01-fda6-08dcce88baa9",
      title: "string",
      description: "string",
      isCompleated: false,
    },
    {
      id: "af3ea0b6-e83b-4a01-fda6-08dcce88baa9",
      title: "string",
      description: "stringadasfdas",
      isCompleated: false,
    },
  ];
  return (
    <ChakraProvider>
      <Grid templateColumns="5fr 9fr 6fr" gap={5}>
        <GridItem colSpan={3} h="100px">
          {" "}
        </GridItem>
        <GridItem colSpan={"1"} rowSpan={1} align>
          <TodoControl todos={todoss}></TodoControl>
        </GridItem>
        <GridItem colSpan={"1"} rowSpan={1}>
          <TodoList todos={todoss}></TodoList>
        </GridItem>
        <GridItem colSpan={"1"} border="solid 1px">
          <Calendar></Calendar>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
