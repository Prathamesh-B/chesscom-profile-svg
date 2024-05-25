<div align="center">
  <img src="https://github.com/Prathamesh-B/chesscom-profile-svg/assets/55992548/d22e90fb-32f3-4b0f-9d65-bf913e065ba2" width=200/>
  
  # Chess.com Profile SVG Generator
  This project is a web service that dynamically generates SVG images displaying chess statistics for a given Chess.com user. Using data fetched from the Chess.com API, the service creates visually appealing, customizable SVG graphics that showcase a user's performance in different game modes such as Rapid, Bullet, and Blitz.
</div>

## Features

-   **Dynamic Data Fetching**: Retrieves real-time chess statistics from the Chess.com API.
-   **Customizable Themes**: Supports different themes to customize the appearance of the SVG images.
-   **Game Mode Statistics**: Displays user ratings for Rapid, Bullet, and Blitz chess modes.
-   **Error Handling**: Gracefully handles errors such as missing usernames or users not found on Chess.com.

## Usage

If you want to use this project on your GitHub profile, I recommend forking and deploying it to your own Vercel instance and using the project with your own URLs.

To deploy on Vercel, click the button below.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/your-username/chesscom-profile-svg)

After deployment, access the service at `http://your-vercel-url/stats?username={Chess.com Username}` to get the SVG image.

## Example

<div align="center">
  
[![ChessStats](https://chesscom-profile-svg.vercel.app/stats?username=PrathamRex)](https://chesscom-profile-svg.vercel.app/stats?username=PrathamRex)

```md
[![ChessStats](https://chesscom-profile-svg.vercel.app/stats?username={Chess.com_Username}&theme={Theme}&borderRadius={Radius}](https://chesscom-profile-svg.vercel.app/stats?username=PrathamRex)
```

### or

```html
<img
    src="https://chesscom-profile-svg.vercel.app/stats?username={Chess.com_Username}&theme={Theme}&borderRadius={Radius}"
    alt="ChessStats"
/>
```

</div>

## Endpoints

-   `/stats?username={Chess.com Username}`: Fetches and generates an SVG image for the specified Chess.com user.

## Parameters

| Parameter      | Description                                                                   | Example               |
| -------------- | ----------------------------------------------------------------------------- | --------------------- |
| `username`     | The Chess.com username for which you want statistics.                         | `username=viditchess` |
| `theme`        | (Optional) The theme for the SVG image. Defaults to `default`.                | `theme=dark`          |
| `borderRadius` | (Optional) The border radius (in pixels) for the SVG image. Defaults to `10`. | `borderRadius=8`      |

Example:

```url
/stats?username=viditchess&theme=dark&borderRadius=8
```

## Themes

Use `?theme=THEME_NAME` parameter.

|                                                                                              `default` ![default][default]                                                                                              |                                                                                                 `light` ![light][light]                                                                                                 |                                                                                                  `dark` ![dark][dark]                                                                                                   |                                                                                           `graywhite` ![graywhite][graywhite]                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `backgroundFill: #393835`<br>`backgroundStroke: #c7c7c6`<br>`headerFill: #ffffff`<br>`labelFill: #c7c7c6`<br>`numberFill: #ffffff`<br>`rapidIconFill: #81b64c`<br>`bulletIconFill: #e3aa24`<br>`blitzIconFill: #fad541` | `backgroundFill: #fffefe`<br>`backgroundStroke: #e4e2e2`<br>`headerFill: #4c71f2`<br>`labelFill: #434d58`<br>`numberFill: #4c71f2`<br>`rapidIconFill: #81b64c`<br>`bulletIconFill: #e3aa24`<br>`blitzIconFill: #fad541` | `backgroundFill: #20232a`<br>`backgroundStroke: #c7c7c6`<br>`headerFill: #61dafb`<br>`labelFill: #ffffff`<br>`numberFill: #61dafb`<br>`rapidIconFill: #81b64c`<br>`bulletIconFill: #e3aa24`<br>`blitzIconFill: #fad541` | `backgroundFill: #ffffff`<br>`backgroundStroke: #24292e`<br>`headerFill: #24292e`<br>`labelFill: #24292e`<br>`numberFill: #24292e`<br>`rapidIconFill: #81b64c`<br>`bulletIconFill: #e3aa24`<br>`blitzIconFill: #fad541` |

[default]: https://github.com/Prathamesh-B/chesscom-profile-svg/assets/55992548/cc57f5c2-9474-4bca-861d-e53efc65ea06
[light]: https://github.com/Prathamesh-B/chesscom-profile-svg/assets/55992548/6459565c-07bd-4bdc-99d2-d2040643fc65
[dark]: https://github.com/Prathamesh-B/chesscom-profile-svg/assets/55992548/d66db78d-e4ff-426f-81b7-6f11bc640355
[graywhite]: https://github.com/Prathamesh-B/chesscom-profile-svg/assets/55992548/2e9f4ce8-d88e-4fe3-b6d8-5f4f09db8a13

If you'd like to add more themes, you can edit the `themes.js` file [here](https://github.com/Prathamesh-B/chesscom-profile-svg/edit/main/utils/themes.js).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
