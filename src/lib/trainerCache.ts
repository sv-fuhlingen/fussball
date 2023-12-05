// File: lib/teamsCache.ts
import fetchApi from './strapi';
import type {Trainer} from "../interfaces/strapi/team.ts";


class TrainerCache {
    private cache: Trainer[] | null = null;
    private lastFetch: number = 0;
    private cacheDuration = 5 * 60 * 1000; // Cache für 5 Minuten

    async getTrainers(): Promise<Trainer[] | null> {
        const now = Date.now();

        // Wenn der Cache vorhanden und noch gültig ist
        if (this.cache && now - this.lastFetch < this.cacheDuration) {
            console.log('cache');
            return this.cache;
        }

        try {
            // Daten von der API abrufen
            console.log('call api');

            const trainer = await fetchApi<Trainer[]>({
                endpoint: 'trainers?populate[]=image',
                wrappedByKey: 'data',
            });


            if (trainer.length > 0) {
                this.cache = trainer;
                this.lastFetch = now;
            }
            return this.cache;
        } catch (error) {
            console.error("Fehler beim Abrufen der Teams:", error);
            // Bei einem Fehler den alten Cache zurückgeben, falls vorhanden
            if (this.cache) {
                return this.cache;
            }
        }

        // Wenn kein Cache vorhanden ist, leere Liste zurückgeben
        return [];
    }
}

export default new TrainerCache();
