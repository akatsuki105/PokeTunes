import { LocationsGen2 } from './gen2';
import { LocationsGen3 } from './gen3';

const NullLocations = {
  en: [],
  ja: [],
} as const;

export const Locations = {
  Invalid: NullLocations,
  RB: NullLocations,
  YW: NullLocations,
  GS: LocationsGen2,
  C: LocationsGen2,
  RS: LocationsGen3,
  FR: LocationsGen3,
  LG: LocationsGen3,
  E: LocationsGen3,
} as const;
