/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _user: any;
    public get user(): any {
        return this._user;
    }
    public set user(value: any) {
        this._user = value;
    }
    async onModuleInit() {
        await this.$connect();
    }

    enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}
