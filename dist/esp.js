// notice_start
/*
 * Copyright 2015 Keith Woods
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 // notice_end

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["esp"] = factory();
	else
		root["esp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    exports.ObservationStage = __webpack_require__(1);
    exports.Router = __webpack_require__(2);
    exports.model = __webpack_require__(27);

/***/ },
/* 1 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var ObservationStage = (function () {
      function ObservationStage() {
        _classCallCheck(this, ObservationStage);
      }
    
      _createClass(ObservationStage, null, [{
        key: 'preview',
        get: function get() {
          return 'preview';
        }
      }, {
        key: 'normal',
        get: function get() {
          return 'normal';
        }
      }, {
        key: 'committed',
        get: function get() {
          return 'committed';
        }
      }]);
    
      return ObservationStage;
    })();
    
    exports['default'] = ObservationStage;
    module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _EventContext = __webpack_require__(3);
    
    var _EventContext2 = _interopRequireDefault(_EventContext);
    
    var _ObservationStage = __webpack_require__(1);
    
    var _ObservationStage2 = _interopRequireDefault(_ObservationStage);
    
    var _ModelRecord = __webpack_require__(12);
    
    var _ModelRecord2 = _interopRequireDefault(_ModelRecord);
    
    var _StateJs = __webpack_require__(13);
    
    var _StateJs2 = _interopRequireDefault(_StateJs);
    
    var _StatusJs = __webpack_require__(14);
    
    var _StatusJs2 = _interopRequireDefault(_StatusJs);
    
    var _ModelRouterJs = __webpack_require__(15);
    
    var _ModelRouterJs2 = _interopRequireDefault(_ModelRouterJs);
    
    var _reactiveIndex = __webpack_require__(16);
    
    var _modelEventsIndex = __webpack_require__(24);
    
    var _system = __webpack_require__(4);
    
    var _log = _system.logger.create('Router');
    
    var Router = (function () {
        function Router() {
            _classCallCheck(this, Router);
    
            this._models = {};
            this._modelUpdateSubjects = {};
            this._modelEventSubjects = {};
            this._haltingException = undefined;
            this._state = new _StateJs2['default']();
        }
    
        _createClass(Router, [{
            key: 'registerModel',
            value: function registerModel(modelId, model, options) {
                this._throwIfHalted();
                _system.Guard.isString(modelId, 'The modelId argument should be a string');
                _system.Guard.isDefined(model, 'THe model argument must be defined');
                if (options) _system.Guard.isObject(options, 'The options argument should be an object');
                _system.Guard.isFalsey(this._models[modelId], 'The model with id [' + modelId + '] is already registered');
                this._models[modelId] = new _ModelRecord2['default'](modelId, model, options);
            }
        }, {
            key: 'removeModel',
            value: function removeModel(modelId) {
                _system.Guard.isString(modelId, 'The modelId argument should be a string');
                var modelRecord = this._models[modelId];
                if (modelRecord) {
                    modelRecord.wasRemoved = true;
                    delete this._models[modelId];
                    modelRecord.eventQueue.length = 0;
                    var modelUpdateSubjects = this._modelUpdateSubjects[modelId];
                    if (modelUpdateSubjects) {
                        delete this._modelUpdateSubjects[modelId];
                        modelUpdateSubjects.onCompleted();
                    }
                    var modelEventSubjects = this._modelEventSubjects[modelId];
                    if (modelEventSubjects) {
                        delete this._modelEventSubjects[modelId];
                        for (var p in modelEventSubjects) {
                            if (modelEventSubjects.hasOwnProperty(p)) {
                                var eventSubjects = modelEventSubjects[p];
                                eventSubjects.preview.onCompleted();
                                eventSubjects.normal.onCompleted();
                                eventSubjects.committed.onCompleted();
                            }
                        }
                    }
                }
            }
        }, {
            key: 'publishEvent',
            value: function publishEvent(modelId, eventType, event) {
                _system.Guard.isString(modelId, 'The modelId argument should be a string');
                _system.Guard.isString(eventType, 'The eventType argument should be a string');
                _system.Guard.isDefined(event, 'The event argument must be defined');
                this._throwIfHalted();
                if (this._state.currentStatus === _StatusJs2['default'].EventExecution) {
                    throw new Error('You can not publish further events when performing an event execution. modelId1: [' + modelId + '], eventType:[' + eventType + ']');
                }
                this._eventQueue(modelId, eventType, event);
                this._purgeEventQueues();
            }
        }, {
            key: 'broadcastEvent',
            value: function broadcastEvent(eventType, event) {
                _system.Guard.isString(eventType, 'The eventType argument should be a string');
                _system.Guard.isDefined(event, 'The event argument should be defined');
                for (var modelId in this._models) {
                    if (this._models.hasOwnProperty(modelId)) {
                        this._eventQueue(modelId, eventType, event);
                    }
                }
                this._purgeEventQueues();
            }
        }, {
            key: 'executeEvent',
            value: function executeEvent(eventType, event) {
                var _this = this;
    
                this._throwIfHalted();
                _system.Guard.isString(eventType, 'The eventType argument should be a string');
                _system.Guard.isDefined(event, 'The event argument should be defined');
    
                this._state.executeEvent(function () {
                    var eventContext = new _EventContext2['default'](_this._state.currentModelId, eventType, event);
                    _this._dispatchEventToEventProcessors(_this._state.currentModelId, _this._state.currentModel, event, eventType, eventContext);
                });
            }
        }, {
            key: 'getEventObservable',
            value: function getEventObservable(modelId, eventType, stage) {
                var _this2 = this;
    
                return _reactiveIndex.Observable.create(function (o) {
                    _this2._throwIfHalted();
                    _system.Guard.isString(modelId, 'The modelId argument should be a string');
                    _system.Guard.isDefined(modelId, 'The modelId argument should be defined');
                    _system.Guard.isDefined(eventType, 'The eventType argument should be defined');
    
                    if (stage) {
                        _system.Guard.isString(stage, 'The stage argument should be a string');
                        _system.Guard.isTrue(stage === _ObservationStage2['default'].preview || stage === _ObservationStage2['default'].normal || stage === _ObservationStage2['default'].committed, 'The stage argument value of [' + stage + '] is incorrect. It should be preview, normal or committed.');
                    } else {
                        stage = _ObservationStage2['default'].normal;
                    }
                    var subjects = _this2._getModelsEventSubjects(modelId, eventType);
                    var subject = subjects[stage];
                    return subject.observe(o);
                });
            }
        }, {
            key: 'getModelObservable',
            value: function getModelObservable(modelId) {
                var _this3 = this;
    
                return _reactiveIndex.Observable.create(function (o) {
                    _this3._throwIfHalted();
                    _system.Guard.isString(modelId, 'The modelId should be a string');
    
                    var updateSubject = _this3._modelUpdateSubjects[modelId];
                    if (typeof updateSubject === 'undefined') {
                        updateSubject = new _reactiveIndex.Subject();
                        _this3._modelUpdateSubjects[modelId] = updateSubject;
                    }
                    return updateSubject.observe(o);
                });
            }
        }, {
            key: 'createModelRouter',
            value: function createModelRouter(targetModelId) {
                _system.Guard.isString(targetModelId, 'The targetModelId argument should be a string');
                return new _ModelRouterJs2['default'](this, targetModelId);
            }
        }, {
            key: '_eventQueue',
            value: function _eventQueue(modelId, eventType, event) {
                // don't enqueue a model changed event for the same model that changed
                if (eventType === 'modelChangedEvent' && event.modelId === modelId) return;
                var modelRecord = this._models[modelId];
                if (typeof modelRecord === 'undefined') {
                    throw new Error('Can not publish event of type [' + eventType + '] as model with id [' + modelId + '] not registered');
                } else {
                    try {
                        var subjects = this._getModelsEventSubjects(modelId, eventType);
                        // only enqueue if the model has observers for the given event type
                        if (subjects.hasOwnProperty(eventType)) {
                            modelRecord.eventQueue.push({ eventType: eventType, event: event });
                        }
                        this._purgeEventQueues();
                    } catch (err) {
                        this._halt(err);
                    }
                }
            }
        }, {
            key: '_getModelsEventSubjects',
            value: function _getModelsEventSubjects(modelId, eventType) {
                var modelEventSubject = this._modelEventSubjects[modelId];
                if (typeof modelEventSubject === 'undefined') {
                    modelEventSubject = {};
                    this._modelEventSubjects[modelId] = modelEventSubject;
                }
                var subjects = modelEventSubject[eventType];
                if (typeof subjects === 'undefined') {
                    subjects = {
                        preview: new _reactiveIndex.Subject(),
                        normal: new _reactiveIndex.Subject(),
                        committed: new _reactiveIndex.Subject()
                    };
                    modelEventSubject[eventType] = subjects;
                }
                return subjects;
            }
        }, {
            key: '_purgeEventQueues',
            value: function _purgeEventQueues() {
                if (this._state.currentStatus === _StatusJs2['default'].Idle) {
                    var modelRecord = this._getNextModelRecordWithQueuedEvents();
                    var hasEvents = true;
    
                    // TODO -> Explanation of why we have the two while loops
                    while (hasEvents) {
                        while (hasEvents) {
                            this._state.moveToPreProcessing(modelRecord.modelId, modelRecord.model);
                            var eventRecord = modelRecord.eventQueue.shift();
                            if (modelRecord.model.unlock && typeof modelRecord.model.unlock === 'function') {
                                modelRecord.model.unlock();
                            }
                            var eventContext = new _EventContext2['default'](modelRecord.modelId, eventRecord.eventType, eventRecord.event);
                            modelRecord.runPreEventProcessor(modelRecord.model, eventRecord.event, eventContext);
                            if (!modelRecord.wasRemoved) {
                                if (!eventContext.isCanceled) {
                                    this._state.moveToEventDispatch();
                                    while (hasEvents) {
                                        var wasDispatched = this._dispatchEventToEventProcessors(modelRecord.modelId, modelRecord.model, eventRecord.event, eventRecord.eventType, eventContext);
                                        if (modelRecord.wasRemoved) break;
                                        if (!modelRecord.hasChanges && wasDispatched) {
                                            modelRecord.hasChanges = true;
                                        }
                                        hasEvents = modelRecord.eventQueue.length > 0;
                                        if (hasEvents) {
                                            eventRecord = modelRecord.eventQueue.shift();
                                            eventContext = new _EventContext2['default'](modelRecord.modelId, eventRecord.eventType, eventRecord.event);
                                        }
                                    } // keep looping until any events from the dispatch to processors stage are processed
                                }
                                if (!modelRecord.wasRemoved) {
                                    this._state.moveToPostProcessing();
                                    modelRecord.runPostEventProcessor(modelRecord.model, eventRecord.event, eventContext);
                                    if (modelRecord.model.lock && typeof modelRecord.model.lock === 'function') {
                                        modelRecord.model.lock();
                                    }
                                }
                            }
                            this.broadcastEvent('modelChangedEvent', new _modelEventsIndex.ModelChangedEvent(modelRecord.modelId, eventRecord.eventType));
                            modelRecord = this._getNextModelRecordWithQueuedEvents();
                            hasEvents = typeof modelRecord !== 'undefined';
                        } // keep looping until any events raised during post event processing OR event that have come in for other models are processed
                        this._state.moveToDispatchModelUpdates();
                        this._dispatchModelUpdates();
                        modelRecord = this._getNextModelRecordWithQueuedEvents();
                        hasEvents = typeof modelRecord !== 'undefined';
                    } // keep looping until any events from the dispatch updates stages are processed
                    this._state.moveToIdle();
                }
            }
        }, {
            key: '_dispatchEventToEventProcessors',
            value: function _dispatchEventToEventProcessors(modelId, model, event, eventType, eventContext) {
                var dispatchEvent = function dispatchEvent(model1, event1, context, subject) {
                    var wasDispatched = false;
                    if (subject.getObserverCount() > 0) {
                        // note: if the model was removed by an observer the subject will be completed so subsequent observers won't get the event
                        subject.onNext(model1, event1, context);
                        if (subject.hasError) {
                            throw subject.error;
                        }
                        wasDispatched = true;
                    }
                    return wasDispatched;
                };
    
                var eventSubjects = this._getModelsEventSubjects(modelId, eventType);
                var wasDispatched = dispatchEvent(model, event, eventContext, eventSubjects.preview);
                if (eventContext.isCommitted) {
                    throw new Error('You can\'t commit an event at the preview stage. Event: [' + eventContext.eventType + '], ModelId: [' + modelId + ']');
                }
                if (!eventContext.isCanceled) {
                    wasDispatched = dispatchEvent(model, event, eventContext, eventSubjects.normal);
                    if (eventContext.isCanceled) {
                        throw new Error('You can\'t cancel an event at the normal stage. Event: [' + eventContext.eventType + '], ModelId: [' + modelId + ']');
                    }
                    if (wasDispatched && eventContext.isCommitted) {
                        dispatchEvent(model, event, eventContext, eventSubjects.committed);
                        if (eventContext.isCanceled) {
                            throw new Error('You can\'t cancel an event at the committed stage. Event: [' + eventContext.eventType + '], ModelId: [' + modelId + ']');
                        }
                    }
                }
                return wasDispatched;
            }
        }, {
            key: '_dispatchModelUpdates',
            value: function _dispatchModelUpdates() {
                var updates = [],
                    modelUpdateSubject = undefined;
                for (var modelId in this._models) {
                    if (this._models.hasOwnProperty(modelId)) {
                        var modelRecord = this._models[modelId];
                        if (modelRecord.hasChanges) {
                            modelRecord.hasChanges = false;
                            updates.push(modelRecord);
                        }
                    }
                }
                for (var i = 0, len = updates.length; i < len; i++) {
                    modelUpdateSubject = this._modelUpdateSubjects[updates[i].modelId];
                    if (typeof modelUpdateSubject !== 'undefined') {
                        modelUpdateSubject.onNext(updates[i].model);
                        if (modelUpdateSubject.hasError) {
                            throw modelUpdateSubject.error;
                        }
                    }
                }
            }
        }, {
            key: '_getNextModelRecordWithQueuedEvents',
            value: function _getNextModelRecordWithQueuedEvents() {
                var nextModel = undefined;
                for (var modelId in this._models) {
                    if (this._models.hasOwnProperty(modelId)) {
                        var current = this._models[modelId];
                        if (current.eventQueue.length > 0) {
                            nextModel = current;
                            break;
                        }
                    }
                }
                return nextModel;
            }
        }, {
            key: '_throwIfHalted',
            value: function _throwIfHalted() {
                if (this._state.currentStatus === _StatusJs2['default'].Halted) {
                    var message = _system.utils.format('Event router halted due to previous error [{0}]', this._haltingException);
                    throw new Error(message);
                }
            }
        }, {
            key: '_halt',
            value: function _halt(err) {
                this._state.moveToHalted();
                _log.error('Router halted error: [{0}]', err);
                this._haltingException = err;
                throw err;
            }
        }]);
    
        return Router;
    })();
    
    exports['default'] = Router;
    module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var _system = __webpack_require__(4);
    
    var EventContext = (function () {
        function EventContext(modelId, eventType, event) {
            _classCallCheck(this, EventContext);
    
            _system.Guard.isString(modelId, "The modelId should be a string");
            _system.Guard.isString(eventType, "The eventType should be a string");
            _system.Guard.isDefined(event, "The event should be defined");
            this._modelId = modelId;
            this._eventType = eventType;
            this._event = event;
            this._isCanceled = false;
            this._isCommitted = false;
        }
    
        _createClass(EventContext, [{
            key: "cancel",
            value: function cancel() {
                if (!this._isCanceled) {
                    this._isCanceled = true;
                } else {
                    throw new Error('event is already cancelled');
                }
            }
        }, {
            key: "commit",
            value: function commit() {
                if (!this._isCommitted) {
                    this._isCommitted = true;
                } else {
                    throw 'event is already committed';
                }
            }
        }, {
            key: "isCanceled",
            get: function get() {
                return this._isCanceled;
            }
        }, {
            key: "isCommitted",
            get: function get() {
                return this._isCommitted;
            }
        }, {
            key: "modelId",
            get: function get() {
                return this._modelId;
            }
        }, {
            key: "event",
            get: function get() {
                return this._event;
            }
        }, {
            key: "eventType",
            get: function get() {
                return this._eventType;
            }
        }]);
    
        return EventContext;
    })();
    
    exports["default"] = EventContext;
    module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _disposables = __webpack_require__(5);
    
    var _disposables2 = _interopRequireDefault(_disposables);
    
    var _Guard = __webpack_require__(7);
    
    var _Guard2 = _interopRequireDefault(_Guard);
    
    var _logger = __webpack_require__(11);
    
    var logger = _interopRequireWildcard(_logger);
    
    var _utils = __webpack_require__(8);
    
    var utils = _interopRequireWildcard(_utils);
    
    exports['default'] = { disposables: _disposables2['default'], Guard: _Guard2['default'], logger: logger, utils: utils };
    module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _CompositeDisposable = __webpack_require__(6);
    
    var _CompositeDisposable2 = _interopRequireDefault(_CompositeDisposable);
    
    var _DictionaryDisposable = __webpack_require__(10);
    
    var _DictionaryDisposable2 = _interopRequireDefault(_DictionaryDisposable);
    
    var _DisposableWrapper = __webpack_require__(9);
    
    var _DisposableWrapper2 = _interopRequireDefault(_DisposableWrapper);
    
    exports['default'] = { CompositeDisposable: _CompositeDisposable2['default'], DictionaryDisposable: _DictionaryDisposable2['default'], DisposableWrapper: _DisposableWrapper2['default'] };
    module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _Guard = __webpack_require__(7);
    
    var _Guard2 = _interopRequireDefault(_Guard);
    
    var _DisposableWrapper = __webpack_require__(9);
    
    var _DisposableWrapper2 = _interopRequireDefault(_DisposableWrapper);
    
    var CompositeDisposable = (function () {
        function CompositeDisposable() {
            _classCallCheck(this, CompositeDisposable);
    
            this._disposables = [];
            this._isDisposed = false;
        }
    
        _createClass(CompositeDisposable, [{
            key: 'add',
            value: function add(disposable) {
                var disposableWrapper = new _DisposableWrapper2['default'](disposable);
                if (this._isDisposed) {
                    disposableWrapper.dispose();
                    return;
                }
                this._disposables.push(disposableWrapper);
            }
        }, {
            key: 'dispose',
            value: function dispose() {
                if (!this._isDisposed) {
                    this._isDisposed = true;
                    for (var i = 0, len = this._disposables.length; i < len; i++) {
                        var disposable = this._disposables[i];
                        disposable.dispose();
                    }
                    this._disposables.length = 0;
                }
            }
        }, {
            key: 'isDisposed',
            get: function get() {
                return this._isDisposed;
            }
        }]);
    
        return CompositeDisposable;
    })();
    
    exports['default'] = CompositeDisposable;
    module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _utils = __webpack_require__(8);
    
    var utils = _interopRequireWildcard(_utils);
    
    var Guard = (function () {
        function Guard() {
            _classCallCheck(this, Guard);
        }
    
        _createClass(Guard, null, [{
            key: 'isDefined',
            value: function isDefined(value, message) {
                if (typeof value === 'undefined') {
                    doThrow(message);
                }
            }
        }, {
            key: 'isFalsey',
            value: function isFalsey(value, message) {
                if (value) {
                    doThrow(message);
                }
            }
        }, {
            key: 'lengthIs',
            value: function lengthIs(array, length, message) {
                if (array.length !== length) {
                    doThrow(message);
                }
            }
        }, {
            key: 'lengthGreaterThan',
            value: function lengthGreaterThan(array, expected, message) {
                if (array.length < expected) {
                    doThrow(message);
                }
            }
        }, {
            key: 'lengthIsAtLeast',
            value: function lengthIsAtLeast(array, expected, message) {
                if (array.length < expected) {
                    doThrow(message);
                }
            }
        }, {
            key: 'isString',
            value: function isString(value, message) {
                if (!utils.isString(value)) {
                    doThrow(message);
                }
            }
        }, {
            key: 'isTrue',
            value: function isTrue(check, message) {
                if (!check) {
                    doThrow(message);
                }
            }
        }, {
            key: 'isFunction',
            value: function isFunction(item, message) {
                if (typeof item != "function") {
                    doThrow(message);
                }
            }
        }, {
            key: 'isNumber',
            value: function isNumber(value, message) {
                if (isNaN(value)) {
                    doThrow(message);
                }
            }
        }, {
            key: 'isObject',
            value: function isObject(value, message) {
                if (typeof value !== 'object') {
                    doThrow(message);
                }
            }
        }]);
    
        return Guard;
    })();
    
    exports['default'] = Guard;
    
    function doThrow(message) {
        if (typeof message === 'undefined' || message === '') {
            throw new Error("Argument error");
        }
        throw new Error(message);
    }
    module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.removeAll = removeAll;
    exports.isString = isString;
    exports.format = format;
    
    function removeAll(arr, item) {
        for (var i = arr.length; i--;) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }
    
    function isString(value) {
        return typeof value == 'string' || value instanceof String;
    }
    
    function format(formatString) {
        //Guard.isString(format, "First argument to a log function should be a string, but got [" + format + "]");
        var args = Array.prototype.slice.call(arguments, 1);
        var message = formatString.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
        return message;
    }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _Guard = __webpack_require__(7);
    
    var _Guard2 = _interopRequireDefault(_Guard);
    
    var DisposableWrapper = (function () {
        function DisposableWrapper(disposable) {
            _classCallCheck(this, DisposableWrapper);
    
            _Guard2['default'].isDefined(disposable, "disposable must be defined");
            var innerDisposable;
            if (typeof disposable === 'function') {
                innerDisposable = { dispose: function dispose() {
                        disposable();
                    } };
            } else if (disposable.dispose && typeof disposable.dispose === 'function') {
                innerDisposable = {
                    dispose: function dispose() {
                        // at this point if something has deleted the dispose or it's not a function we just ignore it.
                        if (disposable.dispose && typeof disposable.dispose === 'function') {
                            disposable.dispose();
                        }
                    }
                };
            } else {
                throw new Error('Item to dispose was neither a function nor had a dispose method.');
            }
            this._isDisposed = false;
            this._disposable = innerDisposable;
        }
    
        _createClass(DisposableWrapper, [{
            key: 'dispose',
            value: function dispose() {
                if (!this._isDisposed && this._disposable) {
                    this._isDisposed = true;
                    this._disposable.dispose();
                }
            }
        }, {
            key: 'isDisposed',
            get: function get() {
                return this._isDisposed;
            }
        }]);
    
        return DisposableWrapper;
    })();
    
    exports['default'] = DisposableWrapper;
    module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var _DisposableWrapper = __webpack_require__(9);
    
    var _DisposableWrapper2 = _interopRequireDefault(_DisposableWrapper);
    
    var DictionaryDisposable = (function () {
        function DictionaryDisposable() {
            _classCallCheck(this, DictionaryDisposable);
    
            this._isDisposed = false;
        }
    
        _createClass(DictionaryDisposable, [{
            key: "add",
            value: function add(key, disposable) {
                if (this.hasOwnProperty(key)) {
                    throw new Error("Key " + key + " already found");
                }
                var disposableWrapper = new _DisposableWrapper2["default"](disposable);
                if (this._isDisposed) {
                    disposableWrapper.dispose();
                    return;
                }
                this[key] = disposableWrapper;
            }
        }, {
            key: "remove",
            value: function remove(key) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                // if(!this._isDisposed) {
                this._isDisposed = true;
                for (var p in this) {
                    if (this.hasOwnProperty(p)) {
                        var disposable = this[p];
                        if (disposable.dispose) {
                            disposable.dispose();
                        }
                    }
                }
                // }
            }
        }]);
    
        return DictionaryDisposable;
    })();
    
    exports["default"] = DictionaryDisposable;
    module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    exports.create = create;
    exports.setLevel = setLevel;
    exports.setSink = setSink;
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _Guard = __webpack_require__(7);
    
    var _Guard2 = _interopRequireDefault(_Guard);
    
    var levels = {
        verbose: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    
    var _currentLevel = levels.debug;
    
    var _sink = function _sink(logEvent) {
        console.log('[' + logEvent.logger + '] [' + logEvent.level + ']: ' + logEvent.message);
    };
    
    var Logger = (function () {
        function Logger(name) {
            _classCallCheck(this, Logger);
    
            this._name = name;
        }
    
        _createClass(Logger, [{
            key: 'verbose',
            value: function verbose(format) {
                if (_currentLevel <= levels.verbose) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this._log("VERBOSE", format, args);
                }
            }
        }, {
            key: 'debug',
            value: function debug(format) {
                if (_currentLevel <= levels.debug) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this._log("DEBUG", format, args);
                }
            }
        }, {
            key: 'info',
            value: function info(format) {
                if (_currentLevel <= levels.info) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this._log("INFO", format, args);
                }
            }
        }, {
            key: 'warn',
            value: function warn(format) {
                if (_currentLevel <= levels.warn) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this._log("WARN", format, args);
                }
            }
        }, {
            key: 'error',
            value: function error(format) {
                if (_currentLevel <= levels.error) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this._log("ERROR", format, args);
                }
            }
        }, {
            key: '_log',
            value: function _log(level, format, args) {
                _Guard2['default'].isString(format, "First argument to a log function should be a string, but got [" + format + "]");
                var message = format.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
                _sink({
                    logger: this._name,
                    level: level,
                    message: message
                });
            }
        }]);
    
        return Logger;
    })();
    
    function create(name) {
        _Guard2['default'].isDefined(name, "The name argument should be defined");
        _Guard2['default'].isString(name, "The name argument should be a string");
        return new Logger(name);
    }
    
    function setLevel(level) {
        _currentLevel = level;
    }
    
    function setSink(sink) {
        _Guard2['default'].isFunction(sink, "Logging sink argument must be a function");
        _sink = sink;
    }
    
    exports.levels = levels;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var _system = __webpack_require__(4);
    
    var ModelRecord = (function () {
        // parentModelId is undefined if it's the root
    
        function ModelRecord(modelId, model, options) {
            _classCallCheck(this, ModelRecord);
    
            this._modelId = modelId;
            this._model = model;
            this._eventQueue = [];
            this._hasChanges = false;
            this._wasRemoved = false;
            this._runPreEventProcessor = this._createEventProcessor("preEventProcessor", options ? options.preEventProcessor : undefined);
            this._runPostEventProcessor = this._createEventProcessor("postEventProcessor", options ? options.postEventProcessor : undefined);
        }
    
        _createClass(ModelRecord, [{
            key: "_createEventProcessor",
            value: function _createEventProcessor(name, processor) {
                if (processor) {
                    var isValid = typeof processor === 'function' || typeof processor.process === 'function';
                    _system.Guard.isTrue(isValid, name + " should be a function or an object with a process() function");
                    return function (model, event, context) {
                        // I guess it's possible the shape of the processor changed since we validated it, hence the recheck, another option could be to bind the initial value and always use that.
                        if (typeof processor === 'function') {
                            processor(model, event, context);
                        } else if (typeof processor.process === 'function') {
                            processor.process(model, event, context);
                        } else {
                            throw new Error(name + " is neither a function or an object with a process() method");
                        }
                    };
                }
                return function () {/* noop processor */};
            }
        }, {
            key: "modelId",
            get: function get() {
                return this._modelId;
            }
        }, {
            key: "model",
            get: function get() {
                return this._model;
            }
        }, {
            key: "eventQueue",
            get: function get() {
                return this._eventQueue;
            }
        }, {
            key: "hasChanges",
            get: function get() {
                return this._hasChanges;
            },
            set: function set(value) {
                this._hasChanges = value;
            }
        }, {
            key: "wasRemoved",
            get: function get() {
                return this._wasRemoved;
            },
            set: function set(value) {
                this._wasRemoved = value;
            }
        }, {
            key: "runPreEventProcessor",
            get: function get() {
                return this._runPreEventProcessor;
            }
        }, {
            key: "runPostEventProcessor",
            get: function get() {
                return this._runPostEventProcessor;
            }
        }]);
    
        return ModelRecord;
    })();
    
    exports["default"] = ModelRecord;
    module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _system = __webpack_require__(4);
    
    var _StatusJs = __webpack_require__(14);
    
    var _StatusJs2 = _interopRequireDefault(_StatusJs);
    
    // note: perhaps some validation on state transition could be added here, but the tests cover most edges cases already
    
    var State = (function () {
        function State() {
            _classCallCheck(this, State);
    
            this._currentStatus = _StatusJs2['default'].Idle;
        }
    
        _createClass(State, [{
            key: 'moveToIdle',
            value: function moveToIdle() {
                this._currentStatus = _StatusJs2['default'].Idle;
                this._clear();
            }
        }, {
            key: 'moveToPreProcessing',
            value: function moveToPreProcessing(modelId, model) {
                _system.Guard.isString(modelId, 'The modelId should be a string');
                _system.Guard.isDefined(model, 'The model should be defined');
                this._currentModelId = modelId;
                this._currentModel = model;
                this._currentStatus = _StatusJs2['default'].PreEventProcessing;
            }
        }, {
            key: 'moveToEventDispatch',
            value: function moveToEventDispatch() {
                this._currentStatus = _StatusJs2['default'].EventProcessorDispatch;
            }
        }, {
            key: 'moveToPostProcessing',
            value: function moveToPostProcessing() {
                this._currentStatus = _StatusJs2['default'].PostProcessing;
            }
        }, {
            key: 'executeEvent',
            value: function executeEvent(executeAction) {
                var canMove = this._currentStatus === _StatusJs2['default'].PreEventProcessing || this._currentStatus === _StatusJs2['default'].EventProcessorDispatch || this._currentStatus === _StatusJs2['default'].PostProcessing;
                _system.Guard.isTrue(canMove, 'Can\'t move to executing as the current state ' + this._currentStatus + ' doesn\'t allow it');
                var previousStatus = this._currentStatus;
                this._currentStatus = _StatusJs2['default'].EventExecution;
                executeAction();
                this._currentStatus = previousStatus;
            }
        }, {
            key: 'moveToDispatchModelUpdates',
            value: function moveToDispatchModelUpdates() {
                this._currentStatus = _StatusJs2['default'].DispatchModelUpdates;
            }
        }, {
            key: 'moveToHalted',
            value: function moveToHalted() {
                this._currentStatus = _StatusJs2['default'].Halted;
                this._clear();
            }
        }, {
            key: '_clear',
            value: function _clear() {
                this._currentModelId = undefined;
                this._currentModel = undefined;
            }
        }, {
            key: 'currentStatus',
            get: function get() {
                return this._currentStatus;
            }
        }, {
            key: 'currentModelId',
            get: function get() {
                return this._currentModelId;
            }
        }, {
            key: 'currentModel',
            get: function get() {
                return this._currentModel;
            }
        }]);
    
        return State;
    })();
    
    exports['default'] = State;
    module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var Status = (function () {
      function Status() {
        _classCallCheck(this, Status);
      }
    
      _createClass(Status, null, [{
        key: 'Idle',
        get: function get() {
          return 'idle';
        }
      }, {
        key: 'PreEventProcessing',
        get: function get() {
          return 'preEventProcessorDispatch';
        }
      }, {
        key: 'EventProcessorDispatch',
        get: function get() {
          return 'eventProcessorDispatch';
        }
      }, {
        key: 'EventExecution',
        get: function get() {
          return 'eventProcessorExecution';
        }
      }, {
        key: 'PostProcessing',
        get: function get() {
          return 'postEventProcessorDispatch';
        }
      }, {
        key: 'DispatchModelUpdates',
        get: function get() {
          return 'dispatchModelUpdates';
        }
      }, {
        key: 'Halted',
        get: function get() {
          return 'halted';
        }
      }]);
    
      return Status;
    })();
    
    exports['default'] = Status;
    module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var ModelRouter = (function () {
        function ModelRouter(underlyingRouter, targetModelId) {
            _classCallCheck(this, ModelRouter);
    
            this._underlying = underlyingRouter;
            this._targetModelId = targetModelId;
        }
    
        _createClass(ModelRouter, [{
            key: "publishEvent",
            value: function publishEvent(eventType, event) {
                this._underlying.publishEvent(this._targetModelId, eventType, event);
            }
        }, {
            key: "executeEvent",
            value: function executeEvent(eventType, event) {
                this._underlying.executeEvent(eventType, event);
            }
        }, {
            key: "getEventObservable",
            value: function getEventObservable(eventType, stage) {
                return this._underlying.getEventObservable(this._targetModelId, eventType, stage);
            }
        }, {
            key: "getModelObservable",
            value: function getModelObservable() {
                return this._underlying.getModelObservable(this._targetModelId);
            }
        }]);
    
        return ModelRouter;
    })();
    
    exports["default"] = ModelRouter;
    module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    // these scripts have no exports, they add functionality to Observable
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
    
    __webpack_require__(17);
    
    __webpack_require__(20);
    
    __webpack_require__(21);
    
    __webpack_require__(22);
    
    var _Observable = __webpack_require__(18);
    
    exports.Observable = _interopRequire(_Observable);
    
    var _Observer = __webpack_require__(19);
    
    exports.Observer = _interopRequire(_Observer);
    
    var _Subject = __webpack_require__(23);
    
    exports.Subject = _interopRequire(_Subject);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _Observable = __webpack_require__(18);
    
    var _Observable2 = _interopRequireDefault(_Observable);
    
    var _system = __webpack_require__(4);
    
    _Observable2['default'].prototype.where = function (predicate) {
        _system.Guard.isDefined(predicate, 'predicate Required');
        var source = this;
        var observe = function observe(observer) {
            return source.observe(function (arg1, arg2, arg3) {
                if (predicate(arg1, arg2, arg3)) {
                    observer.onNext(arg1, arg2, arg3);
                }
            }, observer.onError.bind(observer), function () {
                return observer.onCompleted();
            });
        };
        return new _Observable2['default'](observe);
    };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _system = __webpack_require__(4);
    
    var _Observer = __webpack_require__(19);
    
    var _Observer2 = _interopRequireDefault(_Observer);
    
    var Observable = (function () {
        _createClass(Observable, null, [{
            key: 'create',
            value: function create(onObserve) {
                _system.Guard.lengthIs(arguments, 1, "Incorrect argument count on Observable, expect 1 onObserve function");
                var observe = function observe(observer) {
                    return onObserve(observer);
                };
                return new Observable(observe);
            }
        }]);
    
        function Observable(observe) {
            _classCallCheck(this, Observable);
    
            this._observe = observe;
        }
    
        _createClass(Observable, [{
            key: 'observe',
            value: function observe() {
                var observer;
                if (arguments.length === 1 && arguments[0] instanceof _Observer2['default']) {
                    observer = arguments[0];
                } else {
                    _system.Guard.lengthIsAtLeast(arguments, 1, "Incorrect args count of " + arguments.length);
                    var onNext = arguments[0];
                    var onError = arguments.length >= 1 ? arguments[1] : undefined;
                    var onCompleted = arguments.length >= 2 ? arguments[2] : undefined;
                    observer = new _Observer2['default'](onNext, onError, onCompleted);
                }
                _system.Guard.isDefined(this._observe, '_observe not set');
                return this._observe(observer);
            }
        }]);
    
        return Observable;
    })();
    
    exports['default'] = Observable;
    module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _system = __webpack_require__(4);
    
    var Observer = (function () {
        function Observer(onNext, onError, onCompleted) {
            _classCallCheck(this, Observer);
    
            _system.Guard.isDefined(onNext, 'onObserve Required');
            this._hasError = false;
            this._hasCompleted = false;
            this._onNext = onNext;
            this._onError = function (ex) {
                if (typeof onError === 'undefined' || typeof onError !== 'function') {
                    throw ex; // we default to re-throwing if there is no error handler provide
                } else {
                        onError(ex);
                    }
            };
            this._onCompleted = function () {
                if (typeof onCompleted !== 'undefined' && typeof onCompleted === 'function') {
                    onCompleted();
                }
            };
        }
    
        _createClass(Observer, [{
            key: 'onNext',
            value: function onNext(arg1, arg2, arg3) {
                if (!this._hasError && !this._hasCompleted) {
                    this._onNext(arg1, arg2, arg3);
                }
            }
        }, {
            key: 'onError',
            value: function onError(value) {
                if (!this._hasError) {
                    this._hasError = true;
                    this._onError(value);
                }
            }
        }, {
            key: 'onCompleted',
            value: function onCompleted() {
                if (!this._hasCompleted) {
                    this._hasCompleted = true;
                    this._onCompleted();
                }
            }
        }]);
    
        return Observer;
    })();
    
    exports['default'] = Observer;
    module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _Observable = __webpack_require__(18);
    
    var _Observable2 = _interopRequireDefault(_Observable);
    
    _Observable2['default'].prototype.asObservable = function () {
        var source = this;
        var observe = function observe(observer) {
            return source.observe(function (arg1, arg2, arg3) {
                observer.onNext(arg1, arg2, arg3);
            }, observer.onError.bind(observer), function () {
                return observer.onCompleted();
            });
        };
        return new _Observable2['default'](observe);
    };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _Observable = __webpack_require__(18);
    
    var _Observable2 = _interopRequireDefault(_Observable);
    
    var _system = __webpack_require__(4);
    
    // TODO beta, needs test
    _Observable2['default'].prototype.take = function (number) {
        _system.Guard.isNumber(number, "provided value isn't a number");
        var source = this;
        var itemsReceived = 0;
        var hasCompleted = false;
        var observe = function observe(observer) {
            return source.observe(function (arg1, arg2, arg3) {
                // there is possibly some strange edge cases if the observer also pumps a new value, this 'should' cover that (no tests yet)
                itemsReceived++;
                var shouldYield = !number || itemsReceived <= number;
                if (shouldYield) {
                    observer.onNext(arg1, arg2, arg3);
                }
                var shouldComplete = !number || itemsReceived >= number;
                if (!hasCompleted && shouldComplete) {
                    hasCompleted = true;
                    observer.onCompleted();
                }
            }, observer.onError.bind(observer), function () {
                return observer.onCompleted();
            });
        };
        return new _Observable2['default'](observe);
    };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _Observable = __webpack_require__(18);
    
    var _Observable2 = _interopRequireDefault(_Observable);
    
    var _system = __webpack_require__(4);
    
    // TODO beta, needs test
    _Observable2['default'].prototype['do'] = function (action) {
        _system.Guard.isFunction(action, "provided value isn't a function");
        var source = this;
        var observe = function observe(observer) {
            return source.observe(function (arg1, arg2, arg3) {
                action(arg1, arg2, arg3);
                observer.onNext(arg1, arg2, arg3);
            }, observer.onError.bind(observer), function () {
                return observer.onCompleted();
            });
        };
        return new _Observable2['default'](observe);
    };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _system = __webpack_require__(4);
    
    var _Observable2 = __webpack_require__(18);
    
    var _Observable3 = _interopRequireDefault(_Observable2);
    
    var Subject = (function (_Observable) {
        _inherits(Subject, _Observable);
    
        function Subject() {
            _classCallCheck(this, Subject);
    
            _get(Object.getPrototypeOf(Subject.prototype), 'constructor', this).call(this, undefined);
            this._observe = observe.bind(this);
            this._observers = [];
            this._hasComplete = false;
            this._hasError = false;
        }
    
        _createClass(Subject, [{
            key: 'onNext',
    
            // The reactivate implementation can push 3 arguments through the stream, initially this was setup to
            // pass all arguments using .apply, however it's performance is about 40% slower than direct method calls
            // given this, and that we only ever push a max of 3 args, it makes sense to hard code them.
            value: function onNext(arg1, arg2, arg3) {
                if (!this._hasComplete) {
                    var os = this._observers.slice(0);
                    for (var i = 0, len = os.length; i < len; i++) {
                        if (this._hasError) break;
                        var observer = os[i];
                        try {
                            observer.onNext(arg1, arg2, arg3);
                        } catch (err) {
                            this._hasError = true;
                            this._error = err;
                            observer.onError(err);
                        }
                    }
                }
            }
        }, {
            key: 'onCompleted',
            value: function onCompleted() {
                if (!this._hasComplete && !this._hasError) {
                    this._hasComplete = true;
                    var os = this._observers.slice(0);
                    for (var i = 0, len = os.length; i < len; i++) {
                        var observer = os[i];
                        observer.onCompleted();
                    }
                }
            }
        }, {
            key: 'onError',
            value: function onError(err) {
                if (!this._hasError) {
                    this._hasError = true;
                    var os = this._observers.slice(0);
                    for (var i = 0, len = os.length; i < len; i++) {
                        var observer = os[i];
                        observer.onError(err);
                    }
                }
            }
        }, {
            key: 'getObserverCount',
            value: function getObserverCount() {
                return this._observers.length;
            }
        }, {
            key: 'hasError',
            get: function get() {
                return this._hasError;
            }
        }, {
            key: 'error',
            get: function get() {
                return this._error;
            }
        }]);
    
        return Subject;
    })(_Observable3['default']);
    
    function observe(observer) {
        var _this = this;
    
        /*jshint validthis:true */
        this._observers.push(observer);
        return {
            dispose: function dispose() {
                _system.utils.removeAll(_this._observers, observer);
            }
        };
    }
    exports['default'] = Subject;
    module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _AsyncWorkCompleteEvent = __webpack_require__(25);
    
    var _AsyncWorkCompleteEvent2 = _interopRequireDefault(_AsyncWorkCompleteEvent);
    
    var _ModelChangedEvent = __webpack_require__(26);
    
    var _ModelChangedEvent2 = _interopRequireDefault(_ModelChangedEvent);
    
    exports['default'] = { AsyncWorkCompleteEvent: _AsyncWorkCompleteEvent2['default'], ModelChangedEvent: _ModelChangedEvent2['default'] };
    module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var AsyncWorkCompleteEvent = (function () {
        function AsyncWorkCompleteEvent(operationId, results, isFinished) {
            _classCallCheck(this, AsyncWorkCompleteEvent);
    
            this._operationId = operationId;
            this._results = results;
            this._isFinished = isFinished;
        }
    
        _createClass(AsyncWorkCompleteEvent, [{
            key: "operationId",
            get: function get() {
                return this._operationId;
            }
        }, {
            key: "results",
            get: function get() {
                return this._results;
            }
        }, {
            key: "isFinished",
            get: function get() {
                return this._isFinished;
            }
        }]);
    
        return AsyncWorkCompleteEvent;
    })();
    
    exports["default"] = AsyncWorkCompleteEvent;
    module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var ModelChangedEvent = (function () {
        function ModelChangedEvent(modelId, eventType) {
            _classCallCheck(this, ModelChangedEvent);
    
            this._modelId = modelId;
            this._eventType = eventType;
        }
    
        _createClass(ModelChangedEvent, [{
            key: "modelId",
            get: function get() {
                return this._modelId;
            }
        }, {
            key: "eventType",
            get: function get() {
                return this._eventType;
            }
        }]);
    
        return ModelChangedEvent;
    })();
    
    exports["default"] = ModelChangedEvent;
    module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    var _events = __webpack_require__(24);
    
    var _events2 = _interopRequireDefault(_events);
    
    var _DisposableBase = __webpack_require__(28);
    
    var _DisposableBase2 = _interopRequireDefault(_DisposableBase);
    
    var _ModelBase = __webpack_require__(29);
    
    var _ModelBase2 = _interopRequireDefault(_ModelBase);
    
    var _ModelRootBase = __webpack_require__(30);
    
    var _ModelRootBase2 = _interopRequireDefault(_ModelRootBase);
    
    exports['default'] = { events: _events2['default'], DisposableBase: _DisposableBase2['default'], ModelBase: _ModelBase2['default'], ModelRootBase: _ModelRootBase2['default'] };
    module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    var _system = __webpack_require__(4);
    
    var _system2 = _interopRequireDefault(_system);
    
    var DisposableBase = (function () {
        function DisposableBase() {
            _classCallCheck(this, DisposableBase);
    
            this._disposables = new _system2['default'].disposables.CompositeDisposable();
        }
    
        _createClass(DisposableBase, [{
            key: 'addDisposable',
            value: function addDisposable(disposable) {
                this._disposables.add(disposable);
            }
        }, {
            key: 'dispose',
            value: function dispose() {
                this._disposables.dispose();
            }
        }, {
            key: 'isDisposed',
            get: function get() {
                return this._disposables.isDisposed;
            }
        }]);
    
        return DisposableBase;
    })();
    
    exports['default'] = DisposableBase;
    module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    /**
     * A base class for model entities.
     *
     * You don't need to derive from this to use the router, provided as a convenience
     */
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var ModelBase = (function () {
        function ModelBase() {
            _classCallCheck(this, ModelBase);
    
            this._checkIsLocked = function () {
                return true;
            };
        }
    
        _createClass(ModelBase, [{
            key: "ensureLocked",
            value: function ensureLocked() {
                if (this._checkIsLocked()) {
                    throw new Error("Model is locked, can't edit");
                }
            }
        }, {
            key: "isLocked",
            get: function get() {
                return this._checkIsLocked();
            }
        }]);
    
        return ModelBase;
    })();
    
    exports["default"] = ModelBase;
    module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

    // notice_start
    /*
     * Copyright 2015 Keith Woods
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // notice_end
    
    'use strict';
    
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    
    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
    
    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _ModelBase2 = __webpack_require__(29);
    
    var _ModelBase3 = _interopRequireDefault(_ModelBase2);
    
    /**
     * A base class for the root model entity.
     *
     * You don't need to derive from this to use the router, provided as a convenience
     */
    
    var ModelRootBase = (function (_ModelBase) {
        _inherits(ModelRootBase, _ModelBase);
    
        function ModelRootBase() {
            _classCallCheck(this, ModelRootBase);
    
            _get(Object.getPrototypeOf(ModelRootBase.prototype), 'constructor', this).call(this);
            this._isLocked = true;
            this._checkIsLocked = (function () {
                return this._isLocked;
            }).bind(this);
        }
    
        _createClass(ModelRootBase, [{
            key: 'lock',
            value: function lock() {
                this._isLocked = true;
            }
        }, {
            key: 'unlock',
            value: function unlock() {
                this._isLocked = false;
            }
        }, {
            key: 'bindLockPredicate',
            value: function bindLockPredicate() {
                this._bindLockPredicate(this);
            }
        }, {
            key: '_bindLockPredicate',
            value: function _bindLockPredicate(parent) {
                parent = parent || this;
                for (var key in parent) {
                    if (parent.hasOwnProperty(key)) {
                        var o = parent[key];
                        if (o instanceof _ModelBase3['default']) {
                            o._checkIsLocked = this._checkIsLocked;
                            this._bindLockPredicate(o);
                        }
                    }
                }
            }
        }]);
    
        return ModelRootBase;
    })(_ModelBase3['default']);
    
    exports['default'] = ModelRootBase;
    module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=esp.js.map