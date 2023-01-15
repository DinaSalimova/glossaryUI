import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IDefinition } from "../interface/IDefinition";
import { TLink } from "../component/type/TLink";

export const serverApi = createApi({
  reducerPath: "itmo/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/"
  }),
  endpoints: build => ({
    getGlossary: build.query<IDefinition[], void>({
      query: () => ({
        url: "/glossary"
      })
    }),
    getExactGlossaryTerm: build.query<IDefinition, string>({
      query: (term: string) => ({
        url: "/glossary",
        params: {
          term
        }
      })
    }),
    getMindMap: build.query<TLink[], void>({
      query: () => ({
        url: "/mind-map",
      })
    })
  })
});



serverApi