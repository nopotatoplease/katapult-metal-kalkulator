import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color : #E663360D" }} />
      <Grid
        templateAreas={{
          base: `"upload upload" 
        "config config"
        "summary basket"`,
          lg: `"upload upload" 
        "config summary"
        "config basket"`,
        }}
      >
        <GridItem area="upload" bg="coral">
          Upload
        </GridItem>
        <GridItem area="config" bg="gold">
          Config
        </GridItem>
        <GridItem area="summary" bg="dodgerblue">
          Summary
        </GridItem>
        <GridItem area="basket" bg="red">
          Basket
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
