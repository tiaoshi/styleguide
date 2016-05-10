(function () {
    'use strict';
    describe('wfmNotice', function () {
        var elementCompile,
            rootScope,
            directiveScope,
            NoticeService,
            FAKE_NOTICE_OPTIONS;

        beforeEach(
            function () {
                module('wfm.notice');
            }
        );

        beforeEach(inject(function ($compile, $rootScope, _NoticeService_) {
            rootScope = $rootScope.$new();
            NoticeService = _NoticeService_;
            FAKE_NOTICE_OPTIONS = {};
        }));

        it('should display a notice', inject(function ($compile) {
            var element = '<wfm-notice notices="notices"></wfm-notice>';
            elementCompile = $compile(element)(rootScope);
            rootScope.$digest();

            NoticeService.newNotice(FAKE_NOTICE_OPTIONS);
            rootScope.$digest();

            expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(1);
        }));

        it('should display a newly added notice', inject(function ($compile) {
            var element = '<wfm-notice notices="notices"></wfm-notice>';
            elementCompile = $compile(element)(rootScope);
            rootScope.$digest();

            NoticeService.newNotice(FAKE_NOTICE_OPTIONS);
            rootScope.$digest();
            NoticeService.newNotice(FAKE_NOTICE_OPTIONS);
            rootScope.$digest();

            expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(2);
        }));

        it('should remove current notice after time to live', function (done) {
            inject(function ($compile, $timeout) {
                var element = '<wfm-notice notices="notices"></wfm-notice>';
                elementCompile = $compile(element)(rootScope);
                rootScope.$digest();

                NoticeService.newNotice({
                    content: 'test',
                    timeToLive: 3000
                });
                rootScope.$digest();

                $timeout(function () {
                    expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(0);
                    done();
                }, 5000);
                $timeout.flush();
            });
        });

        it('should remove current notice after time to live and keep second notice', function (done) {
            inject(function ($compile, $timeout) {
                var element = '<wfm-notice notices="notices"></wfm-notice>';
                elementCompile = $compile(element)(rootScope);
                rootScope.$digest();

                NoticeService.newNotice({
                    content: 'test',
                    timeToLive: 3000
                });
                NoticeService.newNotice({
                    content: 'test2',
                    timeToLive: null
                });
                rootScope.$digest();

                $timeout(function () {
                    expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(1);
                    done();
                }, 5000);
                $timeout.flush();
            });
        });

        it('should remove notice with shortest time to live first', function (done) {
            inject(function ($compile, $timeout) {
                var element = '<wfm-notice notices="notices"></wfm-notice>';
                elementCompile = $compile(element)(rootScope);
                rootScope.$digest();

                NoticeService.newNotice({
                    content: 'test',
                    timeToLive: 10000
                });
                NoticeService.newNotice({
                    content: 'test2',
                    timeToLive: 3000
                });
                rootScope.$digest();

                $timeout(function () {
                    expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(1);
                    done();
                }, 5000);
                $timeout.flush();
            });
        });

        it('should display a notice created with NoticeService', inject(function ($compile, $injector) {
            var element = '<wfm-notice notices="wfmNotices"></wfm-notice>';
            elementCompile = $compile(element)(rootScope);
            var noticeService = $injector.get('NoticeService', {
                $rootScope: rootScope
            });
            rootScope.$digest();
            noticeService.warning('test', 5000, false);
            rootScope.$digest();

            expect(elementCompile[0].querySelectorAll('.notice-item').length).toBe(1);
        }));

    });
})();
