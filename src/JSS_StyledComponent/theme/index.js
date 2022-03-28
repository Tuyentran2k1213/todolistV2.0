import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const configDarkTheme = {
    bg: '#000',
    Color: '#fff'
}

const configLightTheme = {
    bg: '#4992ff99',
    Color: 'black'
}

const configDefault = {
    bg: '#ee4266',
    Color: 'white'
}

export default class Theme extends Component {

    state = {
        configTheme: configDefault,
    }

    handleTheme = (e) => {
        switch (e.target.value * 1) {
            case 1:
                this.setState({configTheme: configDefault});
                break;
            case 2:
                this.setState({configTheme: configLightTheme});
                break;
            case 3:
                this.setState({configTheme: configDarkTheme});
                break;
        }
    }

  render() {

    const DivStyled = styled.div`
    padding: 5%;
    color: ${props => props.theme.Color};
    background-color: ${props => props.theme.bg};
    `

    return (
      <ThemeProvider theme={this.state.configTheme}>
          <DivStyled>
          huhuhuh
        </DivStyled>

        <select onChange={this.handleTheme}>
            <option value="1">Default</option>
            <option value="2">Light</option>
            <option value="3">Dark</option>
        </select>

      </ThemeProvider>
    )
  }
}
