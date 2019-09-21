import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://raru.co.za/cover/2015/05/26/2600812-l.jpg"
          alt="Capa"
        />
        <strong>The best rock All time</strong>
        <p>Listen this best playlist</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://raru.co.za/cover/2015/05/26/2600812-l.jpg"
          alt="Capa"
        />
        <strong>The best rock All time</strong>
        <p>Listen this best playlist</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://raru.co.za/cover/2015/05/26/2600812-l.jpg"
          alt="Capa"
        />
        <strong>The best rock All time</strong>
        <p>Listen this best playlist</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://raru.co.za/cover/2015/05/26/2600812-l.jpg"
          alt="Capa"
        />
        <strong>The best rock All time</strong>
        <p>Listen this best playlist</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
