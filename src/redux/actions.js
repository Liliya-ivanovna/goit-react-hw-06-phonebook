import { createAction } from "@reduxjs/toolkit";

//console.log(addTask("Learn Redux Toolkit"));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

export const addContact = createAction("tasks/addTask");
export const deleteContact = createAction("tasks/deleteTask");
//export const toggleCompleted = createAction("tasks/toggleCompleted");
export const addFilter = createAction("filter/setStatusFilter");