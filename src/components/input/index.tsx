import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import React, { FC } from 'react';

const TaskInput: FC = () => {
  return (
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
  )
};

export default TaskInput;