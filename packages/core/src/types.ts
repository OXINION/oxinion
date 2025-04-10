export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Region = {
  id: string;
  name: string;
  center: Coordinates;
  radius: number; // in meters
};

export type EnterExitEvent = 'enter' | 'exit';
