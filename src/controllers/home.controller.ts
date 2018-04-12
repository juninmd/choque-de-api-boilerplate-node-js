import { JsonController, Controller, Param, Body, Get, Post, Put, Delete, Authorized } from 'routing-controllers';
import UserModel from '../models/User.model';
import UserRepository from '../repositories/user.repository';

@JsonController('/home')
export class HomeController {

    @Get('/users')
    getAll() {
        return [{ user: 'antonio' }, { user: 'carlos' }, { user: 'junior' }];
    }

    @Get('/erros/:id')
    getErrors(@Param('id') id: number) {
        if (id > 1)
            throw 'erro teste'
        return [{ user: 'antonio' }, { user: 'carlos' }, { user: 'junior' }];
    }


    @Get('/users/:id')
    getOne(@Param('id') id: number) {
        return new UserRepository().findOne();
    }

    @Post('/users')
    async post() {
        return await new UserRepository().save();
    }
}