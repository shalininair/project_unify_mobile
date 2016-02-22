declare namespace JustinCredible.SampleApp.Controllers {
    class BaseController<T> {
        scope: ng.IScope;
        viewModel: T;
        constructor(scope: ng.IScope, ModelType: {
            new (): T;
        });
        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_enter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_leave(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_beforeLeave(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_afterEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_afterLeave(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_unloaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected destroy(): void;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class BaseDialogController<V, D, R> extends BaseController<V> {
        private dialogId;
        private modalInstance;
        private data;
        constructor(scope: ng.IScope, ViewModelType: {
            new (): V;
        }, dialogId: string);
        private modal_shown(ngEvent, instance);
        private modal_hidden(eventArgs, instance);
        getData(): D;
        close(): void;
        close(result: R): void;
        protected dialog_shown(): void;
        protected dialog_hidden(): void;
    }
}
declare namespace JustinCredible.SampleApp.Directives {
    interface IElementDirective {
        initialize(): any;
        render(): any;
    }
    interface IElementDirectiveClass {
        new (scope: ng.IScope, instanceElement: ng.IAugmentedJQuery, instanceAttributes: ng.IAttributes, controller: any, transclude: ng.ITranscludeFunction): any;
    }
    class BaseElementDirective<T extends ng.IScope> implements IElementDirective {
        static __BaseElementDirective: boolean;
        protected scope: T;
        protected element: ng.IAugmentedJQuery;
        protected attributes: ng.IAttributes;
        protected controller: any;
        protected transclude: ng.ITranscludeFunction;
        initialize(): void;
        render(): void;
    }
}
declare namespace JustinCredible.SampleApp {
    class Application {
        private $rootScope;
        private $window;
        private $location;
        private $ionicHistory;
        private Plugins;
        private Utilities;
        private UiHelper;
        private Configuration;
        private Logger;
        static ID: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $window: ng.IWindowService, $location: ng.ILocationService, $ionicHistory: any, Plugins: Services.Plugins, Utilities: Services.Utilities, UiHelper: Services.UiHelper, Configuration: Services.Configuration, Logger: Services.Logger);
        private _ngModule;
        private _appIsInBackground;
        private _isShowingPinPrompt;
        setAngularModule(ngModule: ng.IModule): void;
        start(): void;
        device_menuButton(): void;
        device_pause(): void;
        device_resume(coldBoot: boolean): void;
        angular_locationChangeStart(event: ng.IAngularEvent, newRoute: string, oldRoute: string): void;
        private window_onerror(message, uri, lineNumber, columnNumber?);
        angular_exceptionHandler(exception: Error, cause: string): void;
        private registerDialogs(ngModule);
    }
}
declare namespace JustinCredible.SampleApp.Constants {
    const DIALOG_ALREADY_OPEN: string;
    const DIALOG_ID_NOT_REGISTERED: string;
}
declare namespace JustinCredible.SampleApp.Constants.Buttons {
    const Yes: string;
    const No: string;
    const OK: string;
    const Cancel: string;
}
declare namespace JustinCredible.SampleApp.Constants.Events {
    const HTTP_UNAUTHORIZED: string;
    const HTTP_FORBIDDEN: string;
    const HTTP_NOT_FOUND: string;
    const HTTP_UNKNOWN_ERROR: string;
    const HTTP_ERROR: string;
    const APP_MENU_BUTTON: string;
}
declare namespace JustinCredible.SampleApp {
    class RouteConfig {
        static setupRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void;
    }
}
declare namespace JustinCredible.SampleApp.Directives {
    class OnLoadDirective implements ng.IDirective {
        private $parse;
        static ID: string;
        static $inject: string[];
        constructor($parse: ng.IParseService);
        restrict: string;
        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, controller: any, transclude: ng.ITranscludeFunction): void;
    }
}
declare namespace JustinCredible.SampleApp.Directives {
    interface IIconPanelDirectiveInstance {
        getName(): string;
        getIcon(): string;
        setIcon(icon: string): void;
        getIconSize(): number;
        setIconSize(size: number): void;
        getText(): string;
        setText(text: string): void;
    }
    interface IIconPanelDirectiveScope extends ng.IScope {
        name: string;
        icon: string;
        iconSize: string;
        text: string;
    }
    class IconPanelDirective extends BaseElementDirective<IIconPanelDirectiveScope> implements IIconPanelDirectiveInstance {
        private Utilities;
        static ID: string;
        static $inject: string[];
        constructor(Utilities: Services.Utilities);
        static restrict: string;
        static template: string;
        static replace: boolean;
        static scope: {
            name: string;
            icon: string;
            iconSize: string;
            text: string;
        };
        private _currentIcon;
        private _rootElement;
        private _root;
        private _iconContainer;
        private _iconElement;
        private _textContainer;
        initialize(): void;
        render(): void;
        getName(): string;
        getIcon(): string;
        setIcon(icon: string): void;
        getIconSize(): number;
        setIconSize(size: number): void;
        getText(): string;
        setText(text: string): void;
        private icon_listener(newValue, oldValue, scope);
        private iconSize_listener(newValue, oldValue, scope);
        private text_listener(newValue, oldValue, scope);
    }
}
declare namespace JustinCredible.SampleApp.Filters {
    class ThousandsFilter {
        static ID: string;
        static filter(input: number): string;
    }
}
declare namespace JustinCredible.SampleApp.Boot2 {
    function boot(): void;
}
declare namespace JustinCredible.SampleApp.BootHelper {
    function construct(constructor: any, args: any): any;
    function registerServices(ngModule: ng.IModule): void;
    function registerDirectives(ngModule: ng.IModule): void;
    function registerFilters(ngModule: ng.IModule): void;
    function registerControllers(ngModule: ng.IModule): void;
    function getElementDirectiveFactoryFunction(Directive: Directives.IElementDirectiveClass): any[];
    function getDirectiveFactoryParameters(Directive: ng.IDirective): any[];
    function getFilterFactoryFunction(fn: Function): () => Function;
}
declare namespace JustinCredible.SampleApp.Models {
    class DialogOptions {
        dialogData: any;
        backdropClickToClose: boolean;
        hardwareBackButtonClose: boolean;
        showBackground: boolean;
        constructor(dialogData?: any);
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class EmptyViewModel {
    }
}
declare namespace JustinCredible.SampleApp.Models {
    class Category {
        name: string;
        href: string;
        icon: string;
        order: number;
        constructor(name: string, href: string, icon: string, order: number);
    }
}
declare namespace JustinCredible.SampleApp.Models {
    class LogEntry {
        id: string;
        timestamp: Date;
        level: LogLevel;
        tag: string;
        message: string;
        metadata: any;
    }
}
declare namespace JustinCredible.SampleApp.Models {
    enum LogLevel {
        TRACE = 0,
        DEBUG = 1,
        INFO = 2,
        WARN = 3,
        ERROR = 4,
        FATAL = 5,
    }
}
declare namespace JustinCredible.SampleApp.Models {
    class KeyValuePair<T, U> {
        key: T;
        value: U;
        constructor(key?: T, value?: U);
    }
    interface IDisposable {
        dispose(): void;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class Configuration {
        private _buildVars_;
        static ID: string;
        static $inject: string[];
        constructor(_buildVars_: Interfaces.BuildVars);
        private static ENABLE_DEVELOPER_TOOLS;
        private static ENABLE_MOCK_HTTP_CALLS;
        private static REQUIRE_PIN_THRESHOLD;
        private static LAST_PAUSED_AT;
        private static HAS_COMPLETED_ONBOARDING;
        private static REQUIRE_PIN_THRESHOLD_DEFAULT;
        buildVars: Interfaces.BuildVars;
        private _apiUrl;
        apiUrl: string;
        enableDeveloperTools: boolean;
        enableMockHttpCalls: boolean;
        requirePinThreshold: number;
        lastPausedAt: moment.Moment;
        hasCompletedOnboarding: boolean;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class FileUtilities {
        private $q;
        private Utilities;
        static ID: string;
        static $inject: string[];
        constructor($q: ng.IQService, Utilities: Utilities);
        private preparePath(path);
        getDefaultRootPath(): string;
        getDefaultRootPathId(): string;
        readTextFile(path: string): ng.IPromise<string>;
        readTextFile(path: string, rootPath: string): ng.IPromise<string>;
        writeTextFile(path: string, text: string): any;
        writeTextFile(path: string, text: string, append?: boolean): any;
        writeTextFile(path: string, text: string, append: boolean, rootPath: string): any;
        getDirectories(path: string): ng.IPromise<DirectoryEntry[]>;
        getDirectories(path: string, rootPath: string): ng.IPromise<DirectoryEntry[]>;
        getDirectoriesUsingEntry(directory: DirectoryEntry): ng.IPromise<DirectoryEntry[]>;
        getDirectoryNames(path: string): ng.IPromise<string[]>;
        getDirectoryNames(path: string, rootPath: string): ng.IPromise<string[]>;
        getDirectoryPaths(path: string): ng.IPromise<string[]>;
        getDirectoryPaths(path: string, rootPath: string): ng.IPromise<string[]>;
        getFiles(path: string): ng.IPromise<FileEntry[]>;
        getFiles(path: string, rootPath: string): ng.IPromise<FileEntry[]>;
        getFilesUsingEntry(directory: DirectoryEntry): ng.IPromise<FileEntry[]>;
        getFileNames(path: string): ng.IPromise<string[]>;
        getFileNames(path: string, rootPath: string): ng.IPromise<string[]>;
        getFilePaths(path: string): ng.IPromise<string[]>;
        getFilePaths(path: string, rootPath: string): ng.IPromise<string[]>;
        getAllFiles(path: string): ng.IPromise<FileEntry[]>;
        getAllFiles(path: string, rootPath: string): ng.IPromise<FileEntry[]>;
        getAllDirectories(path: string): ng.IPromise<DirectoryEntry[]>;
        getAllDirectories(path: string, rootPath: string): ng.IPromise<DirectoryEntry[]>;
        private getAllDirectories_recursive(dirsToCheck, allDirs, q);
        createDirectory(path: string): ng.IPromise<void>;
        createDirectory(path: string, createParents: boolean): ng.IPromise<void>;
        createDirectory(path: string, createParents: boolean, rootPath: string): ng.IPromise<void>;
        emptyDirectory(path: string): ng.IPromise<void>;
        emptyDirectory(path: string, rootPath: string): ng.IPromise<void>;
        deleteDirectory(path: string): ng.IPromise<void>;
        deleteDirectory(path: string, recursive?: boolean): ng.IPromise<void>;
        deleteDirectory(path: string, recursive: boolean, rootPath: string): ng.IPromise<void>;
        deleteDirectoryUsingEntry(directory: DirectoryEntry): ng.IPromise<void>;
        deleteDirectoriesUsingEntries(directories: DirectoryEntry[]): ng.IPromise<void>;
        deleteFile(path: string): ng.IPromise<void>;
        deleteFile(path: string, rootPath: string): ng.IPromise<void>;
        deleteFileUsingEntry(file: FileEntry): ng.IPromise<void>;
        deleteFilesUsingEntries(files: FileEntry[]): ng.IPromise<void>;
        fileExists(path: string): ng.IPromise<boolean>;
        fileExists(path: string, rootPath: string): ng.IPromise<boolean>;
        directoryExists(path: string): ng.IPromise<boolean>;
        directoryExists(path: string, rootPath: string): ng.IPromise<boolean>;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class HttpInterceptor {
        private $rootScope;
        private $injector;
        private $q;
        static ID: string;
        constructor($rootScope: ng.IRootScopeService, $injector: ng.auto.IInjectorService, $q: ng.IQService);
        private Utilities;
        private Plugins;
        private Preferences;
        private Configuration;
        private Logger;
        static getFactory(): Function;
        private requestsInProgress;
        private blockingRequestsInProgress;
        private spinnerRequestsInProgress;
        request(config: Interfaces.RequestConfig): Interfaces.RequestConfig;
        response(httpResponse: ng.IHttpPromiseCallbackArg<any>): ng.IHttpPromiseCallbackArg<any>;
        requestError(rejection: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<any>;
        responseError(responseOrError: any): ng.IPromise<any>;
        private handleRequestStart(config);
        private handleFatalError();
        private handleResponseEnd(config);
        private getAuthorizationHeader(userName, password);
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class Logger {
        private Utilities;
        static ID: string;
        static $inject: string[];
        constructor(Utilities: Utilities);
        private _logs;
        private _maxLogEntries;
        trace(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        debug(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        info(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        warn(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        error(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        fatal(tagPrefix: string, tag: string, message: string, metadata?: any): void;
        clear(): void;
        logs: Models.LogEntry[];
        getLog(id: string): Models.LogEntry;
        getIconForLevel(level: number): string;
        getColorForLevel(level: number): string;
        getDisplayLevelForLevel(level: number): string;
        private log(logLevel, tagPrefix, tag, message, metadata?);
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class MockHttpApis {
        private $httpBackend;
        static ID: string;
        static $inject: string[];
        constructor($httpBackend: ng.IHttpBackendService);
        static setupMockHttpDelay($provide: ng.auto.IProvideService): void;
        mockHttpCalls(mock: boolean): void;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class MockPlatformApis {
        private $q;
        private $ionicPopup;
        private $ionicLoading;
        private Utilities;
        static ID: string;
        static $inject: string[];
        constructor($q: ng.IQService, $ionicPopup: any, $ionicLoading: any, Utilities: Utilities);
        private _isProgressIndicatorShown;
        getToastPlugin(): ICordovaToastPlugin;
        getPushNotificationPlugin(): PushNotification;
        getClipboardPlugin(): ICordovaClipboardPlugin;
        getClipboardPluginForWindows(): ICordovaClipboardPlugin;
        getClipboardPluginForChromeExtension(): ICordovaClipboardPlugin;
        getNotificationPlugin(): Notification;
        getSpinnerPlugin(): SpinnerPlugin.SpinnerPluginStatic;
        getStatusBarPlugin(): StatusBar;
        getKeyboardPlugin(): Ionic.Keyboard;
        getCrashlyticsPlugin(): ICordovaCrashlyticsPlugin;
        private noOp();
        private toast(message);
        private pushNotification_register(successCallback, errorCallback, registrationOptions);
        private pushNotification_unregister(successCallback, errorCallback);
        private pushNotification_setApplicationIconBadgeNumber(successCallback, errorCallback, badgeCount);
        private clipboard_copy(text, onSuccess, onFail);
        private clipboard_windows_copy(text, onSuccess, onFail);
        private clipboard_chromeExtension_copy(text, onSuccess, onFail);
        private clipboard_paste(onSuccess, onFail);
        private clipboard_windows_paste(onSuccess, onFail);
        private clipboard_chromeExtension_paste(onSuccess, onFail);
        private notification_alert(message, alertCallback, title?, buttonName?);
        private notification_confirm(message, confirmCallback, title?, buttonLabels?);
        private notification_prompt(message, promptCallback, title?, buttonLabels?, defaultText?);
        private notification_beep(times);
        private notification_vibrate(time);
        private notification_vibrateWithPattern(pattern, repeat);
        private notification_cancelVibration();
        private spinner_activityStop(successCallback?, falureCallback?);
        private spinner_activityStart(labelText?, successCallback?, falureCallback?);
        private crashlytics_logException(exception);
        private crashlytics_log(message);
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class Plugins {
        private Utilities;
        private MockPlatformApis;
        static ID: string;
        static $inject: string[];
        constructor(Utilities: Utilities, MockPlatformApis: MockPlatformApis);
        notification: any;
        toast: ICordovaToastPlugin;
        spinner: SpinnerPlugin.SpinnerPluginStatic;
        clipboard: ICordovaClipboardPlugin;
        statusBar: StatusBar;
        keyboard: Ionic.Keyboard;
        crashlytics: ICordovaCrashlyticsPlugin;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class Preferences {
        static ID: string;
        private static USER_ID;
        private static TOKEN;
        private static PIN;
        private static CATEGORY_ORDER;
        userId: string;
        token: string;
        pin: string;
        categoryOrder: string[];
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class UiHelper {
        private $window;
        private $q;
        private $ionicModal;
        private $ionicSideMenuDelegate;
        private Plugins;
        private Logger;
        private Preferences;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($window: Window, $q: ng.IQService, $ionicModal: any, $ionicSideMenuDelegate: any, Plugins: Plugins, Logger: Logger, Preferences: Preferences, Configuration: Services.Configuration);
        private static _openDialogIds;
        private static dialogTemplateMap;
        private isPinEntryOpen;
        alert(message: string): ng.IPromise<void>;
        alert(message: string, title: string): ng.IPromise<void>;
        alert(message: string, title: string, buttonName: string): ng.IPromise<void>;
        confirm(message: string): ng.IPromise<string>;
        confirm(message: string, title: string): ng.IPromise<string>;
        confirm(message: string, title: string, buttonLabels: string[]): ng.IPromise<string>;
        prompt(message: string): ng.IPromise<Models.KeyValuePair<string, string>>;
        prompt(message: string, title: string): ng.IPromise<Models.KeyValuePair<string, string>>;
        prompt(message: string, title: string, buttonLabels: string[]): ng.IPromise<Models.KeyValuePair<string, string>>;
        prompt(message: string, title: string, buttonLabels: string[], defaultText: string): ng.IPromise<Models.KeyValuePair<string, string>>;
        registerDialog(dialogId: string, templatePath: string): void;
        showDialog(dialogId: string): ng.IPromise<any>;
        showDialog(dialogId: string, options: Models.DialogOptions): ng.IPromise<any>;
        private _sideMenuMediaQueryVisibleOnLandscapeTablet;
        private _sideMenuMediaQueryNeverVisible;
        private _sideMenuMediaQuery;
        sideMenuMediaQuery: string;
        setAllowSideMenu(allow: boolean): void;
        showPinEntryAfterResume(): ng.IPromise<void>;
    }
}
declare namespace JustinCredible.SampleApp.Services {
    class Utilities {
        private _isCordova_;
        private buildVars;
        private _isChromeExtension_;
        private Preferences;
        static ID: string;
        static $inject: string[];
        constructor(_isCordova_: boolean, buildVars: Interfaces.BuildVars, _isChromeExtension_: boolean, Preferences: Preferences);
        isCordova: boolean;
        isDebugMode: boolean;
        isChromeExtension: boolean;
        isAndroid: boolean;
        isIos: boolean;
        isWindowsPhone8: boolean;
        isWindows8: boolean;
        isWindows: boolean;
        platform: string;
        device: Device;
        endsWith(str: string, suffix: string): boolean;
        startsWith(str: string, prefix: string): boolean;
        toTitleCase(str: string): string;
        format(formatString: string, ...args: any[]): string;
        getValue(object: any, propertyString: string): any;
        setValue(object: any, propertyString: string, value: any): void;
        setValue(object: any, propertyString: string, value: any, instantiateObjects: boolean): void;
        derivesFrom(TargetClass: Function, BaseClass: Function): boolean;
        getFunction(propertyString: string): () => any;
        getFunction(scope: any, propertyString: string): () => any;
        getFunction(scopeOrPropertyString?: any, propertyString?: string): () => any;
        getFunction(scopeOrPropertyString?: any, propertyString?: string, inferContext?: boolean): () => any;
        getRandomNumber(min: number, max: number): number;
        generateGuid(): string;
        formatStackTrace(stackTrace: string[]): string;
        sanitizeConfigForLogging(config: Interfaces.RequestConfig): Interfaces.RequestConfig;
        sanitizeResponseForLogging(httpResponse: ng.IHttpPromiseCallbackArg<any>): ng.IHttpPromiseCallbackArg<any>;
        categories: Models.Category[];
        defaultCategory: Models.Category;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    interface ICategoryStateParams {
        categoryNumber: number;
    }
    class CategoryController extends BaseController<ViewModels.CategoryViewModel> {
        private $stateParams;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $stateParams: ICategoryStateParams);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class CategoryViewModel {
        categoryNumber: number;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class PinEntryController extends BaseDialogController<ViewModels.PinEntryViewModel, Models.PinEntryDialogModel, Models.PinEntryDialogResultModel> {
        private Plugins;
        private Utilities;
        private Preferences;
        static ID: string;
        static TemplatePath: string;
        static $inject: string[];
        constructor($scope: ng.IScope, Plugins: Services.Plugins, Utilities: Services.Utilities, Preferences: Services.Preferences);
        protected dialog_shown(): void;
        private validatePin();
        protected number_click(value: number): void;
        protected clear_click(): void;
        protected back_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.Models {
    class PinEntryDialogModel {
        pinToMatch: string;
        promptText: string;
        showBackButton: boolean;
        constructor(promptText: string, pinToMatch: string, showBackButton: boolean);
    }
}
declare namespace JustinCredible.SampleApp.Models {
    class PinEntryDialogResultModel {
        matches: boolean;
        cancelled: boolean;
        pin: string;
        constructor(matches: boolean, cancelled: boolean, pin: string);
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class PinEntryViewModel {
        pin: string;
        pinToMatch: string;
        showBackButton: boolean;
        promptText: string;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class ReorderCategoriesController extends BaseDialogController<ViewModels.ReorderCategoriesViewModel, void, void> {
        private Utilities;
        private Preferences;
        private UiHelper;
        static ID: string;
        static TemplatePath: string;
        static $inject: string[];
        constructor($scope: ng.IScope, Utilities: Services.Utilities, Preferences: Services.Preferences, UiHelper: Services.UiHelper);
        protected dialog_shown(): void;
        protected item_reorder(item: Models.Category, fromIndex: number, toIndex: number): void;
        protected done_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class ReorderCategoriesViewModel {
        categories: Models.Category[];
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class OnboardingRegisterController extends BaseController<ViewModels.OnboardingRegisterViewModel> {
        private $location;
        private $ionicHistory;
        private Plugins;
        private Utilities;
        private UiHelper;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $location: ng.ILocationService, $ionicHistory: any, Plugins: Services.Plugins, Utilities: Services.Utilities, UiHelper: Services.UiHelper, Configuration: Services.Configuration);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected createAccount_click(): void;
        protected signIn_click(): void;
        protected needToCreateAccount_click(): void;
        protected alreadyHaveAccount_click(): void;
        protected skip_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class OnboardingRegisterViewModel {
        showSignIn: boolean;
        email: string;
        password: string;
        confirmPassword: string;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class OnboardingShareController extends BaseController<ViewModels.EmptyViewModel> {
        private $location;
        private $ionicHistory;
        private Utilities;
        private UiHelper;
        private Plugins;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $location: ng.ILocationService, $ionicHistory: any, Utilities: Services.Utilities, UiHelper: Services.UiHelper, Plugins: Services.Plugins, Configuration: Services.Configuration);
        protected share_click(platformName: string): void;
        protected done_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class OnboardingSplashController extends BaseController<ViewModels.EmptyViewModel> {
        private $location;
        private $ionicHistory;
        private Utilities;
        private UiHelper;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $location: ng.ILocationService, $ionicHistory: any, Utilities: Services.Utilities, UiHelper: Services.UiHelper, Configuration: Services.Configuration);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected skip_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class RootController extends BaseController<ViewModels.RootViewModel> {
        private $location;
        private $http;
        private Plugins;
        private Utilities;
        private UiHelper;
        private Preferences;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $location: ng.ILocationService, $http: ng.IHttpService, Plugins: Services.Plugins, Utilities: Services.Utilities, UiHelper: Services.UiHelper, Preferences: Services.Preferences);
        private _hasLoaded;
        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        private http_unauthorized(event, response);
        private http_forbidden(event, response);
        private http_notFound(event, response);
        private http_unknownError(event, response);
        private http_error(event, response);
        protected reorder_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class RootViewModel {
        categories: Models.Category[];
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class AboutController extends BaseController<ViewModels.AboutViewModel> {
        private $ionicHistory;
        private Utilities;
        private Configuration;
        private Plugins;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $ionicHistory: any, Utilities: Services.Utilities, Configuration: Services.Configuration, Plugins: Services.Plugins);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected logo_click(): void;
        protected copyrightInfo_click(): void;
        protected website_click(): void;
        protected gitHubRepo_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class AboutViewModel {
        logoClickCount: number;
        applicationName: string;
        versionString: string;
        timestamp: string;
        commitShortSha: string;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class CloudSyncController extends BaseController<ViewModels.CloudSyncViewModel> {
        private $ionicHistory;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $ionicHistory: any);
        private _cloudIconPanel;
        private _updateInterval;
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected view_leave(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        private iconPanel_created(event, instance);
        private toggleIcon();
        protected setup_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class CloudSyncViewModel {
        showButton: boolean;
        showUserCount: boolean;
        icon: string;
        userCount: number;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class ConfigurePinController extends BaseController<ViewModels.ConfigurePinViewModel> {
        private Plugins;
        private UiHelper;
        private Preferences;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, Plugins: Services.Plugins, UiHelper: Services.UiHelper, Preferences: Services.Preferences);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected setPin_click(): void;
        protected changePin_click(): void;
        protected removePin_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class ConfigurePinViewModel {
        isPinSet: boolean;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class DeveloperController extends BaseController<ViewModels.DeveloperViewModel> {
        private Plugins;
        private Utilities;
        private UiHelper;
        private FileUtilities;
        private Logger;
        private Preferences;
        private Configuration;
        private MockPlatformApis;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, Plugins: Services.Plugins, Utilities: Services.Utilities, UiHelper: Services.UiHelper, FileUtilities: Services.FileUtilities, Logger: Services.Logger, Preferences: Services.Preferences, Configuration: Services.Configuration, MockPlatformApis: Services.MockPlatformApis);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        private alertFileIoError(error);
        protected help_click(helpMessage: string): void;
        protected mockApiRequests_change(): void;
        protected apiUrl_click(): void;
        protected userToken_click(token: string): void;
        protected addServicesToGlobalScope_click(): void;
        protected setRequirePinThreshold_click(): void;
        protected resetPinTimeout_click(): void;
        protected reEnableOnboarding_click(): void;
        protected testNativeException_click(): void;
        protected testJsException_click(): void;
        protected testAngularException_click(): void;
        protected showFullScreenBlock_click(): void;
        protected showToast_top(): void;
        protected showToast_center(): void;
        protected showToast_bottom(): void;
        protected clipboard_copy(): void;
        protected clipboard_paste(): void;
        protected startProgress_click(): void;
        protected incrementProgress_click(): void;
        protected doneProgress_click(): void;
        protected readFile_click(): void;
        protected writeFile_click(): void;
        protected appendFile_click(): void;
        protected createDir_click(): void;
        protected listFiles_click(): void;
        protected listDirs_click(): void;
        protected deleteFile_click(): void;
        protected deleteDir_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class DeveloperViewModel {
        mockApiRequests: boolean;
        devicePlatform: string;
        deviceModel: string;
        deviceOsVersion: string;
        deviceUuid: string;
        deviceCordovaVersion: string;
        userId: string;
        token: string;
        defaultStoragePathId: string;
        defaultStoragePath: string;
        apiUrl: string;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    interface ILogEntryStateParams {
        id: string;
    }
    class LogEntryController extends BaseController<ViewModels.LogEntryViewModel> {
        private $stateParams;
        private Logger;
        private Plugins;
        private Utilities;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $stateParams: ILogEntryStateParams, Logger: Services.Logger, Plugins: Services.Plugins, Utilities: Services.Utilities, Configuration: Services.Configuration);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        protected copy_click(): void;
        protected email_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class LogEntryViewModel {
        logEntry: Models.LogEntry;
        icon: string;
        date: string;
        time: string;
        levelDisplay: string;
        color: string;
        formattedMetadata: string;
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class LogsListController extends BaseController<ViewModels.LogsListViewModel> {
        private $ionicPopover;
        private Logger;
        private UiHelper;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $ionicPopover: any, Logger: Services.Logger, UiHelper: Services.UiHelper);
        private _popover;
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
        private populateViewModel(logEntries);
        private isApplicableForCurrentFilter(logEntry);
        protected filter_click(event: ng.IAngularEvent): void;
        protected trace_click(): void;
        protected debug_click(): void;
        protected info_click(): void;
        protected warn_click(): void;
        protected error_click(): void;
        protected fatal_click(): void;
        protected clear_click(): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class LogsListViewModel {
        logs: {
            [day: string]: ViewModels.LogEntryViewModel[];
        };
        showTrace: boolean;
        showDebug: boolean;
        showInfo: boolean;
        showWarn: boolean;
        showError: boolean;
        showFatal: boolean;
        constructor();
    }
}
declare namespace JustinCredible.SampleApp.Controllers {
    class SettingsListController extends BaseController<ViewModels.SettingsListViewModel> {
        private Utilities;
        private Configuration;
        static ID: string;
        static $inject: string[];
        constructor($scope: ng.IScope, Utilities: Services.Utilities, Configuration: Services.Configuration);
        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void;
    }
}
declare namespace JustinCredible.SampleApp.ViewModels {
    class SettingsListViewModel {
        isDebugMode: boolean;
        isDeveloperMode: boolean;
    }
}
