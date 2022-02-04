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
import SubNavItem from "./SubNavItem";

interface NavItemProps extends FlexProps {
  children?: React.ReactNode;
  submenu?: any[];
  disabled?: boolean;
  hidden?: boolean;
}

const NavItem = ({ children, submenu, disabled, hidden }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  React.useEffect(() => {
    console.log(submenu);
  }, [isOpen]);

  return (
    <>
      {hidden ? null : (
        <>
          <Link
            href="#"
            style={
              disabled
                ? {
                    opacity: 0.5,
                    pointerEvents: "none",
                    cursor: "not-allowed",
                    textDecoration: "none",
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
              role="group"
              cursor="pointer"
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
              textColor={isOpen ? "cyan.400" : "inherit"}
              borderLeft={isOpen ? "3px solid #0bc5ea" : ""}
              justifyContent="space-between"
              style={
                disabled
                  ? {
                      opacity: 0.5,
                      pointerEvents: "none",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              {children}
              {submenu && <>{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</>}
            </Flex>
          </Link>

          {isOpen &&
            submenu &&
            submenu.map((val) => (
              <>
                <SubNavItem
                  submenu={val.childs}
                  disabled={!val.isAllowed || disabled}
                  hidden={!val.isShowed || hidden}
                >
                  {val.id}
                </SubNavItem>
              </>
            ))}
        </>
      )}
    </>
  );
};

export default NavItem;
