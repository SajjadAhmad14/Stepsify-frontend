import React from "react";
import renderer from "react-test-renderer";
import CaloriesCard from "../components/views/CaloriesCard";

it("renders calories card", () => {
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      id: 1,
      name: "test",
      sex: "Male",
    })
  );
  const tree = renderer.create(<CaloriesCard />);
  expect(tree).toMatchSnapshot();
  sessionStorage.clear();
});
