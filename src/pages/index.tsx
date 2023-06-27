import type { NextPage } from "next";

import {
  Text,
  Flex,
  Heading,
  Box,
  Container,
  Stack,
  useDisclosure,
  Center,
  Image,
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
const Home: NextPage = () => {
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
              <Text my={8} fontSize="5xl" textAlign="center">
                <strong>Skills</strong>
              </Text>

              <Center>
                <Image src="java.png/" alt="Java" boxSize="64px" />
                <Image src="python.png/" alt="python" boxSize="64px" />
                <Image src="javascript.png/" alt="JavaScript" boxSize="64px" />
                <Image src="typescript.png/" alt="Java" boxSize="64px" />
                <Image src="html.png/" alt="HTML" boxSize="64px" />
                <Image src="css.png/" alt="CSS" boxSize="64px" />
              </Center>
              <Center>
                <Image src="git.png/" alt="Git" boxSize="64px" />
              </Center>
              <Center>
                <Image src="react.png/" alt="React.js" boxSize="64px" />
                <Image src="next.png/" alt="Next.js" boxSize="64px" />
              </Center>
            </Stack>
          </Container>
        </Flex>
      </Layout>
      <Footer></Footer>
    </>
  );
};

export default Home;
