var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', function() {
    it('should be called', function() {
        expect(greet("Helen")).toBe("Hello, Helen");
    });

    it('should have null', function() {
        expect(greet(null)).toBe("Hello there!");
    });

    it('should have uppercase', function() {
        expect(greet("HELEN")).toBe("HELLO HELEN!");
    });
    
    it('should see two-long array', function() {
        expect(greet(["Helen", "Jose"])).toBe("Hello, Helen, Jose");
    });

    it('should see array', function() {
        expect(greet(["Helen", "Jose", "Johnathan"])).toBe("Hello, Helen, Jose, Johnathan");
    });
});

/*describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascot');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('Silver Gray');    
    });

    test('Founded range', () => {
        expect(mit.founded).toBeLessThanOrEqual(1875);
        expect(mit.founded).toBeGreaterThanOrEqual(1850);    
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('Mens');
    });
});*/