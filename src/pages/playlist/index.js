import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";

import { Container, Header, SongList, SongItem } from "./styles";
import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    playlist: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string
        })
      )
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number
    })
  };

  state = {
    selectedSong: null
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const {
      getPlaylistDetailsRequest,
      match: {
        params: { id }
      }
    } = this.props;
    getPlaylistDetailsRequest(id);
  };

  renderPlaylistDetails = () => {
    const { playlist, currentSong, loadSong } = this.props;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt="Capa" />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist && playlist.title}</h1>
            <p>
              {playlist && playlist.songs ? playlist.songs.length : 0} musicas
            </p>

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Titulo</th>
              <th>Artista</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="Duracao" />
              </th>
            </tr>
          </thead>

          <tbody>
            {playlist && playlist.songs ? (
              playlist.songs.map(item => (
                <SongItem
                  key={item.id}
                  onClick={() => {
                    this.setState({ selectedSong: item.id });
                  }}
                  onDoubleClick={() => loadSong(item, playlist.songs)}
                  selected={this.state.selectedSong === item.id}
                  playing={currentSong && currentSong.id === item.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.album}</td>
                  <td>3:49</td>
                </SongItem>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Nenhuma musica cadastrada</td>
              </tr>
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderPlaylistDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlistDetails.data,
  loading: state.playlistDetails.loading,
  currentSong: state.player.currentSong
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
