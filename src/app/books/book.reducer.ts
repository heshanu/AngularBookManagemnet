import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook,AddBookSuccess,AddBookFaliure } from "./book.action";
import { Book } from "../models/book";

export const initalState:Book[]=[];

export const BookReducer=createReducer(
    initalState,
    on(AddBook,(state)=>{return state}),
    on(AddBookSuccess,(state,{id,title,author})=>[...state,{id,title,author}]),
    on(AddBookFaliure,(state,{error})=>{
        console.error(error);
        return state;       
    }),

    on(RemoveBook,(state,{bookId})=>state.filter(book=>book.id!=bookId)),


    


);
