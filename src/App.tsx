import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Layout from "./Component/Layout";
import { SideBar } from "./Component";
import Main from "./View/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Main />
    </Layout>
  </ChakraProvider>
);
