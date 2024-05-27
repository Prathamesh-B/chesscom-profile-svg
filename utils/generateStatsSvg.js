import { themeStyles } from './themes.js';

export default function generateStatsSvg(username, stats, theme = 'default', borderRadius = 10, disableAnimations = false) {
    const colors = themeStyles[theme] || themeStyles.default;
    const animationStyle = disableAnimations ? '' : `
        @keyframes fadein {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .header{
            opacity: 0;
            animation: fadein 0.5s linear forwards 0.3s;
        }
        .rapid {
            opacity: 0; animation: fadein 0.5s linear forwards 0.6s
        }
        .bullet{
            opacity: 0; animation: fadein 0.5s linear forwards 1s
        }
        .blitz{
            opacity: 0; animation: fadein 0.5s linear forwards 1.4s
        }
    `;
    return `
        <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation: isolate' viewBox='0 0 495 195' width='495px' height='195px' direction='ltr'>
            <style>
                .background {
                    fill: ${colors.backgroundFill};
                    stroke: ${colors.backgroundStroke};
                }
                .line{
                    stroke: ${colors.backgroundStroke};
                }
                .header {
                    font: 700 20px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill: ${colors.headerFill};
                }
                .label {
                    font: 500 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill: ${colors.labelFill};
                }
                .number {
                    fill: ${colors.numberFill};
                }
                .rapid {
                    stroke: ${colors.rapidIconFill};
                }
                .bullet {
                    fill: ${colors.bulletIconFill};
                }
                .blitz {
                    fill: ${colors.blitzIconFill};
                }

                @supports(-moz-appearance: auto) {
                    /* Selector detects Firefox */
                    .header { font-size: 15.5px; }
                }
                ${animationStyle}
            </style>
            <g style='isolation: isolate'>
                <rect class='background' rx='${borderRadius}' x='0.5' y='0.5' width='494' height='164'/>
            </g>
            <g data-testid="card-title" transform="translate(0, 30)">
                <text x="50%" y="0" text-anchor="middle" class="header">${username}'s Chess.com Stats</text>
            </g>
            <g style='isolation: isolate'>
                <line x1='165' y1='50' x2='165' y2='148' vector-effect='non-scaling-stroke' stroke-width='1' class='line' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/>
                <line x1='330' y1='50' x2='330' y2='148' vector-effect='non-scaling-stroke' stroke-width='1' class='line' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/>
            </g>
            ${generateStatSection('Rapid', stats && stats['chess_rapid'], 82.5, 0.5, getRapidIcon(), disableAnimations)}
            ${generateStatSection('Bullet', stats && stats['chess_bullet'], 247.5, 0.9, getBulletIcon(), disableAnimations)}
            ${generateStatSection('Blitz', stats && stats['chess_blitz'], 412.5, 1.3, getBlitzIcon(), disableAnimations)}
        </svg>`;
}

function generateStatSection(label, value, x, delay, iconSvg, disableAnimations) {
    const animationStyle = disableAnimations ? '' : `style='opacity: 0; animation: fadein 0.5s linear forwards ${delay}s'`;
    const numberAnimationStyle = disableAnimations ? '' : `style='opacity: 0; animation: fadein 0.5s linear forwards ${delay + 0.2}s'`;
    const iconAnimationStyle = disableAnimations ? '' : `style='opacity: 0; animation: fadein 0.5s linear forwards ${delay + 0.6}s'`;

    return `
        <g style='isolation: isolate'>
            <!-- label -->
            <g transform='translate(${x}, 37)'>
                <text x='0' y='32' stroke-width='0' text-anchor='middle' class="label" stroke='none' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='500' font-size='18px' font-style='normal' ${animationStyle}>
                    ${label}
                </text>
            </g>
            <!-- icon -->
            <g transform='translate(${x - 19.5}, 78)'>
                ${iconSvg.replace('style=\'opacity: 0; animation: fadein 0.5s linear forwards 0.6s\'', iconAnimationStyle)}
            </g>
            <!-- big number -->
            <g transform='translate(${x}, 113)'>
                <text x='0' y='32' stroke-width='0' text-anchor='middle' class='number' font-family='"Segoe UI", Ubuntu, sans-serif' font-weight='700' font-size='28px' font-style='normal' ${numberAnimationStyle}>
                    ${value}
                </text>
            </g>
        </g>`;
}

function getRapidIcon() {
    return `<svg width="40" height="40" viewBox="0 0 24 24" class="rapid" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
}

function getBulletIcon() {
    return `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 512 512" xml:space="preserve">
        <g>
            <path class="bullet" d="M495.212,16.785c-44.125-44.141-188.297,5.875-250.078,67.656S61.79,267.8,61.79,267.8l182.406,182.407 c0,0,121.563-121.579,183.359-183.36C489.321,205.082,539.337,60.91,495.212,16.785z"/>
            <polygon class="bullet" points="0.009,329.597 182.399,512.004 217.712,476.691 35.306,294.285 	"/>
        </g>
    </svg>`;
}

function getBlitzIcon() {
    return `<svg width="40" height="40" viewBox="0 0 32 32" class="blitz" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M26.9,15.7C26.8,15.3,26.4,15,26,15h-6l3.9-11.7c0.1-0.4,0-0.9-0.4-1.1c-0.4-0.3-0.8-0.2-1.2,0l-17,13 c-0.3,0.3-0.5,0.7-0.3,1.1C5.2,16.7,5.6,17,6,17h6L8.1,28.7c-0.1,0.4,0,0.9,0.4,1.1C8.6,29.9,8.8,30,9,30c0.2,0,0.4-0.1,0.6-0.2 l17-13C26.9,16.5,27.1,16.1,26.9,15.7z"/>
    </svg>`;
}