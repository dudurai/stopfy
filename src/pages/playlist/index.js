import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

let mapa = [
  { a: "a" },
  { a: "a" },
  { a: "a" },
  { a: "a" },
  { a: "a" },
  { a: "a" }
];

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://raru.co.za/cover/2015/05/26/2600812-l.jpg" alt="Capa" />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 musicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duracao" />
        </th>
      </thead>

      <tbody>
        {mapa.map(item => (
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:49</td>
          </tr>
        ))}
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
