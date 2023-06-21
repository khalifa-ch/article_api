import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsFQDN,
  IsIBAN,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Article {
  @Prop()
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  @IsString({ always: true })
  public articleName: string;

  //     public socialReason: string;
  //   @Prop({ required: true })
  //   articleName: string;

  @Prop()
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  @IsString({ always: true })
  public loadTypes: string;

  //   @Prop({ required: true })
  //   loadTypes: string;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  @IsBoolean({ always: true })
  public isStorageItem: boolean;

  //   @Prop({ required: true })
  //   isStorageItem: boolean;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public articleCode: number;

  //   @Prop()
  //   articleCode: number;
  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public tvRate: number;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public fixMinQuantity: number;

  //   @Prop({ required: true })
  //   fixMinQuantity: number;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public fixMaxQuantity: number;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  @IsString({ always: true })
  public isFodec: string;

  //   @Prop({ required: true })
  //   isFodec: string;
  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public purchasePrice: number;

  //   @Prop({ required: true })
  //   purchasePrice: number;
  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  public sellingPrice: number;

  //   @Prop({ required: true })
  //   sellingPrice: number;

  @Prop()
  @IsOptional({ groups: ['update-article'] })
  @IsNotEmpty({ groups: ['create-article', 'update-article'] })
  @IsString({ always: true })
  public unityType: string;

  //   @Prop({ required: true })
  //   unityType: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
