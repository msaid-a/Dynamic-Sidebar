import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

interface SubSubNavItemProps extends FlexProps {
  children?: React.ReactNode;
  submenu?: any[];
  disabled?: boolean;
  hidden?: boolean;
}

const SubSubNavItem = ({
  children,
  submenu,
  disabled,
  hidden,
}: SubSubNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    console.log(submenu);
  }, [isOpen]);

  return (
    <>
      {hidden ? null : (
        <>
          {submenu ? (
            <Flex
              onClick={() => setIsOpen(!isOpen)}
              align="center"
              p="4"
              mx="4"
              pl={12}
              role="group"
              cursor="pointer"
              justifyContent="space-between"
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
              textColor={isOpen ? "cyan.400" : "inherit"}
              borderLeft={"3px solid #0bc5ea"}
            >
              {children}
              {submenu && <>{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</>}
            </Flex>
          ) : (
            <Link
              href={"#"}
              style={
                disabled
                  ? {
                      pointerEvents: "none",
                      cursor: "not-allowed",
                      textDecoration: "none",
                      color: "grey",
                    }
                  : { textDecoration: "none" }
              }
              _focus={{ boxShadow: "none" }}
            >
              <Flex
                onClick={() => setIsOpen(!isOpen)}
                align="center"
                p="4"
                mx="4"
                pl={12}
                role="group"
                cursor="pointer"
                justifyContent="space-between"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
                textColor={isOpen ? "cyan.400" : "inherit"}
                borderLeft={"3px solid #0bc5ea"}
              >
                {children}
                {submenu && <>{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</>}
              </Flex>
            </Link>
          )}

          {isOpen &&
            submenu &&
            submenu.map((val) => (
              <>
                <Flex
                  align="center"
                  p="4"
                  pl={16}
                  ml={4}
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "cyan.400",
                    color: "white",
                  }}
                  style={
                    disabled
                      ? {
                          pointerEvents: "none",
                          cursor: "not-allowed",
                          textDecoration: "none",
                          color: "grey",
                        }
                      : { textDecoration: "none" }
                  }
                  borderLeft={isOpen ? "3px solid #0bc5ea" : ""}
                >
                  {val.id}
                </Flex>
              </>
            ))}
        </>
      )}
    </>
  );
};

export default SubSubNavItem;
