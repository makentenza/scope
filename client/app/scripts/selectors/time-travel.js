import { createSelector } from 'reselect';

import { isResourceViewModeSelector } from '../selectors/topology';


export const showingTimeTravelSelector = createSelector(
  [
    state => state.getIn(['capabilities', 'report_persistence'], false),
    isResourceViewModeSelector,
  ],
  (hasReportPersistence, isResourceViewMode) => hasReportPersistence && !isResourceViewMode
);

export const isPausedSelector = createSelector(
  [
    state => state.get('updatePausedAt')
  ],
  updatePausedAt => updatePausedAt !== null
);

export const isWebsocketQueryingCurrentSelector = createSelector(
  [
    state => state.get('websocketQueryMillisecondsInPast')
  ],
  websocketQueryMillisecondsInPast => websocketQueryMillisecondsInPast === 0
);
