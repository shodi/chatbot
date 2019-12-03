import { IUser } from './../user/user';

export interface ILocation {
    latitude: number;
    longitude: number;
}

export interface IMessage {
    update_id: number,
    message: {
        message_id: number,
        from: IUser,
        chat: { id: number, first_name: string, type: string },
        date: string,
        text?: string,
        location?: ILocation;
        entities: Array<any>;
    }
}