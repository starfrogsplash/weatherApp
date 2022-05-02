import { act, fireEvent, render, screen } from '@testing-library/react';

import { App } from '../App';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

type TestElement = Document | Element | Window | Node;

const hasInputValue = (e: TestElement, inputValue: string) => {
  return screen.getByDisplayValue(inputValue) === e;
};

test('description text renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter City name for weather/i);
  expect(linkElement).toBeInTheDocument();
});

test('when Form is submitted axios get is called', async () => {
  const sys = {
    sunrise: 167317236,
    country: 'GB',
  };
  const main = {
    humidity: 70,
    temp: 20,
  };
  const weather = [
    {
      description: 'partly cloudy',
      icon: `04d`,
    },
  ];
  const wind = {
    speed: 16,
  };

  const data = {
    sys,
    main,
    weather,
    wind,
    name: 'London',
  };

  render(<App />);
  mockedAxios.get.mockResolvedValue({ data: data });
  await act(async () => {
    fireEvent.click(screen.getByText(/Submit/i));
  });
  expect(axios.get).toHaveBeenCalled();
});

test('when Submit is pressed handleSubmit should be called', () => {
  const handleSubmit = jest.fn(e => e.preventDefault());
  render(
    <form onSubmit={handleSubmit}>
      <label htmlFor="encodInput">encoded message: </label>
      <input type="submit" value="Submit" />
    </form>,
  );

  fireEvent.click(screen.getByText(/Submit/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test('input value is correctly displayed', () => {
  render(<App />);
  const input = screen.getByLabelText('cityInput');

  fireEvent.change(input, { target: { value: 'London' } });
  expect(hasInputValue(input, 'London')).toBe(true);
});
