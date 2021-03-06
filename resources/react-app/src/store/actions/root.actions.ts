export const UPDATE_CURRENT_PATH = 'UPDATE_CURRENT_PATH';

export function updateCurrentPath(area: string, subArea: string): IUpdateCurrentPathActionType {
  return { type: UPDATE_CURRENT_PATH, area, subArea };
}

interface IUpdateCurrentPathActionType {
  type: string;
  area: string;
  subArea: string;
}
