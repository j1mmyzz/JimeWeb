import type { NextPage } from "next";
import { Text, Image, Center } from "@chakra-ui/react";
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
        <Image src="java.png/" alt="Java" boxSize="64px" mx={5} />
        <Image src="python.png/" alt="python" boxSize="64px" mx={5} />
        <Image src="javascript.png/" alt="JavaScript" boxSize="64px" mx={5} />
        <Image src="typescript.png/" alt="Java" boxSize="64px" mx={5} />
        <Image src="html.png/" alt="HTML" boxSize="64px" mx={5} />
        <Image src="css.png/" alt="CSS" boxSize="64px" mx={5} />
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
