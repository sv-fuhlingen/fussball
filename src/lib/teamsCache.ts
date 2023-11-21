// File: lib/teamsCache.ts
import fetchApi from './strapi';
import type Team from '../interfaces/strapi/team';

class TeamsCache {
    private cache: Team[] | null = null;
    private lastFetch: number = 0;
    private cacheDuration = 5 * 60 * 1000; // Cache für 5 Minuten

    async getTeams(): Promise<Team[]> {
        const now = Date.now();

        // Wenn der Cache vorhanden und noch gültig ist
        if (this.cache && now - this.lastFetch < this.cacheDuration) {
            console.log('cache');
            return this.cache;
        }

        try {
            // Daten von der API abrufen
            console.log('call api');

            const teams = await fetchApi<Team[]>({
                endpoint: 'teams?sort=prio&populate[]=image&populate[]=trainers',
                wrappedByKey: 'data',
            });

            if (teams.length > 0) {
                this.cache = teams;
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

export default new TeamsCache();
