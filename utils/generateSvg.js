export default function sendSvgResponse(res, headerText, descriptionText = '') {
    const description = descriptionText ? `<text x="50%" y="50%" text-anchor="middle" class="description">${descriptionText}</text>` : '';
    const svg = `
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
                    <text x="50%" y="40%" text-anchor="middle" class="header">${headerText}</text>
                    ${description}
                </g>
            </g>
        </svg>`;
    res.status(404).send(svg);
}
