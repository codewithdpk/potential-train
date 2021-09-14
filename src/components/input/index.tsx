import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Badge, Box, Flex, Stack } from '@chakra-ui/layout';
import { Text } from "@chakra-ui/react"
import React, { FC } from 'react';
import DatePicker from '../datepicker';

interface Props {
  deadline:string,
  task:string,
  tags:Array<string>,
  setTask(data:string):void,
  handleTags(data:string):void,
  setDeadline(data:string):void,
  addTask():void,
  cancelTask():void
}

const TaskInput: FC = ({deadline,task,tags,handleTags,setTask,addTask,cancelTask,setDeadline}:Props) => {
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
              value = {task}
              placeholder="eg. do the homework"
              onChange = {(e)=>setTask(e.target.value)}
            />
           </InputGroup>
        </Flex>
        <Flex flexDirection="row" alignItems="center">
          <Box w="30%">
          <Text> Tags</Text>
          </Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              value = {tags.join(",")}
              onChange = {(e)=>handleTags(e.target.value)}
              placeholder="eg. Office, Javscript"
            />
           </InputGroup>
        </Flex>
        <Flex flexDirection="row" alignItems="center">
          <Box w="30%">
          <Text> Deadline</Text>
          </Box>
          <InputGroup size="md">
          <DatePicker
              id="published-date"
              selectedDate={deadline}
              onChange={(d)=>setDeadline(d)}
              showPopperArrow={true}
            />
           </InputGroup>
        </Flex>

        <Flex flexDirection="row" justifyContent="flex-end">
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid" size="sm" onClick = {addTask} >
            Add
          </Button>
          <Button colorScheme="teal" variant="outline" size="sm" onClick = {cancelTask}>
            Cancel
          </Button>
        </Stack>
        </Flex>
   
    </Stack>
  )
};

export default TaskInput;