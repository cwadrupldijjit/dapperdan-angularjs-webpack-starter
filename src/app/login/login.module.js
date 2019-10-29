import angular from 'angular';
import { loginComponent } from './login.component';

export const LoginModule = angular
    .module('login', [])
    .component('appLogin', loginComponent);
