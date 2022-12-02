import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'This action returns all items';
    }

    @Post()
    create(): string {
        return 'Create items will be doing here';
    }

}
