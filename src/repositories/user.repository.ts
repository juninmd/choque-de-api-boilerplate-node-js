import UserModel from "../models/User.model";

export default class UserRepository {

    constructor() {
    }

    save() {
        return new UserModel({ email: '1@1.com', password: 'aaaaa' }).save();
    }

    findOne() {
        return UserModel.findOne()
    }

}