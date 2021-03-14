export interface TodoDTO {
    _id?: string;
    text: string;
    isCompleted: boolean;
}

export class Todo {
    static toDTO(data: Todo): TodoDTO {
        return {
            _id: data.id!,
            text: data.text,
            isCompleted: data.isCompleted
        }
    }

    text: string;
    isCompleted: boolean;
    id: string | null;

    constructor(data: TodoDTO) {
        this.text = data.text;
        this.isCompleted = data.isCompleted;
        this.id = data._id ?? null;
    }
}