import { JsonController, Get } from 'routing-controllers';
import sequelize from "../databases/mysql.database";

@JsonController()
export class ApiController {

    @Get()
    geta() {
        return { data: 'Olá amantes da sétima arte!' };
    }

    @Get('/db')
    async database() {
        try {
            await sequelize.authenticate();
            return { data: 'Só magia TOP Rogerinho' };
        } catch (error) {
            return { error: 'É Golpe!' };
        }
    }

}