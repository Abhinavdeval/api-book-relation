import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Books } from "./entity/books.entity";
import { Equal, Repository } from "typeorm";
import { error } from "console";
import { throwError } from "rxjs";

@Injectable()
export class BooksService{
    constructor(
        @InjectRepository(Books) private bookRepository: Repository<Books>,
    ){}
    async addBooks(book:any){
        try{
            let isExist =  await this.bookRepository.findOne({
                where: {name: book?.name}
                
            })
            console.log(isExist)

            if(isExist) throw new NotFoundException('Book already exist.')
            
            const res = await this.bookRepository.save(book)
            return(res);

        }catch (error){
            throw new Error(error)
        }
    }

    async getAllBooks(){
        try {
            return await this.bookRepository.find()
            
        } catch (error) {
            throw new Error(error)
            
        }
    }
    async getBookById(id: number){
        try {
            let book = await this.bookRepository.findOne({
                where: {id},
                relations: {Author: true}
            })
            if(!book ) throw new NotFoundException('Book Not Found.')
            
            return book;
            
        } catch (error) {
            throw new Error(error)
            
        }
    }
    async updateBook(id:number, data:any){
        try {
            let book = await this.bookRepository.findOne({
                where: {id}
            })
            if(!book ) throw new NotFoundException('Book Not Found.')
            
            const dataObj = {
                ...book,
                ...data
            }
            const res = await this.bookRepository.save(dataObj)
            return res;            
        } catch (error) {
            throw new Error(error)
            
        }
    }
    async deleteBook(id:number){
        try {
            let book = await this.bookRepository.findOne({
                where: {id: Equal(id)}
            })
            if(!book ) throw new NotFoundException('Book Not Found.')
            
            const res = await this.bookRepository.remove(book);
            return res;            
        } catch (error) {
            throw new Error(error)
            
        }
    }
}