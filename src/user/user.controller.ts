import { Controller ,Get,Patch,Req,UseGuards} from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
//import {GetUser} from './auth/decorator' ;
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';//used this instead of '../auth/decorator'
// import { GetUser } from '../auth/decorator';
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  //  GET /users/test
  // @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user: User
    // @GetUser('email') email:string,
    ){
      // console.log({
      //   email,
      // })
        // console.log({
        //     user: req.user,
        // })
        return user;
    }
    @Patch()
    editUser(){

    }
}
