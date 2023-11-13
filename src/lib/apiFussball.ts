interface Props {
    id: string;
    prevGames?: boolean;
    wrappedByList?: boolean;
}
/**
 * Fetches data from the Strapi API
 * @param id - The id to fetch from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApiFussball<T>({
                                              id,
                                              prevGames,
                                              wrappedByList,
                                          }: Props): Promise<T> {
    let endpoint = 'next_games';
    if(prevGames) {
        endpoint = 'prev_games';
    }

    const url = new URL(`https://api-fussball.de/api/club/${endpoint}/${id}`);

    const headers = new Headers({
        'x-auth-token': import.meta.env.FUSSBALL_DE_AUTH_TOKEN,
    });

    const res = await fetch(url.toString(), { headers });
    let data = await res.json();


    data = data['data'];


    if (wrappedByList) {
        data = data[0];
    }

    return data as T;
}
