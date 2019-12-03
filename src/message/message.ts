export interface IMessage {
    update_id: number,
    message: {
        message_id: number,
        from: {
            id: number,
            is_bot: boolean,
            first_name: string,
            language_code: string
        },
        chat: { id: number, first_name: string, type: string },
        date: string,
        text: string,
        entities: Array<any>;
    }
}