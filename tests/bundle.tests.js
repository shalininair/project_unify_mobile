describe("FileUtilities.getDefaultRootPath()", function () {
    var FileUtilities;
    beforeEach(module("JustinCredible.SampleApp.Application"));
    beforeEach(inject(function (_FileUtilities_) {
        FileUtilities = _FileUtilities_;
    }));
    it("returns an empty root path if there is no cordova", function () {
        var result = FileUtilities.getDefaultRootPath();
        expect(result).toEqual("");
    });
    it("returns an empty root path id if there is no cordova", function () {
        var result = FileUtilities.getDefaultRootPathId();
        expect(result).toEqual("");
    });
});
describe("Utilities.format()", function () {
    var Utilities;
    beforeEach(module("JustinCredible.SampleApp.Application"));
    beforeEach(inject(function (_Utilities_) {
        Utilities = _Utilities_;
    }));
    it("handles null format strings without an exception.", function () {
        var result = Utilities.format(null);
        expect(result).toEqual(null);
    });
    it("handles omitted format parameters without an exception.", function () {
        var result = Utilities.format("Hello World, {0}!");
        expect(result).toEqual("Hello World, {0}!");
    });
    it("handles null format arguments without an exception.", function () {
        var result = Utilities.format("Hello World, {0}!", null);
        expect(result).toEqual("Hello World, null!");
    });
    it("formats a string with a single parameter.", function () {
        var result = Utilities.format("Hello World, {0}!", "Bob");
        expect(result).toEqual("Hello World, Bob!");
    });
    it("handles extra parameters without an exception.", function () {
        var result = Utilities.format("Hello World, {0}!", "Bob", "Terra");
        expect(result).toEqual("Hello World, Bob!");
    });
});
//# sourceMappingURL=bundle.tests.js.map