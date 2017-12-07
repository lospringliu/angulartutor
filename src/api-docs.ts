const API_DOCS = {
  "NgbAccordionConfig": {
    "fileName": "src/accordion/accordion-config.ts",
    "className": "NgbAccordionConfig",
    "description": "Configuration service for the NgbAccordion component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the accordions used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbPanelTitle": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelTitle",
    "description": "This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.",
    "type": "Directive",
    "selector": "ng-template[ngbPanelTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPanelContent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelContent",
    "description": "This directive must be used to wrap accordion panel content.",
    "type": "Directive",
    "selector": "ng-template[ngbPanelContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPanel": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanel",
    "description": "The NgbPanel directive represents an individual panel with the title and collapsible\ncontent",
    "type": "Directive",
    "selector": "ngb-panel",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag determining whether the panel is disabled or not.\nWhen disabled, the panel cannot be toggled."
      },
      {
        "name": "id",
        "type": "string",
        "description": "An optional id for the panel. The id should be unique.\nIf not provided, it will be auto-generated."
      },
      {
        "name": "title",
        "type": "string",
        "description": "The title for the panel."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Accordion's types of panels to be applied per panel basis.\nBootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\" and \"danger\"."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "NgbPanelContent",
        "description": ""
      },
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag telling if the panel is currently open"
      },
      {
        "name": "titleTpl",
        "type": "NgbPanelTitle",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbPanelChangeEvent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelChangeEvent",
    "description": "The payload of the change event fired right before toggling an accordion panel",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "nextState",
        "type": "boolean",
        "description": "Whether the panel will be opened (true) or closed (false)"
      },
      {
        "name": "panelId",
        "type": "string",
        "description": "Id of the accordion panel that is toggled"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent panel toggling if called"
      }
    ]
  },
  "NgbAccordion": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbAccordion",
    "description": "The NgbAccordion directive is a collection of panels.\nIt can assure that only one panel can be opened at a time.",
    "type": "Component",
    "selector": "ngb-accordion",
    "exportAs": "ngbAccordion",
    "inputs": [
      {
        "name": "activeIds",
        "type": "string | string[]",
        "description": "An array or comma separated strings of panel identifiers that should be opened"
      },
      {
        "name": "closeOthers",
        "type": "boolean",
        "description": "Whether the other panels should be closed when a panel is opened"
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Whether the closed panels should be hidden without destroying them"
      },
      {
        "name": "type",
        "type": "string",
        "description": "Accordion's types of panels to be applied globally.\nBootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\" and \"danger\"."
      }
    ],
    "outputs": [
      {
        "name": "panelChange",
        "description": "A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details"
      }
    ],
    "properties": [
      {
        "name": "panels",
        "type": "QueryList<NgbPanel>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "toggle",
        "description": "Programmatically toggle a panel with a given id.",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbAlertConfig": {
    "fileName": "src/alert/alert-config.ts",
    "className": "NgbAlertConfig",
    "description": "Configuration service for the NgbAlert component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the alerts used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "dismissible",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "warning",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbAlert": {
    "fileName": "src/alert/alert.ts",
    "className": "NgbAlert",
    "description": "Alerts can be used to provide feedback messages.",
    "type": "Component",
    "selector": "ngb-alert",
    "inputs": [
      {
        "name": "dismissible",
        "type": "boolean",
        "description": "A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a\nform of an ×) will be displayed."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Alert type (CSS class). Bootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\", \"danger\",\n\"primary\", \"secondary\", \"light\", \"dark\"."
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": "An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts."
      }
    ],
    "properties": [],
    "methods": []
  },
  "NgbCheckBox": {
    "fileName": "src/buttons/checkbox.ts",
    "className": "NgbCheckBox",
    "description": "Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable\nspecified via ngModel.",
    "type": "Directive",
    "selector": "[ngbButton][type=checkbox]",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag indicating if a given checkbox button is disabled."
      },
      {
        "name": "valueChecked",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Value to be propagated as model when the checkbox is checked."
      },
      {
        "name": "valueUnChecked",
        "defaultValue": "false",
        "type": "boolean",
        "description": "Value to be propagated as model when the checkbox is unchecked."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "checked",
        "type": "any",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbButtonLabel": {
    "fileName": "src/buttons/label.ts",
    "className": "NgbButtonLabel",
    "description": "",
    "type": "Directive",
    "selector": "[ngbButtonLabel]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "active",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "focused",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbRadioGroup": {
    "fileName": "src/buttons/radio.ts",
    "className": "NgbRadioGroup",
    "description": "Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable\nspecified via ngModel.",
    "type": "Directive",
    "selector": "[ngbRadioGroup]",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the\nenclosed inputs. If not specified, a name is generated automatically."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbRadio": {
    "fileName": "src/buttons/radio.ts",
    "className": "NgbRadio",
    "description": "Marks an input of type \"radio\" as part of the NgbRadioGroup.",
    "type": "Directive",
    "selector": "[ngbButton][type=radio]",
    "inputs": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is disabled."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the input. All inputs of a group should have the same name. If not specified,\nthe name of the enclosing group is used."
      },
      {
        "name": "value",
        "type": "any",
        "description": "You can specify model value of a given radio by binding to the value property."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "checked",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is disabled."
      },
      {
        "name": "nameAttr",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "any",
        "description": "You can specify model value of a given radio by binding to the value property."
      }
    ],
    "methods": []
  },
  "NgbCarouselConfig": {
    "fileName": "src/carousel/carousel-config.ts",
    "className": "NgbCarouselConfig",
    "description": "Configuration service for the NgbCarousel component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the carousels used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "interval",
        "defaultValue": "5000",
        "type": "number",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "wrap",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgbSlide": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbSlide",
    "description": "Represents an individual slide to be used within a carousel.",
    "type": "Directive",
    "selector": "ng-template[ngbSlide]",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": "Unique slide identifier. Must be unique for the entire document for proper accessibility support.\nWill be auto-generated if not provided."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbCarousel": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbCarousel",
    "description": "Directive to easily create carousels based on Bootstrap's markup.",
    "type": "Component",
    "selector": "ngb-carousel",
    "exportAs": "ngbCarousel",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "The active slide id."
      },
      {
        "name": "interval",
        "type": "number",
        "description": "Amount of time in milliseconds before next slide is shown."
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "A flag for allowing navigation via keyboard"
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "Whether can wrap from the last to the first slide."
      }
    ],
    "outputs": [
      {
        "name": "slide",
        "description": "A carousel slide event fired when the slide transition is completed.\nSee NgbSlideEvent for payload details"
      }
    ],
    "properties": [
      {
        "name": "slides",
        "type": "QueryList<NgbSlide>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "Navigate to a slide with the specified identifier.",
        "args": [
          {
            "name": "slideId",
            "type": "string"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "prev",
        "description": "Navigate to the next slide.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "next",
        "description": "Navigate to the next slide.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "pause",
        "description": "Stops the carousel from cycling through items.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "cycle",
        "description": "Restarts cycling through the carousel slides from left to right.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgbSlideEvent": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbSlideEvent",
    "description": "The payload of the slide event fired when the slide transition is completed",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "string",
        "description": "New slide ids"
      },
      {
        "name": "direction",
        "type": "NgbSlideEventDirection",
        "description": "Slide event direction"
      },
      {
        "name": "prev",
        "type": "string",
        "description": "Previous slide id"
      }
    ]
  },
  "NgbCollapse": {
    "fileName": "src/collapse/collapse.ts",
    "className": "NgbCollapse",
    "description": "The NgbCollapse directive provides a simple way to hide and show an element with animations.",
    "type": "Directive",
    "selector": "[ngbCollapse]",
    "exportAs": "ngbCollapse",
    "inputs": [
      {
        "name": "ngbCollapse",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag indicating collapsed (true) or open (false) state."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbDatepickerConfig": {
    "fileName": "src/datepicker/datepicker-config.ts",
    "className": "NgbDatepickerConfig",
    "description": "Configuration service for the NgbDatepicker component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the datepickers used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "displayMonths",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "firstDayOfWeek",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDateStruct, current: { year: number; month: number; }) => boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": ""
      },
      {
        "name": "navigation",
        "defaultValue": "select",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": ""
      },
      {
        "name": "outsideDays",
        "defaultValue": "visible",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": ""
      }
    ]
  },
  "DayTemplateContext": {
    "fileName": "src/datepicker/datepicker-day-template-context.ts",
    "className": "DayTemplateContext",
    "description": "Context for the datepicker 'day' template in case you want to override the default one",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "currentMonth",
        "type": "number",
        "description": "Month currently displayed by the datepicker"
      },
      {
        "name": "date",
        "type": "NgbDateStruct",
        "description": "Date that corresponds to the template"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "True if current date is disabled"
      },
      {
        "name": "focused",
        "type": "boolean",
        "description": "True if current date is focused"
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": "True if current date is selected"
      }
    ]
  },
  "NgbDatepickerDayView": {
    "fileName": "src/datepicker/datepicker-day-view.ts",
    "className": "NgbDatepickerDayView",
    "description": "",
    "type": "Component",
    "selector": "[ngbDatepickerDayView]",
    "inputs": [
      {
        "name": "currentMonth",
        "type": "number",
        "description": ""
      },
      {
        "name": "date",
        "type": "NgbDateStruct",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "focused",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbDatepickerI18n": {
    "fileName": "src/datepicker/datepicker-i18n.ts",
    "className": "NgbDatepickerI18n",
    "description": "Type of the service supplying month and weekday names to to NgbDatepicker component.\nSee the i18n demo for how to extend this class and define a custom provider for i18n.",
    "type": "Service",
    "methods": [
      {
        "name": "getWeekdayShortName",
        "description": "Returns the short weekday name to display in the heading of the month view.\nWith default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun",
        "args": [
          {
            "name": "weekday",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthShortName",
        "description": "Returns the short month name to display in the date picker navigation.\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec",
        "args": [
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthFullName",
        "description": "Returns the full month name to display in the date picker navigation.\nWith default calendar we use ISO 8601: 'month' is 1=January ... 12=December",
        "args": [
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "NgbDatepickerI18nDefault": {
    "fileName": "src/datepicker/datepicker-i18n.ts",
    "className": "NgbDatepickerI18nDefault",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbInputDatepicker": {
    "fileName": "src/datepicker/datepicker-input.ts",
    "className": "NgbInputDatepicker",
    "description": "A directive that makes it possible to have datepickers on input fields.\nManages integration with the input field itself (data entry) and ngModel (validation etc.).",
    "type": "Directive",
    "selector": "input[ngbDatepicker]",
    "exportAs": "ngbDatepicker",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the datepicker popup should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "Reference for the custom template for the day display"
      },
      {
        "name": "disabled",
        "type": "any",
        "description": ""
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "Number of months to display"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "First day of the week. With default calendar we use ISO 8601: 1=Mon ... 7=Sun"
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDateStruct, current: { year: number; month: number; }) => boolean",
        "description": "Callback to mark a given date as disabled.\n'Current' contains the month that will be displayed in the view"
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": "Max date for the navigation. If not provided will be 10 years from today or `startDate`"
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": "Min date for the navigation. If not provided will be 10 years before today or `startDate`"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "Navigation type: `select` (default with select boxes for month and year), `arrows`\n(without select boxes, only navigation arrows) or `none` (no navigation at all)"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "The way to display days that don't belong to current month: `visible` (default),\n`hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)"
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": "Placement of a datepicker popup accepts:\n    \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\",\n    \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\"\nand array of above values."
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "Whether to display days of the week"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "Whether to display week numbers"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": "Date to open calendar with.\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided, calendar will open with current month.\nUse 'navigateTo(date)' as an alternative"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "An event fired when navigation happens and currently displayed month changes.\nSee NgbDatepickerNavigateEvent for the payload info."
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "Opens the datepicker with the selected date indicated by the ngModel value.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes the datepicker popup.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles the datepicker popup (opens when closed and closes when opened).",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "navigateTo",
        "description": "Navigates current view to provided date.\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.\nUse 'startDate' input as an alternative",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbDatepickerKeyMapService": {
    "fileName": "src/datepicker/datepicker-keymap-service.ts",
    "className": "NgbDatepickerKeyMapService",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbDatepickerMonthView": {
    "fileName": "src/datepicker/datepicker-month-view.ts",
    "className": "NgbDatepickerMonthView",
    "description": "",
    "type": "Component",
    "selector": "ngb-datepicker-month-view",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "month",
        "type": "MonthViewModel",
        "description": ""
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "type": "any",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "NgbDatepickerNavigationSelect": {
    "fileName": "src/datepicker/datepicker-navigation-select.ts",
    "className": "NgbDatepickerNavigationSelect",
    "description": "",
    "type": "Component",
    "selector": "ngb-datepicker-navigation-select",
    "inputs": [
      {
        "name": "date",
        "type": "NgbDate",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "NgbDate",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "NgbDate",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "months",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "years",
        "type": "number[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDatepickerNavigation": {
    "fileName": "src/datepicker/datepicker-navigation.ts",
    "className": "NgbDatepickerNavigation",
    "description": "",
    "type": "Component",
    "selector": "ngb-datepicker-navigation",
    "inputs": [
      {
        "name": "date",
        "type": "NgbDate",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "NgbDate",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "NgbDate",
        "description": ""
      },
      {
        "name": "months",
        "type": "number",
        "description": ""
      },
      {
        "name": "showSelect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": ""
      },
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "navigation",
        "defaultValue": "NavigationEvent",
        "type": "typeof NavigationEvent",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDatepickerService": {
    "fileName": "src/datepicker/datepicker-service.ts",
    "className": "NgbDatepickerService",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "model$",
        "type": "Observable<DatepickerViewModel>",
        "description": ""
      },
      {
        "name": "select$",
        "type": "Observable<NgbDate>",
        "description": ""
      }
    ]
  },
  "NgbDatepickerNavigateEvent": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "NgbDatepickerNavigateEvent",
    "description": "The payload of the datepicker navigation event",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "{ year: number; month: number; }",
        "description": "Currently displayed month"
      },
      {
        "name": "next",
        "type": "{ year: number; month: number; }",
        "description": "Month we're navigating to"
      }
    ]
  },
  "NgbDatepicker": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "NgbDatepicker",
    "description": "A lightweight and highly configurable datepicker directive",
    "type": "Component",
    "selector": "ngb-datepicker",
    "exportAs": "ngbDatepicker",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "Reference for the custom template for the day display"
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "Number of months to display"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun"
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDateStruct, current: { year: number; month: number; }) => boolean",
        "description": "Callback to mark a given date as disabled.\n'Current' contains the month that will be displayed in the view"
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": "Max date for the navigation. If not provided will be 10 years from today or `startDate`"
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": "Min date for the navigation. If not provided will be 10 years before today or `startDate`"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "Navigation type: `select` (default with select boxes for month and year), `arrows`\n(without select boxes, only navigation arrows) or `none` (no navigation at all)"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "The way to display days that don't belong to current month: `visible` (default),\n`hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)"
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "Whether to display days of the week"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "Whether to display week numbers"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": "Date to open calendar with.\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided, calendar will open with current month.\nUse 'navigateTo(date)' as an alternative"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "An event fired when navigation happens and currently displayed month changes.\nSee NgbDatepickerNavigateEvent for the payload info."
      },
      {
        "name": "select",
        "description": "An event fired when user selects a date using keyboard or mouse.\nThe payload of the event is currently selected NgbDateStruct."
      }
    ],
    "properties": [
      {
        "name": "model",
        "type": "DatepickerViewModel",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "focus",
        "description": "Manually focus the datepicker",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "navigateTo",
        "description": "Navigates current view to provided date.\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.\nUse 'startDate' input as an alternative",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbCalendarHijri": {
    "fileName": "src/datepicker/hijri/ngb-calendar-hijri.ts",
    "className": "NgbCalendarHijri",
    "description": "",
    "type": "Service",
    "methods": [
      {
        "name": "fromGregorian",
        "description": "Returns the equivalent Hijri date value for a give input Gregorian date.\n`gDate` is s JS Date to be converted to Hijri.",
        "args": [
          {
            "name": "gDate",
            "type": "Date"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "toGregorian",
        "description": "Converts the current Hijri date to Gregorian.",
        "args": [
          {
            "name": "hijriDate",
            "type": "NgbDate"
          }
        ],
        "returnType": "Date"
      },
      {
        "name": "getDaysInIslamicMonth",
        "description": "Returns the number of days in a specific Hijri month.\n`month` is 1 for Muharram, 2 for Safar, etc.\n`year` is any Hijri year.",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "_getMonthStart",
        "description": "Returns the start of Hijri Month.\n`month` is 0 for Muharram, 1 for Safar, etc.\n`year` is any Hijri year.",
        "args": [
          {
            "name": "year",
            "type": "number"
          },
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "_getYearStart",
        "description": "Returns the start of Hijri year.\n`year` is any Hijri year.",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      }
    ],
    "properties": []
  },
  "NgbCalendarIslamicCivil": {
    "fileName": "src/datepicker/hijri/ngb-calendar-islamic-civil.ts",
    "className": "NgbCalendarIslamicCivil",
    "description": "",
    "type": "Service",
    "methods": [
      {
        "name": "fromGregorian",
        "description": "Returns the equivalent islamic(civil) date value for a give input Gregorian date.\n`gdate` is a JS Date to be converted to Hijri.",
        "args": [
          {
            "name": "gdate",
            "type": "Date"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "toGregorian",
        "description": "Returns the equivalent JS date value for a give input islamic(civil) date.\n`hijriDate` is an islamic(civil) date to be converted to Gregorian.",
        "args": [
          {
            "name": "hijriDate",
            "type": "NgbDate"
          }
        ],
        "returnType": "Date"
      },
      {
        "name": "getDaysInIslamicMonth",
        "description": "Returns the number of days in a specific Hijri month.\n`month` is 1 for Muharram, 2 for Safar, etc.\n`year` is any Hijri year.",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      }
    ],
    "properties": []
  },
  "NgbCalendarIslamicUmalqura": {
    "fileName": "src/datepicker/hijri/ngb-calendar-islamic-umalqura.ts",
    "className": "NgbCalendarIslamicUmalqura",
    "description": "",
    "type": "Service",
    "methods": [
      {
        "name": "fromGregorian",
        "description": "Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.\n`gdate` is s JS Date to be converted to Hijri.",
        "args": [
          {
            "name": "gDate",
            "type": "Date"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "toGregorian",
        "description": "Converts the current Hijri date to Gregorian.",
        "args": [
          {
            "name": "hijriDate",
            "type": "NgbDate"
          }
        ],
        "returnType": "Date"
      },
      {
        "name": "getDaysInIslamicMonth",
        "description": "Returns the number of days in a specific Hijri month.\n`month` is 1 for Muharram, 2 for Safar, etc.\n`year` is any Hijri year.",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      }
    ],
    "properties": []
  },
  "NgbCalendar": {
    "fileName": "src/datepicker/ngb-calendar.ts",
    "className": "NgbCalendar",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbCalendarGregorian": {
    "fileName": "src/datepicker/ngb-calendar.ts",
    "className": "NgbCalendarGregorian",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbDateAdapter": {
    "fileName": "src/datepicker/ngb-date-adapter.ts",
    "className": "NgbDateAdapter",
    "description": "Abstract type serving as a DI token for the service converting from your application Date model to internal\nNgbDateStruct model.\nA default implementation converting from and to NgbDateStruct is provided for retro-compatibility,\nbut you can provide another implementation to use an alternative format, ie for using with native Date Object.",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "Converts user-model date into an NgbDateStruct for internal use in the library",
        "args": [
          {
            "name": "value",
            "type": "T"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "toModel",
        "description": "Converts internal date value NgbDateStruct to user-model date\nThe returned type is suposed to be of the same type as fromModel() input-value param",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "T"
      }
    ],
    "properties": []
  },
  "NgbDateStructAdapter": {
    "fileName": "src/datepicker/ngb-date-adapter.ts",
    "className": "NgbDateStructAdapter",
    "description": "",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "Converts a NgbDateStruct value into NgbDateStruct value",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "toModel",
        "description": "Converts a NgbDateStruct value into NgbDateStruct value",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "NgbDateStruct"
      }
    ],
    "properties": []
  },
  "NgbDateParserFormatter": {
    "fileName": "src/datepicker/ngb-date-parser-formatter.ts",
    "className": "NgbDateParserFormatter",
    "description": "Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker\ndirective. A default implementation using the ISO 8601 format is provided, but you can provide another implementation\nto use an alternative format.",
    "type": "Class",
    "methods": [
      {
        "name": "parse",
        "description": "Parses the given value to an NgbDateStruct. Implementations should try their best to provide a result, even\npartial. They must return null if the value can't be parsed.",
        "args": [
          {
            "name": "value",
            "type": "string"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "format",
        "description": "Formats the given date to a string. Implementations should return an empty string if the given date is null,\nand try their best to provide a partial result if the given date is incomplete or invalid.",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "NgbDateStruct": {
    "fileName": "src/datepicker/ngb-date-struct.ts",
    "className": "NgbDateStruct",
    "description": "Interface of the model of the NgbDatepicker and NgbInputDatepicker directives",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "The day of month, starting at 1"
      },
      {
        "name": "month",
        "type": "number",
        "description": "The month, for example 1=Jan ... 12=Dec"
      },
      {
        "name": "year",
        "type": "number",
        "description": "The year, for example 2016"
      }
    ]
  },
  "NgbDropdownConfig": {
    "fileName": "src/dropdown/dropdown-config.ts",
    "className": "NgbDropdownConfig",
    "description": "Configuration service for the NgbDropdown directive.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the dropdowns used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"outside\" | \"inside\"",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": ""
      }
    ]
  },
  "NgbDropdownMenu": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownMenu",
    "description": "",
    "type": "Directive",
    "selector": "[ngbDropdownMenu]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "bottom",
        "type": "Placement",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDropdownToggle": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownToggle",
    "description": "Allows the dropdown to be toggled via click. This directive is optional.",
    "type": "Directive",
    "selector": "[ngbDropdownToggle]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "anchorEl",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDropdown": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdown",
    "description": "Transforms a node into a dropdown.",
    "type": "Directive",
    "selector": "[ngbDropdown]",
    "exportAs": "ngbDropdown",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"outside\" | \"inside\"",
        "description": "Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.\nWhen it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.\nWhen it is false dropdowns are never automatically closed.\nWhen it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.\nWhen it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks."
      },
      {
        "name": "open",
        "defaultValue": "false",
        "type": "boolean",
        "description": "Defines whether or not the dropdown-menu is open initially."
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "Placement of a popover accepts:\n    \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\",\n    \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\"\nand array of above values."
      }
    ],
    "outputs": [
      {
        "name": "openChange",
        "description": "An event fired when the dropdown is opened or closed.\nEvent's payload equals whether dropdown is open."
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "isOpen",
        "description": "Checks if the dropdown menu is open or not.",
        "args": [],
        "returnType": "boolean"
      },
      {
        "name": "open",
        "description": "Opens the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgbModalBackdrop": {
    "fileName": "src/modal/modal-backdrop.ts",
    "className": "NgbModalBackdrop",
    "description": "",
    "type": "Component",
    "selector": "ngb-modal-backdrop",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbActiveModal": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "NgbActiveModal",
    "description": "A reference to an active (currently opened) modal. Instances of this class\ncan be injected into components passed as modal content.",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "Can be used to close a modal, passing an optional result.",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "Can be used to dismiss a modal, passing an optional reason.",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": []
  },
  "NgbModalRef": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "NgbModalRef",
    "description": "A reference to a newly opened modal.",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "Can be used to close a modal, passing an optional result.",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "Can be used to dismiss a modal, passing an optional reason.",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "componentInstance",
        "type": "any",
        "description": "The instance of component used as modal's content.\nUndefined when a TemplateRef is used as modal's content."
      },
      {
        "name": "result",
        "type": "Promise<any>",
        "description": "A promise that is resolved when a modal is closed and rejected when a modal is dismissed."
      }
    ]
  },
  "NgbModalStack": {
    "fileName": "src/modal/modal-stack.ts",
    "className": "NgbModalStack",
    "description": "",
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbModalWindow": {
    "fileName": "src/modal/modal-window.ts",
    "className": "NgbModalWindow",
    "description": "",
    "type": "Component",
    "selector": "ngb-modal-window",
    "inputs": [
      {
        "name": "backdrop",
        "defaultValue": "true",
        "type": "string | boolean",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "size",
        "type": "string",
        "description": ""
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "dismiss",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "NgbModalOptions": {
    "fileName": "src/modal/modal.ts",
    "className": "NgbModalOptions",
    "description": "Represent options available when opening new modal windows.",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "Whether a backdrop element should be created for a given modal (true by default).\nAlternatively, specify 'static' for a backdrop which doesn't close the modal on click."
      },
      {
        "name": "beforeDismiss",
        "type": "() => boolean",
        "description": "Function called when a modal will be dismissed.\nIf this function returns false, the modal is not dismissed."
      },
      {
        "name": "container",
        "type": "string",
        "description": "An element to which to attach newly opened modal windows."
      },
      {
        "name": "injector",
        "type": "Injector",
        "description": "Injector to use for modal content."
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "Whether to close the modal when escape key is pressed (true by default)."
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "Size of a new modal window."
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": "Custom class to append to the modal window"
      }
    ]
  },
  "NgbModal": {
    "fileName": "src/modal/modal.ts",
    "className": "NgbModal",
    "description": "A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to\nthe \"open\" method!",
    "type": "Service",
    "methods": [
      {
        "name": "open",
        "description": "Opens a new modal window with the specified content and using supplied options. Content can be provided\nas a TemplateRef or a component type. If you pass a component type as content than instances of those\ncomponents can be injected with an instance of the NgbActiveModal class. You can use methods on the\nNgbActiveModal class to close / dismiss modals from \"inside\" of a component.",
        "args": [
          {
            "name": "content",
            "type": "any"
          },
          {
            "name": "options",
            "type": "NgbModalOptions"
          }
        ],
        "returnType": "NgbModalRef"
      }
    ],
    "properties": []
  },
  "NgbPaginationConfig": {
    "fileName": "src/pagination/pagination-config.ts",
    "className": "NgbPaginationConfig",
    "description": "Configuration service for the NgbPagination component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the paginations used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "boundaryLinks",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "directionLinks",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ellipses",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxSize",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pageSize",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "rotate",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": ""
      }
    ]
  },
  "NgbPagination": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPagination",
    "description": "A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!",
    "type": "Component",
    "selector": "ngb-pagination",
    "inputs": [
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": "Whether to show the \"First\" and \"Last\" page links"
      },
      {
        "name": "collectionSize",
        "type": "number",
        "description": "Number of items in collection."
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": "Whether to show the \"Next\" and \"Previous\" page links"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Whether to disable buttons from user input"
      },
      {
        "name": "ellipses",
        "type": "boolean",
        "description": "Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages"
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": "Maximum number of pages to display."
      },
      {
        "name": "page",
        "defaultValue": "0",
        "type": "number",
        "description": "Current page."
      },
      {
        "name": "pageSize",
        "type": "number",
        "description": "Number of items per page."
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": "Whether to rotate pages when maxSize > number of pages.\nCurrent page will be in the middle"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "Pagination display size: small or large"
      }
    ],
    "outputs": [
      {
        "name": "pageChange",
        "description": "An event fired when the page is changed.\nEvent's payload equals to the newly selected page."
      }
    ],
    "properties": [
      {
        "name": "pageCount",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pages",
        "type": "number[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbPopoverConfig": {
    "fileName": "src/popover/popover-config.ts",
    "className": "NgbPopoverConfig",
    "description": "Configuration service for the NgbPopover directive.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the popovers used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "click",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbPopoverWindow": {
    "fileName": "src/popover/popover.ts",
    "className": "NgbPopoverWindow",
    "description": "",
    "type": "Component",
    "selector": "ngb-popover-window",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "Placement",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPopover": {
    "fileName": "src/popover/popover.ts",
    "className": "NgbPopover",
    "description": "A lightweight, extensible directive for fancy popover creation.",
    "type": "Directive",
    "selector": "[ngbPopover]",
    "exportAs": "ngbPopover",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the popover should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "ngbPopover",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as popover."
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "Placement of a popover accepts:\n    \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\",\n    \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\"\nand array of above values."
      },
      {
        "name": "popoverTitle",
        "type": "string",
        "description": "Title of a popover."
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of event names."
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "Emits an event when the popover is hidden"
      },
      {
        "name": "shown",
        "description": "Emits an event when the popover is shown"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "Opens an element’s popover. This is considered a “manual” triggering of the popover.\nThe context is an optional value to be injected into the popover template when it is created.",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes an element’s popover. This is considered a “manual” triggering of the popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles an element’s popover. This is considered a “manual” triggering of the popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "Returns whether or not the popover is currently being shown",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgbProgressbarConfig": {
    "fileName": "src/progressbar/progressbar-config.ts",
    "className": "NgbProgressbarConfig",
    "description": "Configuration service for the NgbProgressbar component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the progress bars used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "animated",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "height",
        "type": "string",
        "description": ""
      },
      {
        "name": "max",
        "defaultValue": "100",
        "type": "number",
        "description": ""
      },
      {
        "name": "showValue",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "striped",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbProgressbar": {
    "fileName": "src/progressbar/progressbar.ts",
    "className": "NgbProgressbar",
    "description": "Directive that can be used to provide feedback on the progress of a workflow or an action.",
    "type": "Component",
    "selector": "ngb-progressbar",
    "inputs": [
      {
        "name": "animated",
        "type": "boolean",
        "description": "A flag indicating if the stripes of the progress bar should be animated. Takes effect only for browsers\nsupporting CSS3 animations, and if striped is true."
      },
      {
        "name": "height",
        "type": "string",
        "description": "Height of the progress bar. Accepts any valid CSS height values, ex. '2rem'"
      },
      {
        "name": "max",
        "type": "number",
        "description": "Maximal value to be displayed in the progressbar."
      },
      {
        "name": "showValue",
        "type": "boolean",
        "description": "A flag indicating if the current percentage value should be shown."
      },
      {
        "name": "striped",
        "type": "boolean",
        "description": "A flag indicating if a progress bar should be displayed as striped."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Type of progress bar, can be one of \"success\", \"info\", \"warning\" or \"danger\"."
      },
      {
        "name": "value",
        "defaultValue": "0",
        "type": "number",
        "description": "Current value to be displayed in the progressbar. Should be smaller or equal to \"max\" value."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbRatingConfig": {
    "fileName": "src/rating/rating-config.ts",
    "className": "NgbRatingConfig",
    "description": "Configuration service for the NgbRating component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the ratings used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "max",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonly",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "resettable",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "StarTemplateContext": {
    "fileName": "src/rating/rating.ts",
    "className": "StarTemplateContext",
    "description": "Context for the custom star display template",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "fill",
        "type": "number",
        "description": "Star fill percentage. An integer value between 0 and 100"
      },
      {
        "name": "index",
        "type": "number",
        "description": "Index of the star."
      }
    ]
  },
  "NgbRating": {
    "fileName": "src/rating/rating.ts",
    "className": "NgbRating",
    "description": "Rating directive that will take care of visualising a star rating bar.",
    "type": "Component",
    "selector": "ngb-rating",
    "inputs": [
      {
        "name": "max",
        "type": "number",
        "description": "Maximal rating that can be given using this widget."
      },
      {
        "name": "rate",
        "type": "number",
        "description": "Current rating. Can be a decimal value like 3.75"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "description": "A flag indicating if rating can be updated."
      },
      {
        "name": "resettable",
        "type": "boolean",
        "description": "A flag indicating if rating can be reset to 0 on mouse click"
      },
      {
        "name": "starTemplate",
        "type": "TemplateRef<StarTemplateContext>",
        "description": "A template to override star display.\nAlternatively put a <ng-template> as the only child of <ngb-rating> element"
      }
    ],
    "outputs": [
      {
        "name": "hover",
        "description": "An event fired when a user is hovering over a given rating.\nEvent's payload equals to the rating being hovered over."
      },
      {
        "name": "leave",
        "description": "An event fired when a user stops hovering over a given rating.\nEvent's payload equals to the rating of the last item being hovered over."
      },
      {
        "name": "rateChange",
        "description": "An event fired when a user selects a new rating.\nEvent's payload equals to the newly selected rating."
      }
    ],
    "properties": [
      {
        "name": "contexts",
        "type": "StarTemplateContext[]",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "nextRate",
        "type": "number",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTabsetConfig": {
    "fileName": "src/tabset/tabset-config.ts",
    "className": "NgbTabsetConfig",
    "description": "Configuration service for the NgbTabset component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the tabsets used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "justify",
        "defaultValue": "start",
        "type": "\"start\" | \"center\" | \"end\" | \"fill\" | \"justified\"",
        "description": ""
      },
      {
        "name": "orientation",
        "defaultValue": "horizontal",
        "type": "\"horizontal\" | \"vertical\"",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "tabs",
        "type": "\"tabs\" | \"pills\"",
        "description": ""
      }
    ]
  },
  "NgbTabTitle": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabTitle",
    "description": "This directive should be used to wrap tab titles that need to contain HTML markup or other directives.",
    "type": "Directive",
    "selector": "ng-template[ngbTabTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbTabContent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabContent",
    "description": "This directive must be used to wrap content to be displayed in a tab.",
    "type": "Directive",
    "selector": "ng-template[ngbTabContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbTab": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTab",
    "description": "A directive representing an individual tab.",
    "type": "Directive",
    "selector": "ngb-tab",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "Allows toggling disabled state of a given state. Disabled tabs can't be selected."
      },
      {
        "name": "id",
        "type": "string",
        "description": "Unique tab identifier. Must be unique for the entire document for proper accessibility support."
      },
      {
        "name": "title",
        "type": "string",
        "description": "Simple (string only) title. Use the \"NgbTabTitle\" directive for more complex use-cases."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "NgbTabContent",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "NgbTabTitle",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTabChangeEvent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabChangeEvent",
    "description": "The payload of the change event fired right before the tab change",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "activeId",
        "type": "string",
        "description": "Id of the currently active tab"
      },
      {
        "name": "nextId",
        "type": "string",
        "description": "Id of the newly selected tab"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent tab switch if called"
      }
    ]
  },
  "NgbTabset": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabset",
    "description": "A component that makes it easy to create tabbed interface.",
    "type": "Component",
    "selector": "ngb-tabset",
    "exportAs": "ngbTabset",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "An identifier of an initially selected (active) tab. Use the \"select\" method to switch a tab programmatically."
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Whether the closed tabs should be hidden without destroying them"
      },
      {
        "name": "justify",
        "type": "\"start\" | \"center\" | \"end\" | \"fill\" | \"justified\"",
        "description": "The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or\n'justified'\nThe default value is 'start'."
      },
      {
        "name": "orientation",
        "type": "\"horizontal\" | \"vertical\"",
        "description": "The orientation of the nav (horizontal or vertical).\nThe default value is 'horizontal'."
      },
      {
        "name": "type",
        "type": "\"tabs\" | \"pills\"",
        "description": "Type of navigation to be used for tabs. Can be one of 'tabs' or 'pills'."
      }
    ],
    "outputs": [
      {
        "name": "tabChange",
        "description": "A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details"
      }
    ],
    "properties": [
      {
        "name": "justifyClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "tabs",
        "type": "QueryList<NgbTab>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "Selects the tab with the given id and shows its associated pane.\nAny other tab that was previously selected becomes unselected and its associated pane is hidden.",
        "args": [
          {
            "name": "tabId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbTimeStruct": {
    "fileName": "src/timepicker/ngb-time-struct.ts",
    "className": "NgbTimeStruct",
    "description": "Interface of the model of the NgbTimepicker directive",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "hour",
        "type": "number",
        "description": "The hour, going from 0 to 23"
      },
      {
        "name": "minute",
        "type": "number",
        "description": "The minute, going from 0 to 59"
      },
      {
        "name": "second",
        "type": "number",
        "description": "The second, going from 0 to 59"
      }
    ]
  },
  "NgbTimepickerConfig": {
    "fileName": "src/timepicker/timepicker-config.ts",
    "className": "NgbTimepickerConfig",
    "description": "Configuration service for the NgbTimepicker component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the timepickers used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hourStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "meridian",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "minuteStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonlyInputs",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "seconds",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "secondStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "size",
        "defaultValue": "medium",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": ""
      },
      {
        "name": "spinners",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgbTimepicker": {
    "fileName": "src/timepicker/timepicker.ts",
    "className": "NgbTimepicker",
    "description": "A lightweight & configurable timepicker directive.",
    "type": "Component",
    "selector": "ngb-timepicker",
    "inputs": [
      {
        "name": "hourStep",
        "type": "number",
        "description": "Number of hours to increase or decrease when using a button."
      },
      {
        "name": "meridian",
        "type": "boolean",
        "description": "Whether to display 12H or 24H mode."
      },
      {
        "name": "minuteStep",
        "type": "number",
        "description": "Number of minutes to increase or decrease when using a button."
      },
      {
        "name": "readonlyInputs",
        "type": "boolean",
        "description": "To make timepicker readonly"
      },
      {
        "name": "seconds",
        "type": "boolean",
        "description": "Whether to display seconds input."
      },
      {
        "name": "secondStep",
        "type": "number",
        "description": "Number of seconds to increase or decrease when using a button."
      },
      {
        "name": "size",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": "To set the size of the inputs and button"
      },
      {
        "name": "spinners",
        "type": "boolean",
        "description": "Whether to display the spinners above and below the inputs."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "model",
        "type": "NgbTime",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTooltipConfig": {
    "fileName": "src/tooltip/tooltip-config.ts",
    "className": "NgbTooltipConfig",
    "description": "Configuration service for the NgbTooltip directive.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the tooltips used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "hover",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbTooltipWindow": {
    "fileName": "src/tooltip/tooltip.ts",
    "className": "NgbTooltipWindow",
    "description": "",
    "type": "Component",
    "selector": "ngb-tooltip-window",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "Placement",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbTooltip": {
    "fileName": "src/tooltip/tooltip.ts",
    "className": "NgbTooltip",
    "description": "A lightweight, extensible directive for fancy tooltip creation.",
    "type": "Directive",
    "selector": "[ngbTooltip]",
    "exportAs": "ngbTooltip",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the tooltip should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "ngbTooltip",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as tooltip. If falsy, the tooltip won't open."
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "Placement of a popover accepts:\n    \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\",\n    \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\"\nand array of above values."
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of event names."
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "Emits an event when the tooltip is hidden"
      },
      {
        "name": "shown",
        "description": "Emits an event when the tooltip is shown"
      }
    ],
    "properties": [
      {
        "name": "ngbTooltip",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as tooltip. If falsy, the tooltip won't open."
      }
    ],
    "methods": [
      {
        "name": "open",
        "description": "Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.\nThe context is an optional value to be injected into the tooltip template when it is created.",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "Returns whether or not the tooltip is currently being shown",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgbHighlight": {
    "fileName": "src/typeahead/highlight.ts",
    "className": "NgbHighlight",
    "description": "",
    "type": "Component",
    "selector": "ngb-highlight",
    "inputs": [
      {
        "name": "highlightClass",
        "defaultValue": "ngb-highlight",
        "type": "string",
        "description": ""
      },
      {
        "name": "result",
        "type": "string",
        "description": ""
      },
      {
        "name": "term",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "parts",
        "type": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTypeaheadConfig": {
    "fileName": "src/typeahead/typeahead-config.ts",
    "className": "NgbTypeaheadConfig",
    "description": "Configuration service for the NgbTypeahead component.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the typeaheads used in the application.",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "any",
        "description": ""
      },
      {
        "name": "editable",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "focusFirst",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "showHint",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "ResultTemplateContext": {
    "fileName": "src/typeahead/typeahead-window.ts",
    "className": "ResultTemplateContext",
    "description": "Context for the typeahead result template in case you want to override the default one",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "result",
        "type": "any",
        "description": "Your typeahead result data model"
      },
      {
        "name": "term",
        "type": "string",
        "description": "Search term from the input used to get current result"
      }
    ]
  },
  "NgbTypeaheadWindow": {
    "fileName": "src/typeahead/typeahead-window.ts",
    "className": "NgbTypeaheadWindow",
    "description": "",
    "type": "Component",
    "selector": "ngb-typeahead-window",
    "exportAs": "ngbTypeaheadWindow",
    "inputs": [
      {
        "name": "focusFirst",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Flag indicating if the first row should be active initially"
      },
      {
        "name": "formatter",
        "defaultValue": "toString",
        "type": "(value: any) => string",
        "description": "A function used to format a given result before display. This function should return a formatted string without any\nHTML markup"
      },
      {
        "name": "id",
        "type": "string",
        "description": "The id for the typeahead widnow. The id should be unique and the same\nas the associated typeahead's id."
      },
      {
        "name": "results",
        "type": "any",
        "description": "Typeahead match results to be displayed"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "A template to override a matching result default display"
      },
      {
        "name": "term",
        "type": "string",
        "description": "Search term used to get current results"
      }
    ],
    "outputs": [
      {
        "name": "activeChange",
        "description": ""
      },
      {
        "name": "select",
        "description": "Event raised when user selects a particular result row"
      }
    ],
    "properties": [
      {
        "name": "activeIdx",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTypeaheadSelectItemEvent": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "NgbTypeaheadSelectItemEvent",
    "description": "Payload of the selectItem event.",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "type": "any",
        "description": "An item about to be selected"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent item selection if called"
      }
    ]
  },
  "NgbTypeahead": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "NgbTypeahead",
    "description": "NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input",
    "type": "Directive",
    "selector": "input[ngbTypeahead]",
    "exportAs": "ngbTypeahead",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the tooltip should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "editable",
        "type": "boolean",
        "description": "A flag indicating if model values should be restricted to the ones selected from the popup only."
      },
      {
        "name": "focusFirst",
        "type": "boolean",
        "description": "A flag indicating if the first match should automatically be focused as you type."
      },
      {
        "name": "inputFormatter",
        "type": "(value: any) => string",
        "description": "A function to convert a given value into string to display in the input field"
      },
      {
        "name": "ngbTypeahead",
        "type": "(text: Observable<string>) => Observable<any[]>",
        "description": "A function to transform the provided observable text into the array of results.  Note that the \"this\" argument\nis undefined so you need to explicitly bind it to a desired \"this\" target."
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": "Placement of a typeahead accepts:\n  \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\",\n  \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\"\nand array of above values."
      },
      {
        "name": "resultFormatter",
        "type": "(value: any) => string",
        "description": "A function to format a given result before display. This function should return a formatted string without any\nHTML markup"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "A template to override a matching result default display"
      },
      {
        "name": "showHint",
        "type": "boolean",
        "description": "Show hint when an option in the result list matches."
      }
    ],
    "outputs": [
      {
        "name": "selectItem",
        "description": "An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent."
      }
    ],
    "properties": [
      {
        "name": "activeDescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "popupId",
        "type": "string",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "dismissPopup",
        "description": "Dismisses typeahead popup window",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isPopupOpen",
        "description": "Returns true if the typeahead popup window is displayed",
        "args": [],
        "returnType": "void"
      }
    ]
  }
};

export default API_DOCS;