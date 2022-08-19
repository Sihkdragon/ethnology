import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const isLetterDisplayed = atom(true);
const SampleActive = atomWithStorage("EthnologySample", "saron");
const isSustainON = atomWithStorage("EthnologySustain", true);
const Volume = atomWithStorage("EthnologyVolume", -4);

const KeyPress = atom("");
export { SampleActive, isLetterDisplayed, isSustainON, Volume, KeyPress };
