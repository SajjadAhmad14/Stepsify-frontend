import React from "react";
import renderer from "react-test-renderer";
import Nav from "../components/views/Nav";

it("render navigation bar", () => {
  const tree = renderer.create(<Nav />);
  expect(tree).toMatchSnapshot();
});
