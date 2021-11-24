function superbowlWin(item) {
  let win = item.find((item) => item.result === "W");
  if (win && win.result == "W") {
    return win.year;
  } else {
    return undefined;
  }
}
