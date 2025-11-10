import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Token as ApiToken } from "@/lib/api";

// Re-export the API Token shape as the store Token for a single source of truth
export type Token = ApiToken;

interface TokenState {
  tokens: Token[];
}

const initialState: TokenState = { tokens: [] };

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    upsertTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
    },
    updateTokenPrice: (
      state,
      action: PayloadAction<{ address: string; price: number }>
    ) => {
      const token = state.tokens.find((t) => t.address === action.payload.address);
      if (token) token.price = action.payload.price;
    },
  },
});

export const { upsertTokens, updateTokenPrice } = tokenSlice.actions;
export default tokenSlice.reducer;
