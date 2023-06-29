import type { NextPage } from "next";
import { Text, Image, Center, WrapItem, Wrap, Box } from "@chakra-ui/react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
const Skills: NextPage = () => {
  return (
    <Layout title="Skills">
      <Text my={8} fontSize="5xl" textAlign="center">
        <strong>Skills</strong>
      </Text>
      <Text my={2} fontSize={40} textAlign="center">
        Languages{" "}
      </Text>
      <Center>
        <Box display="flex" alignItems="center">
          <Wrap>
            <WrapItem>
              <Image src="java.png/" alt="Java" boxSize="64px" mx={3} />
            </WrapItem>
            <WrapItem>
              <Image src="python.png/" alt="python" boxSize="64px" mx={3} />
            </WrapItem>
            <WrapItem>
              <Image
                src="javascript.png/"
                alt="JavaScript"
                boxSize="64px"
                mx={5}
              />
            </WrapItem>
            <WrapItem>
              <Image src="typescript.png/" alt="Java" boxSize="60px" mx={3} />
            </WrapItem>
            <WrapItem>
              <Image src="html.png/" alt="HTML" boxSize="64px" mx={3} />
            </WrapItem>
            <WrapItem>
              <Image src="css.png/" alt="CSS" boxSize="67px" mx={3} />
            </WrapItem>
          </Wrap>
        </Box>
      </Center>

      <Text my={2} fontSize={40} textAlign="center">
        Tools{" "}
      </Text>
      <Center>
        <Image src="git.png/" alt="Git" boxSize="64px" mx={5} />
      </Center>
      <Text my={2} fontSize={40} textAlign="center">
        Frameworks{" "}
      </Text>
      <Center>
        <Image src="react.png/" alt="React.js" boxSize="64px" mx={5} />
        <Image src="next.png/" alt="Next.js" boxSize="64px" mx={5} />
      </Center>
      <br />
      <br />
      <Footer></Footer>
    </Layout>
  );
};

export default Skills;
