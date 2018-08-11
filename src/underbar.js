(function() {
  'use strict';

  window._ = {};
  
  _.identity = function() {
    if (arguments.length === 1) {
      return arguments[0];    
    }
    else {
      return arguments.length;
    }
  };  
  
  _.first = function(inArr, n) {
    return n === undefined ? inArr[0] : inArr.slice(0, n);
  };
  
  _.last = function(inArr, n) {
    return n === undefined ? inArr[inArr.length-1] : n === 0 ? [] : inArr.slice(-+n);
  };

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    }
    else {
      for (var z in collection) {
        iterator(collection[z], z, collection);      
      }
    }      
  };

  _.indexOf = function(inArr, target){    
    var result = -1;   
    _.each(inArr, function(x, index) {
      if (x === target && result === -1) {
        result = index;
      }
    });
    return result;
  };
  
  _.filter = function(inArr, test) {
    var outArr = [];
    _.each(inArr, function(x) {
      if (test(x)) {
        outArr.push(x)
      }
    })
   return outArr; 
  };

  _.reject = function(inArr, test) {    
    var outArr = [];
    _.each(inArr, function(x) {
      if (!test(x)) {
        outArr.push(x)
      }
    })
    return outArr;
  };
  
  _.uniq = function(inArr, isSorted, iterator) {
    var outArr = [];
    _.each(inArr, function(x) {
      if (_.indexOf(outArr,x) === -1) {
        outArr.push(x);
      }
    });
   return outArr;
  };
  
  _.map = function(inArr, iterator) {
    var outArr = [];
    _.each(inArr, function(x) {
      outArr.push(iterator(x));
    });
   return outArr;     
  };
  
  _.pluck = function(inColl, key) {
    return _.map(inColl, function(x) {
      return x[key];
    });      
  };
  
  _.reduce = function(inArr, iterator, initVal) {
    if (initVal === undefined) {      
      initVal = inArr[0];
      inArr = inArr.slice(1);
    }    
    _.each(inArr, function(x) {
      initVal = iterator(initVal,x);
    });
   return initVal;
  };
  
  _.contains = function(inObj, target) {    
    return _.reduce(inObj, function(acc, x) {
      if (acc) {        
        return true;
      }
      return x === target;      
    }, false);   
  };

  _.every = function(inObj, iterator) {
    return _.reduce(inObj, function(acc, x) { 
      if (acc) {
        if (iterator) { 
          return iterator(x) ? true : false;  
        }
        else {  
          return (x) ? true : false;  
        }
      }
      else {  
        return false;
      }            
    }, true);   
  };
      
  _.some = function(inObj, iterator) {
    if (iterator) {    
      if (!_.every(inObj, iterator)) {
        return _.reduce(inObj, function(acc, x) {
          if (!acc) {
            return iterator(x) ? true : false;
          }
          else {
            return true;
          }
        },false)     
      }
      else {
        return true;
      }
    }
    else {
      return _.reduce(inObj, function(acc, x) {
        if (!acc) {
          return x ? true : false;
        }
        else {
          return true;
        }
      },false) 
    }
  };

  _.extend = function(inObj) {  
    var workObj = _.map(arguments, function(x) {
      return x;
    }).slice(1)  
    _.each(workObj, function(x2) {    
      _.each(x2, function(x3, key) {      
        inObj[key] = x3
      })
    });  
   return inObj;
  };
  
  _.defaults = function(inObj) {
    var workObj = _.map(arguments, function(x) {
      return x;
    }).slice(1); 
    _.each(workObj, function(x2) {   
      _.each(x2, function(x3, key) {     
        if (!inObj.hasOwnProperty(key)) {
          inObj[key] = x3;
        }
      });
    });  
   return inObj;
  };

_.once = function(inFunc) {
  var prevCall = false;
  var result;  
  return function() {
    if (!prevCall) {        
      result = inFunc.apply(this, arguments);  
      prevCall = true;
    }    
    return result;
  };
};

  _.memoize = function(inFunc) {
    var cache = {};  
    return function() {  
      var key = JSON.stringify(Array.prototype.slice.call(arguments));   
        if (!(key in cache)) { 
          cache[key] = inFunc.apply(this, arguments);  
        } 
        return cache[key];  
      };
  };  
   
  _.delay = function(inFunc, waitTime) {
    var args = Array.prototype.slice.call(arguments, 2); 
      return setTimeout(function(){ 
        return inFunc.apply(this, args);
      }, waitTime);   
  };

  _.shuffle = function(inObj) {
    var tObj = inObj.slice();
    var index = (Math.random() * tObj.length) | 0; 
    var temp = tObj[0];
    tObj[0] = tObj[index];
    tObj[index] = temp;
    return tObj;
  };

  /**
  * ADVANCED
  * =================
  *
  * Note: This is the end of the pre-course curriculum. Feel free to continue,
  * but nothing beyond here is required.
  */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
