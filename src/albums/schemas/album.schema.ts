import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Artist } from "src/auth/schema/artist.schema";
import { Song } from "./song";

@Schema()
export class Album {
    @Prop()
    title: string

    @Prop()
    type: "Album" | "Single"

    @Prop()
    genre: string

    @Prop()
    description: string

    @Prop()
    image: string

    @Prop()
    artist: string

    @Prop()
    songs: Song[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album)