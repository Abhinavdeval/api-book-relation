import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from "./books.service";

@Controller("book")
export class BooksController{
    constructor(
        private bookService:BooksService
    ){}

    @Post()
    async addBook(@Body() body:any){
        try {
            const res = await this.bookService.addBooks(body)
            return {message: 'Saved Successfully',res};
        } catch (error) {
            throw new Error (error)
        }
    }
    @Get()
    getAllBooks(){
        try {
            
            return this.bookService.getAllBooks();
        } catch (error) {
            throw new Error (error)
        }
    }

    @Get(':id')
    getBookById(@Param('id') id:string){
        try {
            
            return this.bookService.getBookById(+id);;
        } catch (error) {
            throw new Error (error)
        }
    }



    @Put(':id')
    async updatebook(@Param('id') id:string, @Body() Body: any){
        try {
             const res = await this.bookService.updateBook(+id,Body)
            return {message: 'Updated Successfully',res};
        
        } catch (error) {
            throw new Error (error)
        }
    }


    @Delete(':id')
    async deleteBook(@Param('id')id:string){
        try {
            const res = await this.bookService.deleteBook(+id)
            return {massage: 'Book Deleted Successfully',res}
            
        } catch (error) {
            throw new Error(error)
        }
    }
}