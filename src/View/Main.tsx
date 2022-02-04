import React from "react";
import {
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Divider,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { AppReduxState } from "../redux";
import { SET_MENU } from "../redux/action/link.action";

const Main = () => {
  const LinkItems = useSelector((state: AppReduxState) => state.link.menu);
  const dispatch = useDispatch();

  const handleDisabled = (
    event?: any,
    index?: any,
    index2?: number,
    index3?: number
  ) => {
    const newLinkItems = [...LinkItems];
    if (index3 || index3 === 0) {
      if (index2 || index2 === 0) {
        newLinkItems[index].childs[index2].childs[index3].isAllowed = event;
      }
    } else if (index2 || index2 === 0) {
      newLinkItems[index].childs[index2].isAllowed = event;
    } else if (index && !index2 && !index3 || index === 0) {
      newLinkItems[index].isAllowed = event;
    }

    dispatch({ type: SET_MENU, payload: newLinkItems });
  };

  const handleShow = (
    event?: any,
    index?: any,
    index2?: number,
    index3?: number
  ) => {
    console.log(index2);
    const newLinkItems = [...LinkItems];
    if (index3 || index3 === 0) {
      if (index2 || index2 === 0) {
        newLinkItems[index].childs[index2].childs[index3].isShowed = event;
      }
    } else if (index2 || index2 === 0) {
      newLinkItems[index].childs[index2].isShowed = event;
    } else if (index && !index2 && !index3 || index === 0) {
      newLinkItems[index].isShowed = event;
    }

    dispatch({ type: SET_MENU, payload: newLinkItems });
  };

  return (
    <div>
      <Text fontSize="2xl" mb={10}>
        List Menu
      </Text>

      <UnorderedList pr={200}>
        {LinkItems.map((val, index: number) => {
          return (
            <ListItem mb={10} _hover={{ background: "rgba(0, 0, 0, 0.1)" }}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize="xl" fontWeight={"bold"}>
                  {val.id}
                </Text>
                <Box fontWeight={"bold"}>
                  <Checkbox
                    mr={2}
                    defaultChecked={val.isAllowed}
                    onChange={(e: any) =>
                      handleDisabled(e.target.checked, index)
                    }
                  >
                    Allowed
                  </Checkbox>
                  <Checkbox
                    defaultChecked={val.isShowed}
                    onChange={(e: any) => handleShow(e.target.checked, index)}
                  >
                    Show
                  </Checkbox>
                </Box>
              </Flex>
              {val.childs && (
                <UnorderedList>
                  {val.childs.map((val_2: any, index2: number) => (
                    <>
                      <ListItem _hover={{ background: "rgba(0, 0, 0, 0.1)" }}>
                        <Flex justifyContent={"space-between"} mb={4}>
                          {val_2.id}
                          <Box mr={2}>
                            <Checkbox
                              onChange={(e: any) =>
                                handleDisabled(e.target.checked, index, index2)
                              }
                              defaultChecked={val_2.isAllowed}
                              mr={2}
                            >
                              Allowed
                            </Checkbox>
                            <Checkbox
                              defaultChecked={val_2.isShowed}
                              onChange={(e: any) =>
                                handleShow(e.target.checked, index, index2)
                              }
                            >
                              Show
                            </Checkbox>
                          </Box>
                        </Flex>
                      </ListItem>
                      {val_2.childs && (
                        <UnorderedList>
                          {val_2.childs.map((val_3: any, index3: number) => (
                            <ListItem
                              _hover={{ background: "rgba(0, 0, 0, 0.1)" }}
                            >
                              {" "}
                              <Flex justifyContent={"space-between"} mb={4}>
                                {val_3.id}
                                <Box mr={2}>
                                  <Checkbox
                                    defaultChecked={val_3.isAllowed}
                                    mr={2}
                                    onChange={(e: any) =>
                                      handleDisabled(
                                        e.target.checked,
                                        index,
                                        index2,
                                        index3
                                      )
                                    }
                                  >
                                    Allowed
                                  </Checkbox>
                                  <Checkbox
                                    defaultChecked={val_3.isShowed}
                                    onChange={(e: any) =>
                                      handleShow(
                                        e.target.checked,
                                        index,
                                        index2,
                                        index3
                                      )
                                    }
                                  >
                                    Show
                                  </Checkbox>
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
