class RestaurantReview {
    constructor(id, review, username, datePost, picture = null) {
        this.id = id;
        this.review = review;
        this.username = username;
        this.datePost = datePost;
        this.picture = picture;
    }
}

class CreateReview {
    constructor(review, username, picture = null, datePost = null) {
        this.review = review;
        this.username = username;
        this.picture = picture;
        this.datePost = datePost;
    }
}

module.exports = {
    RestaurantReview,
    CreateReview
};
