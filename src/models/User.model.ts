import { IsEmail, MinLength } from 'class-validator';
import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export default class UserModel extends Model<UserModel> {

    @PrimaryKey
    @Column
    id: number;

    @IsEmail()
    @Column
    email: string;

    @MinLength(6)
    @Column
    password: string;

}