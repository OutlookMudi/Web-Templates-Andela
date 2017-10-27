import recipe from '../models/db';

const recipes = [...recipe];

class Recipe {
	static getRecipes(req, res) {
		return res.sendStatus(200).send({ feed: recipes });
	}
}

export default Recipe;
