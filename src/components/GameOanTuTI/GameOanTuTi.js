import React, { Component } from 'react';
import styles from './GameOanTuTi.module.css';

import {connect} from 'react-redux';

class GameOanTuTi extends Component {
  showChonControl = () => {
    return this.props.chonArray.map((chon, index) => {
      return (
        <img src={chon.img} alt={chon.alt} key={index} width="80" height="80" onClick={() => {this.props.handleClickDatCuoc(chon)}} />
      )
    })
  }
  showPlayerChon = () => {
    return (
      <img src={this.props.player.img} alt={this.props.player.alt} width="40" height="40" className={styles.chonShow} />
    )
  }
  showComputerChon = () => {
    return (
      <img src={this.props.computer.img} alt={this.props.computer.alt} width="40" height="40" className={styles.chonShow} />
    )
  }

  render() {
    return (
      <div className={styles.game}>
        <div className={styles.controlGame}>
          <div className={styles.playerOne}>
            <div className={styles.chonShowParent}>
              <figure style={{width: '40', height: '40px'}}>
                {this.showPlayerChon()}
              </figure>
            </div>
            <img src="../img/player.png" alt="player-iron-man" width="250" height="250" style={{marginTop: "200px"}} />
            <div className={styles.chonControl}>
              {this.showChonControl()}
            </div>
          </div>
          <div className={styles.resultGame}>
            <h3 className="text-warning display-4">{this.props.title}</h3>
            <p className="text-success">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></p>
            <p className="text-success">Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></p>
            <button className="btn btn-success" onClick={() => {this.props.handlePlayGame()}}>Play Game</button>
          </div>
          <div className={styles.playerTwo}>
            <figure>
              {this.showComputerChon()}
            </figure>
            <img src="../img/playerComputer.png" alt="player-computer" width="250" height="250" style={{marginTop: "200px"}} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.GameOanTuTiReducer.title,
    soBanThang: state.GameOanTuTiReducer.soBanThang,
    soBanChoi: state.GameOanTuTiReducer.soBanChoi,
    chonArray: state.GameOanTuTiReducer.chonArray,
    player: state.GameOanTuTiReducer.player,
    computer: state.GameOanTuTiReducer.computer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickDatCuoc: (chon) => {
      let action = {
        type: "DAT_CUOC",
        chon
      }
      dispatch(action)
    },
    handlePlayGame: () => {
      let action = {
        type: "PLAY_GAME"
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);
