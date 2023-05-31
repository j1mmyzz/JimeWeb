import type { NextPage } from "next";
import { Text, Flex, Image, Box, Button } from "@chakra-ui/react";

import Layout from "@/components/layout";
import Footer from "@/components/footer";

const WorkoutPlan: NextPage = () => {
  return (
    <Layout title="Resume">
      <Text my={8} fontSize="5xl" textAlign="center">
        <strong>Resume</strong>
      </Text>
      <Box textAlign="center">
        <a href="resume.pdf" download>
          <Button>Download Resume</Button>
        </a>
      </Box>

      <Box w="70%" mx="auto">
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Image src="Resume - Jimmy Zheng 5_2023 (2)-1.png" />
        </Flex>
      </Box>
      <Footer></Footer>
    </Layout>
  );
};

export default WorkoutPlan;
