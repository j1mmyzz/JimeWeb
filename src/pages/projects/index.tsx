import type { NextPage } from "next";
import Layout from "@/components/layout";

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
          spacing="6"
          justify="center"
          align="center"
          mt="8"
          maxW={{ base: "100%", sm: "80%" }}
        >
          <WrapItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="/Screenshot 2023-05-29 at 1.01.07 AM.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Maze Algorithm GUI</Heading>
                  <Text>
                    My AP CSA Final Project. It's a Java program that generates
                    a maze and finds the optimal path to solve it. You also have
                    the option to create your own maze.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <NextLink
                    href="https://github.com/j1mmyzz/MazeAlgorithm"
                    passHref
                  >
                    <Button as="a" variant="solid" colorScheme="blue">
                      View Source Code
                    </Button>
                  </NextLink>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="/Screenshot 2023-05-29 at 1.00.34 AM.png"
                  alt="empire game"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Empire CyberSecurity Game</Heading>
                  <Text>
                    A cybersecurity web app game made in HTML, CSS, JS. I made
                    this as an intern at ETA media. It's designed to simulate
                    real-life cyber threats and teaches basic cybersecurity.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <NextLink
                    href="https://github.com/j1mmyzz/cybersecurity-game"
                    passHref
                  >
                    <Button as="a" variant="solid" colorScheme="blue">
                      View Source Code
                    </Button>
                  </NextLink>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
};

export default GroceryList;
