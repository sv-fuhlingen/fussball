interface Props {
    id: string;
}
/**
 * Fetches data from the Strapi API
 * @param id - The id to fetch from
 * @returns
 */
export default async function fetchApiFussballTeam<T>({
                                              id
                                          }: Props): Promise<T> {

    const url = new URL(`https://api-fussball.de/api/team/${id}`);
    console.log(url.toString());
    const headers = new Headers({
        'x-auth-token': import.meta.env.FUSSBALL_DE_AUTH_TOKEN,
    });

    const res = await fetch(url.toString(), { headers });
    let data = await res.json();


    data = data['data'];

    return data as T;
}
