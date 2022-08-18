import flightAirportInfoType from "./flightAirportInfoType";
import flightOperationType from "./flightOperationType";

interface flightLegType {
  origin: flightAirportInfoType;
  destination: flightAirportInfoType;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  timeDeltaInDays: number;
  stopCount: number;
  isSmallestStops: boolean;
  operations: flightOperationType[]; // 항상 요소 2개 [출발항공,도착항공]
  airportChangeIn: string[];
  segments: flightLegType[];
}

export default flightLegType;
