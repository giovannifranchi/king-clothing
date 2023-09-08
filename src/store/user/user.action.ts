import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { UserState } from "./user.reducer";
import { UserData } from "../../utils/firebase/firebase.utils";
import { ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { User } from "firebase/auth";
import { withMatcher } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = withMatcher((user: UserData | null): ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData | null> => (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)));