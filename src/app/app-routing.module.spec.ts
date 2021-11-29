import { routes } from "./app-routing.module";

describe('AppRouting', () => {

    it('should have login as path', () => {
        expect(routes[1].path).toBe('login');
    });
});