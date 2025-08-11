import { Controller,Get } from "@nestjs/common";

@Controller()
export class appController{


    @Get()
    helloLms(){
        return "Hello !!" ; 
    }
}