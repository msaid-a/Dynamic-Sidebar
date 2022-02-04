import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {

  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
}


const LinkItems = [
  { id: "dashboard", isShowed: true, isAllowed: true },
  {
    id: "hq",
    isShowed: false,
    isAllowed: false,
    childs: [
      { id: "hq_stockist", isShowed: false, isAllowed: false },
      { id: "hq_dropship_affiliate", isShowed: false, isAllowed: false },
    ],
  },
  {
    id: "agent",
    isShowed: true,
    isAllowed: false,
    childs: [{ id: "my_purchase", isShowed: true, isAllowed: true }],
  },
  { id: "orders", isShowed: true, isAllowed: true },
  {
    id: "products",
    isShowed: true,
    isAllowed: true,
    childs: [
      {
        id: "product-allproduct",
        isShowed: true,
        isAllowed: true,
        childs: [
          { id: "product-add", isShowed: true, isAllowed: true },
          { id: "product-import", isShowed: false, isAllowed: false },
        ],
      },
      { id: "product-categories", isShowed: true, isAllowed: true },
      { id: "product-variations", isShowed: true, isAllowed: true },
      { id: "product-collections", isShowed: true, isAllowed: true },
    ],
  },
  {
    id: "webstore",
    isShowed: true,
    isAllowed: true,
    childs: [
      {
        id: "settings",
        isShowed: true,
        isAllowed: true,
        childs: [
          {
            id: "webstore-domain",
            isShowed: true,
            isAllowed: true,
            childs: [
              { id: "default-domain", isShowed: true, isAllowed: true },
              { id: "custom-domain", isShowed: true, isAllowed: false },
              {
                id: "request-custom-domain",
                isShowed: false,
                isAllowed: false,
              },
            ],
          },
          { id: "webstore-logo", isShowed: true, isAllowed: true },
          {
            id: "webstore-profile-photo",
            isShowed: true,
            isAllowed: true,
          },
          { id: "webstore-slider", isShowed: true, isAllowed: true },
          {
            id: "webstore-mobile-friendly",
            isShowed: true,
            isAllowed: true,
          },
          { id: "infinite-scroll", isShowed: true, isAllowed: true },
          {
            id: "home-page-product-display",
            isShowed: true,
            isAllowed: false,
          },
          { id: "show-filter-control", isShowed: true, isAllowed: false },
        ],
      },
      { id: "google-analytic", isShowed: true, isAllowed: true },
      { id: "themes", isShowed: true, isAllowed: true },
      { id: "pages", isShowed: true, isAllowed: true },
      { id: "seo", isShowed: true, isAllowed: true },
      {
        id: "checkout-additional-info",
        isShowed: true,
        isAllowed: false,
      },
      { id: "store-newsletter", isShowed: true, isAllowed: false },
    ],
  },
  {
    id: "settings",
    isShowed: true,
    isAllowed: true,
    childs: [
      { id: "shop-manager", isShowed: false, isAllowed: false },
      { id: "store-information", isShowed: true, isAllowed: true },
      {
        id: "shipping",
        isShowed: true,
        isAllowed: true,
        childs: [
          {
            id: "couriers",
            isShowed: true,
            isAllowed: true,
            childs: [
              { id: "poslaju", isShowed: false, isAllowed: false },
              {
                id: "poslaju_international",
                isShowed: false,
                isAllowed: false,
              },
              { id: "citylink", isShowed: false, isAllowed: false },
              { id: "flexipack", isShowed: false, isAllowed: false },
              { id: "janio", isShowed: true, isAllowed: false },
              {
                id: "jne_domestic_regular",
                isShowed: true,
                isAllowed: true,
              },
              { id: "shipper", isShowed: true, isAllowed: false },
            ],
          },
        ],
      },
      {
        id: "payment",
        isShowed: true,
        isAllowed: true,
        childs: [
          { id: "avapay", isShowed: true, isAllowed: true },
          { id: "credit-card", isShowed: true, isAllowed: false },
          { id: "paypal", isShowed: false, isAllowed: false },
          { id: "molpay", isShowed: false, isAllowed: false },
          { id: "manual-payment", isShowed: true, isAllowed: false },
        ],
      },
      { id: "invoicing", isShowed: true, isAllowed: true },
      { id: "developer", isShowed: true, isAllowed: false },
      { id: "tax-information", isShowed: true, isAllowed: true },
    ],
  },
  {
    id: "modules",
    isShowed: true,
    isAllowed: true,
    childs: [
      { id: "all-module", isShowed: true, isAllowed: true },
      { id: "google-shopping", isShowed: true, isAllowed: true },
      { id: "coupon-code", isShowed: true, isAllowed: true },
      {
        id: "facebook",
        isShowed: true,
        isAllowed: true,
        childs: [
          { id: "facebook-marketing", isShowed: true, isAllowed: false },
          {
            id: "facebook-page",
            isShowed: true,
            isAllowed: true,
            childs: [
              { id: "fb-link-to-page", isShowed: true, isAllowed: true },
              { id: "fb-unlink-page", isShowed: true, isAllowed: true },
              {
                id: "fb-change-adaccount",
                isShowed: true,
                isAllowed: true,
              },
              { id: "fb-shop", isShowed: true, isAllowed: true },
              { id: "auto-pm-order", isShowed: true, isAllowed: true },
            ],
          },
          {
            id: "facebook-fanpage-autorepy",
            isShowed: false,
            isAllowed: false,
          },
        ],
      },
      {
        id: "instagram",
        isShowed: true,
        isAllowed: true,
        childs: [
          { id: "instagram-connect", isShowed: true, isAllowed: true },
          {
            id: "instagram-comment-order",
            isShowed: false,
            isAllowed: false,
          },
        ],
      },
      {
        id: "messenger",
        isShowed: true,
        isAllowed: true,
        childs: [
          { id: "messenger-settings", isShowed: true, isAllowed: false },
          { id: "messenger-blast", isShowed: true, isAllowed: false },
        ],
      },
      { id: "blogspot", isShowed: true, isAllowed: true },
      { id: "twitter", isShowed: true, isAllowed: true },
      { id: "whatsapp", isShowed: true, isAllowed: true },
      { id: "avacredit", isShowed: false, isAllowed: false },
      { id: "avachat", isShowed: false, isAllowed: false },
    ],
  },
];

export default function SimpleSidebar({ children }: { children?: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 80 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Avana Test
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem submenu={link.childs} disabled={!link.isAllowed} hidden={!link.isShowed}>{link.id}</NavItem>
      ))}
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
