import { Controller, HttpStatus, ParseIntPipe, Post ,Req} from "@nestjs/common";
import { Body, HttpCode } from "@nestjs/common/decorators";
//import { Request } from "express";
//import { Request } from "express";

import { AuthService } from "./auth.service";
//import { AuthDto } from './dto';
import { AuthDto } from "./dto";

//import { Request } from "express";
@Controller('auth')
export class AuthController{
constructor(private authService:AuthService){}
//@HttpCode(HttpStatus.OK)
@Post('signup')
signup(@Body() dto: AuthDto){
    // console.log({
    //     dto,

    // });
    //('email')email:string,
//@Body('password', ParseIntPipe) 
//password:string,
//)
//{
    // console.log({
    // email,
    // typeOfEmail: typeof email,
    // password,
    // typrOfPassword: typeof password,
    // });
    return this.authService.signup(dto);
 }
 @HttpCode(HttpStatus.OK)
@Post('signin')
signin(@Body() dto: AuthDto){
    //Req.user//error
   return this.authService.signin(dto);// this line was commented due to error in sign in
}

}