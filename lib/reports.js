var Reports, _isUndefined = require('../mixin');

module.exports = Reports = function (api) {
    this.api = api;
    this.client = api.client;
};

Reports.prototype.timeEntriesByProject = function (projectId, from, to, options, cb) {
    options.from = from;
    options.to = to;
    var url = '/projects/' + projectId + '/entries';
    this.client.get(url, options, cb);
};

Reports.prototype.timeEntriesByCurrentUser = function (projectId, userId, from, to, options, cb) {
    options.user_id = userId;
    options.from = from;
    options.to = to;
    var url = '/projects/' + projectId + '/entries';
    this.client.get(url, options, cb);
};

Reports.prototype.timeEntriesByUser = function (userId, from, to, options, cb) {
    options.from = from;
    options.to = to;
    var url = '/people/' + userId + '/entries';
    this.client.get(url, options, cb);
};

Reports.prototype.expensesByUser = function (userId, from, to, options, cb) {
    options.from = from;
    options.to = to;
    var url = '/people/' + userId + '/expenses';
    this.client.get(url, options, cb);
};

Reports.prototype.expensesByProject = function (projectId, from, to, options, cb) {
    options.from = from;
    options.to = to;
    var url = '/projects/' + projectId + '/expenses';
    this.client.get(url, options, cb);
};
