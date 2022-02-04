import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Button,
  Flex,
  Divider,
  Checkbox,
  CheckboxGroup,
  Box,
} from "@chakra-ui/react";

const Main = () => {
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
  return (
    <div>
      <Text fontSize="2xl" mb={10}>
        List Menu
      </Text>

      <UnorderedList pr={200}>
        {LinkItems.map((val) => {
          return (
            <ListItem mb={10} _hover={{background: 'rgba(0, 0, 0, 0.1)'}}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize="xl" fontWeight={"bold"}>
                  {val.id}
                </Text>
                <Box fontWeight={"bold"}>
                  <Checkbox mr={2} defaultChecked={val.isAllowed}>Allowed</Checkbox>
                  <Checkbox defaultChecked={val.isShowed}>Show</Checkbox>
                </Box>
              </Flex>
              {val.childs && (
                <UnorderedList>
                  {val.childs.map((val_2) => (
                    <>
                      <ListItem _hover={{background: 'rgba(0, 0, 0, 0.1)'}}>
                        <Flex justifyContent={"space-between"} mb={4}>
                          {val_2.id}
                          <Box mr={2}>
                            <Checkbox defaultChecked={val_2.isAllowed}>Allowed</Checkbox>
                            <Checkbox defaultChecked={val_2.isShowed}>Show</Checkbox>
                          </Box>
                        </Flex>
                      </ListItem>
                      {val_2.childs && (
                        <UnorderedList>
                          {val_2.childs.map((val_3) => (
                            <ListItem _hover={{background: 'rgba(0, 0, 0, 0.1)'}}>
                              {" "}
                              <Flex justifyContent={"space-between"} mb={4}>
                                {val_3.id}
                                <Box mr={2}>
                                  <Checkbox defaultChecked={val_3.isAllowed}>Allowed</Checkbox>
                                  <Checkbox defaultChecked={val_3.isShowed}>Show</Checkbox>
                                </Box>
                              </Flex>
                            </ListItem>
                          ))}
                        </UnorderedList>
                      )}
                    </>
                  ))}
                </UnorderedList>
              )}
              <Divider orientation="horizontal" background={"black"} />{" "}
            </ListItem>
          );
        })}
      </UnorderedList>
    </div>
  );
};

export default Main;
