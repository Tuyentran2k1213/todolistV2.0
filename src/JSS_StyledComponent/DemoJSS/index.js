import React, { Component } from 'react'
import { btn, link, text } from '../Components'

export default class DemoJSS extends Component {
  render() {
    const { Button, Btn } = btn;
    const { Link, StyledLink } = link;
    const { TextField } = text;
    return (
      <div>
          <Btn primary fontSizex2>
              ahuhu
          </Btn>

          <Link href='#'>
            ahuhu <p>kuku</p>
          </Link>

          <TextField
          inputColor = 'green'
          />

      </div>
    )
  }
}
