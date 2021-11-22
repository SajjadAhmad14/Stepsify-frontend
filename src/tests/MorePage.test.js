import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import MorePage from "../components/views/MorePage";

it("render navigation bar", () => {
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      id: 1,
      name: "test",
      sex: "Male",
    })
  );
  const tree = renderer.create(
    <MemoryRouter>
      <MorePage />
    </MemoryRouter>
  );
  expect(tree).toMatchSnapshot();
});
