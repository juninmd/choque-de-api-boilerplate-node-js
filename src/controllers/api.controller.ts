import { JsonController, Get } from 'routing-controllers';
import sequelize from "../databases/mysql.database";
@JsonController()
export class ApiController {

    @Get()
    geta() {
        return { data: 'goku' };
    }

    @Get('/db')
    async database() {
        try {
            await sequelize.authenticate();
            return { data: 'goku' };
        } catch (error) {
            return { data: 'freeza' };
        }
    }

}