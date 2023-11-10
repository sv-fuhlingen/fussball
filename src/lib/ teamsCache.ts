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

        console.log('no cache');

        try {
            // Daten von der API abrufen
            const teams = await fetchApi<Team[]>({
                endpoint: 'teams?sort=prio',
                wrappedByKey: 'data',
            });

            // Überprüfen, ob die Antwort mindestens ein Team enthält
            if (teams.length > 0) {
                // Cache aktualisieren
                this.cache = teams;
                this.lastFetch = now;
            } else if (this.cache) {
                // Wenn keine Teams zurückgegeben werden, aber ein Cache vorhanden ist
                return this.cache;
            }
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
