const addList = document.getElementById("list");

const lfcPlayer = [
  {
    name: "Mo Salah",
    number: "11",
    position: "Winger"
  },
  {
    name: "Roberto Firmino",
    number: "9",
    position: "Striker"
  },
  {
    name: "Virgil van Dijk",
    number: "4",
    position: "Defender"
  }
];

const displayPlayer = () => {
  addList.innerHTML = "";

  lfcPlayer.forEach((player, index) => {
    const { name, number, position } = player;

    addList.innerHTML += `<li>${name}, ${position}, ${number} <span onclick = "deletePlayer(${index})"><img src="./image/x-icon.png" alt="X" height="24px" width="24px"></span></li>`;
  });
};
displayPlayer();

const addPlayers = () => {
  let playerName = document.getElementById("footballPlayerName").value;
  let playerNumber = document.getElementById("footballPlayerNumber").value;
  let playerPosition = document.getElementById("footballPlayerPosition").value;
  const newLfcPlayer = {
    name: playerName,
    number: playerNumber,
    position: playerPosition
  };
  lfcPlayer.push(newLfcPlayer);
  displayPlayer();
  document.getElementById("footballPlayerName").value = "";
  document.getElementById("footballPlayerPosition").value = "";
  document.getElementById("footballPlayerNumber").value = "";
};
addButton.onclick = addPlayers;

const deletePlayer = index => {
  lfcPlayer.splice(index, 1);
  displayPlayer();
};

const searchPlayer = () => {
  const filterName = document.getElementById("searchText").value;
  const filtered = lfcPlayer.filter(search => search.name == filterName);
  console.log(filtered);
  addList.innerHTML = "";

  filtered.forEach((player, index) => {
    const { name, number, position } = player;

    addList.innerHTML += `<li>${name}, ${position}, ${number} <span onclick = "deletePlayer(${index})"><img src="./image/x-icon.png" alt="X" height="24px" width="24px"></span></li>`;
  });
};
searchButton.onclick = searchPlayer;
