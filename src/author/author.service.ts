import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./entity/author.entity";
import { Equal, Repository } from "typeorm";

@Injectable()
export class AuthorService{
    constructor(
        @InjectRepository(Author)
        private authorRepo: Repository<Author>,
    ){}

    async addAuthor(author:any){
        try {
            let isExist = await this.authorRepo.findOne({
                where: {Email: Equal(author?.Email)}
            })
            if(isExist) throw new NotFoundException('Author already exist.')
            
            const res = await this.authorRepo.save(author)
            return res;
        } catch (error) {
            throw new Error(error)
            
        }
    }

    async getAllAuthors(){
        try {
            return await this.authorRepo.find()
            
        } catch (error) {
            throw new Error(error)
            
        }
    }

    async getAuthorById(id: number){
        try {
            let author = await this.authorRepo.findOne({
                where: {id: Equal(id)}
            })
            if(!author) throw new NotFoundException ('Author not found.')
            return author;
        } catch (error) {
    throw new Error(error)
            
        }
    }

    async updateAuthor(id:number,data:any){
        try {
            let author = await this.authorRepo.findOne({
                where: {id:Equal(id)}
            })

            if(!author) throw new NotFoundException('Author Not Found.')
            const dataObj = {
                ...author,
                ...data
            }
                const res = await this.authorRepo.save(dataObj)
                return res;
        } catch (error) {
            throw new Error(error)
            
        }
    }

    async deleteAuthor(id:number){
        try {
            let Author = await this.authorRepo.findOne({
                where: {id: Equal(id)}
            })
            if(!Author ) throw new NotFoundException('Author Not Found.')
            
            const res = await this.authorRepo.remove(Author);
            return res;            
        } catch (error) {
            throw new Error(error)
            
        }
    }



}