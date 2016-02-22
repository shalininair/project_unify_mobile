var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var BaseController = (function () {
                function BaseController(scope, ModelType) {
                    this.scope = scope;
                    this.viewModel = new ModelType();
                    this.scope["viewModel"] = this.viewModel;
                    this.scope["controller"] = this;
                    this.scope.$on("$ionicView.loaded", _.bind(this.view_loaded, this));
                    this.scope.$on("$ionicView.enter", _.bind(this.view_enter, this));
                    this.scope.$on("$ionicView.leave", _.bind(this.view_leave, this));
                    this.scope.$on("$ionicView.beforeEnter", _.bind(this.view_beforeEnter, this));
                    this.scope.$on("$ionicView.beforeLeave", _.bind(this.view_beforeLeave, this));
                    this.scope.$on("$ionicView.afterEnter", _.bind(this.view_afterEnter, this));
                    this.scope.$on("$ionicView.afterLeave", _.bind(this.view_afterLeave, this));
                    this.scope.$on("$ionicView.unloaded", _.bind(this.view_unloaded, this));
                    this.scope.$on("$destroy", _.bind(this.destroy, this));
                }
                BaseController.prototype.view_loaded = function (event, eventArgs) {
                };
                BaseController.prototype.view_enter = function (event, eventArgs) {
                };
                BaseController.prototype.view_leave = function (event, eventArgs) {
                };
                BaseController.prototype.view_beforeEnter = function (event, eventArgs) {
                };
                BaseController.prototype.view_beforeLeave = function (event, eventArgs) {
                };
                BaseController.prototype.view_afterEnter = function (event, eventArgs) {
                };
                BaseController.prototype.view_afterLeave = function (event, eventArgs) {
                };
                BaseController.prototype.view_unloaded = function (event, eventArgs) {
                };
                BaseController.prototype.destroy = function () {
                };
                return BaseController;
            })();
            Controllers.BaseController = BaseController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var BaseDialogController = (function (_super) {
                __extends(BaseDialogController, _super);
                function BaseDialogController(scope, ViewModelType, dialogId) {
                    _super.call(this, scope, ViewModelType);
                    this.dialogId = dialogId;
                    this.scope.$on("modal.shown", _.bind(this.modal_shown, this));
                    this.scope.$on("modal.hidden", _.bind(this.modal_hidden, this));
                }
                BaseDialogController.prototype.modal_shown = function (ngEvent, instance) {
                    if (this.dialogId !== instance.dialogId) {
                        return;
                    }
                    this.modalInstance = instance;
                    this.data = instance.dialogData;
                    this.dialog_shown();
                };
                BaseDialogController.prototype.modal_hidden = function (eventArgs, instance) {
                    if (this.dialogId !== instance.dialogId) {
                        return;
                    }
                    this.dialog_hidden();
                };
                BaseDialogController.prototype.getData = function () {
                    return this.data;
                };
                BaseDialogController.prototype.close = function (result) {
                    this.modalInstance.result = result;
                    this.modalInstance.hide();
                    this.modalInstance.remove();
                };
                BaseDialogController.prototype.dialog_shown = function () {
                };
                BaseDialogController.prototype.dialog_hidden = function () {
                };
                return BaseDialogController;
            })(Controllers.BaseController);
            Controllers.BaseDialogController = BaseDialogController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            var BaseElementDirective = (function () {
                function BaseElementDirective() {
                }
                BaseElementDirective.prototype.initialize = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own initialize method.");
                };
                BaseElementDirective.prototype.render = function () {
                    throw new Error("Directives that extend BaseElementDirective should implement their own render method.");
                };
                BaseElementDirective.__BaseElementDirective = true;
                return BaseElementDirective;
            })();
            Directives.BaseElementDirective = BaseElementDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Application = (function () {
            function Application($rootScope, $window, $location, $ionicHistory, Plugins, Utilities, UiHelper, Configuration, Logger) {
                this.$rootScope = $rootScope;
                this.$window = $window;
                this.$location = $location;
                this.$ionicHistory = $ionicHistory;
                this.Plugins = Plugins;
                this.Utilities = Utilities;
                this.UiHelper = UiHelper;
                this.Configuration = Configuration;
                this.Logger = Logger;
                this._appIsInBackground = false;
                this._isShowingPinPrompt = false;
            }
            Object.defineProperty(Application, "$inject", {
                get: function () {
                    return [
                        "$rootScope",
                        "$window",
                        "$location",
                        "$ionicHistory",
                        SampleApp.Services.Plugins.ID,
                        SampleApp.Services.Utilities.ID,
                        SampleApp.Services.UiHelper.ID,
                        SampleApp.Services.Configuration.ID,
                        SampleApp.Services.Logger.ID
                    ];
                },
                enumerable: true,
                configurable: true
            });
            Application.prototype.setAngularModule = function (ngModule) {
                this._ngModule = ngModule;
            };
            Application.prototype.start = function () {
                this.$window.onerror = _.bind(this.window_onerror, this);
                document.addEventListener("menubutton", _.bind(this.device_menuButton, this));
                document.addEventListener("pause", _.bind(this.device_pause, this));
                document.addEventListener("resume", _.bind(this.device_resume, this, false));
                this.$rootScope.$on("$locationChangeStart", _.bind(this.angular_locationChangeStart, this));
                this.registerDialogs(this._ngModule);
                this.Plugins.keyboard.disableScroll(true);
                this.Plugins.keyboard.hideKeyboardAccessoryBar(false);
                this.device_resume(true);
            };
            Application.prototype.device_menuButton = function () {
                this.$rootScope.$broadcast(SampleApp.Constants.Events.APP_MENU_BUTTON);
            };
            Application.prototype.device_pause = function () {
                this._appIsInBackground = true;
                if (!this._isShowingPinPrompt) {
                    this.Configuration.lastPausedAt = moment();
                }
            };
            Application.prototype.device_resume = function (coldBoot) {
                var _this = this;
                this._appIsInBackground = false;
                this._isShowingPinPrompt = true;
                this.UiHelper.showPinEntryAfterResume().then(function () {
                    _this._isShowingPinPrompt = false;
                    var shouldShowOnboarding = !_this.Configuration.hasCompletedOnboarding
                        && _this.$location.path().indexOf("/app/onboarding") === -1;
                    if (shouldShowOnboarding) {
                        _this.$ionicHistory.nextViewOptions({
                            disableAnimate: true,
                            disableBack: true
                        });
                        _this.$location.path("/app/onboarding/splash");
                        _this.$location.replace();
                        return;
                    }
                    if (_this.$location.url() === "/app/blank") {
                        _this.$ionicHistory.nextViewOptions({
                            disableAnimate: true,
                            disableBack: true
                        });
                        _this.$location.path(_this.Utilities.defaultCategory.href.substring(1));
                        _this.$location.replace();
                    }
                });
            };
            Application.prototype.angular_locationChangeStart = function (event, newRoute, oldRoute) {
                newRoute = newRoute.substring(newRoute.indexOf("#"));
                oldRoute = oldRoute.substring(oldRoute.indexOf("#"));
                this.Logger.debug("Application", "angular_locationChangeStart", "Angular location changed.", {
                    oldRoute: oldRoute,
                    newRoute: newRoute
                });
            };
            ;
            Application.prototype.window_onerror = function (message, uri, lineNumber, columnNumber) {
                try {
                    this.Logger.error("Application", "window_onerror", message, {
                        uri: uri,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    });
                }
                catch (ex) {
                }
                try {
                    this.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                    this.Plugins.spinner.activityStop();
                }
                catch (ex) {
                    this.Logger.warn("Application", "window_onerror", "There was a problem alerting the user to an Angular error; falling back to a standard alert().", ex);
                    alert("An error has occurred; please try again.");
                }
            };
            Application.prototype.angular_exceptionHandler = function (exception, cause) {
                var message = exception.message;
                if (!message) {
                    message = "An unknown error ocurred in an Angular event.";
                }
                if (!cause) {
                    cause = "[Unknown]";
                }
                try {
                    this.Logger.error("Application", "angular_exceptionHandler", message, {
                        cause: cause,
                        exception: exception
                    });
                }
                catch (ex) {
                }
                try {
                    this.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                    this.Plugins.spinner.activityStop();
                }
                catch (ex) {
                    this.Logger.warn("Application", "angular_exceptionHandler", "There was a problem alerting the user to an Angular error; falling back to a standard alert().", ex);
                    alert("An error has occurred; please try again.");
                }
            };
            Application.prototype.registerDialogs = function (ngModule) {
                var _this = this;
                _.each(SampleApp.Controllers, function (Controller) {
                    if (Controller === SampleApp.Controllers.BaseDialogController) {
                        return;
                    }
                    if (_this.Utilities.derivesFrom(Controller, SampleApp.Controllers.BaseDialogController)) {
                        _this.UiHelper.registerDialog(Controller.ID, Controller.TemplatePath);
                    }
                });
            };
            Application.ID = "Application";
            return Application;
        })();
        SampleApp.Application = Application;
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            Constants.DIALOG_ALREADY_OPEN = "DIALOG_ALREADY_OPEN";
            Constants.DIALOG_ID_NOT_REGISTERED = "DIALOG_ID_NOT_REGISTERED";
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            var Buttons;
            (function (Buttons) {
                Buttons.Yes = "Yes";
                Buttons.No = "No";
                Buttons.OK = "OK";
                Buttons.Cancel = "Cancel";
            })(Buttons = Constants.Buttons || (Constants.Buttons = {}));
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Constants;
        (function (Constants) {
            var Events;
            (function (Events) {
                Events.HTTP_UNAUTHORIZED = "http.unauthorized";
                Events.HTTP_FORBIDDEN = "http.forbidden";
                Events.HTTP_NOT_FOUND = "http.notFound";
                Events.HTTP_UNKNOWN_ERROR = "http.unknownError";
                Events.HTTP_ERROR = "http.error";
                Events.APP_MENU_BUTTON = "app.menuButton";
            })(Events = Constants.Events || (Constants.Events = {}));
        })(Constants = SampleApp.Constants || (SampleApp.Constants = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var RouteConfig = (function () {
            function RouteConfig() {
            }
            RouteConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state("app", {
                    url: "/app",
                    abstract: true,
                    templateUrl: "Views/Root/Root.html",
                    controller: SampleApp.Controllers.RootController.ID
                });
                $stateProvider.state("app.blank", {
                    url: "/blank",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Blank.html"
                        }
                    }
                });
                $stateProvider.state("app.category", {
                    url: "/category/:categoryNumber",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Category/Category.html",
                            controller: SampleApp.Controllers.CategoryController.ID
                        }
                    }
                });
                $stateProvider.state("app.onboarding-splash", {
                    url: "/onboarding/splash",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Onboarding/Onboarding-Splash/Onboarding-Splash.html",
                            controller: SampleApp.Controllers.OnboardingSplashController.ID
                        }
                    }
                });
                $stateProvider.state("app.onboarding-register", {
                    url: "/onboarding/register",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Onboarding/Onboarding-Register/Onboarding-Register.html",
                            controller: SampleApp.Controllers.OnboardingRegisterController.ID
                        }
                    }
                });
                $stateProvider.state("app.onboarding-share", {
                    url: "/onboarding/share",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Onboarding/Onboarding-Share/Onboarding-Share.html",
                            controller: SampleApp.Controllers.OnboardingShareController.ID
                        }
                    }
                });
                $stateProvider.state("app.settings-list", {
                    url: "/settings/list",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Settings-List/Settings-List.html",
                            controller: SampleApp.Controllers.SettingsListController.ID
                        }
                    }
                });
                $stateProvider.state("app.cloud-sync", {
                    url: "/settings/cloud-sync",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Cloud-Sync/Cloud-Sync.html",
                            controller: SampleApp.Controllers.CloudSyncController.ID
                        }
                    }
                });
                $stateProvider.state("app.configure-pin", {
                    url: "/settings/configure-pin",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Configure-Pin/Configure-Pin.html",
                            controller: SampleApp.Controllers.ConfigurePinController.ID
                        }
                    }
                });
                $stateProvider.state("app.developer", {
                    url: "/settings/developer",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Developer/Developer.html",
                            controller: SampleApp.Controllers.DeveloperController.ID
                        }
                    }
                });
                $stateProvider.state("app.logs", {
                    url: "/settings/logs",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Logs-List/Logs-List.html",
                            controller: SampleApp.Controllers.LogsListController.ID
                        }
                    }
                });
                $stateProvider.state("app.log-entry", {
                    url: "/settings/log-entry/:id",
                    params: {
                        id: {
                            value: "",
                            squash: false
                        }
                    },
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/Log-Entry/Log-Entry.html",
                            controller: SampleApp.Controllers.LogEntryController.ID
                        }
                    }
                });
                $stateProvider.state("app.about", {
                    url: "/settings/about",
                    views: {
                        "root-view": {
                            templateUrl: "Views/Settings/About/About.html",
                            controller: SampleApp.Controllers.AboutController.ID
                        }
                    }
                });
                $urlRouterProvider.otherwise("/app/blank");
            };
            return RouteConfig;
        })();
        SampleApp.RouteConfig = RouteConfig;
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            var OnLoadDirective = (function () {
                function OnLoadDirective($parse) {
                    this.$parse = $parse;
                    this.restrict = "A";
                    this.link = _.bind(this.link, this);
                }
                Object.defineProperty(OnLoadDirective, "$inject", {
                    get: function () {
                        return ["$parse"];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnLoadDirective.prototype.link = function (scope, element, attributes, controller, transclude) {
                    var fn = this.$parse(attributes["onLoad"]);
                    element.on("load", function (event) {
                        scope.$apply(function () {
                            fn(scope, { $event: event });
                        });
                    });
                };
                OnLoadDirective.ID = "onLoad";
                return OnLoadDirective;
            })();
            Directives.OnLoadDirective = OnLoadDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Directives;
        (function (Directives) {
            var IconPanelDirective = (function (_super) {
                __extends(IconPanelDirective, _super);
                function IconPanelDirective(Utilities) {
                    _super.call(this);
                    this.Utilities = Utilities;
                }
                Object.defineProperty(IconPanelDirective, "$inject", {
                    get: function () {
                        return [
                            SampleApp.Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                IconPanelDirective.prototype.initialize = function () {
                    var _this = this;
                    this._rootElement = this.element[0];
                    this.scope.$watch(function () { return _this.scope.icon; }, _.bind(this.icon_listener, this));
                    this.scope.$watch(function () { return _this.scope.iconSize; }, _.bind(this.iconSize_listener, this));
                    this.scope.$watch(function () { return _this.scope.text; }, _.bind(this.text_listener, this));
                    if (this.scope.name) {
                        this.scope.$emit(this.Utilities.format("icon-panel.{0}.created", this.scope.name), this);
                    }
                    else {
                        this.scope.$emit("icon-panel.created", this);
                    }
                };
                IconPanelDirective.prototype.render = function () {
                    this._root = angular.element(this._rootElement);
                    this._root.addClass("icon-panel");
                    this._iconContainer = angular.element("<p></p>");
                    this._iconContainer.addClass("icon-container");
                    this._root.append(this._iconContainer);
                    this._iconElement = angular.element("<i></i>");
                    this._iconElement.addClass("icon");
                    this._iconContainer.append(this._iconElement);
                    this._textContainer = angular.element("<p></p>");
                    this._root.append(this._textContainer);
                };
                IconPanelDirective.prototype.getName = function () {
                    return this.scope.name;
                };
                IconPanelDirective.prototype.getIcon = function () {
                    return this._currentIcon;
                };
                IconPanelDirective.prototype.setIcon = function (icon) {
                    if (this._currentIcon) {
                        this._iconElement.removeClass(this._currentIcon);
                    }
                    this._currentIcon = icon;
                    this._iconElement.addClass(icon);
                };
                IconPanelDirective.prototype.getIconSize = function () {
                    return parseInt(this.scope.iconSize, 10);
                };
                IconPanelDirective.prototype.setIconSize = function (size) {
                    this.scope.iconSize = (size ? size + "" : "0");
                    this._iconElement.css("font-size", this.scope.iconSize + "pt");
                };
                IconPanelDirective.prototype.getText = function () {
                    return this.scope.text;
                };
                IconPanelDirective.prototype.setText = function (text) {
                    this._textContainer.text(text);
                };
                IconPanelDirective.prototype.icon_listener = function (newValue, oldValue, scope) {
                    this._currentIcon = newValue;
                    if (this._iconElement != null) {
                        this._iconElement.removeClass(oldValue);
                        this._iconElement.addClass(newValue);
                    }
                };
                IconPanelDirective.prototype.iconSize_listener = function (newValue, oldValue, scope) {
                    if (this._iconElement != null) {
                        this._iconElement.css("font-size", newValue + "pt");
                    }
                };
                IconPanelDirective.prototype.text_listener = function (newValue, oldValue, scope) {
                    if (this._textContainer != null) {
                        this._textContainer.text(newValue);
                    }
                };
                IconPanelDirective.ID = "iconPanel";
                IconPanelDirective.restrict = "E";
                IconPanelDirective.template = "<div></div>";
                IconPanelDirective.replace = true;
                IconPanelDirective.scope = {
                    name: "@",
                    icon: "@",
                    iconSize: "@",
                    text: "@"
                };
                return IconPanelDirective;
            })(Directives.BaseElementDirective);
            Directives.IconPanelDirective = IconPanelDirective;
        })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Filters;
        (function (Filters) {
            var ThousandsFilter = (function () {
                function ThousandsFilter() {
                }
                ThousandsFilter.filter = function (input) {
                    if (input == null) {
                        return "";
                    }
                    if (input > 9999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(0) + "K";
                        }
                    }
                    else if (input > 999) {
                        if (input % 10 === 0) {
                            return (input / 1000) + "K";
                        }
                        else {
                            return (input / 1000).toFixed(1) + "K";
                        }
                    }
                    else {
                        return input + "";
                    }
                };
                ThousandsFilter.ID = "Thousands";
                return ThousandsFilter;
            })();
            Filters.ThousandsFilter = ThousandsFilter;
        })(Filters = SampleApp.Filters || (SampleApp.Filters = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Boot2;
        (function (Boot2) {
            var ngModule;
            var applicationInstance;
            function boot() {
                ngModule = angular.module("JustinCredible.SampleApp.Application", ["ui.router", "ionic", "templates", "ngMockE2E"]);
                ngModule.constant("isCordova", typeof (cordova) !== "undefined");
                ngModule.constant("buildVars", window.buildVars);
                ngModule.constant("isChromeExtension", typeof (chrome) !== "undefined" && typeof (chrome.runtime) !== "undefined" && typeof (chrome.runtime.id) !== "undefined");
                SampleApp.BootHelper.registerServices(ngModule);
                SampleApp.BootHelper.registerDirectives(ngModule);
                SampleApp.BootHelper.registerFilters(ngModule);
                SampleApp.BootHelper.registerControllers(ngModule);
                ngModule.service(SampleApp.Application.ID, SampleApp.Application);
                var $inject_angular_initialize = [
                    "$ionicPlatform",
                    SampleApp.Application.ID,
                    SampleApp.Services.Configuration.ID,
                    SampleApp.Services.MockHttpApis.ID,
                    angular_initialize
                ];
                var $inject_angular_configure = [
                    "$stateProvider",
                    "$urlRouterProvider",
                    "$provide",
                    "$httpProvider",
                    "$compileProvider",
                    "$ionicConfigProvider",
                    angular_configure
                ];
                ngModule.run($inject_angular_initialize);
                ngModule.config($inject_angular_configure);
            }
            Boot2.boot = boot;
            function angular_initialize($ionicPlatform, Application, Configuration, MockHttpApis) {
                $ionicPlatform.ready(function () {
                    applicationInstance = Application;
                    Application.setAngularModule(ngModule);
                    Application.start();
                });
                MockHttpApis.mockHttpCalls(Configuration.enableMockHttpCalls);
            }
            ;
            function angular_configure($stateProvider, $urlRouterProvider, $provide, $httpProvider, $compileProvider, $ionicConfigProvider) {
                $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
                        return function (exception, cause) {
                            if (applicationInstance) {
                                applicationInstance.angular_exceptionHandler(exception, cause);
                            }
                            $delegate(exception, cause);
                        };
                    }]);
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0|chrome-extension):/);
                $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
                $httpProvider.interceptors.push(SampleApp.Services.HttpInterceptor.ID);
                $ionicConfigProvider.views.swipeBackEnabled(true);
                SampleApp.RouteConfig.setupRoutes($stateProvider, $urlRouterProvider);
                if (localStorage.getItem("ENABLE_MOCK_HTTP_CALLS") === "true") {
                    SampleApp.Services.MockHttpApis.setupMockHttpDelay($provide);
                }
            }
            ;
        })(Boot2 = SampleApp.Boot2 || (SampleApp.Boot2 = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var BootHelper;
        (function (BootHelper) {
            function construct(constructor, args) {
                function F() {
                    return constructor.apply(this, args);
                }
                ;
                F.prototype = constructor.prototype;
                return new F();
            }
            BootHelper.construct = construct;
            function registerServices(ngModule) {
                _.each(SampleApp.Services, function (Service) {
                    if (Service.ID) {
                        if (typeof (Service.getFactory) === "function") {
                            console.log("Registering factory " + Service.ID + "...");
                            ngModule.factory(Service.ID, Service.getFactory());
                        }
                        else {
                            console.log("Registering service " + Service.ID + "...");
                            ngModule.service(Service.ID, Service);
                        }
                    }
                });
            }
            BootHelper.registerServices = registerServices;
            function registerDirectives(ngModule) {
                _.each(SampleApp.Directives, function (Directive) {
                    if (Directive.ID) {
                        if (Directive.__BaseElementDirective) {
                            console.log("Registering element directive " + Directive.ID + "...");
                            ngModule.directive(Directive.ID, getElementDirectiveFactoryFunction(Directive));
                        }
                        else {
                            ngModule.directive(Directive.ID, getDirectiveFactoryParameters(Directive));
                        }
                    }
                });
            }
            BootHelper.registerDirectives = registerDirectives;
            function registerFilters(ngModule) {
                _.each(SampleApp.Filters, function (Filter) {
                    if (Filter.ID && typeof (Filter.filter) === "function") {
                        console.log("Registering filter " + Filter.ID + "...");
                        ngModule.filter(Filter.ID, getFilterFactoryFunction(Filter.filter));
                    }
                });
            }
            BootHelper.registerFilters = registerFilters;
            function registerControllers(ngModule) {
                _.each(SampleApp.Controllers, function (Controller) {
                    if (Controller.ID) {
                        console.log("Registering controller " + Controller.ID + "...");
                        ngModule.controller(Controller.ID, Controller);
                    }
                });
            }
            BootHelper.registerControllers = registerControllers;
            function getElementDirectiveFactoryFunction(Directive) {
                var params = [], injectedArguments = null, descriptor = {};
                if (Directive["$inject"]) {
                    params = params.concat(Directive["$inject"]);
                }
                descriptor.restrict = Directive["restrict"];
                descriptor.template = Directive["template"];
                descriptor.replace = Directive["replace"];
                descriptor.transclude = Directive["transclude"];
                descriptor.scope = Directive["scope"];
                if (descriptor.restrict !== "E") {
                    console.warn("BaseElementDirectives are meant to restrict only to element types.");
                }
                descriptor.link = function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    var instance = construct(Directive, injectedArguments);
                    instance["scope"] = scope;
                    instance["element"] = instanceElement;
                    instance["attributes"] = instanceAttributes;
                    instance["controller"] = controller;
                    instance["transclude"] = transclude;
                    instance.initialize();
                    instance.render();
                };
                params.push(function () {
                    injectedArguments = arguments;
                    return descriptor;
                });
                return params;
            }
            BootHelper.getElementDirectiveFactoryFunction = getElementDirectiveFactoryFunction;
            function getDirectiveFactoryParameters(Directive) {
                var params = [];
                if (Directive["$inject"]) {
                    params = params.concat(Directive["$inject"]);
                }
                params.push(function () {
                    return construct(Directive, arguments);
                });
                return params;
            }
            BootHelper.getDirectiveFactoryParameters = getDirectiveFactoryParameters;
            function getFilterFactoryFunction(fn) {
                return function () { return fn; };
            }
            BootHelper.getFilterFactoryFunction = getFilterFactoryFunction;
        })(BootHelper = SampleApp.BootHelper || (SampleApp.BootHelper = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var DialogOptions = (function () {
                function DialogOptions(dialogData) {
                    this.dialogData = dialogData;
                    this.backdropClickToClose = true;
                    this.hardwareBackButtonClose = true;
                    this.showBackground = true;
                }
                return DialogOptions;
            })();
            Models.DialogOptions = DialogOptions;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var EmptyViewModel = (function () {
                function EmptyViewModel() {
                }
                return EmptyViewModel;
            })();
            ViewModels.EmptyViewModel = EmptyViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var Category = (function () {
                function Category(name, href, icon, order) {
                    this.name = name;
                    this.href = href;
                    this.icon = icon;
                    this.order = order;
                }
                return Category;
            })();
            Models.Category = Category;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var LogEntry = (function () {
                function LogEntry() {
                }
                return LogEntry;
            })();
            Models.LogEntry = LogEntry;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            (function (LogLevel) {
                LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
                LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
                LogLevel[LogLevel["INFO"] = 2] = "INFO";
                LogLevel[LogLevel["WARN"] = 3] = "WARN";
                LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
                LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
            })(Models.LogLevel || (Models.LogLevel = {}));
            var LogLevel = Models.LogLevel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                return KeyValuePair;
            })();
            Models.KeyValuePair = KeyValuePair;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var Configuration = (function () {
                function Configuration(_buildVars_) {
                    this._buildVars_ = _buildVars_;
                    this._apiUrl = null;
                }
                Object.defineProperty(Configuration, "$inject", {
                    get: function () {
                        return [
                            "buildVars"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "buildVars", {
                    get: function () {
                        return this._buildVars_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "apiUrl", {
                    get: function () {
                        if (this._apiUrl) {
                            return this._apiUrl;
                        }
                        else {
                            return this.buildVars.properties.apiUrl;
                        }
                    },
                    set: function (value) {
                        this._apiUrl = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "enableDeveloperTools", {
                    get: function () {
                        return sessionStorage.getItem(Configuration.ENABLE_DEVELOPER_TOOLS) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            sessionStorage.removeItem(Configuration.ENABLE_DEVELOPER_TOOLS);
                        }
                        else {
                            sessionStorage.setItem(Configuration.ENABLE_DEVELOPER_TOOLS, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "enableMockHttpCalls", {
                    get: function () {
                        return localStorage.getItem(Configuration.ENABLE_MOCK_HTTP_CALLS) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.ENABLE_MOCK_HTTP_CALLS);
                        }
                        else {
                            localStorage.setItem(Configuration.ENABLE_MOCK_HTTP_CALLS, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "requirePinThreshold", {
                    get: function () {
                        var value = localStorage.getItem(Configuration.REQUIRE_PIN_THRESHOLD);
                        return value == null ? Configuration.REQUIRE_PIN_THRESHOLD_DEFAULT : parseInt(value, 10);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.REQUIRE_PIN_THRESHOLD);
                        }
                        else {
                            localStorage.setItem(Configuration.REQUIRE_PIN_THRESHOLD, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "lastPausedAt", {
                    get: function () {
                        var lastPausedAt;
                        lastPausedAt = localStorage.getItem(Configuration.LAST_PAUSED_AT);
                        return moment(lastPausedAt).isValid() ? moment(lastPausedAt) : null;
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.LAST_PAUSED_AT);
                        }
                        else {
                            localStorage.setItem(Configuration.LAST_PAUSED_AT, moment(value).format());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "hasCompletedOnboarding", {
                    get: function () {
                        return localStorage.getItem(Configuration.HAS_COMPLETED_ONBOARDING) === "true";
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Configuration.HAS_COMPLETED_ONBOARDING);
                        }
                        else {
                            localStorage.setItem(Configuration.HAS_COMPLETED_ONBOARDING, value.toString());
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Configuration.ID = "Configuration";
                Configuration.ENABLE_DEVELOPER_TOOLS = "ENABLE_DEVELOPER_TOOLS";
                Configuration.ENABLE_MOCK_HTTP_CALLS = "ENABLE_MOCK_HTTP_CALLS";
                Configuration.REQUIRE_PIN_THRESHOLD = "REQUIRE_PIN_THRESHOLD";
                Configuration.LAST_PAUSED_AT = "LAST_PAUSED_AT";
                Configuration.HAS_COMPLETED_ONBOARDING = "HAS_COMPLETED_ONBOARDING";
                Configuration.REQUIRE_PIN_THRESHOLD_DEFAULT = 10;
                return Configuration;
            })();
            Services.Configuration = Configuration;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var FileUtilities = (function () {
                function FileUtilities($q, Utilities) {
                    this.$q = $q;
                    this.Utilities = Utilities;
                }
                Object.defineProperty(FileUtilities, "$inject", {
                    get: function () {
                        return [
                            "$q",
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                FileUtilities.prototype.preparePath = function (path) {
                    if (!path) {
                        return null;
                    }
                    if (this.Utilities.isAndroid && this.Utilities.startsWith(path, "/")) {
                        path = path.substr(1);
                    }
                    return path;
                };
                FileUtilities.prototype.getDefaultRootPath = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? cordova.file.externalDataDirectory : cordova.file.dataDirectory;
                    }
                };
                FileUtilities.prototype.getDefaultRootPathId = function () {
                    if (typeof (cordova) === "undefined" || typeof (cordova.file) === "undefined") {
                        return "";
                    }
                    else {
                        return cordova.file.externalDataDirectory ? "cordova.file.externalDataDirectory" : "cordova.file.dataDirectory";
                    }
                };
                FileUtilities.prototype.readTextFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.file(function (file) {
                                var reader = new FileReader();
                                reader.onload = function (evt) {
                                    q.resolve(reader.result);
                                };
                                reader.onerror = q.reject;
                                reader.readAsText(file);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.writeTextFile = function (path, text, append, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (append == null) {
                        append = false;
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (fileEntry) {
                            fileEntry.createWriter(function (writer) {
                                var blobOptions;
                                if (append) {
                                    writer.seek(writer.length);
                                }
                                else {
                                    writer.truncate(0);
                                }
                                blobOptions = {
                                    type: "text/plain"
                                };
                                writer.onwrite = function () {
                                    q.resolve();
                                };
                                writer.onerror = q.reject;
                                writer.write(new Blob([text], blobOptions));
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getDirectories = function (path, rootPath) {
                    var q = this.$q.defer();
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directories = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directories.push(entry);
                                    }
                                });
                                q.resolve(directories);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getDirectoriesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var directories = [];
                        entries.forEach(function (entry) {
                            if (entry.isDirectory) {
                                directories.push(entry);
                            }
                        });
                        q.resolve(directories);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getDirectoryNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryNames.push(entry.name);
                                    }
                                });
                                q.resolve(directoryNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getDirectoryPaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var directoryPaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isDirectory) {
                                        directoryPaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(directoryPaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getFiles = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var files = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        files.push(entry);
                                    }
                                });
                                q.resolve(files);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getFilesUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    var reader;
                    reader = directory.createReader();
                    reader.readEntries(function (entries) {
                        var files = [];
                        entries.forEach(function (entry) {
                            if (entry.isFile) {
                                files.push(entry);
                            }
                        });
                        q.resolve(files);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getFileNames = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var fileNames = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        fileNames.push(entry.name);
                                    }
                                });
                                q.resolve(fileNames);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getFilePaths = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (directoryEntry) {
                            var reader;
                            reader = directoryEntry.createReader();
                            reader.readEntries(function (entries) {
                                var filePaths = [];
                                entries.forEach(function (entry) {
                                    if (entry.isFile) {
                                        filePaths.push(entry.fullPath);
                                    }
                                });
                                q.resolve(filePaths);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getAllFiles = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allFiles = [], promises = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        if (!exists) {
                            q.resolve([]);
                        }
                        _this.getAllDirectories(path, rootPath).then(function (directories) {
                            var promise;
                            directories.forEach(function (directory) {
                                promise = _this.getFilesUsingEntry(directory);
                                promise.then(function (files) {
                                    allFiles = allFiles.concat(files);
                                }, q.reject);
                                promises.push(promise);
                            });
                            promise = _this.getFiles(path, rootPath);
                            promise.then(function (files) {
                                allFiles = allFiles.concat(files);
                            }, q.reject);
                            promises.push(promise);
                            _this.$q.all(promises).then(function () { q.resolve(allFiles); }, function () { q.reject(); });
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.getAllDirectories = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer(), allDirectories = [];
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        if (!exists) {
                            q.resolve([]);
                        }
                        _this.getDirectories(path, rootPath).then(function (directories) {
                            allDirectories = allDirectories.concat(directories);
                            _this.getAllDirectories_recursive(directories, allDirectories, q);
                        }, q.reject);
                    }, q.resolve);
                    return q.promise;
                };
                FileUtilities.prototype.getAllDirectories_recursive = function (dirsToCheck, allDirs, q) {
                    var _this = this;
                    var newDirs = [], promises = [];
                    dirsToCheck.forEach(function (directoryToCheck) {
                        var promise;
                        promise = _this.getDirectoriesUsingEntry(directoryToCheck);
                        promise.then(function (directories) {
                            newDirs = newDirs.concat(directories);
                            allDirs = allDirs.concat(directories);
                        }, q.reject);
                        promises.push(promise);
                    });
                    this.$q.all(promises).then(function () {
                        if (newDirs.length === 0) {
                            q.resolve(allDirs);
                        }
                        else {
                            _this.getAllDirectories_recursive(newDirs, allDirs, q);
                        }
                    });
                };
                FileUtilities.prototype.createDirectory = function (path, createParents, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    if (createParents == null) {
                        createParents = false;
                    }
                    path = this.preparePath(path);
                    if (createParents) {
                        throw new Error("FileUtilities.createDirectory() createParents=true not implemented.");
                    }
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: true,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            q.resolve();
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.emptyDirectory = function (path, rootPath) {
                    var _this = this;
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        if (!exists) {
                            q.resolve();
                        }
                        _this.getAllFiles(path, rootPath).then(function (fileEntries) {
                            _this.deleteFilesUsingEntries(fileEntries).then(function () {
                                _this.getAllDirectories(path, rootPath).then(function (directoryEntries) {
                                    _this.deleteDirectoriesUsingEntries(directoryEntries).then(q.resolve, q.reject);
                                }, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.deleteDirectory = function (path, recursive, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    if (recursive == null) {
                        recursive = false;
                    }
                    path = this.preparePath(path);
                    this.directoryExists(path, rootPath).then(function (exists) {
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getDirectory(path, flags, function (entry) {
                                if (recursive) {
                                    entry.removeRecursively(q.resolve, q.reject);
                                }
                                else {
                                    entry.remove(q.resolve, q.reject);
                                }
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.deleteDirectoryUsingEntry = function (directory) {
                    var q = this.$q.defer();
                    directory.remove(q.resolve, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.deleteDirectoriesUsingEntries = function (directories) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    directories.forEach(function (directory) {
                        var promise;
                        promise = _this.deleteDirectoryUsingEntry(directory);
                        promises.push(promise);
                    });
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                FileUtilities.prototype.deleteFile = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    this.fileExists(path, rootPath).then(function (exists) {
                        if (!exists) {
                            q.resolve();
                        }
                        if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                            q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                            return q.promise;
                        }
                        window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                            var flags = {
                                create: false,
                                exclusive: false
                            };
                            rootEntry.getFile(path, flags, function (entry) {
                                entry.remove(q.resolve, q.reject);
                            }, q.reject);
                        }, q.reject);
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.deleteFileUsingEntry = function (file) {
                    var q = this.$q.defer();
                    file.remove(q.resolve, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.deleteFilesUsingEntries = function (files) {
                    var _this = this;
                    var q = this.$q.defer(), promises = [];
                    var promise;
                    files.forEach(function (file) {
                        promise = _this.deleteFileUsingEntry(file);
                        promises.push(promise);
                    });
                    this.$q.all(promises).then(function () { q.resolve(); }, function () { q.reject(); });
                    return q.promise;
                };
                FileUtilities.prototype.fileExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getFile(path, flags, function (entry) {
                            q.resolve(true);
                        }, function () {
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.prototype.directoryExists = function (path, rootPath) {
                    var q = this.$q.defer();
                    if (!rootPath) {
                        rootPath = this.getDefaultRootPath();
                    }
                    path = this.preparePath(path);
                    if (typeof (window.resolveLocalFileSystemURL) === "undefined") {
                        q.reject(new Error("window.resolveLocalFileSystemURL was not available; ensure that the Cordova file plugin (cordova-plugin-file) is installed properly."));
                        return q.promise;
                    }
                    window.resolveLocalFileSystemURL(rootPath, function (rootEntry) {
                        var flags;
                        flags = {
                            create: false,
                            exclusive: false
                        };
                        rootEntry.getDirectory(path, flags, function (entry) {
                            q.resolve(true);
                        }, function () {
                            q.resolve(false);
                        });
                    }, q.reject);
                    return q.promise;
                };
                FileUtilities.ID = "FileUtilities";
                return FileUtilities;
            })();
            Services.FileUtilities = FileUtilities;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var HttpInterceptor = (function () {
                function HttpInterceptor($rootScope, $injector, $q) {
                    this.$rootScope = $rootScope;
                    this.$injector = $injector;
                    this.$q = $q;
                    this.requestsInProgress = 0;
                    this.blockingRequestsInProgress = 0;
                    this.spinnerRequestsInProgress = 0;
                }
                Object.defineProperty(HttpInterceptor.prototype, "Utilities", {
                    get: function () {
                        return this.$injector.get(Services.Utilities.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Plugins", {
                    get: function () {
                        return this.$injector.get(Services.Plugins.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Preferences", {
                    get: function () {
                        return this.$injector.get(Services.Preferences.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Configuration", {
                    get: function () {
                        return this.$injector.get(Services.Configuration.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpInterceptor.prototype, "Logger", {
                    get: function () {
                        return this.$injector.get(Services.Logger.ID);
                    },
                    enumerable: true,
                    configurable: true
                });
                HttpInterceptor.getFactory = function () {
                    var factory;
                    factory = function ($rootScope, $injector, $q) {
                        var instance = new HttpInterceptor($rootScope, $injector, $q);
                        return {
                            request: _.bind(instance.request, instance),
                            response: _.bind(instance.response, instance),
                            requestError: _.bind(instance.requestError, instance),
                            responseError: _.bind(instance.responseError, instance)
                        };
                    };
                    factory.$inject = [
                        "$rootScope",
                        "$injector",
                        "$q"
                    ];
                    return factory;
                };
                HttpInterceptor.prototype.request = function (config) {
                    var baseUrl;
                    if (this.Utilities.endsWith(config.url, ".html")) {
                        return config;
                    }
                    this.handleRequestStart(config);
                    if (this.Utilities.startsWith(config.url, "~")) {
                        config.headers["X-API-Version"] = this.Configuration.buildVars.properties.apiVersion;
                        config.headers["Content-Type"] = "application/json";
                        config.headers["Accept"] = "application/json";
                        if (this.Preferences.userId && this.Preferences.token) {
                            config.headers["Authorization"] = this.getAuthorizationHeader(this.Preferences.userId, this.Preferences.token);
                        }
                        if (this.Configuration.apiUrl && this.Configuration.apiUrl) {
                            baseUrl = this.Configuration.apiUrl;
                            config.url = config.url.substring(1);
                            if (this.Utilities.endsWith(baseUrl, "/") && this.Utilities.startsWith(config.url, "/")) {
                                config.url = config.url.substr(1, config.url.length - 1);
                            }
                            if (!this.Utilities.endsWith(baseUrl, "/") && !this.Utilities.startsWith(config.url, "/")) {
                                config.url = "/" + config.url;
                            }
                            config.url = baseUrl + config.url;
                        }
                        else {
                            throw new Error("An HTTP call cannot be made because a data source was not selected.");
                        }
                    }
                    return config;
                };
                HttpInterceptor.prototype.response = function (httpResponse) {
                    var config;
                    config = httpResponse.config;
                    if (this.Utilities.endsWith(config.url, ".html")) {
                        return httpResponse;
                    }
                    this.Logger.debug(HttpInterceptor.ID, "response", "A response was received.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                    this.handleResponseEnd(config);
                    return httpResponse;
                };
                HttpInterceptor.prototype.requestError = function (rejection) {
                    var httpResponse, exception, config;
                    if (rejection instanceof Error) {
                        exception = rejection;
                        this.Logger.error(HttpInterceptor.ID, "requestError", "An uncaught exception occurred during an HTTP interceptor's request method.", exception);
                        this.handleFatalError();
                    }
                    else {
                        httpResponse = rejection;
                        config = httpResponse.config;
                        this.Logger.error(HttpInterceptor.ID, "requestError", "A request rejection was encountered.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                        if (config) {
                            this.handleResponseEnd(config);
                        }
                    }
                    return this.$q.reject(rejection);
                };
                HttpInterceptor.prototype.responseError = function (responseOrError) {
                    var httpResponse, exception, config;
                    if (responseOrError instanceof Error) {
                        exception = responseOrError;
                        this.Logger.error(HttpInterceptor.ID, "responseError", "An uncaught exception occurred during an HTTP interceptor's response method.", exception);
                        this.handleFatalError();
                    }
                    else {
                        httpResponse = responseOrError;
                        config = httpResponse.config;
                        if (this.Utilities.endsWith(config.url, ".html")) {
                            return this.$q.reject(responseOrError);
                        }
                        this.Logger.debug(HttpInterceptor.ID, "responseError", "A non-200 level status code was received.", this.Utilities.sanitizeResponseForLogging(httpResponse));
                        this.handleResponseEnd(config);
                        if (httpResponse.status === 401) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_UNAUTHORIZED, httpResponse);
                        }
                        else if (httpResponse.status === 403) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_FORBIDDEN, httpResponse);
                        }
                        else if (httpResponse.status === 404) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_NOT_FOUND, httpResponse);
                        }
                        else if (httpResponse.status === 0) {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_UNKNOWN_ERROR, httpResponse);
                        }
                        else {
                            this.$rootScope.$broadcast(SampleApp.Constants.Events.HTTP_ERROR, httpResponse);
                        }
                    }
                    return this.$q.reject(responseOrError);
                };
                HttpInterceptor.prototype.handleRequestStart = function (config) {
                    if (typeof (config.blocking) === "undefined") {
                        config.blocking = true;
                    }
                    if (typeof (config.showSpinner) === "undefined") {
                        config.showSpinner = true;
                    }
                    this.requestsInProgress += 1;
                    if (config.blocking) {
                        this.blockingRequestsInProgress += 1;
                        if (this.blockingRequestsInProgress > 1) {
                            this.Plugins.spinner.activityStop();
                        }
                        this.Plugins.spinner.activityStart(config.blockingText ? config.blockingText : null);
                    }
                    if (config.showSpinner) {
                        this.spinnerRequestsInProgress += 1;
                        if (!NProgress.isStarted()) {
                            NProgress.start();
                        }
                    }
                };
                HttpInterceptor.prototype.handleFatalError = function () {
                    this.requestsInProgress = 0;
                    this.blockingRequestsInProgress = 0;
                    this.spinnerRequestsInProgress = 0;
                    NProgress.done();
                    this.Plugins.spinner.activityStop();
                };
                HttpInterceptor.prototype.handleResponseEnd = function (config) {
                    this.requestsInProgress -= 1;
                    if (config.blocking) {
                        this.blockingRequestsInProgress -= 1;
                    }
                    if (config.showSpinner) {
                        this.spinnerRequestsInProgress -= 1;
                    }
                    if (config.blocking && this.blockingRequestsInProgress === 0) {
                        this.Plugins.spinner.activityStop();
                    }
                    if (config.showSpinner && this.spinnerRequestsInProgress === 0) {
                        NProgress.done();
                    }
                    else if (config.showSpinner) {
                        NProgress.inc();
                    }
                };
                HttpInterceptor.prototype.getAuthorizationHeader = function (userName, password) {
                    var headerValue;
                    headerValue = this.Utilities.format("{0}:{1}", userName, password);
                    return "Basic " + btoa(headerValue);
                };
                HttpInterceptor.ID = "HttpInterceptor";
                return HttpInterceptor;
            })();
            Services.HttpInterceptor = HttpInterceptor;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var Logger = (function () {
                function Logger(Utilities) {
                    this.Utilities = Utilities;
                    this._maxLogEntries = 20;
                    this._logs = [];
                }
                Object.defineProperty(Logger, "$inject", {
                    get: function () {
                        return [
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Logger.prototype.trace = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.TRACE, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.debug = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.DEBUG, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.info = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.INFO, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.warn = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.WARN, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.error = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.ERROR, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.fatal = function (tagPrefix, tag, message, metadata) {
                    this.log(SampleApp.Models.LogLevel.FATAL, tagPrefix, tag, message, metadata);
                };
                Logger.prototype.clear = function () {
                    this._logs = [];
                };
                Object.defineProperty(Logger.prototype, "logs", {
                    get: function () {
                        return this._logs;
                    },
                    enumerable: true,
                    configurable: true
                });
                Logger.prototype.getLog = function (id) {
                    return _.find(this._logs, function (logEntry) {
                        return logEntry.id === id;
                    });
                };
                Logger.prototype.getIconForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "ion-code-working";
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "ion-bug";
                        case SampleApp.Models.LogLevel.INFO:
                            return "ion-information-circled";
                        case SampleApp.Models.LogLevel.WARN:
                            return "ion-alert-circled";
                        case SampleApp.Models.LogLevel.ERROR:
                            return "ion-alert";
                        case SampleApp.Models.LogLevel.FATAL:
                            return "ion-nuclear";
                        default:
                            return "ion-alert";
                    }
                };
                Logger.prototype.getColorForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "#551A8B";
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "#000080";
                        case SampleApp.Models.LogLevel.INFO:
                            return "#000000";
                        case SampleApp.Models.LogLevel.WARN:
                            return "#ff8000";
                        case SampleApp.Models.LogLevel.ERROR:
                            return "#ff0000";
                        case SampleApp.Models.LogLevel.FATAL:
                            return "#ff0000";
                        default:
                            return "#000000";
                    }
                };
                Logger.prototype.getDisplayLevelForLevel = function (level) {
                    if (level == null) {
                        return "";
                    }
                    switch (level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return "Trace";
                        case SampleApp.Models.LogLevel.DEBUG:
                            return "Debug";
                        case SampleApp.Models.LogLevel.INFO:
                            return "Info";
                        case SampleApp.Models.LogLevel.WARN:
                            return "Warning";
                        case SampleApp.Models.LogLevel.ERROR:
                            return "Error";
                        case SampleApp.Models.LogLevel.FATAL:
                            return "Fatal";
                        default:
                            return "Unknown";
                    }
                };
                Logger.prototype.log = function (logLevel, tagPrefix, tag, message, metadata) {
                    if (logLevel == null) {
                        logLevel = SampleApp.Models.LogLevel.DEBUG;
                    }
                    if (!tag) {
                        tag = "[No Tag]";
                    }
                    if (!tagPrefix) {
                        tagPrefix = "";
                    }
                    if (!message) {
                        message = "[No Message]";
                    }
                    var logEntry = new SampleApp.Models.LogEntry();
                    logEntry.id = this.Utilities.generateGuid();
                    logEntry.level = logLevel;
                    logEntry.tag = tagPrefix ? tagPrefix + "." + tag : tag;
                    logEntry.message = message;
                    logEntry.metadata = metadata;
                    if (this._logs.length >= this._maxLogEntries) {
                        this._logs = this._logs.slice(1);
                    }
                    this._logs.push(logEntry);
                    var consoleMessage = this.Utilities.format("[{0}] {1}", tagPrefix ? tagPrefix + "." + tag : tag, message);
                    switch (logLevel) {
                        case SampleApp.Models.LogLevel.TRACE:
                            console.trace.call(console, consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.DEBUG:
                            console.debug(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.INFO:
                            console.info(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.WARN:
                            console.warn(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.ERROR:
                            console.error(consoleMessage, metadata);
                            break;
                        case SampleApp.Models.LogLevel.FATAL:
                            console.error(consoleMessage + " (FATAL)", metadata);
                            break;
                        default:
                            console.debug(consoleMessage, metadata);
                            break;
                    }
                };
                Logger.ID = "Logger";
                return Logger;
            })();
            Services.Logger = Logger;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var MockHttpApis = (function () {
                function MockHttpApis($httpBackend) {
                    this.$httpBackend = $httpBackend;
                }
                Object.defineProperty(MockHttpApis, "$inject", {
                    get: function () {
                        return [
                            "$httpBackend"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                MockHttpApis.setupMockHttpDelay = function ($provide) {
                    var maxDelay = 3000, minDelay = 1000;
                    $provide.decorator("$httpBackend", ["$delegate", function ($delegate) {
                            var proxy = function (method, url, data, callback, headers) {
                                var interceptor = function () {
                                    var _this = this, _arguments = arguments, delay;
                                    if (url.indexOf(".html") > -1) {
                                        callback.apply(_this, _arguments);
                                    }
                                    else {
                                        delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
                                        setTimeout(function () {
                                            callback.apply(_this, _arguments);
                                        }, delay);
                                    }
                                };
                                return $delegate.call(this, method, url, data, interceptor, headers);
                            };
                            for (var key in $delegate) {
                                proxy[key] = $delegate[key];
                            }
                            return proxy;
                        }]);
                };
                MockHttpApis.prototype.mockHttpCalls = function (mock) {
                    this.$httpBackend.whenGET(/.*\.html/).passThrough();
                    if (mock) {
                    }
                    else {
                        this.$httpBackend.whenDELETE(/.*/).passThrough();
                        this.$httpBackend.whenGET(/.*/).passThrough();
                        this.$httpBackend.whenJSONP(/.*/).passThrough();
                        this.$httpBackend.whenPATCH(/.*/).passThrough();
                        this.$httpBackend.whenPOST(/.*/).passThrough();
                        this.$httpBackend.whenPUT(/.*/).passThrough();
                    }
                };
                MockHttpApis.ID = "MockHttpApis";
                return MockHttpApis;
            })();
            Services.MockHttpApis = MockHttpApis;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var MockPlatformApis = (function () {
                function MockPlatformApis($q, $ionicPopup, $ionicLoading, Utilities) {
                    this.$q = $q;
                    this.$ionicPopup = $ionicPopup;
                    this.$ionicLoading = $ionicLoading;
                    this.Utilities = Utilities;
                    this._isProgressIndicatorShown = false;
                }
                Object.defineProperty(MockPlatformApis, "$inject", {
                    get: function () {
                        return [
                            "$q",
                            "$ionicPopup",
                            "$ionicLoading",
                            Services.Utilities.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                MockPlatformApis.prototype.getToastPlugin = function () {
                    return {
                        show: _.bind(this.toast, this),
                        showLongBottom: _.bind(this.toast, this),
                        showLongCenter: _.bind(this.toast, this),
                        showLongTop: _.bind(this.toast, this),
                        showShortBottom: _.bind(this.toast, this),
                        showShortCenter: _.bind(this.toast, this),
                        showShortTop: _.bind(this.toast, this)
                    };
                };
                MockPlatformApis.prototype.getPushNotificationPlugin = function () {
                    return {
                        register: _.bind(this.pushNotification_register, this),
                        unregister: _.bind(this.pushNotification_unregister, this),
                        setApplicationIconBadgeNumber: _.bind(this.pushNotification_setApplicationIconBadgeNumber, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPlugin = function () {
                    return {
                        copy: _.bind(this.clipboard_copy, this),
                        paste: _.bind(this.clipboard_paste, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPluginForWindows = function () {
                    return {
                        copy: _.bind(this.clipboard_windows_copy, this),
                        paste: _.bind(this.clipboard_windows_paste, this)
                    };
                };
                MockPlatformApis.prototype.getClipboardPluginForChromeExtension = function () {
                    return {
                        copy: _.bind(this.clipboard_chromeExtension_copy, this),
                        paste: _.bind(this.clipboard_chromeExtension_paste, this)
                    };
                };
                MockPlatformApis.prototype.getNotificationPlugin = function () {
                    return {
                        alert: _.bind(this.notification_alert, this),
                        confirm: _.bind(this.notification_confirm, this),
                        prompt: _.bind(this.notification_prompt, this),
                        beep: _.bind(this.notification_beep, this),
                        vibrate: _.bind(this.notification_vibrate, this),
                        vibrateWithPattern: _.bind(this.notification_vibrateWithPattern, this),
                        cancelVibration: _.bind(this.notification_cancelVibration, this)
                    };
                };
                MockPlatformApis.prototype.getSpinnerPlugin = function () {
                    return {
                        activityStart: _.bind(this.spinner_activityStart, this),
                        activityStop: _.bind(this.spinner_activityStop, this)
                    };
                };
                MockPlatformApis.prototype.getStatusBarPlugin = function () {
                    return {
                        overlaysWebView: _.bind(this.noOp, this),
                        styleDefault: _.bind(this.noOp, this),
                        styleLightContent: _.bind(this.noOp, this),
                        styleBlackTranslucent: _.bind(this.noOp, this),
                        styleBlackOpaque: _.bind(this.noOp, this),
                        backgroundColorByName: _.bind(this.noOp, this),
                        backgroundColorByHexString: _.bind(this.noOp, this),
                        hide: _.bind(this.noOp, this),
                        show: _.bind(this.noOp, this),
                        isVisible: false
                    };
                };
                MockPlatformApis.prototype.getKeyboardPlugin = function () {
                    return {
                        hideKeyboardAccessoryBar: _.bind(this.noOp, this),
                        close: _.bind(this.noOp, this),
                        show: _.bind(this.noOp, this),
                        disableScroll: _.bind(this.noOp, this),
                        isVisible: false
                    };
                };
                MockPlatformApis.prototype.getCrashlyticsPlugin = function () {
                    return {
                        logException: _.bind(this.crashlytics_logException, this),
                        log: _.bind(this.crashlytics_log, this),
                        setBool: _.bind(this.noOp, this),
                        setDouble: _.bind(this.noOp, this),
                        setFloat: _.bind(this.noOp, this),
                        setInt: _.bind(this.noOp, this),
                        setLong: _.bind(this.noOp, this),
                        setString: _.bind(this.noOp, this),
                        setUserEmail: _.bind(this.noOp, this),
                        setUserIdentifier: _.bind(this.noOp, this),
                        setUserName: _.bind(this.noOp, this),
                        simulateCrash: _.bind(this.noOp, this)
                    };
                };
                MockPlatformApis.prototype.noOp = function () {
                };
                MockPlatformApis.prototype.toast = function (message) {
                    var div = document.createElement("div");
                    div.className = "mockToast";
                    div.style.position = "absolute";
                    div.style.bottom = "60px";
                    div.style.width = "100%";
                    div.style.textAlign = "center";
                    div.style.zIndex = "9000";
                    var span = document.createElement("span");
                    span.style.backgroundColor = "#444444";
                    span.style.opacity = "0.8";
                    span.style.color = "#fff";
                    span.style.padding = "10px";
                    span.style.borderRadius = "40px";
                    span.innerText = message;
                    div.appendChild(span);
                    document.body.appendChild(div);
                    var removeToast = function () {
                        try {
                            document.body.removeChild(div);
                        }
                        catch (err) {
                        }
                    };
                    div.addEventListener("click", removeToast);
                    setTimeout(removeToast, 3000);
                };
                MockPlatformApis.prototype.pushNotification_register = function (successCallback, errorCallback, registrationOptions) {
                    console.warn("window.pushNotification.register()", registrationOptions);
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                MockPlatformApis.prototype.pushNotification_unregister = function (successCallback, errorCallback) {
                    console.warn("window.pushNotification.unregister()");
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                MockPlatformApis.prototype.pushNotification_setApplicationIconBadgeNumber = function (successCallback, errorCallback, badgeCount) {
                    console.warn("window.pushNotification.setApplicationIconBadgeNumber()", badgeCount);
                    setTimeout(function () {
                        errorCallback(new Error("Not implemented in MockPlatformApis.ts"));
                    }, 0);
                };
                MockPlatformApis.prototype.clipboard_copy = function (text, onSuccess, onFail) {
                    var confirmed = confirm("The following text was requested for copy to the clipboard:\n\n" + text);
                    if (confirmed) {
                        _.defer(function () {
                            if (onSuccess) {
                                onSuccess();
                            }
                        });
                    }
                    else {
                        _.defer(function () {
                            if (onFail) {
                                onFail(new Error("The operation was cancelled."));
                            }
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_windows_copy = function (text, onSuccess, onFail) {
                    try {
                        var Windows = window["Windows"];
                        var dataPackage = new Windows.ApplicationModel.DataTransfer.DataPackage();
                        dataPackage.setText(text);
                        Windows.ApplicationModel.DataTransfer.Clipboard.setContent(dataPackage);
                        onSuccess();
                    }
                    catch (exception) {
                        onFail(exception);
                    }
                };
                MockPlatformApis.prototype.clipboard_chromeExtension_copy = function (text, onSuccess, onFail) {
                    try {
                        document["oncopy"] = function (event) {
                            event.clipboardData.setData("Text", text);
                            event.preventDefault();
                        };
                        document.execCommand("Copy");
                        document["oncopy"] = undefined;
                        _.defer(function () {
                            onSuccess();
                        });
                    }
                    catch (error) {
                        _.defer(function () {
                            onFail(error);
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_paste = function (onSuccess, onFail) {
                    var result = prompt("A paste from clipboard was requested; enter text for the paste operation:");
                    if (result === null) {
                        _.defer(function () {
                            if (onFail) {
                                onFail(new Error("The operation was cancelled."));
                            }
                        });
                    }
                    else {
                        _.defer(function () {
                            if (onSuccess) {
                                onSuccess(result);
                            }
                        });
                    }
                };
                MockPlatformApis.prototype.clipboard_windows_paste = function (onSuccess, onFail) {
                    try {
                        var Windows = window["Windows"];
                        var dataPackage = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
                        dataPackage.getTextAsync().then(onSuccess, onFail);
                    }
                    catch (exception) {
                        onFail(exception);
                    }
                };
                MockPlatformApis.prototype.clipboard_chromeExtension_paste = function (onSuccess, onFail) {
                    _.defer(function () {
                        onFail(new Error("The paste operation is not currently implemented for Chrome extensions."));
                    });
                };
                MockPlatformApis.prototype.notification_alert = function (message, alertCallback, title, buttonName) {
                    var buttons = [];
                    title = title || "Alert";
                    buttonName = buttonName || SampleApp.Constants.Buttons.OK;
                    buttons.push({ text: buttonName });
                    message = message.replace(/\n/g, "<br/>");
                    this.$ionicPopup.show({ title: title, template: message, buttons: buttons }).then(function () {
                        if (alertCallback) {
                            alertCallback();
                        }
                    });
                };
                MockPlatformApis.prototype.notification_confirm = function (message, confirmCallback, title, buttonLabels) {
                    var buttons = [];
                    title = title || "Confirm";
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.Yes, SampleApp.Constants.Buttons.No];
                    buttonLabels.forEach(function (value, index) {
                        buttons.push({
                            text: value,
                            onTap: function (e) {
                                return index + 1;
                            }
                        });
                    });
                    message = message.replace(/\n/g, "<br/>");
                    this.$ionicPopup.show({ title: title, template: message, buttons: buttons }).then(function (result) {
                        if (confirmCallback) {
                            confirmCallback(result);
                        }
                    });
                };
                MockPlatformApis.prototype.notification_prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
                    var buttons = [], template;
                    message = message.replace(/\n/g, "<br/>");
                    template = this.Utilities.format("<p>{0}</p><input type='text' id='notification_prompt_input' style='border: solid 1px #3e3e3e;'/>", message);
                    title = title || "Prompt";
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.OK, SampleApp.Constants.Buttons.Cancel];
                    buttonLabels.forEach(function (value, index) {
                        buttons.push({
                            text: value,
                            onTap: function (e) {
                                var result, input;
                                input = document.getElementById("notification_prompt_input");
                                result = {
                                    buttonIndex: index + 1,
                                    input1: input.value
                                };
                                return result;
                            }
                        });
                    });
                    if (defaultText) {
                        _.defer(function () {
                            var input;
                            input = document.getElementById("notification_prompt_input");
                            input.value = defaultText;
                        });
                    }
                    this.$ionicPopup.show({ title: title, template: template, buttons: buttons }).then(function (result) {
                        if (promptCallback) {
                            promptCallback(result);
                        }
                    });
                };
                MockPlatformApis.prototype.notification_beep = function (times) {
                    this.$ionicPopup.alert({ title: "Beep", template: "Beep count: " + times });
                };
                MockPlatformApis.prototype.notification_vibrate = function (time) {
                    this.$ionicPopup.alert({ title: "Vibrate", template: "Vibrate time: " + time });
                };
                MockPlatformApis.prototype.notification_vibrateWithPattern = function (pattern, repeat) {
                    this.$ionicPopup.alert({ title: "Vibrate with Pattern", template: "Pattern: " + pattern + "\nRepeat: " + repeat });
                };
                MockPlatformApis.prototype.notification_cancelVibration = function () {
                    this.$ionicPopup.alert({ title: "Cancel Vibration", template: "cancel" });
                };
                MockPlatformApis.prototype.spinner_activityStop = function (successCallback, falureCallback) {
                    var _this = this;
                    setTimeout(function () {
                        _this.$ionicLoading.hide();
                        _this._isProgressIndicatorShown = false;
                    }, 1000);
                };
                MockPlatformApis.prototype.spinner_activityStart = function (labelText, successCallback, falureCallback) {
                    if (this._isProgressIndicatorShown) {
                        return;
                    }
                    this._isProgressIndicatorShown = true;
                    if (!labelText) {
                        labelText = "Please Wait...";
                    }
                    this.$ionicLoading.show({
                        template: "<div class='progress-spinner'></div><br/>" + labelText
                    });
                    if (successCallback) {
                        successCallback();
                    }
                };
                MockPlatformApis.prototype.crashlytics_logException = function (exception) {
                    console.error(exception);
                };
                MockPlatformApis.prototype.crashlytics_log = function (message) {
                    console.warn(message);
                };
                MockPlatformApis.ID = "MockPlatformApis";
                return MockPlatformApis;
            })();
            Services.MockPlatformApis = MockPlatformApis;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var Plugins = (function () {
                function Plugins(Utilities, MockPlatformApis) {
                    this.Utilities = Utilities;
                    this.MockPlatformApis = MockPlatformApis;
                }
                Object.defineProperty(Plugins, "$inject", {
                    get: function () {
                        return [
                            Services.Utilities.ID,
                            Services.MockPlatformApis.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "notification", {
                    get: function () {
                        if (typeof (navigator) !== "undefined" && navigator.notification) {
                            return navigator.notification;
                        }
                        else {
                            return this.MockPlatformApis.getNotificationPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "toast", {
                    get: function () {
                        if (!this.Utilities.isWindows && !this.Utilities.isWindows8 && window.plugins && window.plugins.toast) {
                            return window.plugins.toast;
                        }
                        else {
                            return this.MockPlatformApis.getToastPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "spinner", {
                    get: function () {
                        if (typeof (SpinnerPlugin) !== "undefined") {
                            return SpinnerPlugin;
                        }
                        else {
                            return this.MockPlatformApis.getSpinnerPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "clipboard", {
                    get: function () {
                        if (this.Utilities.isWindows) {
                            return this.MockPlatformApis.getClipboardPluginForWindows();
                        }
                        else if (typeof (cordova) !== "undefined" && cordova.plugins && cordova.plugins.clipboard) {
                            return cordova.plugins.clipboard;
                        }
                        else if (this.Utilities.isChromeExtension) {
                            return this.MockPlatformApis.getClipboardPluginForChromeExtension();
                        }
                        else {
                            return this.MockPlatformApis.getClipboardPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "statusBar", {
                    get: function () {
                        if (window.StatusBar) {
                            return window.StatusBar;
                        }
                        else {
                            return this.MockPlatformApis.getStatusBarPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "keyboard", {
                    get: function () {
                        if (typeof (cordova) !== "undefined" && cordova.plugins && cordova.plugins.Keyboard) {
                            return cordova.plugins.Keyboard;
                        }
                        else {
                            return this.MockPlatformApis.getKeyboardPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plugins.prototype, "crashlytics", {
                    get: function () {
                        if (typeof (navigator) !== "undefined" && navigator.crashlytics) {
                            return navigator.crashlytics;
                        }
                        else {
                            return this.MockPlatformApis.getCrashlyticsPlugin();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Plugins.ID = "Plugins";
                return Plugins;
            })();
            Services.Plugins = Plugins;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var Preferences = (function () {
                function Preferences() {
                }
                Object.defineProperty(Preferences.prototype, "userId", {
                    get: function () {
                        return localStorage.getItem(Preferences.USER_ID);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.USER_ID);
                        }
                        else {
                            localStorage.setItem(Preferences.USER_ID, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "token", {
                    get: function () {
                        return localStorage.getItem(Preferences.TOKEN);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.TOKEN);
                        }
                        else {
                            localStorage.setItem(Preferences.TOKEN, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "pin", {
                    get: function () {
                        return localStorage.getItem(Preferences.PIN);
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.PIN);
                        }
                        else {
                            localStorage.setItem(Preferences.PIN, value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preferences.prototype, "categoryOrder", {
                    get: function () {
                        var categoryOrder = localStorage.getItem(Preferences.CATEGORY_ORDER);
                        if (categoryOrder == null) {
                            return null;
                        }
                        else {
                            return JSON.parse(categoryOrder);
                        }
                    },
                    set: function (value) {
                        if (value == null) {
                            localStorage.removeItem(Preferences.CATEGORY_ORDER);
                        }
                        else {
                            localStorage.setItem(Preferences.CATEGORY_ORDER, JSON.stringify(value));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Preferences.ID = "Preferences";
                Preferences.USER_ID = "USER_ID";
                Preferences.TOKEN = "TOKEN";
                Preferences.PIN = "PIN";
                Preferences.CATEGORY_ORDER = "CATEGORY_ORDER";
                return Preferences;
            })();
            Services.Preferences = Preferences;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var UiHelper = (function () {
                function UiHelper($window, $q, $ionicModal, $ionicSideMenuDelegate, Plugins, Logger, Preferences, Configuration) {
                    this.$window = $window;
                    this.$q = $q;
                    this.$ionicModal = $ionicModal;
                    this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
                    this.Plugins = Plugins;
                    this.Logger = Logger;
                    this.Preferences = Preferences;
                    this.Configuration = Configuration;
                    this.isPinEntryOpen = false;
                    this._sideMenuMediaQueryVisibleOnLandscapeTablet = "(min-width: 768px) and (orientation: landscape)";
                    this._sideMenuMediaQueryNeverVisible = "(min-width: 99999999px) and (orientation: landscape)";
                    this._sideMenuMediaQuery = this._sideMenuMediaQueryVisibleOnLandscapeTablet;
                }
                Object.defineProperty(UiHelper, "$inject", {
                    get: function () {
                        return [
                            "$window",
                            "$q",
                            "$ionicModal",
                            "$ionicSideMenuDelegate",
                            Services.Plugins.ID,
                            Services.Logger.ID,
                            Services.Preferences.ID,
                            Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                UiHelper.prototype.alert = function (message, title, buttonName) {
                    var q = this.$q.defer(), callback;
                    title = title || "Alert";
                    buttonName = buttonName || SampleApp.Constants.Buttons.OK;
                    callback = function () {
                        q.resolve();
                    };
                    this.Plugins.notification.alert(message, callback, title, buttonName);
                    return q.promise;
                };
                UiHelper.prototype.confirm = function (message, title, buttonLabels) {
                    var q = this.$q.defer(), callback;
                    title = title || "Confirm";
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.Yes, SampleApp.Constants.Buttons.No];
                    callback = function (choice) {
                        var buttonText;
                        buttonText = buttonLabels[choice - 1];
                        q.resolve(buttonText);
                    };
                    this.Plugins.notification.confirm(message, callback, title, buttonLabels);
                    return q.promise;
                };
                UiHelper.prototype.prompt = function (message, title, buttonLabels, defaultText) {
                    var q = this.$q.defer(), callback, notificationPlugin;
                    title = title || "Prompt";
                    buttonLabels = buttonLabels || [SampleApp.Constants.Buttons.OK, SampleApp.Constants.Buttons.Cancel];
                    callback = function (promptResult) {
                        var promiseResult, buttonText;
                        buttonText = buttonLabels[promptResult.buttonIndex - 1];
                        promiseResult = new SampleApp.Models.KeyValuePair(buttonText, promptResult.input1);
                        q.resolve(promiseResult);
                    };
                    this.Plugins.notification.prompt(message, callback, title, buttonLabels, defaultText);
                    return q.promise;
                };
                UiHelper.prototype.registerDialog = function (dialogId, templatePath) {
                    if (!dialogId) {
                        throw new Error("A dialogId is required when registering a dialog.");
                    }
                    if (!templatePath) {
                        throw new Error("A templatePath is required when registering a dialog.");
                    }
                    if (UiHelper.dialogTemplateMap[dialogId]) {
                        this.Logger.warn(UiHelper.ID, "registerDialog", "A dialog with the same ID has already been registered; it will be overwritten.", dialogId);
                    }
                    UiHelper.dialogTemplateMap[dialogId] = templatePath;
                };
                UiHelper.prototype.showDialog = function (dialogId, options) {
                    var q = this.$q.defer(), template, creationArgs, creationPromise;
                    if (!options) {
                        options = new SampleApp.Models.DialogOptions();
                    }
                    if (UiHelper._openDialogIds == null) {
                        UiHelper._openDialogIds = [];
                    }
                    if (_.contains(UiHelper._openDialogIds, dialogId)) {
                        this.$q.reject(SampleApp.Constants.DIALOG_ALREADY_OPEN);
                        return q.promise;
                    }
                    template = UiHelper.dialogTemplateMap[dialogId];
                    if (!template) {
                        this.Logger.warn(UiHelper.ID, "showDialog", "A call was made to openDialog, but a template is not registered with the given ID in the dialogTemplateMap.", dialogId);
                        this.$q.reject(SampleApp.Constants.DIALOG_ID_NOT_REGISTERED);
                        return q.promise;
                    }
                    UiHelper._openDialogIds.push(dialogId);
                    creationArgs = {
                        dialogId: dialogId,
                        dialogData: options.dialogData,
                        backdropClickToClose: options.backdropClickToClose,
                        hardwareBackButtonClose: options.hardwareBackButtonClose
                    };
                    creationPromise = this.$ionicModal.fromTemplateUrl(template, creationArgs);
                    creationPromise.then(function (modal) {
                        var backdrop;
                        modal.show();
                        if (!options.showBackground) {
                            backdrop = document.querySelector("div.modal-backdrop");
                            backdrop.style.backgroundColor = "rgba(0, 0, 0, 1)";
                        }
                        modal.scope.$on("modal.hidden", function (eventArgs, instance) {
                            if (dialogId !== instance.dialogId) {
                                return;
                            }
                            if (!options.showBackground) {
                                backdrop.style.backgroundColor = "";
                            }
                            UiHelper._openDialogIds = _.without(UiHelper._openDialogIds, dialogId);
                            q.resolve(modal.result);
                        });
                    });
                    return q.promise;
                };
                Object.defineProperty(UiHelper.prototype, "sideMenuMediaQuery", {
                    get: function () {
                        return this._sideMenuMediaQuery;
                    },
                    enumerable: true,
                    configurable: true
                });
                UiHelper.prototype.setAllowSideMenu = function (allow) {
                    if (allow) {
                        this._sideMenuMediaQuery = this._sideMenuMediaQueryVisibleOnLandscapeTablet;
                    }
                    else {
                        this._sideMenuMediaQuery = this._sideMenuMediaQueryNeverVisible;
                    }
                    this.$ionicSideMenuDelegate._instances[0].exposeAside(this.$window.matchMedia(this._sideMenuMediaQuery).matches);
                    this.$ionicSideMenuDelegate.canDragContent(allow);
                };
                UiHelper.prototype.showPinEntryAfterResume = function () {
                    var q = this.$q.defer(), resumedAt, options, model;
                    if (this.isPinEntryOpen) {
                        q.reject(SampleApp.Constants.DIALOG_ALREADY_OPEN);
                        return q.promise;
                    }
                    if (this.Preferences.pin && this.Configuration.lastPausedAt != null && this.Configuration.lastPausedAt.isValid()) {
                        resumedAt = moment();
                        if (resumedAt.diff(this.Configuration.lastPausedAt, "minutes") > this.Configuration.requirePinThreshold) {
                            model = new SampleApp.Models.PinEntryDialogModel("PIN Required", this.Preferences.pin, false);
                            options = new SampleApp.Models.DialogOptions(model);
                            options.backdropClickToClose = false;
                            options.hardwareBackButtonClose = false;
                            options.showBackground = false;
                            this.showDialog(SampleApp.Controllers.PinEntryController.ID, options).then(function (result) {
                                q.resolve();
                            });
                        }
                        else {
                            q.resolve();
                        }
                    }
                    else {
                        q.resolve();
                    }
                    return q.promise;
                };
                UiHelper.ID = "UiHelper";
                UiHelper.dialogTemplateMap = {};
                return UiHelper;
            })();
            Services.UiHelper = UiHelper;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            var Utilities = (function () {
                function Utilities(_isCordova_, buildVars, _isChromeExtension_, Preferences) {
                    this._isCordova_ = _isCordova_;
                    this.buildVars = buildVars;
                    this._isChromeExtension_ = _isChromeExtension_;
                    this.Preferences = Preferences;
                }
                Object.defineProperty(Utilities, "$inject", {
                    get: function () {
                        return [
                            "isCordova",
                            "buildVars",
                            "isChromeExtension",
                            Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isCordova", {
                    get: function () {
                        return this._isCordova_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isDebugMode", {
                    get: function () {
                        return this.buildVars.debug;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isChromeExtension", {
                    get: function () {
                        return this._isChromeExtension_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isAndroid", {
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "Android";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isIos", {
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "iOS";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindowsPhone8", {
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "WP8";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindows8", {
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "Windows8";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "isWindows", {
                    get: function () {
                        return typeof (device) !== "undefined" && device.platform === "windows";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "platform", {
                    get: function () {
                        if (typeof (device) === "undefined") {
                            return "Unknown";
                        }
                        else {
                            return device.platform;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "device", {
                    get: function () {
                        if (typeof (device) === "undefined") {
                            return {
                                cordova: "unknown",
                                platform: "unknown",
                                model: "unknown",
                                uuid: "unknown",
                                version: "unknown",
                                capture: null
                            };
                        }
                        else {
                            return device;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Utilities.prototype.endsWith = function (str, suffix) {
                    if (str == null || str === "") {
                        return false;
                    }
                    if (suffix == null || suffix === "") {
                        return true;
                    }
                    return (str.substr(str.length - suffix.length) === suffix);
                };
                Utilities.prototype.startsWith = function (str, prefix) {
                    if (str == null || str === "") {
                        return false;
                    }
                    if (prefix == null || prefix === "") {
                        return true;
                    }
                    return (str.substr(0, prefix.length) === prefix);
                };
                Utilities.prototype.toTitleCase = function (str) {
                    if (!str) {
                        return "";
                    }
                    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                };
                Utilities.prototype.format = function (formatString) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var i, reg;
                    i = 0;
                    for (i = 0; i < arguments.length - 1; i += 1) {
                        reg = new RegExp("\\{" + i + "\\}", "gm");
                        formatString = formatString.replace(reg, arguments[i + 1]);
                    }
                    return formatString;
                };
                Utilities.prototype.getValue = function (object, propertyString) {
                    var properties, property, i;
                    if (!object) {
                        return null;
                    }
                    if (!propertyString) {
                        return null;
                    }
                    if (object[propertyString]) {
                        return object[propertyString];
                    }
                    properties = propertyString.split(".");
                    for (i = 0; i < properties.length; i += 1) {
                        property = properties[i];
                        object = object[property];
                        if (object == null) {
                            return null;
                        }
                    }
                    return object;
                };
                Utilities.prototype.setValue = function (object, propertyString, value, instantiateObjects) {
                    var properties, property, i;
                    if (!object) {
                        return;
                    }
                    if (!propertyString) {
                        return;
                    }
                    if (typeof (instantiateObjects) === "undefined") {
                        instantiateObjects = true;
                    }
                    properties = propertyString.split(".");
                    for (i = 0; i < properties.length; i += 1) {
                        property = properties[i];
                        if (properties.length - 1 === i) {
                            object[property] = value;
                        }
                        else {
                            if (object[property]) {
                                object = object[property];
                            }
                            else if (instantiateObjects) {
                                object[property] = {};
                                object = object[property];
                            }
                            else {
                                return;
                            }
                        }
                    }
                };
                Utilities.prototype.derivesFrom = function (TargetClass, BaseClass) {
                    if (TargetClass.prototype === BaseClass.prototype) {
                        return true;
                    }
                    var prototypes = [];
                    var CurrentClass = TargetClass;
                    prototypes.push(TargetClass.prototype);
                    while (true) {
                        CurrentClass = CurrentClass.prototype.__proto__.constructor;
                        if (CurrentClass.prototype === Object.prototype) {
                            break;
                        }
                        prototypes.push(CurrentClass.prototype);
                        if (CurrentClass.prototype.__proto__ === Object.prototype) {
                            break;
                        }
                    }
                    var foundMatch = false;
                    prototypes.forEach(function (prototype) {
                        if (prototype === BaseClass.prototype) {
                            foundMatch = true;
                        }
                    });
                    return foundMatch;
                };
                Utilities.prototype.getFunction = function (scopeOrPropertyString, propertyString, inferContext) {
                    var scope, fn, contextPropertyString, context;
                    if (inferContext == null) {
                        inferContext = true;
                    }
                    if (typeof (scopeOrPropertyString) === "string") {
                        scope = window;
                        propertyString = scopeOrPropertyString;
                    }
                    else {
                        scope = scopeOrPropertyString;
                    }
                    fn = this.getValue(scope, propertyString);
                    if (!fn) {
                        return null;
                    }
                    if (inferContext) {
                        if (propertyString.indexOf(".") > -1) {
                            contextPropertyString = propertyString.substr(0, propertyString.lastIndexOf("."));
                            context = this.getValue(scope, contextPropertyString);
                        }
                        else {
                            context = scope;
                        }
                        fn = _.bind(fn, context);
                    }
                    return fn;
                };
                Utilities.prototype.getRandomNumber = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                };
                Utilities.prototype.generateGuid = function () {
                    var guid, hexDigit, j;
                    guid = "";
                    for (j = 0; j < 32; j++) {
                        if (j === 8 || j === 12 || j === 16 || j === 20) {
                            guid = guid + "-";
                        }
                        hexDigit = Math.floor(Math.random() * 16).toString(16).toUpperCase();
                        guid = guid + hexDigit;
                    }
                    return guid;
                };
                Utilities.prototype.formatStackTrace = function (stackTrace) {
                    if (!stackTrace) {
                        return "";
                    }
                    stackTrace.forEach(function (traceEntry, index) {
                        var parts = traceEntry.split("@");
                        var functionName;
                        var fileAndLineInfo;
                        if (parts.length === 1) {
                            functionName = "<Anonymous>";
                            fileAndLineInfo = parts[0];
                        }
                        else {
                            functionName = parts[0];
                            fileAndLineInfo = parts[1];
                        }
                        fileAndLineInfo = fileAndLineInfo.substr(fileAndLineInfo.indexOf("/www/") + "/www/".length);
                        stackTrace[index] = functionName + "@" + fileAndLineInfo;
                    });
                    return stackTrace.join("\n\n");
                };
                Utilities.prototype.sanitizeConfigForLogging = function (config) {
                    if (config && config.logRequestBody === false) {
                        var filteredConfig = _.cloneDeep(config);
                        filteredConfig.data = "[FILTERED]";
                        return filteredConfig;
                    }
                    else {
                        return config;
                    }
                };
                Utilities.prototype.sanitizeResponseForLogging = function (httpResponse) {
                    if (httpResponse && httpResponse.config && httpResponse.config.data && httpResponse.config["logRequestBody"] === false) {
                        var filteredResponse = _.cloneDeep(httpResponse);
                        filteredResponse.config.data = "[FILTERED]";
                        return filteredResponse;
                    }
                    else {
                        return httpResponse;
                    }
                };
                Object.defineProperty(Utilities.prototype, "categories", {
                    get: function () {
                        var categories = [
                            new SampleApp.Models.Category("Category 1", "#/app/category/1", "ios-pricetags-outline", 0),
                            new SampleApp.Models.Category("Category 2", "#/app/category/2", "ios-pricetags-outline", 1),
                            new SampleApp.Models.Category("Category 3", "#/app/category/3", "ios-pricetags-outline", 2),
                            new SampleApp.Models.Category("Category 4", "#/app/category/4", "ios-pricetags-outline", 3)
                        ];
                        if (this.Preferences.categoryOrder) {
                            this.Preferences.categoryOrder.forEach(function (categoryName, index) {
                                var categoryItem = _.where(categories, { name: categoryName })[0];
                                if (categoryItem) {
                                    categoryItem.order = index;
                                }
                            });
                        }
                        categories = _.sortBy(categories, "order");
                        return categories;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Utilities.prototype, "defaultCategory", {
                    get: function () {
                        return this.categories[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                Utilities.ID = "Utilities";
                return Utilities;
            })();
            Services.Utilities = Utilities;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var CategoryController = (function (_super) {
                __extends(CategoryController, _super);
                function CategoryController($scope, $stateParams) {
                    _super.call(this, $scope, SampleApp.ViewModels.CategoryViewModel);
                    this.$stateParams = $stateParams;
                }
                Object.defineProperty(CategoryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$stateParams"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                CategoryController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.categoryNumber = this.$stateParams.categoryNumber;
                };
                CategoryController.ID = "CategoryController";
                return CategoryController;
            })(Controllers.BaseController);
            Controllers.CategoryController = CategoryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CategoryViewModel = (function () {
                function CategoryViewModel() {
                }
                return CategoryViewModel;
            })();
            ViewModels.CategoryViewModel = CategoryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var PinEntryController = (function (_super) {
                __extends(PinEntryController, _super);
                function PinEntryController($scope, Plugins, Utilities, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.PinEntryViewModel, PinEntryController.ID);
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.Preferences = Preferences;
                }
                Object.defineProperty(PinEntryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                PinEntryController.prototype.dialog_shown = function () {
                    _super.prototype.dialog_shown.call(this);
                    this.viewModel.pin = "";
                    this.viewModel.showBackButton = !!this.getData().showBackButton;
                    this.viewModel.promptText = this.getData().promptText;
                    this.viewModel.pinToMatch = this.getData().pinToMatch;
                };
                PinEntryController.prototype.validatePin = function () {
                    if (this.viewModel.pinToMatch) {
                        if (this.viewModel.pin === this.viewModel.pinToMatch) {
                            this.close(new SampleApp.Models.PinEntryDialogResultModel(true, false, this.viewModel.pin));
                        }
                        else {
                            this.viewModel.pin = "";
                            this.Plugins.toast.showShortTop("Invalid pin; please try again.");
                            this.scope.$apply();
                        }
                    }
                    else {
                        this.close(new SampleApp.Models.PinEntryDialogResultModel(null, false, this.viewModel.pin));
                    }
                };
                PinEntryController.prototype.number_click = function (value) {
                    if (this.viewModel.pin.length < 4) {
                        this.viewModel.pin += value;
                        if (this.viewModel.pin.length === 4) {
                            _.delay(_.bind(this.validatePin, this), 700);
                        }
                    }
                };
                PinEntryController.prototype.clear_click = function () {
                    this.viewModel.pin = "";
                };
                PinEntryController.prototype.back_click = function () {
                    this.close(new SampleApp.Models.PinEntryDialogResultModel(null, true, null));
                };
                PinEntryController.ID = "PinEntryController";
                PinEntryController.TemplatePath = "Views/Dialogs/Pin-Entry/Pin-Entry.html";
                return PinEntryController;
            })(Controllers.BaseDialogController);
            Controllers.PinEntryController = PinEntryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var PinEntryDialogModel = (function () {
                function PinEntryDialogModel(promptText, pinToMatch, showBackButton) {
                    this.promptText = promptText;
                    this.pinToMatch = pinToMatch;
                    this.showBackButton = showBackButton;
                }
                return PinEntryDialogModel;
            })();
            Models.PinEntryDialogModel = PinEntryDialogModel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Models;
        (function (Models) {
            var PinEntryDialogResultModel = (function () {
                function PinEntryDialogResultModel(matches, cancelled, pin) {
                    this.matches = matches;
                    this.cancelled = cancelled;
                    this.pin = pin;
                }
                return PinEntryDialogResultModel;
            })();
            Models.PinEntryDialogResultModel = PinEntryDialogResultModel;
        })(Models = SampleApp.Models || (SampleApp.Models = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var PinEntryViewModel = (function () {
                function PinEntryViewModel() {
                }
                return PinEntryViewModel;
            })();
            ViewModels.PinEntryViewModel = PinEntryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var ReorderCategoriesController = (function (_super) {
                __extends(ReorderCategoriesController, _super);
                function ReorderCategoriesController($scope, Utilities, Preferences, UiHelper) {
                    _super.call(this, $scope, SampleApp.ViewModels.ReorderCategoriesViewModel, ReorderCategoriesController.ID);
                    this.Utilities = Utilities;
                    this.Preferences = Preferences;
                    this.UiHelper = UiHelper;
                }
                Object.defineProperty(ReorderCategoriesController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Preferences.ID,
                            SampleApp.Services.UiHelper.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                ReorderCategoriesController.prototype.dialog_shown = function () {
                    _super.prototype.dialog_shown.call(this);
                    this.viewModel.categories = this.Utilities.categories;
                };
                ReorderCategoriesController.prototype.item_reorder = function (item, fromIndex, toIndex) {
                    this.viewModel.categories.splice(fromIndex, 1);
                    this.viewModel.categories.splice(toIndex, 0, item);
                };
                ReorderCategoriesController.prototype.done_click = function () {
                    var categoryOrder = [];
                    this.viewModel.categories.forEach(function (categoryItem) {
                        categoryOrder.push(categoryItem.name);
                    });
                    this.Preferences.categoryOrder = categoryOrder;
                    this.close();
                };
                ReorderCategoriesController.ID = "ReorderCategoriesController";
                ReorderCategoriesController.TemplatePath = "Views/Dialogs/Reorder-Categories/Reorder-Categories.html";
                return ReorderCategoriesController;
            })(Controllers.BaseDialogController);
            Controllers.ReorderCategoriesController = ReorderCategoriesController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var ReorderCategoriesViewModel = (function () {
                function ReorderCategoriesViewModel() {
                }
                return ReorderCategoriesViewModel;
            })();
            ViewModels.ReorderCategoriesViewModel = ReorderCategoriesViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var OnboardingRegisterController = (function (_super) {
                __extends(OnboardingRegisterController, _super);
                function OnboardingRegisterController($scope, $location, $ionicHistory, Plugins, Utilities, UiHelper, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.OnboardingRegisterViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingRegisterController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnboardingRegisterController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.showSignIn = false;
                };
                OnboardingRegisterController.prototype.createAccount_click = function () {
                    var _this = this;
                    if (!this.viewModel.email) {
                        this.UiHelper.alert("Please enter a valid e-mail address.");
                        return;
                    }
                    if (!this.viewModel.password || !this.viewModel.confirmPassword) {
                        this.UiHelper.alert("Please fill in both password fields.");
                        return;
                    }
                    if (this.viewModel.password !== this.viewModel.confirmPassword) {
                        this.UiHelper.alert("The passwords do not match; please try again.");
                        this.viewModel.password = "";
                        this.viewModel.confirmPassword = "";
                        return;
                    }
                    this.Plugins.spinner.activityStart("Creating Account...");
                    setTimeout(function () {
                        _this.Plugins.spinner.activityStop();
                        _this.$ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        _this.$location.path("/app/onboarding/share");
                        _this.$location.replace();
                        _this.scope.$apply();
                    }, 3000);
                };
                OnboardingRegisterController.prototype.signIn_click = function () {
                    var _this = this;
                    if (!this.viewModel.email) {
                        this.UiHelper.alert("Please enter a valid e-mail address.");
                        return;
                    }
                    if (!this.viewModel.password) {
                        this.UiHelper.alert("Please enter a password.");
                        return;
                    }
                    this.Plugins.spinner.activityStart("Signing in...");
                    setTimeout(function () {
                        _this.Plugins.spinner.activityStop();
                        _this.$ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        _this.$location.path("/app/onboarding/share");
                        _this.$location.replace();
                        _this.scope.$apply();
                    }, 3000);
                };
                OnboardingRegisterController.prototype.needToCreateAccount_click = function () {
                    this.viewModel.password = "";
                    this.viewModel.confirmPassword = "";
                    this.viewModel.showSignIn = false;
                };
                OnboardingRegisterController.prototype.alreadyHaveAccount_click = function () {
                    this.viewModel.confirmPassword = "";
                    this.viewModel.showSignIn = true;
                };
                OnboardingRegisterController.prototype.skip_click = function () {
                    this.UiHelper.setAllowSideMenu(true);
                    this.Configuration.hasCompletedOnboarding = true;
                    this.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    this.$location.path(this.Utilities.defaultCategory.href.substring(1));
                    this.$location.replace();
                };
                OnboardingRegisterController.ID = "OnboardingRegisterController";
                return OnboardingRegisterController;
            })(Controllers.BaseController);
            Controllers.OnboardingRegisterController = OnboardingRegisterController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var OnboardingRegisterViewModel = (function () {
                function OnboardingRegisterViewModel() {
                }
                return OnboardingRegisterViewModel;
            })();
            ViewModels.OnboardingRegisterViewModel = OnboardingRegisterViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var OnboardingShareController = (function (_super) {
                __extends(OnboardingShareController, _super);
                function OnboardingShareController($scope, $location, $ionicHistory, Utilities, UiHelper, Plugins, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.EmptyViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Plugins = Plugins;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingShareController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnboardingShareController.prototype.share_click = function (platformName) {
                    this.Plugins.toast.showShortCenter("Share for " + platformName);
                };
                OnboardingShareController.prototype.done_click = function () {
                    this.UiHelper.setAllowSideMenu(true);
                    this.Configuration.hasCompletedOnboarding = true;
                    this.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    this.$location.path(this.Utilities.defaultCategory.href.substring(1));
                    this.$location.replace();
                };
                OnboardingShareController.ID = "OnboardingShareController";
                return OnboardingShareController;
            })(Controllers.BaseController);
            Controllers.OnboardingShareController = OnboardingShareController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var OnboardingSplashController = (function (_super) {
                __extends(OnboardingSplashController, _super);
                function OnboardingSplashController($scope, $location, $ionicHistory, Utilities, UiHelper, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.EmptyViewModel);
                    this.$location = $location;
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(OnboardingSplashController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                OnboardingSplashController.prototype.view_beforeEnter = function (event, eventArgs) {
                    var _this = this;
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    _.defer(function () {
                        _this.UiHelper.setAllowSideMenu(false);
                    });
                };
                OnboardingSplashController.prototype.skip_click = function () {
                    this.UiHelper.setAllowSideMenu(true);
                    this.Configuration.hasCompletedOnboarding = true;
                    this.$ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    this.$location.path(this.Utilities.defaultCategory.href.substring(1));
                    this.$location.replace();
                };
                OnboardingSplashController.ID = "OnboardingSplashController";
                return OnboardingSplashController;
            })(Controllers.BaseController);
            Controllers.OnboardingSplashController = OnboardingSplashController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var RootController = (function (_super) {
                __extends(RootController, _super);
                function RootController($scope, $location, $http, Plugins, Utilities, UiHelper, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.RootViewModel);
                    this.$location = $location;
                    this.$http = $http;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.Preferences = Preferences;
                    this._hasLoaded = false;
                }
                Object.defineProperty(RootController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$location",
                            "$http",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                RootController.prototype.view_loaded = function (event, eventArgs) {
                    _super.prototype.view_loaded.call(this, event, eventArgs);
                    if (this._hasLoaded) {
                        return;
                    }
                    this._hasLoaded = true;
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNAUTHORIZED, _.bind(this.http_unauthorized, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_FORBIDDEN, _.bind(this.http_forbidden, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_NOT_FOUND, _.bind(this.http_notFound, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_UNKNOWN_ERROR, _.bind(this.http_unknownError, this));
                    this.scope.$on(SampleApp.Constants.Events.HTTP_ERROR, _.bind(this.http_error, this));
                    this.viewModel.categories = this.Utilities.categories;
                };
                RootController.prototype.http_unauthorized = function (event, response) {
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("You do not have a token (401); please login.");
                };
                RootController.prototype.http_forbidden = function (event, response) {
                    this.Preferences.userId = null;
                    this.Preferences.token = null;
                    this.Plugins.toast.showLongBottom("Your token has expired (403); please login again.");
                };
                RootController.prototype.http_notFound = function (event, response) {
                    this.Plugins.toast.showLongBottom("Server not available (404); please contact your administrator.");
                };
                RootController.prototype.http_unknownError = function (event, response) {
                    this.Plugins.toast.showLongBottom("Network error; please try again later.");
                };
                RootController.prototype.http_error = function (event, response) {
                    this.Plugins.toast.showLongBottom("An error has occurred; please try again.");
                };
                RootController.prototype.reorder_click = function () {
                    var _this = this;
                    this.UiHelper.showDialog(Controllers.ReorderCategoriesController.ID).then(function () {
                        _this.viewModel.categories = _this.Utilities.categories;
                    });
                };
                RootController.ID = "RootController";
                return RootController;
            })(Controllers.BaseController);
            Controllers.RootController = RootController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var RootViewModel = (function () {
                function RootViewModel() {
                }
                return RootViewModel;
            })();
            ViewModels.RootViewModel = RootViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var AboutController = (function (_super) {
                __extends(AboutController, _super);
                function AboutController($scope, $ionicHistory, Utilities, Configuration, Plugins) {
                    _super.call(this, $scope, SampleApp.ViewModels.AboutViewModel);
                    this.$ionicHistory = $ionicHistory;
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                    this.Plugins = Plugins;
                }
                Object.defineProperty(AboutController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicHistory",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID,
                            SampleApp.Services.Plugins.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                AboutController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logoClickCount = 0;
                    this.viewModel.applicationName = this.Configuration.buildVars.applicationName;
                    this.viewModel.versionString = this.Utilities.format("{0}.{1}.{2}", this.Configuration.buildVars.majorVersion, this.Configuration.buildVars.minorVersion, this.Configuration.buildVars.buildVersion);
                    this.viewModel.timestamp = this.Configuration.buildVars.buildTimestamp;
                    this.viewModel.commitShortSha = this.Configuration.buildVars.commitShortSha;
                };
                AboutController.prototype.logo_click = function () {
                    if (this.Configuration.enableDeveloperTools) {
                        return;
                    }
                    this.viewModel.logoClickCount += 1;
                    if (this.viewModel.logoClickCount > 9) {
                        this.Configuration.enableDeveloperTools = true;
                        this.Plugins.toast.showShortBottom("Development Tools Enabled!");
                        this.$ionicHistory.goBack();
                    }
                };
                AboutController.prototype.copyrightInfo_click = function () {
                    window.open(this.Configuration.buildVars.properties.copyrightUrl, "_system");
                };
                AboutController.prototype.website_click = function () {
                    window.open(this.Configuration.buildVars.websiteUrl, "_system");
                };
                AboutController.prototype.gitHubRepo_click = function () {
                    window.open(this.Configuration.buildVars.properties.githubUrl, "_system");
                };
                AboutController.ID = "AboutController";
                return AboutController;
            })(Controllers.BaseController);
            Controllers.AboutController = AboutController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var AboutViewModel = (function () {
                function AboutViewModel() {
                }
                return AboutViewModel;
            })();
            ViewModels.AboutViewModel = AboutViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var CloudSyncController = (function (_super) {
                __extends(CloudSyncController, _super);
                function CloudSyncController($scope, $ionicHistory) {
                    _super.call(this, $scope, SampleApp.ViewModels.CloudSyncViewModel);
                    this.$ionicHistory = $ionicHistory;
                    this.scope.$on("icon-panel.cloud-icon-panel.created", _.bind(this.iconPanel_created, this));
                }
                Object.defineProperty(CloudSyncController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicHistory"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                CloudSyncController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.showButton = true;
                    this.viewModel.showUserCount = true;
                    this.viewModel.icon = "ion-ios-cloud-upload-outline";
                    this.viewModel.userCount = 2344;
                };
                CloudSyncController.prototype.view_leave = function (event, eventArgs) {
                    _super.prototype.view_leave.call(this, event, eventArgs);
                    clearInterval(this._updateInterval);
                };
                CloudSyncController.prototype.iconPanel_created = function (event, instance) {
                    this._cloudIconPanel = instance;
                    this._updateInterval = setInterval(_.bind(this.toggleIcon, this), 1000);
                };
                CloudSyncController.prototype.toggleIcon = function () {
                    if (this._cloudIconPanel.getIcon() === "ion-ios-cloud-upload-outline") {
                        this._cloudIconPanel.setIcon("ion-ios-cloud-download-outline");
                    }
                    else {
                        this._cloudIconPanel.setIcon("ion-ios-cloud-upload-outline");
                    }
                    this.scope.$apply();
                };
                CloudSyncController.prototype.setup_click = function () {
                    clearInterval(this._updateInterval);
                    this._cloudIconPanel.setText("Unable to contact the cloud!");
                    this.viewModel.icon = "ion-ios-rainy";
                    this.viewModel.showButton = false;
                    this.viewModel.showUserCount = false;
                };
                CloudSyncController.ID = "CloudSyncController";
                return CloudSyncController;
            })(Controllers.BaseController);
            Controllers.CloudSyncController = CloudSyncController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var CloudSyncViewModel = (function () {
                function CloudSyncViewModel() {
                }
                return CloudSyncViewModel;
            })();
            ViewModels.CloudSyncViewModel = CloudSyncViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var ConfigurePinController = (function (_super) {
                __extends(ConfigurePinController, _super);
                function ConfigurePinController($scope, Plugins, UiHelper, Preferences) {
                    _super.call(this, $scope, SampleApp.ViewModels.ConfigurePinViewModel);
                    this.Plugins = Plugins;
                    this.UiHelper = UiHelper;
                    this.Preferences = Preferences;
                }
                Object.defineProperty(ConfigurePinController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.Preferences.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfigurePinController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.isPinSet = this.Preferences.pin !== null;
                };
                ConfigurePinController.prototype.setPin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter a value for your new PIN", null, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result1) {
                        if (result1 && result1.pin) {
                            model.promptText = "Confirm your new PIN";
                            model.pinToMatch = result1.pin;
                            options.dialogData = model;
                            _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result2) {
                                if (result2 && result2.matches) {
                                    _this.Preferences.pin = result2.pin;
                                    _this.viewModel.isPinSet = true;
                                    _this.Plugins.toast.showShortBottom("Your PIN has been configured.");
                                }
                            });
                        }
                    });
                };
                ConfigurePinController.prototype.changePin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter your current PIN", this.Preferences.pin, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result1) {
                        if (result1.matches) {
                            model.promptText = "Enter your new PIN";
                            model.pinToMatch = null;
                            options.dialogData = model;
                            _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result2) {
                                model.promptText = "Confirm your new PIN";
                                model.pinToMatch = result2.pin;
                                options.dialogData = model;
                                _this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result3) {
                                    if (result3.matches) {
                                        _this.Preferences.pin = result3.pin;
                                        _this.viewModel.isPinSet = true;
                                        _this.Plugins.toast.showShortBottom("Your PIN has been configured.");
                                    }
                                });
                            });
                        }
                    });
                };
                ConfigurePinController.prototype.removePin_click = function () {
                    var _this = this;
                    var options, model;
                    model = new SampleApp.Models.PinEntryDialogModel("Enter your current PIN", this.Preferences.pin, true);
                    options = new SampleApp.Models.DialogOptions(model);
                    this.UiHelper.showDialog(Controllers.PinEntryController.ID, options).then(function (result) {
                        if (result.matches) {
                            _this.Preferences.pin = null;
                            _this.viewModel.isPinSet = false;
                            _this.Plugins.toast.showShortBottom("The PIN has been removed.");
                        }
                    });
                };
                ConfigurePinController.ID = "ConfigurePinController";
                return ConfigurePinController;
            })(Controllers.BaseController);
            Controllers.ConfigurePinController = ConfigurePinController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var ConfigurePinViewModel = (function () {
                function ConfigurePinViewModel() {
                }
                return ConfigurePinViewModel;
            })();
            ViewModels.ConfigurePinViewModel = ConfigurePinViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var DeveloperController = (function (_super) {
                __extends(DeveloperController, _super);
                function DeveloperController($scope, Plugins, Utilities, UiHelper, FileUtilities, Logger, Preferences, Configuration, MockPlatformApis) {
                    _super.call(this, $scope, SampleApp.ViewModels.DeveloperViewModel);
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.UiHelper = UiHelper;
                    this.FileUtilities = FileUtilities;
                    this.Logger = Logger;
                    this.Preferences = Preferences;
                    this.Configuration = Configuration;
                    this.MockPlatformApis = MockPlatformApis;
                }
                Object.defineProperty(DeveloperController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.UiHelper.ID,
                            SampleApp.Services.FileUtilities.ID,
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.Preferences.ID,
                            SampleApp.Services.Configuration.ID,
                            SampleApp.Services.MockPlatformApis.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                DeveloperController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.mockApiRequests = this.Configuration.enableMockHttpCalls;
                    this.viewModel.userId = this.Preferences.userId;
                    this.viewModel.token = this.Preferences.token;
                    this.viewModel.devicePlatform = this.Utilities.platform;
                    this.viewModel.deviceModel = this.Utilities.device.model;
                    this.viewModel.deviceOsVersion = this.Utilities.device.version;
                    this.viewModel.deviceUuid = this.Utilities.device.uuid;
                    this.viewModel.deviceCordovaVersion = this.Utilities.device.cordova;
                    this.viewModel.defaultStoragePathId = this.FileUtilities.getDefaultRootPathId();
                    this.viewModel.defaultStoragePath = this.FileUtilities.getDefaultRootPath();
                    this.viewModel.apiUrl = this.Configuration.apiUrl;
                };
                DeveloperController.prototype.alertFileIoError = function (error) {
                    if (error) {
                        if (error.code) {
                            this.UiHelper.alert(error.code);
                        }
                        else if (error.message) {
                            this.UiHelper.alert(error.message);
                        }
                        else {
                            this.UiHelper.alert(error);
                        }
                    }
                };
                DeveloperController.prototype.help_click = function (helpMessage) {
                    this.UiHelper.alert(helpMessage, "Help");
                };
                DeveloperController.prototype.mockApiRequests_change = function () {
                    this.Configuration.enableMockHttpCalls = this.viewModel.mockApiRequests;
                    var message = "The application needs to be reloaded for changes to take effect.\n\nReload now?";
                    this.UiHelper.confirm(message, "Confirm Reload").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            document.location.href = "index.html";
                        }
                    });
                };
                DeveloperController.prototype.apiUrl_click = function () {
                    var _this = this;
                    var message = "Here you can edit the API URL for this session.";
                    this.UiHelper.prompt(message, "API URL", null, this.Configuration.apiUrl).then(function (result) {
                        if (result.key === SampleApp.Constants.Buttons.Cancel) {
                            return;
                        }
                        _this.Configuration.apiUrl = result.value;
                        _this.viewModel.apiUrl = result.value;
                        _this.Plugins.toast.showShortBottom("API URL changed for this session only.");
                    });
                };
                DeveloperController.prototype.userToken_click = function (token) {
                    var _this = this;
                    this.UiHelper.confirm("Copy token to clipboard?").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Plugins.clipboard.copy(token);
                            _this.Plugins.toast.showShortBottom("Token copied to clipboard.");
                        }
                    });
                };
                DeveloperController.prototype.addServicesToGlobalScope_click = function () {
                    window["__ngServices"] = {
                        "FileUtilities": this.FileUtilities,
                        "Logger": this.Logger,
                        "Utilities": this.Utilities,
                        "UiHelper": this.UiHelper,
                        "Plugins": this.Plugins,
                        "Preferences": this.Preferences,
                        "MockPlatformApis": this.MockPlatformApis
                    };
                    this.UiHelper.alert("Added services to the global variable __ngServices.");
                };
                DeveloperController.prototype.setRequirePinThreshold_click = function () {
                    var _this = this;
                    var message = this.Utilities.format("Enter the value (in minutes) for PIN prompt threshold? Current setting is {0} minutes.", this.Configuration.requirePinThreshold);
                    this.UiHelper.prompt(message, "Require PIN Threshold", null, this.Configuration.requirePinThreshold.toString()).then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        if (isNaN(parseInt(result.value, 10))) {
                            _this.UiHelper.alert("Invalid value; a number is required.");
                            return;
                        }
                        _this.Configuration.requirePinThreshold = parseInt(result.value, 10);
                        _this.UiHelper.alert(_this.Utilities.format("PIN prompt threshold is now set to {0} minutes.", result.value));
                    });
                };
                DeveloperController.prototype.resetPinTimeout_click = function () {
                    this.Configuration.lastPausedAt = moment("01-01-2000", "MM-DD-yyyy");
                    var message = "The PIN timeout has been set to more than 10 minutes ago. To see the PIN screen, terminate the application via the OS task manager (don't just background it), and then re-launch.";
                    this.UiHelper.alert(message, "Reset PIN Timeout");
                };
                DeveloperController.prototype.reEnableOnboarding_click = function () {
                    this.Configuration.hasCompletedOnboarding = false;
                    this.UiHelper.alert("Onboarding has been enabled and will occur upon next app boot.");
                };
                DeveloperController.prototype.testNativeException_click = function () {
                    var _this = this;
                    this.UiHelper.confirm("Are you sure you want to cause a native crash? This requires the Crashlytics plug-in to be installed.").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Plugins.crashlytics.simulateCrash();
                        }
                    });
                };
                DeveloperController.prototype.testJsException_click = function () {
                    _.defer(function () {
                        var x = window["____asdf"].blah();
                    });
                };
                DeveloperController.prototype.testAngularException_click = function () {
                    var x = window["____asdf"].blah();
                };
                DeveloperController.prototype.showFullScreenBlock_click = function () {
                    var _this = this;
                    this.Plugins.spinner.activityStart("Blocking...");
                    setTimeout(function () {
                        _this.Plugins.spinner.activityStop();
                    }, 4000);
                };
                DeveloperController.prototype.showToast_top = function () {
                    this.Plugins.toast.showShortTop("This is a test toast notification.");
                };
                DeveloperController.prototype.showToast_center = function () {
                    this.Plugins.toast.showShortCenter("This is a test toast notification.");
                };
                DeveloperController.prototype.showToast_bottom = function () {
                    this.Plugins.toast.showShortBottom("This is a test toast notification.");
                };
                DeveloperController.prototype.clipboard_copy = function () {
                    var _this = this;
                    this.UiHelper.prompt("Enter a value to copy to the clipboard.").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.Plugins.clipboard.copy(result.value, function () {
                            _this.UiHelper.alert("Copy OK!");
                        }, function (err) {
                            _this.UiHelper.alert("Copy Failed!\n\n" + (err ? err.message : "Unknown Error"));
                        });
                    });
                };
                DeveloperController.prototype.clipboard_paste = function () {
                    var _this = this;
                    this.Plugins.clipboard.paste(function (result) {
                        _this.UiHelper.alert("Paste OK! Value retrieved is:\n\n" + result);
                    }, function (err) {
                        _this.UiHelper.alert("Paste Failed!\n\n" + (err ? err.message : "Unknown Error"));
                    });
                };
                DeveloperController.prototype.startProgress_click = function () {
                    NProgress.start();
                };
                DeveloperController.prototype.incrementProgress_click = function () {
                    NProgress.inc();
                };
                DeveloperController.prototype.doneProgress_click = function () {
                    NProgress.done();
                };
                DeveloperController.prototype.readFile_click = function () {
                    var _this = this;
                    this.UiHelper.prompt("Enter file name to read from", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.FileUtilities.readTextFile(result.value)
                            .then(function (text) { _this.Logger.debug(DeveloperController.ID, "readFile_click", "Read OK.", text); _this.UiHelper.alert(text); }, function (err) { _this.Logger.error(DeveloperController.ID, "readFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.writeFile_click = function () {
                    var _this = this;
                    var path, contents;
                    this.UiHelper.prompt("Enter file name to write to", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.UiHelper.prompt("Enter file contents").then(function (result) {
                            if (result.key !== SampleApp.Constants.Buttons.OK) {
                                return;
                            }
                            contents = result.value;
                            _this.FileUtilities.writeTextFile(path, contents, false)
                                .then(function () { _this.Logger.debug(DeveloperController.ID, "writeFile_click", "Write OK.", { path: path, contents: contents }); _this.UiHelper.alert("Write OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "writeFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                        });
                    });
                };
                DeveloperController.prototype.appendFile_click = function () {
                    var _this = this;
                    var path, contents;
                    this.UiHelper.prompt("Enter file name to write to", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        _this.UiHelper.prompt("Enter file contents", "File I/O Test", null, " / ").then(function (result) {
                            if (result.key !== SampleApp.Constants.Buttons.OK) {
                                return;
                            }
                            contents = result.value;
                            _this.FileUtilities.writeTextFile(path, contents, true)
                                .then(function () { _this.Logger.debug(DeveloperController.ID, "appendFile_click", "Append OK.", { path: path, contents: contents }); _this.UiHelper.alert("Append OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "appendFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                        });
                    });
                };
                DeveloperController.prototype.createDir_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter dir name to create", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.createDirectory(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "createDir_click", "Create directory OK.", path); _this.UiHelper.alert("Create directory OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "createDir_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.listFiles_click = function () {
                    var _this = this;
                    var path, list = "";
                    this.UiHelper.prompt("Enter path to list files", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.getFilePaths(path)
                            .then(function (files) {
                            _this.Logger.debug(DeveloperController.ID, "listFiles_click", "Get file paths OK.", files);
                            files.forEach(function (value) {
                                list += "\n" + value;
                            });
                            _this.UiHelper.alert(list);
                        }, function (err) {
                            _this.Logger.error(DeveloperController.ID, "listFiles_click", "An error occurred.", err);
                            _this.alertFileIoError(err);
                        });
                    });
                };
                DeveloperController.prototype.listDirs_click = function () {
                    var _this = this;
                    var path, list = "";
                    this.UiHelper.prompt("Enter path to list dirs", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.getDirectoryPaths(path)
                            .then(function (dirs) {
                            _this.Logger.debug(DeveloperController.ID, "listDirs_click", "Get directory paths OK.", dirs);
                            dirs.forEach(function (value) {
                                list += "\n" + value;
                            });
                            _this.UiHelper.alert(list);
                        }, function (err) {
                            _this.Logger.error(DeveloperController.ID, "listDirs_click", "An error occurred.", err);
                            _this.alertFileIoError(err);
                        });
                    });
                };
                DeveloperController.prototype.deleteFile_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter path to delete file", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.deleteFile(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "deleteFile_click", "Delete file OK.", path); _this.UiHelper.alert("Delete file OK."); }, function (err) { _this.Logger.error(DeveloperController.ID, "deleteFile_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.prototype.deleteDir_click = function () {
                    var _this = this;
                    var path;
                    this.UiHelper.prompt("Enter path to delete dir", "File I/O Test", null, "/").then(function (result) {
                        if (result.key !== SampleApp.Constants.Buttons.OK) {
                            return;
                        }
                        path = result.value;
                        _this.FileUtilities.deleteDirectory(path)
                            .then(function () { _this.Logger.debug(DeveloperController.ID, "deleteDir_click", "Delete directory OK.", path); _this.UiHelper.alert("Delete directory OK"); }, function (err) { _this.Logger.error(DeveloperController.ID, "deleteDir_click", "An error occurred.", err); _this.alertFileIoError(err); });
                    });
                };
                DeveloperController.ID = "DeveloperController";
                return DeveloperController;
            })(Controllers.BaseController);
            Controllers.DeveloperController = DeveloperController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var DeveloperViewModel = (function () {
                function DeveloperViewModel() {
                }
                return DeveloperViewModel;
            })();
            ViewModels.DeveloperViewModel = DeveloperViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var LogEntryController = (function (_super) {
                __extends(LogEntryController, _super);
                function LogEntryController($scope, $stateParams, Logger, Plugins, Utilities, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogEntryViewModel);
                    this.$stateParams = $stateParams;
                    this.Logger = Logger;
                    this.Plugins = Plugins;
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(LogEntryController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$stateParams",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.Plugins.ID,
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID];
                    },
                    enumerable: true,
                    configurable: true
                });
                LogEntryController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.logEntry = this.Logger.getLog(this.$stateParams.id);
                    this.viewModel.date = moment(this.viewModel.logEntry.timestamp).format("MMMM Do YYYY");
                    this.viewModel.time = moment(this.viewModel.logEntry.timestamp).format("h:mm:ss a");
                    try {
                        this.viewModel.formattedMetadata = JSON.stringify(this.viewModel.logEntry.metadata, null, 4);
                    }
                    catch (exception) {
                        this.viewModel.formattedMetadata = "Unable to stringify metadata: " + exception;
                    }
                    this.viewModel.icon = this.Logger.getIconForLevel(this.viewModel.logEntry.level);
                    this.viewModel.color = this.Logger.getColorForLevel(this.viewModel.logEntry.level);
                    this.viewModel.levelDisplay = this.Logger.getDisplayLevelForLevel(this.viewModel.logEntry.level);
                };
                LogEntryController.prototype.copy_click = function () {
                    var _this = this;
                    this.Plugins.clipboard.copy(JSON.stringify(this.viewModel.logEntry), function () {
                        _this.Plugins.toast.showShortBottom("Log copied to clipboard!");
                    }, null);
                };
                LogEntryController.prototype.email_click = function () {
                    var uri = this.Utilities.format("mailto:{0}?subject={1} Error Log&body={2}", this.Configuration.buildVars.email, this.Configuration.buildVars.applicationName, JSON.stringify(this.viewModel.logEntry));
                    uri = encodeURI(uri);
                    window.open(uri, "_system");
                };
                LogEntryController.ID = "LogEntryController";
                return LogEntryController;
            })(Controllers.BaseController);
            Controllers.LogEntryController = LogEntryController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var LogEntryViewModel = (function () {
                function LogEntryViewModel() {
                }
                return LogEntryViewModel;
            })();
            ViewModels.LogEntryViewModel = LogEntryViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var LogsListController = (function (_super) {
                __extends(LogsListController, _super);
                function LogsListController($scope, $ionicPopover, Logger, UiHelper) {
                    _super.call(this, $scope, SampleApp.ViewModels.LogsListViewModel);
                    this.$ionicPopover = $ionicPopover;
                    this.Logger = Logger;
                    this.UiHelper = UiHelper;
                }
                Object.defineProperty(LogsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            "$ionicPopover",
                            SampleApp.Services.Logger.ID,
                            SampleApp.Services.UiHelper.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                LogsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    var _this = this;
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.$ionicPopover.fromTemplateUrl("Views/Settings/Logs-List/Log-Filter-Menu.html", {
                        scope: this.scope
                    }).then(function (popover) {
                        _this._popover = popover;
                    });
                    this.viewModel.showError = true;
                    this.viewModel.showWarn = true;
                    this.viewModel.showFatal = true;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.populateViewModel = function (logEntries) {
                    var _this = this;
                    if (logEntries == null) {
                        logEntries = [];
                    }
                    this.viewModel.logs = {};
                    logEntries = _.sortBy(logEntries, "timestamp").reverse();
                    logEntries.forEach(function (logEntry) {
                        var formattedDate, viewModel;
                        if (!_this.isApplicableForCurrentFilter(logEntry)) {
                            return;
                        }
                        viewModel = new SampleApp.ViewModels.LogEntryViewModel();
                        viewModel.logEntry = logEntry;
                        viewModel.time = moment(logEntry.timestamp).format("h:mm:ss a");
                        viewModel.icon = _this.Logger.getIconForLevel(logEntry.level);
                        viewModel.color = _this.Logger.getColorForLevel(logEntry.level);
                        viewModel.levelDisplay = _this.Logger.getDisplayLevelForLevel(logEntry.level);
                        formattedDate = moment(logEntry.timestamp).format("l");
                        if (!_this.viewModel.logs[formattedDate]) {
                            _this.viewModel.logs[formattedDate] = [];
                        }
                        _this.viewModel.logs[formattedDate].push(viewModel);
                    });
                };
                LogsListController.prototype.isApplicableForCurrentFilter = function (logEntry) {
                    if (!logEntry || logEntry.level == null) {
                        return true;
                    }
                    switch (logEntry.level) {
                        case SampleApp.Models.LogLevel.TRACE:
                            return this.viewModel.showTrace;
                        case SampleApp.Models.LogLevel.DEBUG:
                            return this.viewModel.showDebug;
                        case SampleApp.Models.LogLevel.WARN:
                            return this.viewModel.showWarn;
                        case SampleApp.Models.LogLevel.INFO:
                            return this.viewModel.showInfo;
                        case SampleApp.Models.LogLevel.ERROR:
                            return this.viewModel.showError;
                        case SampleApp.Models.LogLevel.FATAL:
                            return this.viewModel.showFatal;
                        default:
                            return true;
                    }
                };
                LogsListController.prototype.filter_click = function (event) {
                    this._popover.show(event);
                };
                LogsListController.prototype.trace_click = function () {
                    this.viewModel.showTrace = !this.viewModel.showTrace;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.debug_click = function () {
                    this.viewModel.showDebug = !this.viewModel.showDebug;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.info_click = function () {
                    this.viewModel.showInfo = !this.viewModel.showInfo;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.warn_click = function () {
                    this.viewModel.showWarn = !this.viewModel.showWarn;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.error_click = function () {
                    this.viewModel.showError = !this.viewModel.showError;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.fatal_click = function () {
                    this.viewModel.showFatal = !this.viewModel.showFatal;
                    this.populateViewModel(this.Logger.logs);
                };
                LogsListController.prototype.clear_click = function () {
                    var _this = this;
                    this.UiHelper.confirm("Are you sure you want to clear the logs?", "Clear Logs").then(function (result) {
                        if (result === SampleApp.Constants.Buttons.Yes) {
                            _this.Logger.clear();
                            _this.viewModel.logs = {};
                        }
                    });
                };
                LogsListController.ID = "LogsListController";
                return LogsListController;
            })(Controllers.BaseController);
            Controllers.LogsListController = LogsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var LogsListViewModel = (function () {
                function LogsListViewModel() {
                    this.logs = {};
                }
                return LogsListViewModel;
            })();
            ViewModels.LogsListViewModel = LogsListViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Controllers;
        (function (Controllers) {
            var SettingsListController = (function (_super) {
                __extends(SettingsListController, _super);
                function SettingsListController($scope, Utilities, Configuration) {
                    _super.call(this, $scope, SampleApp.ViewModels.SettingsListViewModel);
                    this.Utilities = Utilities;
                    this.Configuration = Configuration;
                }
                Object.defineProperty(SettingsListController, "$inject", {
                    get: function () {
                        return [
                            "$scope",
                            SampleApp.Services.Utilities.ID,
                            SampleApp.Services.Configuration.ID
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                SettingsListController.prototype.view_beforeEnter = function (event, eventArgs) {
                    _super.prototype.view_beforeEnter.call(this, event, eventArgs);
                    this.viewModel.isDebugMode = this.Utilities.isDebugMode;
                    this.viewModel.isDeveloperMode = this.Configuration.enableDeveloperTools;
                };
                SettingsListController.ID = "SettingsListController";
                return SettingsListController;
            })(Controllers.BaseController);
            Controllers.SettingsListController = SettingsListController;
        })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var ViewModels;
        (function (ViewModels) {
            var SettingsListViewModel = (function () {
                function SettingsListViewModel() {
                }
                return SettingsListViewModel;
            })();
            ViewModels.SettingsListViewModel = SettingsListViewModel;
        })(ViewModels = SampleApp.ViewModels || (SampleApp.ViewModels = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=bundle.js.map