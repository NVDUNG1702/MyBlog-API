import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import slugify from 'slugify';

@Schema({ timestamps: true, versionKey: false })
export class UserEntity {
    @Prop({
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        index: true,
    })
    username: string;

    @Prop({
        required: true,
        trim: true,
    })
    password: string;

    @Prop({
        required: true,
        trim: true,
        lowercase: true,
        index: true,
        unique: true,
    })
    email: string;

    @Prop({
        required: true,
        trim: true,
        lowercase: true,
        index: true,
        unique: true,
    })
    phone: string;

    @Prop({
        required: true,
        trim: true,
        lowercase: true,
        index: true,
    })
    role: string;

    @Prop({
        required: true,
        trim: true,
        lowercase: true,
        index: true,
    })
    isActive: boolean;

    @Prop({
        trim: true,
        default: '',
    })
    biography: string;

    @Prop({
        trim: true,
        default: '',
    })
    avatar: string;

    @Prop({
        trim: true,
        default: '',
    })
    slung: string;

    @Prop({
        trim: true,
        default: '',
    })
    lastName: string;

    @Prop({
        trim: true,
        default: '',
    })
    firstName: string;

    @Prop({
        trim: true,
    })
    gender: string;

    @Prop({
        trim: true,
    })
    birthDate: Date;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    fbUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    twUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    igUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    tiktokUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    linkedinUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    youtubeUrl: string;

    @Prop({
        trim: true,
        unique: true,
        default: '',
    })
    websiteUrl: string;
}

export const UserTableName = 'users';

export const UserSchema = SchemaFactory.createForClass(UserEntity);

export type UserDocument = HydratedDocument<UserEntity>;

export const UserModel = model<UserDocument>(UserTableName, UserSchema);

UserSchema.pre<UserDocument>('save', function (next) {
    this.slung = slugify(this.username, { lower: true });
    next();
});

UserSchema.index({ username: 1 }, { unique: true });
