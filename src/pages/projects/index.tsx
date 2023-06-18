import type { NextPage } from "next";
import Layout from "@/components/layout";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define custom styles for xl size
const sizes = {
  xl: definePartsStyle({
    container: {
      borderRadius: "36px",
      padding: "40px",
    },
  }),
};
export const cardTheme = defineMultiStyleConfig({ sizes });

import {
  Text,
  Flex,
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Stack,
  ButtonGroup,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Footer from "@/components/footer";

const GroceryList: NextPage = () => {
  return (
    <Layout title="Projects">
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        px={{ base: 6, sm: 10 }}
      >
        <Text mx={10} my={10} fontSize="50">
          <strong>Projects</strong>
        </Text>
        <Wrap
          spacing="5"
          justify="center"
          align="center"
          mt="8"
          maxW={{ base: "100%", sm: "80%" }}
        >
          <WrapItem>
            {/* Note all Card images are 720 x 450 */}
            <Card maxW="md" mb={10}>
              <CardBody>
                <Image
                  src="/maze.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Maze Pathfinding GUI</Heading>
                  <Text>
                    My AP CSA Final Project. It's a Java program that generates
                    a maze and finds the optimal path to solve it. You also have
                    the option to generate a grid with a start and end position.
                    The program will use Dijkstra's and A* algorithms to find
                    the optimal path.
                  </Text>
                  <Text>
                    <strong>Technologies: Java Swing</strong>
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as="a"
                    href="https://github.com/j1mmyzz/MazeAlgorithm"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Source Code
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            <Card maxW="md" mb={10}>
              <CardBody>
                <Image src="/empire.png" alt="empire game" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Empire CyberSecurity Game</Heading>
                  <Text>
                    A cybersecurity web app game that I made as an intern at ETA
                    media. It's designed to simulate real-life cyber threats and
                    teaches basic cybersecurity.
                  </Text>
                  <Text>
                    <strong>Technologies: HTML, CSS, JS, jQuery</strong>
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as="a"
                    target="_blank"
                    variant="solid"
                    colorScheme="green"
                    href="https://github.com/j1mmyzz/cybersecurity-game"
                  >
                    View Source Code
                  </Button>
                  <Button
                    as="a"
                    href="https://empire-cybersecurity-game.vercel.app"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Demo
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            {/* Note all Card images are 720 x 450 */}
            <Card maxW="md" mb={10}>
              <CardBody>
                <Image src="/nutrifit.png" alt="Nutrifit" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Nutrifit</Heading>
                  <Text>
                    TechCodes Hackathon submission. Designed to help users
                    organize their lives through nutritional recipes and workout
                    plans. It also includes a grocerylist feature.
                  </Text>
                  <Text>
                    <strong>
                      Technologies: TypeScipt, React, Next.js, Chakra UI
                    </strong>
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as="a"
                    href="https://github.com/fe-i/nutrifit"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Source Code
                  </Button>
                  <Button
                    as="a"
                    href="https://nutrifit.vercel.app"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Demo
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            {/* Note all Card images are 720 x 450 */}
            <Card maxW="md" mb={10}>
              <CardBody>
                <Image src="/jimebird.png" alt="JimeBird" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">JimeBird</Heading>
                  <Text>
                    A React project that I made while trying to learn React. It
                    uses basic React functions to determine whether a bird is in
                    a catalog or not. You can also add to the catalog of birds.
                  </Text>
                  <Text>
                    <strong>
                      Technologies: JavaScript, React, Next.js, CSS
                    </strong>
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as="a"
                    href="https://github.com/j1mmyzz/JimeBird"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Source Code
                  </Button>
                  <Button
                    as="a"
                    href="https://jimebird.vercel.app"
                    variant="solid"
                    colorScheme="green"
                    target="_blank"
                  >
                    View Demo
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
        </Wrap>
      </Flex>
      <Footer></Footer>
    </Layout>
  );
};

export default GroceryList;
