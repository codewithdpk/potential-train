import { Container, Flex } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/react';
import React, { FC,useState } from 'react';
import { ITask, User } from '../../interfaces';
import { getCurDate, getID } from '../../utils/index';
import TaskInput from '../input';
import TodoItem from '../todo';

const MainContainer: FC = () => {

    const [task,setTask] = useState<string>("");
    const [tags,setTags] = useState<Array<string>>([]);
    const [deadline,setDeadline] = useState<string>(new Date());
    const [tasks,setTasks] = useState<ITask[]>([]);
    const [currentUser,setCurrentUser] = useState<User>({user_id:getID(),user_name:'Deepak',joined_on:10,occupation:'Developer'});

    const handleTags = (data:string):void =>{
        console.log(data);
        setTags(data.split(","))
    };

    const addTask = (e:React.MouseEvent<HTMLElement>):void =>{
        e.preventDefault();
        setTasks([...tasks,{ task_id:getID(),task:task,tags:tags,created_by:currentUser,created_on:getCurDate(),status:'Pending'}])
        setTask("");
        setTags([]);
        setDeadline(new Date());
    };

    const cancelTask = ():void =>{
        setTask("");
        setTags([]);
        setDeadline(new Date());
    }

    const markAsDone = (task_id:string):void =>{
        let hold:Array<ITask> = tasks.map((task:ITask)=> {return task.task_id === task_id ? {...task,status:'completed'} : {...task}});
        setTasks(hold);
    }



    return (
        <Container justifyContent="center" alignItems="center">
            <Flex flexDirection="column" mt="20">
                <TaskInput setTask = {setTask} handleTags = {handleTags} setDeadline ={setDeadline} task ={task} tags = {tags} deadline={deadline} addTask={addTask} cancelTask = {cancelTask}/>
                <Stack spacing={3} mt="20">
                    {tasks.map((task:ITask,index:number)=>{
                        return(
                            <TodoItem task={task} key ={index} markAsDone = {markAsDone}/>
                        )
                    })}
                </Stack>
            </Flex>
        </Container>
    )
};

export default MainContainer;