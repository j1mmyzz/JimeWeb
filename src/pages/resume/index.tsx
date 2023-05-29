import type { NextPage } from "next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Flex,
  Button,
  Image,
  useDisclosure,
  Stack,
  Card,
  Box,
  CardBody,
  Heading,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import Layout from "@/components/layout";
import { useEffect, useState } from "react";

const WorkoutPlan: NextPage = () => {
  const [exercises, setExercise] = useState<string[]>(new Array());

  return (
    <Layout title="Resume">
      <Text my={8} fontSize="5xl" textAlign="center">
        <strong>Resume</strong>
      </Text>
      <Box w="70%" mx="auto">
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Image src="Resume - Jimmy Zheng 5_2023 (2)-1.png" />
        </Flex>
      </Box>
    </Layout>
  );
};

export default WorkoutPlan;
