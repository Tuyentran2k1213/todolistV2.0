import { CHANGE_THEME, ADD_TASK, CHECK_TASK, DELE_TASK, EDIT_TASK, UPDATE_TASK, SAVE_LIST, UNSAVE_LIST } from "../constant";
import ArrTheme from "../../Themes";
import localSer from '../../SaveToLocalStorange';

const initialState = localSer.getLocal() ? localSer.getLocal() : ({
    tasks: [
        {
            name: 'task 1',
            id: 'task 1',
            status: true,
        },
        {
            name: 'task 2',
            id: 'task 2',
            status: false,
        },
        {
            name: 'task 3',
            id: 'task 3',
            status: true,
        },
        {
            name: 'task 4',
            id: 'task 4',
            status: false,
        },
    ],
    theme: ArrTheme[0].Theme,
    chooseTask: {
        name: '',
        id: '',
    }
});

const reducer = (state=initialState, action) => {
    let newState;
    switch(action.type){
        case CHANGE_THEME:
            let chooseTheme = ArrTheme.find(theme => theme.value == action.payload);
            newState = {...state,
            theme: chooseTheme.Theme};
            break;
        case ADD_TASK:
            if(action.payload != ''){
                newState = {...state,
                    tasks: [...state.tasks, {
                        name: action.payload,
                        id: action.payload,
                        status: true,
                    }]};
            } else {
                alert('Bạn phải nhập công việc vào đây');
            }
            break;
        case CHECK_TASK:
            const taskList = state.tasks;
            const propState = taskList.findIndex(task => task.id == action.payload);
            taskList[propState].status = false;
            newState = {...state, tasks: [...taskList]};
            break;
        case DELE_TASK:
            const newTask = [...state.tasks];
            // const taskIndex = newTask.findIndex(task => task.id == action.payload);
            // newTask.splice(taskIndex, 1);
            const oldTask = newTask.filter(task => task.id != action.payload); 
            newState = {...state, tasks: [...oldTask]};
            break;
        case EDIT_TASK:
            newState = { ...state, chooseTask: {...action.payload}};
            break;
        case UPDATE_TASK:
            const tasks = [...state.tasks];
            const taskNum = tasks.findIndex(task => task.id == state.chooseTask.id);
            tasks[taskNum].name = action.payload;
            newState = {...state, tasks: tasks};
            break;
        case SAVE_LIST:
            localSer.setLocal(state);
            newState = {...state};
            break;
        case UNSAVE_LIST:
            localSer.deleLocal();
            newState = { ...state };
            break;
        default:
            newState = {...state};
    }

    return newState;
}

export default reducer;