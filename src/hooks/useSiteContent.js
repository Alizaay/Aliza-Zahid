import { fallbackSite } from "../data/site";

export function useSiteContent() {
  return {
    data: fallbackSite,
    isLoading: false,
    isFetching: false,
    isError: false,
    error: null,
  };
}

export function useSiteData() {
  return {
    ...useSiteContent(),
    site: fallbackSite,
  };
}
