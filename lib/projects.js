var Projects, _isUndefined = require('../mixin');

module.exports = Projects = function (api) {
    this.api = api;
    this.client = api.client;
};

Projects.prototype.list = function (options, cb) {
    var url = '/projects';
    this.client.get(url, options, cb);
};

Projects.prototype.get = function (id, options, cb) {
    var url = '/projects/' + id;
    this.client.get(url, options, cb);
};

Projects.prototype.create = function (options, cb) {
    var url = '/projects';
    this.client.post(url, options, cb);
};

Projects.prototype.update = function (id, options, cb) {
    var url = '/projects/' + id;
    this.client.put(url, options, cb);
};

Projects.prototype.toggleActivation = function (id, options, cb) {
    var url = '/projects/' + id + '/toggle';
    this.client.put(url, options, cb);
};

Projects.prototype.delete = function (id, options, cb) {
    var url = '/projects/' + id;
    this.client.delete(url, options, cb);
};
