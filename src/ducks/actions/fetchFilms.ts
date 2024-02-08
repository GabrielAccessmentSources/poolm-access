import { createAsyncThunk } from "@reduxjs/toolkit";

import { gql } from "@apollo/client";

import client from "../../config/apollo";

export const fetchFilms = createAsyncThunk("films/fetchFilms", async() => {
    try{
        const { data } = await client.query({
            query: gql`
                query {
                  allFilms {
                    films {
                      title
                    }
                  }
                }
          `,
        });

        return data?.allFilms?.films;
    } catch (exception) {
        console.log("Poolm ERROR fetching data", exception);
        throw exception;
    }
});
