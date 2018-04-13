const express = require('express');

module.exports = class EventRouter {
    constructor(eventService) {
        this.eventService = eventService;
    }

    router() {
        let router = express.Router();
        router.get('/', this.get.bind(this));
        router.get('/:eventId', this.findEvent.bind(this));
        router.get('/:eventId/participants', this.listParticipant.bind(this));
        router.post('/', this.post.bind(this));
        router.delete('/:eventId', this.delete.bind(this));
        return router;
    }

    get(req, res) {
        return this.eventService.list()
            .then((events) => res.json(events))
            .catch((err) => res.status(500).json(err));
    }

    findEvent(req, res) {
        return this.eventService.search(req.body)
            .then((event) => res.json(event))
            .catch((err) => res.status(500).json(err));
    }

    listParticipant(req, res) {

    }

    post(req, res) {
        console.log(req.body)
        return res.json({success: true});
        // this.eventService.create(req.body)
        //     .then((event) => res.json(event))
        //     .catch((err) => res.status(500).json(err));
    }

    update(req, res) {
        return this.eventService.update(req.params.eventId, req.body)
            .then((event) => res.json(event))
            .catch((err) => res.status(500).json(err));
    }

    delete(req, res) {
        return this.eventService.delete(req.params.eventId)
            .then((event) => res.json(event))
            .catch((err) => res.status(500).json(err));
    }







}