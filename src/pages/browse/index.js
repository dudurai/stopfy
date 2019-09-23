import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, Title, List, Playlist } from "./styles";

import Loading from "../../components/Loading";

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string
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
        <Title>Navegar {loading && <Loading />}</Title>

        <List>
          {playlists.map(item => (
            <Playlist key={item.id} to={`/playlists/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists.data,
  loading: state.playlists.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
