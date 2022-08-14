const octave1 = ["F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2"];
const octave2 = [
  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "b3",
  "Gb3",
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",
];
const octave3 = [
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4",
];
const octave4 = [
  "C5",
  "Db5",
  "D5",
  "Eb5",
  "E5",
  "F5",
  "Gb5",
  "G5",
  "Ab5",
  "A5",
  "Bb5",
  "B5",
];
const octave5 = [
  "C6",
  "Db6",
  "D6",
  "Eb6",
  "E6",
  "F6",
  "Gb6",
  "G6",
  "Ab6",
  "A6",
  "Bb6",
  "B6",
];

const InstrumentList = ["angklung", "bonang", "gambang", "saron"];
const key = [...octave1, ...octave2, ...octave3, ...octave4, ...octave5];

const key_to_note = [
  { from: "C4", to: "Q" },
  { from: "Db4", to: "2" },
  { from: "D4", to: "W" },
  { from: "Eb4", to: "3" },
  { from: "E4", to: "E" },
  { from: "F4", to: "R" },
  { from: "Gb4", to: "5" },
  { from: "G4", to: "T" },
  { from: "Ab4", to: "6" },
  { from: "A4", to: "Y" },
  { from: "Bb4", to: "7" },
  { from: "B4", to: "U" },
  { from: "C5", to: "Z" },
  { from: "Db5", to: "S" },
  { from: "D5", to: "X" },
  { from: "Eb5", to: "D" },
  { from: "E5", to: "C" },
  { from: "F5", to: "V" },
  { from: "Gb5", to: "G" },
  { from: "G5", to: "B" },
  { from: "Ab5", to: "H" },
  { from: "A5", to: "N" },
  { from: "Bb5", to: "J" },
  { from: "B5", to: "M" },
];

export { key, InstrumentList, key_to_note };
