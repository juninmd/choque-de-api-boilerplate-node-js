import UserModel from "../models/User.model";

export default class UserRepository {

    constructor() {
    }

    insert() {
        const person = new UserModel({ email: '1@1.com', password: 'aaaaa' });
        return person.save();
    }

    get() {
        return UserModel.findOne()
    }

}