const initialState = {
  title: "I'm iron man, i love you 3000 !!",
  soBanThang: 0,
  soBanChoi: 0,
  chonArray: [
    {id: 1, img: "../img/keo.png", alt: "keo"},
    {id: 2, img: "../img/bua.png", alt: "bua"},
    {id: 3, img: "../img/bao.png", alt: "bao"},
  ],
  computer: {
    id: 1, img: "../img/keo.png", alt: "keo"
  },
  player: {
    id: 2, img: "../img/bua.png", alt: "bua"
  }
}

const GameOanTuTiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.player = action.chon;
      state = {...state}
      return {...state}
    case "PLAY_GAME" :
      const idComputer = Math.floor(Math.random() * 3 + 1);
      console.log("🚀 ~ file: GameOanTuTiReducer.js ~ line 26 ~ GameOanTuTiReducer ~ id", id)
      switch (idComputer) {
        case 1:
          state.computer.id = idComputer;
          state.computer.img = "../img/keo.png"
          break;
        case 2:
          state.computer.id = idComputer;
          state.computer.img = "../img/bua.png"
          break;
        case 3:
          state.computer.id = idComputer;
          state.computer.img = "../img/bao.png"
          break;
        default:
          console.log("Không có");
          break;
      }
      
      return {...state}
    default:
      return {...state}
  }
}

export default GameOanTuTiReducer;