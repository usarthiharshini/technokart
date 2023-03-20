import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Home = () => {
  return (
    <div>
      <ButtonGroup variant="outline" spacing="6">
        
        <Button colorScheme="blue">Admin</Button>
        <Button>Partner</Button>
      </ButtonGroup>
    </div>
  );
};

export default Home;
