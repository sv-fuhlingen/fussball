export default interface Team {
    id: number;
    attributes: {
        name: string;
        desc: string;
        ident: string;
        fussballde_id: string;
        prio: number;
        jahrgang: string | null;
        image?: {
            data: Image | null;
        };
        trainers?: {
            data: Trainer[];
        };
    };
}
interface Image {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            large: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
    };
}

interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Trainer {
    id: number;
    attributes: {
        name: string;
        telefon: string | null;
        eintrittsdatum: string;
        formatEintrittsdatum: string | null;
        img: string | null;
        lizenz: string | null;
        createdAt: string;
        updatedAt: string;
        image?: {
            data: Image | null;
        };
    };
}
