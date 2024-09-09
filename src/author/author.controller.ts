import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AuthorService } from "./author.service";

@Controller("author")
export class authorsController{
    constructor(
        private authorService: AuthorService
    ){}

    @Post()
    async addAuthor(@Body() body:any){
        try {
            const res = await this.authorService.addAuthor(body)
            return {message: 'Saved Successfully',res};
        } catch (error) {
            throw new Error (error)
        }
    }

    @Get()
    getAllAuthors(){
        try {
            
            return this.authorService.getAllAuthors();
        } catch (error) {
            throw new Error (error)
        }
    }

    @Get(':id')
    getAuthorById(@Param('id') id:string){
        try {
            
            return this.authorService.getAuthorById(+id);;
        } catch (error) {
            throw new Error (error)
        }
    }


    @Put(':id')
    async updateAuthor(@Param('id') id:string,@Body() Body:any){
        try {
            const res = await this.authorService.updateAuthor(+id,Body)
            return {message: 'Updated Successfully',res};
        } catch (error) {
            throw new Error (error)
            
        }
    }

    @Delete(':id')
    async deleteAuthor(@Param('id')id:string){
        try {
            const res = await this.authorService.deleteAuthor(+id)
            return {massage: 'Author Deleted Successfully',res}
            
        } catch (error) {
            throw new Error(error)
        }
    }


}