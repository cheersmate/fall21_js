describe('shortitemunit', function() {

    var shortitem;
    var $httpBackend;
    var ApiPath;

    beforeEach(function() {
        module('common');

        inject(function($injector) {
            shortitem = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('Menu Short Item Unit Test', function() {
        $httpBackend.whenGET(ApiPath + '/menu_items/' + 'A1' + '.json')
            .respond({ id: 1, short_name: "A1" });

        shortitem.getMenuItemShort("A1")
            .then(function(response) {
                expect(response)
                    .toEqual({ id: 1, short_name: "A1" });
            });
        $httpBackend.flush();
    });
});