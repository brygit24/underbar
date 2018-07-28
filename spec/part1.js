(function() {
  'use strict';

  describe('Part I', function() {

    describe('identity', function() {

      checkForNativeMethods(function() {
        _.identity(1);
      });

      it('should return whatever value is passed into it', function() {
        var uniqueObject = {};
        expect(_.identity(1)).to.equal(1);
        expect(_.identity('string')).to.equal('string');
        expect(_.identity(false)).to.be.false;
        expect(_.identity(uniqueObject)).to.equal(uniqueObject);
      });

      it('should return # of args if more than 1 is passed to it', function() {
       expect(_.identity('foo',2,'bar',3,3)).to.equal(5);
      })
    });

    describe('first', function() {

      checkForNativeMethods(function() {
        _.first([1,2,3]);
      });      
      it('should be able to pull out the first element of an array', function() {
        expect(_.first([1,2,3])).to.equal(1);
      });        

      it('should accept an index argument', function() {
        expect(_.first([1,2,3], 2)).to.eql([1, 2]);
      });       

      it('should return empty array if zero is passed in as the index', function() {
        expect(_.first([1,2,3], 0)).to.eql([]);
      });        

      it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
        expect(_.first([1,2,3], 5)).to.eql([1, 2, 3]);
      });  
    });

    describe('last', function() {

      checkForNativeMethods(function() {
        _.last([1,2,3]);
      });      

      it('should pull the last element from an array', function() {
        expect(_.last([1,2,3])).to.equal(3);        
      });      

      it('should accept an index argument', function() {
        expect(_.last([1,2,3], 2)).to.eql([2, 3]);        
      });      

      it('should return empty array if zero is passed in as the index', function() {
        expect(_.last([1,2,3], 0)).to.eql([]);        
      });      

      it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
        expect(_.last([1,2,3], 5)).to.eql([1, 2, 3]);        
      });      
    });

    describe('each', function() {

      checkForNativeMethods(function() {
        _.each([1,2,3,4], function(x) {});
      });

      it('should be a function', function() {
        expect(_.each).to.be.an.instanceOf(Function);
      });      

      it('should not return anything', function() {
        var returnValue = _.each([], function() {         
        });
      expect(returnValue).to.not.exist;
      });      

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = _.each(input, function(x) {  
        });
      expect(input).to.eql([1,2,3,4,5]);        
      });      

      it(' should iterate over arrays and provide access to each value', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];
        _.each(letters, function(x) {
          iterations.push(x);
        });
      expect(iterations).to.eql(['a','b','c']);
      });      

      it('should iterate over arrays and provide access to each index', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];
        _.each(letters, function(x, index) {
          iterations.push([x, index]);
        });
      expect(iterations).to.eql([
         ['a', 0],
         ['b', 1],
         ['c', 2]]);
      });      

      it('should iterate over arrays and provide access to the original collection', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];
        _.each(letters, function(x, index, collection) {
          iterations.push([x, index, collection]);
        });
      expect(iterations).to.eql([
        ['a', 0, letters],
        ['b', 1, letters],
        ['c', 2, letters]]);
      });

      it('should only iterate over numeric keys of an array, not all properties', function() {
        var iterations = [];
        var letters = ['a', 'b', 'c'];
        letters.someProperty = 'Do not iterate over me!';
        _.each(letters, function(x, index, collection) {
          iterations.push(x);
        });
      expect(iterations).to.not.include('Do not iterate over me!');
      });   

      it('should iterate over objects and provide access to each value', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];
        _.each(letters, function(x) {
          iterations.push(x);
        });
      expect(iterations).to.eql(['dog', 'elephant', 'flotsam']);
      });      

      it('should iterate over objects and provide access to each key', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];
        _.each(letters, function(x, key) {
          iterations.push([x, key]);
        });
      expect(iterations).to.eql([
        ['dog', 'd'],
        ['elephant', 'e'],
        ['flotsam', 'f']]);
      });      

      it('should iterate over objects and provide access to the original object', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];
        _.each(letters, function(x, key, object) {
          iterations.push([x, key, object]);
        });
      expect(iterations).to.eql([
        ['dog', 'd', letters],
        ['elephant', 'e', letters],
        ['flotsam', 'f', letters]]);
      });

      it('should not confuse an object with a `length` property for an array', function() {
        var dresser = { length: 39, width: 79, height: 127};
        var iterations = [];
        _.each(dresser, function(x, key, object) {
          iterations.push([x, key, object]);
        });
      expect(iterations).to.eql([
        [39, 'length', dresser],
        [79, 'width', dresser],
        [127, 'height', dresser]]);
      });
    });

    describe('indexOf', function() {

      checkForNativeMethods(function() {
        _.indexOf([10, 20, 30, 40], 40)
      });      

      it('should find 40 in the list', function() {
        var numbers = [10, 20, 30, 40, 50];
        expect(_.indexOf(numbers, 40)).to.equal(3);
      });      

      it('should be able to compute indexOf even when the native function is undefined', function() {
        var numbers = [10, 20, 30];
      expect(_.indexOf(numbers, 20)).to.equal(1);
      });      

      it('returns -1 when the target cannot be found not in the list', function() {
        var numbers = [10, 20, 30, 40, 50];
      expect(_.indexOf(numbers, 35)).to.equal(-1);
      });      

      it('returns the first index that the target can be found at when there are multiple matches', function() {
        var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
        expect(_.indexOf(numbers, 40)).to.equal(1);
      });
    });

    describe('filter', function() {

      checkForNativeMethods(function() {
        var isEven = function(num) { return num % 2 === 0; };
        _.filter([1, 2, 3, 4], isEven)
      });      

      it('should return all even numbers in an array', function() {
        var isEven = function(num) { 
          return num % 2 === 0; 
        };
        var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
      expect(evens).to.eql([2, 4, 6]);
      });      

      it('should return all odd numbers in an array', function() {
        var isOdd = function(num) { 
          return num % 2 !== 0;
        };
        var odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);
      expect(odds).to.eql([1, 3, 5]);
      });  

      it('should produce a brand new array instead of modifying the input array', function() {
        var isOdd = function(num) { 
          return num % 2 !== 0;
        };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.filter(numbers, isOdd);
      expect(evens).to.not.equal(numbers);
      });
    });
    
    describe('reject', function() {

      checkForNativeMethods(function() {
        var isEven = function(num) { 
          return num % 2 === 0;
        };
        _.reject([1, 2, 3, 4, 5, 6], isEven)
      });    

      it('should reject all even numbers', function() {
        var isEven = function(num) { 
          return num % 2 === 0; 
        };
        var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);
      expect(odds).to.eql([1, 3, 5]);
      });

      it('should reject all odd numbers', function() {
        var isOdd = function(num) { 
          return num % 2 !== 0; 
        };
        var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);
      expect(evens).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var isOdd = function(num) { 
          return num % 2 !== 0; 
        };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.reject(numbers, isOdd);
      expect(evens).to.not.equal(numbers);
      });
    });

    describe('uniq', function() {      

      it('should not mutate the input array', function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.uniq(input);        
      expect(input).to.eql([1, 2, 3, 4, 5]);
      });  

      it('should return all unique values contained in an unsorted array', function() {
        var numbers = [1, 2, 1, 3, 1, 4];
        expect(_.uniq(numbers)).to.eql([1, 2, 3, 4]);
      });      

      it('should handle iterators that work with a sorted array', function() {
        var iterator = function(value) { 
          return value === 1;
        };
        var numbers = [1, 2, 2, 3, 4, 4];
      expect(_.uniq(numbers,true,iterator)).to.eql([1, 2, 3, 4]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var numbers = [1, 2, 1, 3, 1, 4];
        var uniqueNumbers = _.uniq(numbers);
      expect(uniqueNumbers).to.not.equal(numbers);
      });
    });

    describe('map', function() {

      checkForNativeMethods(function() {
        _.map([1, 2, 3, 4], function(num) {
          return num * 2;
        })
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = _.map(input, function(num) {         
        });       
      expect(input).to.eql([1,2,3,4,5])
      });      

      it('should apply a function to every value in an array', function() {
        var doubledNumbers = _.map([1, 2, 3], function(num) {
          return num * 2;
        });
      expect(doubledNumbers).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var numbers = [1, 2, 3];
        var mappedNumbers = _.map(numbers, function(num) {
          return num;
        });
      expect(mappedNumbers).to.not.equal(numbers);
      });
    });
    
    describe('pluck', function() {

      checkForNativeMethods(function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];
        _.pluck(people, 'name');
      });

      it('should return values contained at a user-defined property', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];
      expect(_.pluck(people, 'name')).to.eql(['moe', 'curly']);
      });

      it('should not modify the original array', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];
        _.pluck(people, 'name');
      expect(people).to.eql([{ name: 'moe', age: 30 }, { name: 'curly', age: 50 }]);
      });
    });
    
    describe('reduce', function() {

      checkForNativeMethods(function() {
        var add = function(acc, x) {
          return acc + x;
        };
        _.reduce([1, 2, 3, 4], add)
      });

      it('should be a function', function() {
        expect(_.reduce).to.be.an.instanceOf(Function);
      });

      it('should return a value', function() {
        var result = _.reduce([3,2,1], function(acc, x) {
          return x;
        });
      expect(result).to.be.defined;
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = _.reduce(input, function(acc, x) {
          return x;
        });     
      expect(input).to.eql([1,2,3,4,5])
      });

      it('should invoke the iterator function with arguments (acc, x) in that order', function() {
        var accInCallback, xInCallback;

        _.reduce(['item'], function(acc, x) {
          accInCallback = acc;
          xInCallback = x;
        }, 'memo');

        expect(accInCallback).to.equal('memo');
        expect(xInCallback).to.equal('item');
      });

      it('should pass items of the array into the iterator from left to right', function() {
        var orderTraversed = [];

        _.reduce([1,2,3,4], function(acc, x) {
          orderTraversed.push(x);
          return acc;
        }, 10);
      expect(orderTraversed).to.eql([1,2,3,4]);
      });

      it('should continue to call iterator even if the iterator returns undefined', function() {
        var callCount = 0;
        var returnFalsy = function(acc, x) {
          callCount++;
          if (callCount === 1) {
            return undefined;
          } 
          else {
            return x + 1;
          }
        };
        var total = _.reduce([1,1,2], returnFalsy);
      expect(total).to.equal(3);
      });

      it('should pass every item of the array into the iterator if a memo is passed in', function() {
        var result = _.reduce([1,2,3], function(acc, x) {
          return acc - x;
        }, 10);
      expect(result).to.equal(4);
      });

      it('should accept falsy values as a valid memo', function() {      
        var result = _.reduce([1,2,3], function(acc, x) {
          return acc * x;
        }, 0);
      expect(result).to.equal(0);
      });

      it('should set memo to be the first item of the array if no memo is passed in', function() {
        var result = _.reduce([1,2,3], function(acc) {
          return acc;
        });
      expect(result).to.equal(1);
      });

      it('should pass the second item of the array into the iterator first if a memo is not passed in', function() {
        var result = _.reduce([3,2,1], function(acc, x) {
          return acc - x;
        });
      expect(result).to.equal(0);
      });
    });
  });

  function checkForNativeMethods(runUnderbarFunction) {
    it('should not use the native version of any underbar methods in its implementation', function() {      
      runUnderbarFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  }
}());