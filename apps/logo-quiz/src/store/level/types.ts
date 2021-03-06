import { Level } from '@logo-quiz/models';

export const REQUEST_LEVEL = 'REQUEST_LEVEL';
export const REQUEST_LEVEL_SUCCESS = 'REQUEST_LEVEL_SUCCESS';
export const REQUEST_LEVEL_ERROR = 'REQUEST_LEVEL_ERROR';
export const FLUSH_LEVEL = 'FLUSH_LEVEL';

export interface LevelState {
  level: Partial<Level>;
  isLoading: boolean;
}

interface RequestLevelAction {
  type: typeof REQUEST_LEVEL;
  id: string;
}

interface RequestLevelSuccessAction {
  type: typeof REQUEST_LEVEL_SUCCESS;
  level: Level;
}

interface FlushLevelAction {
  type: typeof FLUSH_LEVEL;
}

export type LevelActionTypes = RequestLevelAction | RequestLevelSuccessAction | FlushLevelAction;
