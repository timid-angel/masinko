import { PartialType } from "@nestjs/mapped-types";
import { CreateAlbumDto } from "./create-album.dto";
import { IsEmpty, IsOptional } from "class-validator";
import { Artist } from "src/auth/schema/artist.schema";

export class UpdateAlbumDto {
    @IsOptional()
    readonly title: string

    @IsOptional()
    readonly type: "Album" | "Single"

    @IsOptional()
    readonly genre: string

    @IsOptional()
    readonly description: string

    @IsOptional()
    readonly image: string

    @IsEmpty({ message: "User ID can't be manually passed." })
    readonly artist: Artist
}