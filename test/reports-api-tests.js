var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Q = require('q'),
    Reports = harvest.Reports;

describe('The Reports API', function() {
    describe('Get all time entries logged to a project for a given timeframe', function() {
        it('should implement the timeEntriesByProject method', function() {
            assert.equal(typeof Reports.timeEntriesByProject, "function");
        });
    });
    describe('Get all time entries by the current user logged to a project for a given timeframe', function() {
        it('should implement the timeEntriesByCurrentUser method', function() {
            assert.equal(typeof Reports.timeEntriesByCurrentUser, "function");
        });
    });
    describe('Get all time entries logged by a user for a given timeframe', function() {
        it('should implement the timeEntriesByCurrentUser method', function() {
            assert.equal(typeof Reports.timeEntriesByUser, "function");
        });
    });
    describe('Get all expense entries logged by a user for a given timeframe', function() {
        it('should implement the expensesByUser method', function() {
            assert.equal(typeof Reports.expensesByUser, "function");
        });
    });
    describe('Get all expense entries logged by a adam for a given timeframe', function() {
        it('should implement the expensesByUser method', function() {
            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {}, function(data){
            //   console.log(data);
            //});
            //var timeEntriesByUser = Q.denodeify(Reports.timeEntriesByUser);
            Q.npost(harvest.Projects, "list", [{client: 455246}]).then(function(data){
                console.log('projs', data);
            });
            var timeEntriesByUser = function(id, from, to, opts) {
                return Q.npost(Reports, "timeEntriesByUser", [208885, '20150101', '20150201', opts]);
            };
            timeEntriesByUser(208885, '20150101', '20150201', {}).then(function(data){
                console.log('done');
                console.log(data.length);
            }, function(err){
                console.log('err', err);
            }, function(){
                console.log('b');
            });
            timeEntriesByUser(208885, '20150101', '20150201', {billable: 'yes'}).then(function(data){
                console.log('done');
                console.log(data.length);
            }, function(err){
                console.log('err', err);
            }, function(){
                console.log('b');
            });
            timeEntriesByUser(208885, '20150101', '20150201', {billable: 'no'}).then(function(data){
                console.log('done');
                console.log(data.length);
            }, function(err){
                console.log('err', err);
            }, function(){
                console.log('b');
            });
            //return timeEt("foo.txt", "utf-8");
            //Q.nfcall(FS.readFile, "foo.txt", "utf-8")


            //var readFile = Q.denodeify(FS.readFile);
            //return readFile("foo.txt", "utf-8");
            //
            //var redisClientGet = Q.nbind(redisClient.get, redisClient);
            //return redisClientGet("user:1:id");
            //console.log('start');
            //var tebu = Q.denodeify(Reports.timeEntriesByUser);
            //tebu(208885, '20150101', '20150201', {}).then(function(data){
            //   console.log('done');
            //});
            //
            //console.log('go1');
            //Q.ninvoke(Reports, "timeEntriesByUser", 208885, '20150101', '20150201', {}).then(function(data){
            //    console('hi');
            //    console.log('Total:', data.length);
            //});
            //var foo = Q.npost(Reports, "timeEntriesByUser", [208885, '20150101', '20150201', {}]);
            //console.log(foo);
            //
            //
            //Q.fcall(function () {
            //    return 10;
            //}).then(function(a){
            //    console.log(a);
            //});
            //Q.npost(Reports, "timeEntriesByUser", [208885, '20150101', '20150201', {}]).then(function(data){
            //    console('a');
            //    console.log('Total:', data.length);
            //}, function(a) {
            //    console.log('b');
            //}, function(b) {
            //        console.log('c');
            //    }
            //);



            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {billable: 'yes'}).then(function(data){
            //    console.log('Billable:', data.length);
            //});
            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {billable: 'no'}).then(function(data){
            //    console.log('Not Billable:', data.length);
            //});
            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {}, function(err, data){
            //    console.log('Total:', data.length);
            //});
            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {billable: 'yes'}, function(err, data){
            //    console.log('Billable:', data.length);
            //});
            //Reports.timeEntriesByUser(208885, '20150101', '20150201', {billable: 'no'}, function(err, data){
            //    console.log('Not Billable:', data.length);
            //});
            //assert.equal(typeof Reports.expensesByUser, "function");
        });
    });
    describe('Get all expenses entries to a project for a given timeframe', function() {
        it('should implement the expensesByProject method', function() {
            assert.equal(typeof Reports.expensesByProject, "function");
        });
    });
});