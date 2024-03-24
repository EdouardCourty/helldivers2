import NewsFeedMessage from "../model/NewsFeedMessage.js";

export default class NewsFeedDenormaliser {
    static denormaliseNewsFeed(body) {
        return body.map((data) => this.denormaliseMessage(data));
    }

    static denormaliseMessage(data) {
        const newsFeedMessage = new NewsFeedMessage();
        newsFeedMessage.id = data['id'];
        newsFeedMessage.published = data['published'];
        newsFeedMessage.type = data['type'];
        newsFeedMessage.tagIds = data['tagIds'];
        newsFeedMessage.message = data['message'];

        return newsFeedMessage;
    }
}
