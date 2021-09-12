import { Container, Flex } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import TaskInput from '../input';
import TodoItem from '../todo';

const MainContainer: FC = () => {
    return (
        <Container justifyContent="center" alignItems="center">
            <Flex flexDirection="column" mt="20">
                <TaskInput />
                <Stack spacing={3} mt="20">
                    <TodoItem task={{ task: 'Go to gym this morning', status: 'completed', time: 'Tomorrow' }} />
                </Stack>
            </Flex>
        </Container>
    )
};

export default MainContainer;