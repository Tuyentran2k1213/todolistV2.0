import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTheme, addTask, checkTask, deleTask, editTask, updateTask } from './store/action' 
import { BiPlusMedical } from 'react-icons/bi'
import { FaCheck, FaTrashAlt, FaUpload, FaEdit } from 'react-icons/fa'
import styled, { ThemeProvider } from 'styled-components'
import ArrTheme from "./Themes";
import { table } from './Themes'
import Container from './Container'
import { Dropdown, Heading, Textfield, Button } from './Component'

class Todolist extends Component {


  state = {
    task: '',
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
            className='ml-2'><FaUpload/> Update task</Button>) : (<Button className='ml-2' 
            onClick={() => {
              this.props.addTask(this.state.task);
              this.setState({task: ''});
              console.log(this.type);
              }}><BiPlusMedical/> Add task</Button>) }
        <hr />
        <Heading>Task to do</Heading>
        <table.Table>
          <table.Thead>
            {this.props.tasks.map(task => {
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
          {this.props.tasks?.map(task => {
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
  changeTheme: value => {
    dispatch(changeTheme(value))
  },
  addTask: value => {
  dispatch(addTask(value))
  },
  checkTask: value => {
    dispatch(checkTask(value));
  },
  deleTask: value => {
    dispatch(deleTask(value));
  },
  editTask: value => {
    dispatch(editTask(value));
  },
  updateTask: value => {
    dispatch(updateTask(value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);