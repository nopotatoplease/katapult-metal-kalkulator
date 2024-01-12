import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Image,
} from "@chakra-ui/react";
import Helmet from "react-helmet";
import logo from "./assets/km-b-t@2x.png";
import Upload from "./components/Upload";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #E663360D; }"}</style>
      </Helmet>
      <Grid
        templateAreas={{
          base: `"logo logo"
          "upload upload" 
        "config config"
        "summary basket"`,
          lg: `"logo logo"
          "upload upload" 
        "config summary"
        "config basket"`,
        }}
      >
        <GridItem area="logo">
          <HStack padding="10px">
            <Image src={logo} width="239px"></Image>
          </HStack>
        </GridItem>
        <GridItem area="upload">
          <Upload></Upload>
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
