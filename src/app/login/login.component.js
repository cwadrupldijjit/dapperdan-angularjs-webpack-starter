import template from './login.component.html';

class LoginController {
    constructor() {
        this.title = 'Login Page!!';
    }

    $onInit() {
        console.log('init');
    }
}

LoginController.$inject = ['$timeout'];
export const loginComponent = {
    template,
    controller: LoginController
}
