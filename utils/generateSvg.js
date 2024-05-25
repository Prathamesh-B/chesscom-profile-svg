import { themeStyles } from './themes.js';

export default function sendSvgResponse(res, headerText, descriptionText = '', theme = 'default', borderRadius = 10) {
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    const escapedHeaderText = escapeHtml(headerText);
    const escapedDescriptionText = escapeHtml(descriptionText);

    const colors = themeStyles[theme] || themeStyles.default;

    const description = escapedDescriptionText ? `<text x="50%" y="50%" text-anchor="middle" class="description">${escapedDescriptionText}</text>` : '';
    const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation: isolate' viewBox='0 0 495 195' width='495px' height='195px' direction='ltr'>
            <style>
                .header {
                    font: 700 20px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill:  ${colors.headerFill};
                }
                .description {
                    font: 500 16px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill:  ${colors.labelFill};
                }
                .background{
                    fill: ${colors.backgroundFill};
                    stroke: ${colors.backgroundStroke};
                }
            </style>
            <g style='isolation: isolate'>
                <rect class='background' rx='${borderRadius}' x='0.5' y='0.5' width='494' height='164'/>
            </g>
            <g data-testid="card-title" transform="translate(0, 0)">
                <text x="50%" y="40%" text-anchor="middle" class="header">${escapedHeaderText}</text>
                ${description}
            </g>
        </svg>`;
    res.status(404).send(svg);
}
