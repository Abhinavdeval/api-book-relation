import { Author } from "src/author/entity/author.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true, unique:true})
    name: string

    @Column({nullable: true})
    no_of_pages: number

    @Column({nullable: true})
    published_year: string

    @ManyToOne(()=>Author, (Author)=>Author.Books)
    Author: Author


    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}