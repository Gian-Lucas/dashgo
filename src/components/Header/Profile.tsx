import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gian Lucas</Text>
          <Text color="gray.300" fontSize="small">
            lgian584@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gian Lucas"
        src="https://github.com/gian-lucas.png"
      />
    </Flex>
  );
}
