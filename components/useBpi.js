import useSWR from 'swr';
function useBpi() {
    const {data, error} = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json');
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
export default useBpi;