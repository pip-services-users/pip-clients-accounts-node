"use strict";
var _ = require('lodash');
var async = require('async');
var assert = require('chai').assert;
var USER1 = {
    id: '1',
    name: 'Test User 1',
    email: 'user1@digitallivingsoftware.com'
};
var USER2 = {
    id: '2',
    name: 'Test User 2',
    email: 'user2@digitallivingsoftware.com'
};
var UsersClientFixture = (function () {
    function UsersClientFixture(client) {
        this._client = client;
    }
    UsersClientFixture.prototype.testCrudOperations = function (done) {
        var _this = this;
        var user1, user2;
        async.series([
            // Create one user
            function (callback) {
                _this._client.createUser(null, USER1, function (err, user) {
                    assert.isNull(err);
                    assert.isObject(user);
                    assert.equal(user.name, USER1.name);
                    assert.equal(user.email, USER1.email);
                    user1 = user;
                    callback();
                });
            },
            // Create another user
            function (callback) {
                _this._client.createUser(null, USER2, function (err, user) {
                    assert.isNull(err);
                    assert.isObject(user);
                    assert.equal(user.name, USER2.name);
                    assert.equal(user.email, USER2.email);
                    user2 = user;
                    callback();
                });
            },
            // Get all users
            function (callback) {
                _this._client.getUsers(null, {}, {}, function (err, users) {
                    assert.isNull(err);
                    assert.isObject(users);
                    assert.lengthOf(users.data, 2);
                    callback();
                });
            },
            // Get random user
            function (callback) {
                _this._client.findUser(null, null, 'user2@digitallivingsoftware.com', function (err, user) {
                    assert.isNull(err);
                    assert.isObject(user);
                    callback();
                });
            },
            // Update the user
            function (callback) {
                _this._client.updateUser(null, user1.id, { name: 'Updated User 1' }, function (err, user) {
                    assert.isNull(err);
                    assert.isObject(user);
                    assert.equal(user.name, 'Updated User 1');
                    assert.equal(user.email, USER1.email);
                    user1 = user;
                    callback();
                });
            },
            // Delete user
            function (callback) {
                _this._client.deleteUser(null, user1.id, function (err) {
                    assert.isNull(err);
                    callback();
                });
            },
            // Try to get deleted user
            function (callback) {
                _this._client.getUserById(null, user1.id, function (err, user) {
                    assert.isNull(err);
                    assert.isNull(user || null);
                    callback();
                });
            }
        ], done);
    };
    return UsersClientFixture;
}());
exports.UsersClientFixture = UsersClientFixture;
