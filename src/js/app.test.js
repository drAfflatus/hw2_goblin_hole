/**
 * @jest-environment jsdom
 */
import { Game } from "./app";

test("for objects", () => {
  expect(new Game()).toEqual({
    index_goblin: -1,
    field_game: document.querySelector(".hole-game"),
    holeNone: "hole",
    holeGoblin: "hole hole-goblin",
  });
});

// как тестировать динамику ДОМа понятия не приложу , особенно рандомную 
//  прошу понять и простить