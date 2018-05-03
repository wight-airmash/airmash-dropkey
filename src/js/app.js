const HOTKEY = 'y';
const GAME_TYPE = {
  CTF: 2,
};
const isExists = v => typeof v !== 'undefined';
const isChatOpen = () => {
  const chatInput = document.querySelector('#chatinput');

  return (
    chatInput !== null && !(chatInput.style.display === 'none' || chatInput.style.display === '')
  );
};

document.addEventListener('keydown', e => {
  if (
    e.key === HOTKEY &&
    isExists(window.game) &&
    window.game.gameType === GAME_TYPE.CTF &&
    isExists(window.Network) &&
    !isChatOpen()
  ) {
    window.Network.sendCommand('drop', '');
  }
});
