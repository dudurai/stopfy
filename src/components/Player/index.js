import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import Sound from "react-sound";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

import { Creators as PlayerActions } from "../../store/ducks/player";

const Player = ({ player: { currentSong, status }, play, pause }) => (
  <Container>
    {!!currentSong && <Sound url={currentSong.file} playStatus={status} />}

    <Current>
      {currentSong && (
        <>
          <img src={currentSong.thumbnail} alt="Capa" />
          <div>
            <span>{currentSong.title}</span>
            <small>{currentSong.author}</small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!currentSong && status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
            // value={100}
          />
        </ProgressSlider>
        <span>4:21</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        // value={100}
      />
    </Volume>
  </Container>
);

Player.proptype = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
