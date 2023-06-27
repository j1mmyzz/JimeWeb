import type { FC, PropsWithChildren } from "react";
import {
  Stack,
  Box,
  IconButton,
  Image,
  useDisclosure,
  Flex,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const links = [
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Resume", path: "/resume" },
];

const PageLink: FC<PropsWithChildren<{ label: string; path: string }>> = ({
  label,
  path,
}) => {
  const router = useRouter();

  return (
    <Box
      as={Link}
      px={3}
      py={{ base: 2, md: 1 }}
      rounded="xl"
      fontWeight={router.pathname === path ? "semibold" : "normal"}
      href={path}
      _hover={{
        fontWeight: router.pathname !== path && "bold",
      }}
    >
      {label}
    </Box>
  );
};

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // changes color
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex
        h={{ base: 28, md: 20 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          as={Button}
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Link href="/">
          <Image
            src="/walnutCard-removebg-preview.png"
            alt="Logo"
            w={{ base: 20, md: 12 }}
          />
        </Link>
        <Flex as="nav" display={{ base: "none", md: "flex" }}>
          {links.map((link, _) => (
            <PageLink key={_} {...link} />
          ))}
        </Flex>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link, _) => (
              <PageLink key={_} {...link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
