import React, { FC } from 'react'
import { Button } from '@chakra-ui/button';
import { Badge, Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { ITask } from '../../interfaces';

interface Props {
    task: ITask
}

const TodoItem: FC = ({ task }: Props) => {
    return (
        <Box boxShadow="xs" p="4" rounded="md" bg="white">
            <Flex flexDir="row" alignItems="center">
                <Stack width="85%">
                    <Stack direction="row" spacing={3}>
                        {task.status.toLocaleLowerCase() === "pending" ? <Badge fontSize="x-small" >pending</Badge> : <Badge fontSize="x-small" colorScheme="twitter">completed</Badge>}
                        {task.tags.map((tag)=><Badge fontSize="x-small" colorScheme = "cyan">{tag}</Badge>)}
                    </Stack>
                    <Text fontSize="md">{task.task}</Text>
                    <Text fontSize="xs" color="GrayText">{task.created_on}</Text>
                </Stack>
                <Stack alignItems="center" justifyContent="flex-end" spacing={3}>
                    <Button leftIcon={<CheckIcon />} colorScheme="teal" variant="solid" size="xs">
                        Done
                    </Button>
                    <Button leftIcon={<DeleteIcon />} variant="solid" size="xs" colorScheme="red">
                        Delete
                    </Button>
                </Stack>
            </Flex>
        </Box>
    )
};

export default TodoItem;