export default (app) => {
    app.post('/api/logout', (req, res) => {
        req.logout();
        res.status(200).send({message: 'Logout success'});
        // res.redirect('/');
    });
};
