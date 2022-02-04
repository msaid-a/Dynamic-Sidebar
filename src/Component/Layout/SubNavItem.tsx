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
import SubSubNavItem from "./SubSubNavItem";

interface SubNavItemProps extends FlexProps {
  children?: React.ReactNode;
  submenu?: any[];
  disabled?: boolean;
  hidden?: boolean;
}

const SubNavItem = ({
  children,
  submenu,
  disabled,
  hidden,
}: SubNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    console.log(submenu);
  }, [isOpen]);

  return (
    <>
      {hidden ? null : (
        <>
          <Link
            href={"#"}
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
              pl={8}
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

          {isOpen &&
            submenu &&
            submenu.map((val) => (
              <>
                <SubSubNavItem
                  submenu={val.childs}
                  disabled={!val.isAllowed}
                  hidden={!val.isShowed}
                >
                  {val.id}
                </SubSubNavItem>
              </>
            ))}
        </>
      )}
    </>
  );
};

export default SubNavItem;
