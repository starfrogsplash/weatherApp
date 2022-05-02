import {Icon} from "../components/Icon";
import { render, screen } from "@testing-library/react";

test("image tag displays", () => {
  render(<Icon iconId={803} iconUrl={"http://openweathermap.org/img/wn/04d@2x.png"}/>);
  const spanElement = screen.getByRole('img');
  expect(spanElement).toBeInTheDocument();
});

