import type { NextPage } from "next";
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
const Recipes: NextPage = () => {
  return (
    <Layout title="Experience">
      <Text m={8} fontSize="5xl" textAlign="center">
        <strong>Experience</strong>
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "light-grey", color: "black" }}>
              <Box as="span" flex="1" textAlign="left" fontSize={24}>
                TechCodes - Social Media Manager | 09/2021 - Present | Remote{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={20}>
            <Box px={10}>
              <ul>
                <li>
                  Developed NutriFit, a web application designed to help users
                  organize their lives with nutritional recipes, grocery lists,
                  and workout schedules, using Next.js and TypeScript as part of
                  a team in the 2023 Code Overflow hackathon.
                </li>
                <li>
                  Participated in weekly programming meetings, collaborating
                  with club members to complete challenges and enhance
                  programming skills.
                </li>
              </ul>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "light-grey", color: "black" }}>
              <Box as="span" flex="1" textAlign="left" fontSize={24}>
                ETA Media - Intern | 02/2023 - 04/2023 | Remote{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={20}>
            <Box px={10}>
              <ul>
                <li>
                  Created a story-based cybersecurity game using HTML, CSS, and
                  JavaScript.
                </li>
                <li>
                  Worked with a team to promote cybersecurity through online
                  social media campaigns.
                </li>
                <li>
                  Developed career readiness skills through MindSage Academy
                  courses.
                </li>
              </ul>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Footer></Footer>
    </Layout>
  );
};

export default Recipes;
