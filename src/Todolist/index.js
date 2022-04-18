import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux'
import { changeTheme, addTask, checkTask, deleTask, editTask, updateTask, saveTasks, unsaveTask } from './store/action' 
import { BiPlusMedical } from 'react-icons/bi'
import { FaCheck, FaTrashAlt, FaUpload, FaEdit, FaSearch, FaSave } from 'react-icons/fa'
import { RiDeleteBack2Fill } from 'react-icons/ri' 
import { ThemeProvider } from 'styled-components'
import ArrTheme from "./Themes";
import { table } from './Themes'
import Container from './Container'
import { Dropdown, Heading, Textfield, Button } from './Component'
import localSer from './SaveToLocalStorange';

class Todolist extends Component {


  state = {
    task: '',
    search: '',
    isUpdate: false,
  }

  handleDelete = value => {
    this.props.deleTask(value);
  }

  // componentWillReceiveProps(newprop) {
  //   this.setState({task: newprop.chooseTask.name})
  // }
  // static getDerivedStateFromProps(newProps, currentState) {

  //   let newState = {...currentState, task: newProps.chooseTask.name}
  //   return newState;
  //   // null sẽ trả về state cũ
  //   // return null
  // }

  render() {
    // console.log(this.state);

    const searchChange = e => {
      this.setState({search: e.target.value});

    }

    const newPropsTasks = this.props.tasks?.filter(task => {
      if(this.state.search == ''){
            return task;
          }
          if(task.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return task;
              }
    })

    

    // ?.filter(task => {
    //   if(this.state.search == ''){
    //     return task;
    //   }
    //   if(task.toLowerCase().includes(this.state.search.toLowerCase())){
    //     return task;
    //   }
    // })

    return (
    <ThemeProvider theme={this.props.themeValue}>
      <Container className='w-50'>
        <Dropdown onChange={e => {
          this.props.changeTheme(e.target.value);
        }}>
            {ArrTheme.map(propsTheme => (
              <option key={propsTheme.value} value={propsTheme.value}>{propsTheme.name}</option>
            ))}
        </Dropdown>
        <Heading>
            To do list
        </Heading>

        <div className='flex flex-column'>
        
        <div className='flex'>
        <Textfield
        onChange={e => {
          window.document.title = e.target.value;
          this.setState({task: e.target.value})
        }}
        id='textField'
        name='task' label='Task name'
        value={this.state.task}
        />

        {this.state.isUpdate ? (<Button
            onClick={() => {
              this.setState({isUpdate: false}, this.props.updateTask(this.state.task));
              this.setState({task: ''});
            }}
            ><FaUpload/> Update task</Button>) : (<Button  
            onClick={() => {
              this.props.addTask(this.state.task);
              this.setState({task: ''});
              }}><BiPlusMedical/> Add task</Button>) }
        </div>
              
        </div>

        <hr />

        <div>
              <Textfield
        onChange={searchChange}
        id='textField'
        name='task' label={<div><FaSearch/> Search Task</div>}
        value={this.state.search}
        />

        <Button 
        onClick={() => {
          this.props.saveTasks();
          message.loading('saving', 1)
            .then(() => message.success('save done'))
        }}>
          <FaSave/>
              SAVE
        </Button>

        <Button
        onClick={() => {
          this.props.unSaveTasks();         
          message.loading('delete', 1)
            .then(() => message.success('unsaved data in local'))
        }}
        >
              <RiDeleteBack2Fill/>
              UNSAVE
        </Button>
              </div>

        <hr/>
        <Heading>Task to do</Heading>
        <table.Table>
          <table.Thead>
            {newPropsTasks?.map(task => {
              if(task.status){
                return (
                  <table.Tr key={task.id}>
                  <table.Th>
                    {task.name} 
                  </table.Th>
                  <table.Th className='text-right'>
                    <Button className='ml-1' onClick={() => {
                      this.setState({isUpdate: true}, this.props.editTask({...task}))
                    }}><FaEdit/></Button>
                    <Button className='ml-1' onClick={() => this.props.checkTask(task.id)}><FaCheck/></Button>
                    <Button className='ml-1' onClick={() => {this.handleDelete(task.id)}}><FaTrashAlt/></Button>
                  </table.Th>
                </table.Tr>
                )
              }
            })}
          </table.Thead>
        </table.Table>
        <hr />
        <Heading>Task complete</Heading>
        <table.Table>
          <table.Thead>
          {newPropsTasks?.map(task => {
              if(!task.status){
                return (
                  <table.Tr key={task.id}>
                  <table.Th>
                    {task.name} 
                  </table.Th>
                  <table.Th className='text-right'>
                    <Button className='ml-1' onClick={() => {this.handleDelete(task.id)}}><FaTrashAlt/></Button>
                  </table.Th>
                </table.Tr>
                )
              }
            })}
          </table.Thead>
        </table.Table>
      </Container>
    </ThemeProvider>
    )
  }

  componentDidUpdate(prevProps, preState) {
    if(prevProps.chooseTask.id != this.props.chooseTask.id){
      this.setState({task: this.props.chooseTask.name});
      document.getElementById('textField').focus();
    }
  }

}

const mapStateToProps = state => ({
  themeValue: state.reducer.theme,
  tasks: state.reducer.tasks,
  chooseTask: state.reducer.chooseTask,
})

const mapDispatchToProps = dispatch => ({
  changeTheme(value) {
    dispatch(changeTheme(value))
  },
  addTask(value) {
  dispatch(addTask(value))
  },
  checkTask(value) {
    dispatch(checkTask(value));
  },
  deleTask(value) {
    dispatch(deleTask(value));
  },
  editTask(value) {
    dispatch(editTask(value));
  },
  updateTask(value) {
    dispatch(updateTask(value));
  },
  saveTasks() {
    dispatch(saveTasks())
  },
  unSaveTasks() {
    dispatch(unsaveTask())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);