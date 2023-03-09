import { describe, it } from "vitest";
import wordFrequency from "../src/index";

describe.concurrent("wordFrequency", () => {
  it("test1, basic test", async ({ expect }) => {
    expect(wordFrequency("hello world")).toEqual({ hello: 1, world: 1 });
  });
  it("test2, basic test 2", async ({ expect }) => {
    expect(wordFrequency("hello world and hello life")).toEqual({
      hello: 2,
      world: 1,
      and: 1,
      life: 1,
    });
  });
  it("test3, no argument case sensitive test", async ({ expect }) => {
    expect(wordFrequency("hello world Hello World")).toEqual({
      hello: 1,
      world: 1,
      Hello: 1,
      World: 1,
    });
  });
  it("test4, case insensitive test", async ({ expect }) => {
    expect(wordFrequency("hello world Hello World", false)).toEqual({
      hello: 2,
      world: 2,
    });
  });
  it("test5, all lowercases test", async ({ expect }) => {
    expect(wordFrequency("hello world Hello World", true, "lowercase")).toEqual(
      {
        hello: 2,
        world: 2,
      }
    );
  });
  it("test6, all uppercases test", async ({ expect }) => {
    expect(wordFrequency("hello world Hello World", true, "uppercase")).toEqual(
      {
        HELLO: 2,
        WORLD: 2,
      }
    );
  });
  it("test7, punctuations matter", async ({ expect }) => {
    expect(
      wordFrequency("hello world, Hello World", true, "normal", false)
    ).toEqual({
      hello: 1,
      "world,": 1,
      Hello: 1,
      World: 1,
    });
  });
  it("test8, letter is more important than caseSensitive", async ({
    expect,
  }) => {
    expect(
      wordFrequency("hello world Hello World", false, "uppercase")
    ).toEqual({
      HELLO: 2,
      WORLD: 2,
    });
  });
});
