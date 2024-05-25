import getChessStats from '../utils/fetchData.js';
import sendSvgResponse from '../utils/generateSvg.js';
import generateStatsSvg from '../utils/generateStatsSvg.js';

export default async (req, res) => {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Content-Type', 'image/svg+xml');

    try {
        const username = req.query.username;
        const theme = req.query.theme || 'default';
        if (!username) {
            return sendSvgResponse(res, 'No Username Provided!', '/stats?username={Chess.com Username}&theme={Theme}');
        }

        const stats = await getChessStats(username);
        if (stats && stats.error === 'User not found') {
            return sendSvgResponse(res, 'Username Not Found!', '', theme);
        }

        const svg = generateStatsSvg(username, stats, theme);
        res.send(svg);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
