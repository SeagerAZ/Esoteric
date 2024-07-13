import e from 'express';
import express from 'express';

const router = express.Router();

router.get("/test", (req, res) => {
    console.log('test works');
    res.send('Test works!');

});

router.post("/test", (req, res) => {
    console.log('test works');
    res.send('Test works!');

});

router.put("/test", (req, res) => {
    console.log('test works');
    res.send('Test works!');

}); // put is used to update a resource

router.delete("/test", (req, res) => {
    console.log('test works');
    res.send('Test works!');

});

export default router;