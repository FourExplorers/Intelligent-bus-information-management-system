import { Proposal } from './domain/proposal';

export const PROPOSALS: Proposal[] = [
  {
    id: 1,
    lineId: 1,
    name: 'the-Route-from-New-Campus-to-Old-Campus',
    oldStations: 'New Campus -> 1 -> 2 -> 3 -> Old Campus',
    newStations: 'New Campus -> 1 -> 4 -> 3 -> Old Campus',
    reason: 'It takes less time to follow the new route rather than the old one'
  },
  {
    id: 2,
    lineId: 2,
    name: 'the-Route-from-Old-Campus-to-New-Campus',
    oldStations: 'Old Campus -> 3 -> 2 -> 1 -> New Campus',
    newStations: 'Old Campus -> 3 -> 4 -> 1 -> New Campus',
    reason: 'It takes less time to follow the new route rather than the old one'
  },
  {
    id: 3,
    lineId: 3,
    name: 'the-Route-from-New-Campus-to-Sky-Tower',
    oldStations: 'New Campus -> 1 -> 2 -> 3 -> Sky Tower',
    newStations: 'New Campus -> 1 -> 4 -> 3 -> Sky Tower',
    reason: 'It takes less time to follow the new route rather than the old one'
  }
];
