import angular from 'angular';
import { LoginModule } from './login/login.module';

export const app = angular
    .module('app', [LoginModule.name])