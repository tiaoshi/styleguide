angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div ng-show=\"!displayPopup()\">\n" +
    "  <div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "    <div class=\"sub-header\">\n" +
    "      <span>From</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "    </div>\n" +
    "    <uib-datepicker\n" +
    "\t    ng-model=\"startDate\"\n" +
    "\t    show-weeks=\"true\"\n" +
    "\t    custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t    min-date=\"dummyMinDate\"\n" +
    "\t    class=\"wfm-datepicker\"></uib-datepicker>  \n" +
    "  </div>\n" +
    "  <div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "    <div class=\"sub-header\">\n" +
    "      <span>To</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "    </div>\n" +
    "    <uib-datepicker\n" +
    "\t    ng-model=\"endDate\"\n" +
    "\t    show-weeks=\"true\"\n" +
    "\t    custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t    min-date=\"dummyMinDate\"\n" +
    "\t    class=\"wfm-datepicker\"></uib-datepicker>  \n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateMustBeEqualToOrEarlierThanEndDate</span>\n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container ng-invalid-empty alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateAndEndDateMustBeSet</span>\n" +
    "  </div>  \n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"displayPopup()\">\n" +
    "  <label translate class=\"hor-m-5 inline-vertical-fix\">From</label>\n" +
    "  <div class=\"inline-datepicker-wrap date-range-start-date\">\n" +
    "    <input class=\"pointer start-date-input\"\n" +
    "\t    type=\"text\"\n" +
    "\t    ng-click=\"dropDownState.showStartDatePicker = !dropDownState.showStartDatePicker\"\n" +
    "\t    ng-model=\"startDate\"\n" +
    "\t    uib-datepicker-popup=\"{{dateFormat}}\"\n" +
    "\t    on-open-focus=\"false\"\n" +
    "\t    custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t    show-weeks=\"true\"\n" +
    "\t    is-open=\"dropDownState.showStartDatePicker\"\n" +
    "\t    ng-required=\"true\"\n" +
    "\t    show-button-bar=\"false\"\n" +
    "\t    min-date=\"dummyMinDate\"\n" +
    "\t    close-on-date-selection=\"false\" />\n" +
    "  </div>\n" +
    "  <label translate class=\"hor-m-5 inline-vertical-fix\">To</label>\n" +
    "  <div class=\"inline-datepicker-wrap date-range-end-date\">\n" +
    "    <input class=\"pointer end-date-input\"\n" +
    "\t    type=\"text\"\n" +
    "\t    ng-click=\"dropDownState.showEndDatePicker = !dropDownState.showEndDatePicker\"\n" +
    "\t    ng-model=\"endDate\"\n" +
    "\t    uib-datepicker-popup=\"{{dateFormat}}\"\n" +
    "\t    on-open-focus=\"false\"\n" +
    "\t    show-weeks=\"true\"\n" +
    "\t    custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t    is-open=\"dropDownState.showEndDatePicker\"\n" +
    "\t    ng-required=\"true\"\n" +
    "\t    show-button-bar=\"false\"\n" +
    "\t    min-date=\"dummyMinDate\"\n" +
    "\t    close-on-date-selection=\"false\" />\n" +
    "  </div>\n" +
    "  <span class='popup-control'\n" +
    "\t  ng-mouseenter=\"hoverShow=true\"\n" +
    "\t  ng-mouseleave=\"hoverShow=false\"\n" +
    "\t  ng-click=\"onClickShowAllDates()\"\n" +
    "\t  ng-class='{\"pin-down\" : dropDownState.showAllDatePickers}'>\n" +
    "    <i class=\"mdi mdi-calendar middle inline-vertical-fix\"></i>\n" +
    "  </span>\n" +
    "  \n" +
    "  <div class=\"error-msg-container error-msg-popup-container ng-invalid-order alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateMustBeEqualToOrEarlierThanEndDate</span>\n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container error-msg-popup-container ng-invalid-empty alert-error notice-spacer\" ng-if=\"hoverShow\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateAndEndDateMustBeSet</span>\n" +
    "  </div>  \n" +
    " \n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('directives/date-range-picker/wfm-date-range-picker.tpl.html',
    "<div ng-show=\"templateType==='inline'\" class=\"wfm-block clearfix picker-template-inline\">\n" +
    "\t<div ng-class=\"{ 'ng-valid': !isInvalid(), 'ng-invalid': isInvalid(), 'ng-invalid-order': isInvalid('order'), 'ng-invalid-empty': isInvalid('empty')}\">\n" +
    "\t\t<div class=\"wfm-datepicker-wrap no-boxshadow\">\n" +
    "\t\t\t<div class=\"sub-header\">\n" +
    "\t\t\t\t<span translate>From</span> <strong>{{ startDate | date: \"shortDate\" }}</strong>\n" +
    "\t\t\t\t<div class=\"icon-set form-validation-sign datepickerfix\">\n" +
    "\t\t\t\t\t<i class=\"mdi mdi-check right-sign \"></i>\n" +
    "\t\t\t\t\t<i class=\"mdi mdi-close wrong-sign\"></i>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<datepicker name=\"startDatePicker\" show-weeks=\"true\" class=\"wfm-datepicker datepicker-start-date\" ng-model=\"startDate\" ng-disabled=\"disabled\"\n" +
    "\t\t\t\t\t\tcustom-class=\"setRangeClass(date, mode)\"></datepicker>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"wfm-datepicker-wrap no-boxshadow\">\n" +
    "\t\t\t<div class=\"sub-header\">\n" +
    "\t\t\t\t<span translate>To</span> <strong>{{ endDate | date: \"shortDate\" }}</strong>\n" +
    "\t\t\t\t<div class=\"icon-set form-validation-sign datepickerfix\">\n" +
    "\t\t\t\t\t<i class=\"mdi mdi-check right-sign\"></i>\n" +
    "\t\t\t\t\t<i class=\"mdi mdi-close wrong-sign\"></i>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<datepicker show-weeks=\"true\" class=\"wfm-datepicker datepicker-end-date\" ng-model=\"endDate\" ng-disabled=\"disabled\" custom-class=\"setRangeClass(date, mode)\"></datepicker>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\" ng-if=\"showMessage\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateMustBeEqualToOrEarlierThanEndDate</span></div>\n" +
    "\t\t<div class=\"error-msg-container ng-invalid-empty alert-error notice-spacer\" ng-if=\"showMessage\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateAndEndDateMustBeSet</span></div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div ng-show=\"templateType==='dropdown'\" class=\"inline-block picker-template-dropdown\" >\n" +
    "\t<div ng-class=\"{'ng-valid': !isInvalid(), 'ng-invalid': isInvalid(), 'ng-invalid-order': isInvalid('order'), 'ng-invalid-empty': isInvalid('empty')}\">\n" +
    "\t\t<span translate class=\"hor-m-5\">From</span>\n" +
    "\t\t<div class=\"inline-block relative\">\n" +
    "\t\t\t<input class=\"pointer start-date-input\"\n" +
    "\t\t\t\t   type=\"text\"\n" +
    "\t\t\t\t   ng-click=\"onClickStartDateInput()\"\n" +
    "\t\t\t\t   ng-model=\"startDate\"\n" +
    "\t\t\t\t   uib-datepicker-popup=\"{{shortDate}}\"\n" +
    "\t\t\t\t   on-open-focus=\"false\"\n" +
    "\t\t\t\t   custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t\t\t\t   show-weeks=\"true\"\n" +
    "\t\t\t\t   is-open=\"dropDownState.showStartDatePicker\"\n" +
    "\t\t\t\t   ng-required=\"true\"\n" +
    "\t\t\t\t   show-button-bar=\"false\"\n" +
    "\t\t\t\t   close-on-date-selection=\"false\" />\n" +
    "\t\t</div>\n" +
    "\t\t<span translate class=\"hor-m-5\">To</span>\n" +
    "\t\t<div class=\"inline-block relative\">\n" +
    "\t\t\t<input class=\"pointer end-date-input\"\n" +
    "\t\t\t\t   type=\"text\"\n" +
    "\t\t\t\t   ng-click=\"onClickEndDateInput()\"\n" +
    "\t\t\t\t   ng-model=\"endDate\"\n" +
    "\t\t\t\t   uib-datepicker-popup=\"{{shortDate}}\"\n" +
    "\t\t\t\t   on-open-focus=\"false\"\n" +
    "\t\t\t\t   show-weeks=\"true\"\n" +
    "\t\t\t\t   custom-class=\"setRangeClass(date, mode)\"\n" +
    "\t\t\t\t   is-open=\"dropDownState.showEndDatePicker\"\n" +
    "\t\t\t\t   ng-required=\"true\"\n" +
    "\t\t\t\t   show-button-bar=\"false\"\n" +
    "\t\t\t\t   close-on-date-selection=\"false\" />\n" +
    "\t\t</div>\n" +
    "\t\t<span class='pointer iconfix' ng-mouseenter=\"hoverShow=true\" ng-mouseleave=\"hoverShow=false\" ng-click=\"onClickShowAllDates()\"\n" +
    "\t\t\t  ng-class='{\"pin-down\" : dropDownState.showAllDatePickers}'><i class=\"mdi mdi-calendar middle\"></i></span>\n" +
    "\t\t<div class=\"error-msg-container invalid-order alert-error notice-spacer\" ng-if=\"hoverShow\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateMustBeEqualToOrEarlierThanEndDate</span></div>\n" +
    "\t\t<div class=\"error-msg-container invalid-empty alert-error notice-spacer\" ng-if=\"hoverShow\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateAndEndDateMustBeSet</span></div>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/workinghourspicker/working-hours-picker.tpl.html',
    "<div class=\"row toolbar\">\n" +
    "\t<div class=\"wfm-block\">\n" +
    "\t\t<ul class=\"wfm-list\">\n" +
    "\t\t\t<li>\n" +
    "\t\t\t\t<span class=\"list-item-container list-header\">\n" +
    "\t\t\t\t\t&nbsp;\n" +
    "\t\t\t\t</span>\n" +
    "\t\t\t\t<span class=\"list-item-container\">\n" +
    "\t\t\t\t\t<div ng-repeat-start=\"weekday in weekDays\" ng-repeat-end>\n" +
    "\t\t\t\t\t\t<span translate>{{weekday | showWeekdays}}</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</span>\n" +
    "\t\t\t</li>\n" +
    "\n" +
    "\t\t\t<li ng-repeat=\"WorkingPeriod in workingHours\"\n" +
    "\t\t\t\tng-click=\"$parent.toggleWorkingPeriodSelect(WorkingPeriod)\">\n" +
    "\t\t\t\t<span class=\"list-item-container list-header\">\n" +
    "\t\t\t\t\t<md-tooltip>{{getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</md-tooltip>\n" +
    "\t\t\t\t\t{{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}\n" +
    "\t\t\t\t</span>\n" +
    "\n" +
    "\t\t\t\t<span class=\"list-item-container\">\n" +
    "\t\t\t\t\t<div ng-repeat-start=\"WeekDay in WorkingPeriod.WeekDaySelections\" ng-repeat-end>\n" +
    "\t\t\t\t\t\t<div class=\"wfm-checkbox wfm-checkbox-inline \">\n" +
    "\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-model=\"WeekDay.Checked\" />\n" +
    "\t\t\t\t\t\t\t<label for=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-click=\"enforceRadioBehavior($parent.$index, WeekDay.WeekDay)\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"wfm-checkbox-toggle\"></span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"wfm-checkbox-label\"></span>\n" +
    "\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</span>\n" +
    "\n" +
    "\t\t\t\t<div class=\"wfm-leave-behind wfm-leave-behind-2\">\n" +
    "\t\t\t\t\t<span>\n" +
    "\t\t\t\t\t\t<i class=\"mdi mdi-check\" ng-click=\"$parent.toggleAllChecks($index)\">\n" +
    "\t\t\t\t\t\t\t<md-tooltip>\n" +
    "\t\t\t\t\t\t\t\t{{'ToggleAll' | translate}}\n" +
    "\t\t\t\t\t\t\t</md-tooltip>\n" +
    "\t\t\t\t\t\t</i>\n" +
    "\t\t\t\t\t\t<i class=\"mdi mdi-delete\" ng-click=\"$parent.removeWorkingPeriod($index)\">\n" +
    "\t\t\t\t\t\t\t<md-tooltip>\n" +
    "\t\t\t\t\t\t\t\t{{'DeletePeriod' | translate}}\n" +
    "\t\t\t\t\t\t\t</md-tooltip>\n" +
    "\t\t\t\t\t\t</i>\n" +
    "\t\t\t\t\t</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</li>\n" +
    "\t\t</ul>\n" +
    "\n" +
    "\t\t<div class=\"wfm-block\">\n" +
    "\t\t\t<time-range-picker start-time=\"newWorkingPeriodStartTime\" end-time=\"newWorkingPeriodEndTime\" disable-next-day=\"disableNextDay\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"wfm-fab mini success\" ng-click=\"addEmptyWorkingPeriod(newWorkingPeriodStartTime, newWorkingPeriodEndTime)\">\n" +
    "\t\t\t\t\t<i class=\"mdi mdi-plus\"></i>\n" +
    "\t\t\t\t\t<md-tooltip>{{'AddEmptyPeriod' | translate}}</md-tooltip>\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t</time-range-picker>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n"
  );

}]);
