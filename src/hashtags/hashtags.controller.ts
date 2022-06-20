import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
    constructor() { }

    @Get("/")
    getHello(): string {
        return 'Hello Hashtags!';
    }

    @Get("/:tag/posts")
    getPostFromHashtags(
        @Param("tag") tag: string
    ): string {
        return `Posts from ${tag}`;
    }
}
