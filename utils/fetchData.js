export default async function getChessStats(username) {
    const url = `https://api.chess.com/pub/player/${username}/stats`;
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
    };

    try {
        const response = await fetch(url, { headers });
        console.log(`API Response: ${response.status}`);

        if (response.status === 404) {
            console.error(`User not found: ${username}`);
            return { error: 'User not found' };
        }

        if (!response.ok) {
            console.error(`Failed to fetch data. Status: ${response.status}`);
            return null;
        }

        const stats = await response.json();
        const statsList = ["chess_rapid", "chess_blitz", "chess_bullet"];
        const ratings = {};

        for (const stat of statsList) {
            ratings[stat] = stats[stat]?.last?.rating || 'N/A';
        }

        console.log(ratings);
        return ratings;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}
