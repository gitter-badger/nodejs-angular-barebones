var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var express = require('express');
var app = require('../../app');

describe('application', function(){
	describe('root', function(){
		it('should return 200', function(done){
			request(app)
				.get('/')
				.expect(200)
				.expect('Content-Type', 'text/html; charset=UTF-8')
				.end(done);
		});
	});

    describe('search', function(){
        it('should return search results', function(done){
            request(app)
                .get('/search?q=angularjs')
                .expect(200)
				.expect('Content-Type', 'application/json; charset=utf-8')
                .expect({results:[{text:"AngularJS — Superheroic JavaScript MVW Framework"}]})
                .end(done);
        });
    });
});
