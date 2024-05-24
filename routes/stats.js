import getChessStats from '../utils/fetchData.js';

export default async (req, res) => {
    try {
        res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.setHeader('Expires', '-1');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Content-Type', 'image/svg+xml');
        const username = req.query.username;
        if (username) {
            let stats = await getChessStats(username);
            if (stats && stats.error === 'User not found') {
                res.status(404).send(`
                <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation: isolate' viewBox='0 0 495 195' width='495px' height='195px' direction='ltr'>
                <style>
                    .header {
                        font: 700 20px 'Segoe UI', Ubuntu, Sans-Serif;
                        fill: #c7c7c6;
                        animation: fadeInAnimation 0.8s ease-in-out forwards;
                    }
                </style>
                    <g clip-path='url(#outer_rectangle)'>
                        <g style='isolation: isolate'>
                            <rect stroke='#E4E2E2' fill='#393835' rx='10' x='0.5' y='0.5' width='494' height='164'/>
                        </g>
                        <g data-testid="card-title" transform="translate(0, 0)">
                            <g transform="translate(0, 0)">
                                <text x="50%" y="45%" text-anchor="middle" class="header" data-testid="header">Username Not Found</text>
                            </g>
                        </g>
                    </g>
                </svg>
                `);
                return;
            }

            const svg = `
            <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation: isolate' viewBox='0 0 495 195' width='495px' height='195px' direction='ltr'>
                <style>
                    .header {
                        font: 700 20px 'Segoe UI', Ubuntu, Sans-Serif;
                        fill: #c7c7c6;
                        animation: fadeInAnimation 0.8s ease-in-out forwards;
                    }
                    @supports(-moz-appearance: auto) {
                        /* Selector detects Firefox */
                        .header { font-size: 15.5px; }
                    }
                    @keyframes fadein {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                </style>
                <g clip-path='url(#outer_rectangle)'>
                    <g style='isolation: isolate'>
                        <rect stroke='#E4E2E2' fill='#393835' rx='10' x='0.5' y='0.5' width='494' height='164'/>
                    </g>
                    <g data-testid="card-title" transform="translate(0, 30)">
                        <g transform="translate(0, 0)">
                            <text x="50%" y="0" text-anchor="middle" class="header" data-testid="header">${username}'s Chess.com Stats</text>
                        </g>
                    </g>
                    <g style='isolation: isolate'>
                    <!-- Vertical lines -->
                        <line x1='165' y1='50' x2='165' y2='148' vector-effect='non-scaling-stroke' stroke-width='1' stroke='#E4E2E2' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/>
                        <line x1='330' y1='50' x2='330' y2='148' vector-effect='non-scaling-stroke' stroke-width='1' stroke='#E4E2E2' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/>
                    </g>
                    <g style='isolation: isolate'>
                        <!-- Rapid big number -->
                        <g transform='translate(82.5, 60)'>
                            
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#FFFFFF' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='28px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 0.6s'>
                                ${stats['chess_rapid']}
                            </text>
                        </g>
                        <!-- Rapid label -->
                        <g transform='translate(82.5, 96)'>
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#95cd5e' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='18px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 0.7s'>
                                ⏲️Rapid
                            </text>
                        </g>
                    </g>
                    <g style='isolation: isolate'>
                        <!-- Bullet big number -->
                        <g transform='translate(247.5, 60)'>
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#FFFFFF' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='28px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 0.8s'>
                                ${stats['chess_bullet']}
                            </text>
                        </g>
                        <!-- Bullet label -->
                        <g transform='translate(247.5, 96)'>
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#e3aa24' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='18px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 0.9s'>
                                🔫Bullet
                            </text>
                        </g>
                    </g>
                    <g style='isolation: isolate'>
                        <!-- Blitz big number -->
                        <g transform='translate(412.5, 60)'>
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#FFFFFF' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='28px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 1.2s'>
                                ${stats['chess_blitz']}
                            </text>
                        </g>
                        <!-- Blitz label -->
                        <g transform='translate(412.5, 96)'>
                            <text x='0' y='32' stroke-width='0' text-anchor='middle' fill='#fad541' stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='18px' font-style='normal' style='opacity: 0; animation: fadein 0.5s linear forwards 1.3s'>
                                ⚡Blitz
                            </text>
                        </g>
                    </g>
                </g>
            </svg>`
            res.send(svg);
        } else {
            res.status(404).send(`
                <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation: isolate' viewBox='0 0 495 195' width='495px' height='195px' direction='ltr'>
                <style>
                    .header {
                        font: 700 20px 'Segoe UI', Ubuntu, Sans-Serif;
                        fill: #c7c7c6;
                    }
                    .description {
                        font: 500 16px 'Segoe UI', Ubuntu, Sans-Serif;
                        fill: #dbdbd9;
                    }
                </style>
                    <g clip-path='url(#outer_rectangle)'>
                        <g style='isolation: isolate'>
                            <rect stroke='#E4E2E2' fill='#393835' rx='10' x='0.5' y='0.5' width='494' height='164'/>
                        </g>
                        <g data-testid="card-title" transform="translate(0, 0)">
                            <g transform="translate(0, 0)">
                                <text x="50%" y="40%" text-anchor="middle" class="header" data-testid="header">No username provided!</text>
                                <text x="50%" y="50%" text-anchor="middle" class="description">/stats?username={Chess.com Username}</text>
                            </g>
                        </g>
                    </g>
                </svg>
                `);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
