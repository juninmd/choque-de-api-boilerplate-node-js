import { JsonController, Controller, Param, Body, Get, Post, Put, Delete, Authorized } from "routing-controllers";
import { UserModel } from "../models/User.model";

@JsonController("/home")
export class HomeController {

    @Get("/users")
    getAll() {
        return [{ user: 'antonio' }, { user: 'carlos' }];
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return { user: id };
    }

    @Authorized('batata')
    @Post("/users")
    post(@Body({ validate: true }) user: UserModel) {
        return {};
    }
}