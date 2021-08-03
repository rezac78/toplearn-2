import { combineReducers } from "redux";
import { courseReducers } from './course';
import { coursesReducers } from './courses';
import { userReducers } from './user';


export const Reducers = combineReducers({
    course: courseReducers,
    courses: coursesReducers,
    user: userReducers
})