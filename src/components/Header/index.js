import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/22926679?v=4"
        alt="Avatar"
      />
      Eduardo Carvalho
    </User>
  </Container>
);

export default Header;
