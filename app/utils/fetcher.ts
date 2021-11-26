interface FetcherInterface {
  url: string
}
export const fetcher = async <ReturnData>({ url }: FetcherInterface) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data as ReturnData)
}
