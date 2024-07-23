import { USER_TYPE_NAMES } from '/src/datas/usertypes';

export function getUserIdString(val) {
	return '#'+val;
}

export function getUserTypeName(val) {
	return USER_TYPE_NAMES[val];
}