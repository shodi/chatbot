import { Controller, Get } from "@nestjs/common";
import { Connection } from "typeorm";

@Controller('health')
export class HealthController {

    constructor(private readonly connection: Connection) {  }

    @Get()
    public async healthCheck(): Promise<{ healthy: boolean }> {
        const healthy = await this.connection.query('select 1')
            .then(_ => true).catch(_ => false);
        return { healthy }
    }
}