import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Badge, Box, Flex, Stack } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react"
import React, { FC } from 'react';

const TaskInput: FC = () => {
  return (

    <Stack>
      <Flex flexDirection="row" alignItems="center">
          <Box w="30%">
          <Text> Task</Text>
          </Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="eg. do the homework"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" >
                Add
              </Button>
            </InputRightElement>
           </InputGroup>
        </Flex>

        <Flex flexDirection="row" alignItems="center">
          <Box w="30%">
          <Text> Task</Text>
          </Box>
          <Box boxShadow="xs" rounded="md" pt= "1" pb="1" pl="3" pr="3" alignItems="center">
            <Badge colorScheme="twitter">React</Badge>
            <Badge colorScheme="yellow">Javascript</Badge>
          </Box>
        </Flex>
   
    </Stack>
  )
};

export default TaskInput;