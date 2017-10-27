import Recipe from '../controllers/users';

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'All is well with our API',
    }));

    app.get('/api/v1/recipes', Recipe.getRecipes);
}