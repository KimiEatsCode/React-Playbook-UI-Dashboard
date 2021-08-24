import React from 'react'

import { Flex, FlexItem, Nav, NavItem } from 'playbook-ui'

const LeftHeaderNav = (props) => {
  return (
    <Flex orientation="row">
      <FlexItem>
    <Nav
        link="#"
        orientation="horizontal"
        {...props}
    >
      <NavItem
          link="#"
          text="About"
          {...props}
      />
      <NavItem
          active
          link="#"
          text="Case Studies"
          {...props}
      />
      <NavItem
          link="#"
          text="Service"
          {...props}
      />
      <NavItem
          link="#"
          text="Contacts"
          {...props}
      />
    </Nav>
    </FlexItem>
    </Flex>
  )
}

export default LeftHeaderNav