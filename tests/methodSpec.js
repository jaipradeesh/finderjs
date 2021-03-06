describe("Applait.Finder.prototype splitname function", function () {

    var finder = new Applait.Finder();
    var splitname = finder.splitname("/sdcard/DCIM/100MZLLA/1.jpg");

    it("it should have the basename of the file with extension ", function (){
        expect(splitname.name).toBe("1.jpg");
    });

    it("it should have path to the file's directory", function (){
        expect(splitname.path).toBe("/sdcard/DCIM/100MZLLA");
    });
});

describe("Applait.Finder.prototype.checkhidden method", function() {

    describe("when this.hidden is true", function () {

        var finder = new Applait.Finder({ hidden: true });

        it("should return true when file path has hidden elements.", function (){
            expect(finder.checkhidden("/sdcard/DCIM/100MZLLA/.1.jpg")).toBe(true);
            expect(finder.checkhidden("/sdcard/DCIM/.100MZLLA/.1.jpg")).toBe(true);
            expect(finder.checkhidden("/sdcard/DCIM/.100MZLLA/1.jpg")).toBe(true);
        });


        it("should return true when file path does not have hidden elements.", function (){
            expect(finder.checkhidden("/sdcard/DCIM/100MZLLA/1.jpg")).toBe(true);
        });

    });

    describe("when this.hidden is false", function () {

        var finder = new Applait.Finder({ hidden: false });

        it("should return true when file path does not have hidden elements.", function (){
            expect(finder.checkhidden("/sdcard/DCIM/100MZLLA/1.jpg")).toBe(true);
        });

        it("should return false when file path has hidden elements.", function (){
            expect(finder.checkhidden("/sdcard/DCIM/100MZLLA/.1.jpg")).toBe(false);
            expect(finder.checkhidden("/sdcard/DCIM/.100MZLLA/.1.jpg")).toBe(false);
            expect(finder.checkhidden("/sdcard/DCIM/.100MZLLA/1.jpg")).toBe(false);
        });

    });

});
