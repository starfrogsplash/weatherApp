import { Widget } from "../components/Widget";
import { render, screen } from "@testing-library/react";

test("Today text renders", () => {
  const sys = {
    sunrise: 167317236,
    country: 'GB'
  }
  const main = {
    humidity: 70,
    temp: 20
  }
  const weather = [{
    description: 'partly cloudy',
    icon: `04d`
  }]
  const wind = {
    speed: 16
  }
  
  const data = {
    sys,
    main,
    weather,
    wind,
    name: "London"
  }

  render(<Widget data={data}/>);
  const spanElement = screen.getByText(/Today/i);
  expect(spanElement).toBeInTheDocument();
});

test("displays correct state data", () => {
  const sys = {
    sunrise: 167317236,
    country: 'GB'
  }
  const main = {
    humidity: 70,
    temp: 20
  }
  const weather = [{
    description: 'partly cloudy',
    icon: `04d`,
    id: 803
  }]
  const wind = {
    speed: 16
  }
  
  const data = {
    sys,
    main,
    weather,
    wind,
    name: "London"
  }

  render(<Widget data={data}/>);
  const humidityState = screen.getByText(/70/i);
  const windState = screen.getByText(/16/i);
  const weatherDescription = screen.getByText(/partly cloudy/i);

  expect(humidityState).toBeInTheDocument();
  expect(windState).toBeInTheDocument();
  expect(weatherDescription).toBeInTheDocument();
});

