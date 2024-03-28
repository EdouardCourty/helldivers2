# Helldivers 2 API

[![ESLint](https://github.com/EdouardCourty/helldivers2-api/actions/workflows/ESLint.yml/badge.svg)](https://github.com/EdouardCourty/helldivers2-api/actions/workflows/ESLint.yml)

This project aims to create an API wrapper for Helldivers 2.<br />
I have been playing the game a lot since it is out, and I wanted to try and build something around it.<br />

Currently, there is no way to get access to player data, but we're not done!

## Features

- [X] Get current war id
- [X] Get war statistics
- [X] Get war info
- [X] Get war news feed
- [X] Get war summary (galaxy & planet statistics)
- [X] Get war main order
- [X] Get war leaderboards
- [ ] Player endpoints
- [ ] Global statistics endpoints

### Usage example

Simply import the module and call the available methods. All of them return promises.

```javascript
import helldivers2 from "helldivers2-api";

const currentWarId = await helldivers2.getCurrentWarId();
const warInfo = await helldivers2.getWarInfo(currentWarId);

console.log('War started on ' + warInfo.startDate);

const newsFeed = await helldivers2.getWarNewsFeed(currentWarId);

newsFeed.forEach((article) => {
    console.log(article.message);
});

// ...
```

### Contributing

If you're interested in reverse-engineering and you want to contribute to this project, don't be afraid to submit a PR or use the discussion feed.<br />

If you want to chat with me, get in touch using my email address or Discord: `php_sensei`

&copy; Edouard Courty - 2024
