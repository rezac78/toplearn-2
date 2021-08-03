import { createStore, compose, applyMiddleware } from 'redux';
import { Reducers } from './../reducers/index';
import thunk from 'redux-thunk';
import { getAllCourses } from './../actions/courses';

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

store.dispatch(getAllCourses());


store.subscribe(() => console.log(store.getState()))