import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import uploadImage from "../assets/thumbnail_dxf_ikona.png";

const Upload = () => {
  return (
    <Center>
      <Card width="900px" height="500px" border="dashed" borderColor="#E66336">
        <Center>
          <Image src={uploadImage} width="136px" paddingTop="120px"></Image>
        </Center>
        <Center>
          <CardBody>
            <Center>
              <VStack>
                <Heading size="20px">Drag and Drop - Povleci in spusti</Heading>

                <Text>ali</Text>

                <Button colorScheme="orange">NALOŽI DATOTEKO</Button>
              </VStack>
            </Center>
          </CardBody>
        </Center>
      </Card>
    </Center>
  );
};

export default Upload;
