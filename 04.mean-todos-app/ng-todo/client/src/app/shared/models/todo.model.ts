export interface TodoDTO {
    _id?: string;
    text: string;
    isCompleted: boolean;
}

export class Todo {

    constructor(data: TodoDTO) {
        this.text = data.text;
        this.isCompleted = data.isCompleted;
        this.id = data._id ?? '';
    }

    text: string;
    isCompleted: boolean;
    id: string;
    static toDTO(data: Todo): TodoDTO {
        return {
            _id: data.id,
            text: data.text,
            isCompleted: data.isCompleted
        };
    }
}
