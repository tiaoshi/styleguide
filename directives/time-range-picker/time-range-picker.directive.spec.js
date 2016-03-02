describe('time-range-picker directive', function() {
    var elementCompileFn,
        scope;

    beforeEach(module('wfm.timerangepicker'));

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.startTime = moment({hour: 8, minute: 30}).toDate();
        scope.endTime = moment({hour: 17, minute: 30}).toDate();
        elementCompileFn = function() {
            return $compile('<time-range-picker start-time="startTime" end-time="endTime"></time-range-picker>');
        };
    }));

    it('Directive compilation should work', function() {
        var element = elementCompileFn()(scope);
        scope.$apply();
        expect(element).toBeDefined();
    });

    it('Should show timepickers for start-time and end-time', function() {
        var element = elementCompileFn()(scope);
        var timepickers = element.find('timepicker-wrap');
        expect(timepickers.length).toEqual(2);
    });

    it('Should show error when start-time is greater than end-time', function() {
        scope.startTime = moment({hour: 10, minute: 30}).toDate();
        scope.endTime =  moment({hour: 8, minute: 30}).toDate();

        var element = elementCompileFn()(scope);
        scope.$apply();

        var divs = element.children();
        var validityDiv = angular.element(divs[0]);

        expect(validityDiv.hasClass('ng-invalid-order')).toBeTruthy();
    });

    it('Should not show error when end-time is on the next day', function() {
        scope.startTime = moment({hour: 10, minute: 30}).toDate();
        scope.endTime =  moment({hour: 8, minute: 30}).add(1, 'day').toDate();

        var element = elementCompileFn()(scope);
        scope.$apply();

        var divs = element.children();
        var validityDiv = angular.element(divs[0]);

        expect(validityDiv.hasClass('ng-invalid-order')).toBeFalsy();
    });

    it('Should set the next-day to true when start-time and the end-time are on different days', function() {
        scope.startTime = moment({hour: 10, minute: 30}).toDate();
        scope.endTime =  moment({hour: 8, minute: 30}).add(1, 'day').toDate();

        var element = elementCompileFn()(scope);
        scope.$apply();

        var divs = element.children();
        var validityDiv = angular.element(divs[0]);

        expect(validityDiv.scope().nextDay).toBeTruthy();
    });

    it('Should not show meridian in Swedish time-format', function() {
        moment.locale('sv');
        var element = elementCompileFn()(scope);
        var timepicker = angular.element(element.find('timepicker-wrap')[0]);
        expect(timepicker.scope().showMeridian).toBeFalsy();

    });

    it('Should show meridian in US time-format', function() {
        moment.locale('en-US');
        var element = elementCompileFn()(scope);
        var timepicker = angular.element(element.find('timepicker-wrap')[0]);
        expect(timepicker.scope().showMeridian).toBeTruthy();

    });

    it('Setting next day to true will change the end-time to different date value', function() {
        var element = elementCompileFn()(scope);

        scope.$apply();
        var divs = element.children();
        var validityDiv = angular.element(divs[0]);

        validityDiv.scope().nextDay = true;

        scope.$apply();
        expect(scope.startTime.getDate()).not.toEqual(scope.endTime.getDate());
    });

    it('Setting next day to false will change the end-time to same date value', function() {
        scope.startTime = moment({hour: 10, minute: 30}).toDate();
        scope.endTime =  moment({hour: 8, minute: 30}).add(1, 'day').toDate();

        var element = elementCompileFn()(scope);

        scope.$apply();
        var divs = element.children();
        var validityDiv = angular.element(divs[0]);

        validityDiv.scope().nextDay = false;

        scope.$apply();
        expect(scope.startTime.getDate()).toEqual(scope.endTime.getDate());

    });

});