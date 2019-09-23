import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";
import Loading from "../Loading";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })
    )
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { playlists, loading } = this.props;

    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Browser</Link>
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
              {loading && <Loading />}
            </li>
            {playlists.map(item => (
              <li key={item.id}>
                <Link to={`playlists/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add Playlist" />
          Adicionar Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

const mapStateToProps = state => ({
  playlists: state.playlists.data,
  loading: state.playlists.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
