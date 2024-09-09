import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./entity/author.entity";
import { Module } from "@nestjs/common";
import { authorsController } from "./author.controller";
import { AuthorService } from "./author.service";

@Module({
    controllers: [authorsController],
    providers: [AuthorService],
    imports: [TypeOrmModule.forFeature([Author])]
})
export class AuthorModule{}