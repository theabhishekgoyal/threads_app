import { Avatar, Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
// import { selectedConversationAtom } from "../atoms/messagesAtom";
// import { useRecoilValue } from "recoil";
// import userAtom from "../atoms/userAtom";
// import { BsCheck2All } from "react-icons/bs";
// import { useState } from "react";

const Message = ({ ownMessage, message }) => {
  // const selectedConversation = useRecoilValue(selectedConversationAtom);
  // const user = useRecoilValue(userAtom);
  // const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} bg={"blue.400"} p={1} borderRadius={"md"}>
            Lorem ipsum dolor sit amet.
          </Text>
          <Avatar src="" size={"sm"} w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="" size={"sm"} w={7} h={7} />
          <Text maxW={"350px"} bg={"gray.400"} color={'black'} p={1} borderRadius={"md"}>
            Lorem ipsum dolor sit amet.
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Message;
