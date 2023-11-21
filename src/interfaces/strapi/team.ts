export default interface Team {
    id: number;
    attributes: {
        name: string;
        desc: string;
        ident: string;
        fussballde_id: string;
        prio: number;
        jahrgang: string;
    };
}
