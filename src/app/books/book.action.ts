import {createAction,props} from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook=createAction('[Book] Add Book',props<Book>());
export const AddBookSuccess=createAction('[Book] Added book successfully',props<Book>());
export const AddBookFaliure=createAction('[Book] Added book failed',props<{error:any}>());


export const RemoveBook=createAction('[Book] Remove Book',props<{bookId:string}>());
export const updateBook=createAction('[Book] update Book',props<{bookId:string}>());



