import { Badge, Box, Stack, Text } from '@chakra-ui/layout';
import React, { FC } from 'react'

const TodoItem: FC = () => {
    return (
        <Box boxShadow="xs" p="4" rounded="md" bg="white">
            <Stack>
                <Box>
                    <Badge fontSize="x-small" colorScheme="green">pending</Badge>
                </Box>
                <Text fontSize="md">In love with React & Next</Text>
                <Text fontSize="xs" color="GrayText">Today</Text>
            </Stack>
        </Box>
    )
};

export default TodoItem;