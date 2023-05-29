import type { NextPage } from "next";

import {
  Text,
  Flex,
  Heading,
  Box,
  Container,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Layout from "@/components/layout";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Layout title="Home">
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          px={{ base: 2, md: 16 }}
        >
          <Container maxW={"3xl"}>
            <Stack
              as={Box}
              align="center"
              justify="center"
              textAlign="center"
              spacing={{ base: 7, md: 10 }}
              py={{ base: 8, md: 12 }}
            >
              <Heading
                fontWeight="bold"
                fontSize={{ base: "5xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Hi! I'm Jimmy <br />
              </Heading>
              <Box px={10}>
                <Text color={"black.500"} fontSize="2xl" textAlign={"left"}>
                  I'm a junior at Brooklyn Tech and an asipiring software
                  engineer.
                </Text>
                <br />
                <Text color={"black.500"} fontSize="2xl" textAlign={"left"}>
                  I'm interested in web development and is trying to learn
                  ReactJS while learning Java in school.
                </Text>
                <br />
                <Text color={"black.500"} fontSize="2xl" textAlign={"left"}>
                  I have experience with Java, Python, HTML, CSS, JS, and a
                  little bit of React
                </Text>
                <br />
                <Text color={"black.500"} fontSize="2xl" textAlign={"left"}>
                  Outside of coding, I enjoy playing basketball, biking, and
                  watching anime.
                </Text>
              </Box>
            </Stack>
          </Container>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
