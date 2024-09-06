import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Calendar from "./Menu/Calendar/Calendar";

function App() {
  return (
    <ChakraProvider>
      <Grid templateColumns="25% 45% 30%">
        <GridItem colSpan={3} h="100px">
          {" "}
        </GridItem>
        <GridItem colSpan={"2"} rowSpan={1}></GridItem>
        <GridItem colSpan={"1"} border="solid 1px">
          <Calendar></Calendar>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
