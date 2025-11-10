import { useQuery } from "@tanstack/react-query";
import { fetchInitialTokens } from "@/lib/api";
import type { Token } from "@/store/tokenSlice";
import { upsertTokens } from "@/store/tokenSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export function useTokens() {
  const dispatch = useAppDispatch();

  const query = useQuery<Token[], Error>({
    queryKey: ["tokens"],
    queryFn: fetchInitialTokens,
  });

  useEffect(() => {
    if (query.data) dispatch(upsertTokens(query.data));
  }, [query.data, dispatch]);

  return query;
}
