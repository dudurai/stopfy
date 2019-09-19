import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/">Browser</a>
        </li>
        <li>
          <a href="/">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Your Library</span>
        </li>
        <li>
          <a href="/">Your Daily Mix</a>
        </li>
        <li>
          <a href="/">Recents Played</a>
        </li>
        <li>
          <a href="/">Songs</a>
        </li>
        <li>
          <a href="/">Albuns</a>
        </li>
        <li>
          <a href="/">Artists</a>
        </li>
        <li>
          <a href="/">Stations</a>
        </li>
        <li>
          <a href="/">Local Files</a>
        </li>
        <li>
          <a href="/">Videos</a>
        </li>
        <li>
          <a href="/">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="/">The best Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add Playlist" />
      Adicionar Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
