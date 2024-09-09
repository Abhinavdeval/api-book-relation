import { Books } from "src/books/entity/books.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    first_name: string

    @Column({nullable: true})
    last_name: string

    @Column({nullable:true})
    phone_no: number

    @Column({nullable:true, unique:true})
    Email: string

    @OneToMany(()=>Books,(book)=>book.Author)
    Books: Books[]
    

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}