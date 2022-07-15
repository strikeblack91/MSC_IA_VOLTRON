const { authService } = require("../services/service.auth");

exports.recommendationService = class RecommendationService {
  static action = [{ name: 1 }, { name: 2 }, { name: 3 }];
  static adventure = [{ name: 4 }, { name: 5 }, { name: 6 }];
  static romance = [{ name: 7 }, { name: 8 }, { name: 9 }];

  static async recommendation(email) {
    let tags = [];
    for (const i in authService.users) {
      if (email === authService.users[i].email) {
        tags = authService.users[i].tags;
      }
    }

    if (tags.length === 0) {
      return [];
    }

    const booksRecommended = [];
    for (const i in tags) {
      switch (tags[i]) {
        case "Romance":
          booksRecommended.push(
            this.romance[Math.floor(Math.random() * this.romance.length)]
          );
          break;
        case "Action":
          booksRecommended.push(
            this.action[Math.floor(Math.random() * this.action.length)]
          );
          break;
        case "Aventure":
          booksRecommended.push(
            this.adventure[Math.floor(Math.random() * this.adventure.length)]
          );
          break;
      }
    }
    return booksRecommended;
  }
};
