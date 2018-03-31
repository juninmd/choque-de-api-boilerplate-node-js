import { JsonController, Controller, Param, Body, Get, Post, Put, Delete, Authorized } from 'routing-controllers';

@JsonController()
export class ApiController {

    @Get()
    geta() {
        return { data: 'goku' };
    }

}