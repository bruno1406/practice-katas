function songDecoder(song) {
  return song
    .split("WUB")
    .filter((letter) => letter !== "")
    .join(" ");
}
