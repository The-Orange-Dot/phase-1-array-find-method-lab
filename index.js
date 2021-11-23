function superbowlWin(item) {
  let win = item.find(item => item.result === "W")
  try{
  if (win.result == "W") {
  return win.year
}
  } catch(error) {
    return undefined;
  }
}
